#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""QA runner for the deck generators — the slide library's regression harness.

Three phases:

  1. BUILD    — run both deck generators on their shipped demo content;
                any self-check failure fails QA.
  2. EXEMPLARS— splice every exemplars/*.py DATA block into BOTH generators
                and build; the shared schema promise is tested here, and the
                exemplars double as coverage for chart paths the demos do
                not exercise (single-series line, two-series column,
                negative-delta waterfall).
  3. GOLDEN   — render every built deck to PNG (LibreOffice + pdftoppm) and
                compare each page against qa/golden/<deck>/ with a mean
                pixel-difference tolerance (Pillow). --update re-baselines.

Golden baselines are ENVIRONMENT-SPECIFIC: fonts and the LibreOffice
renderer differ between machines, so regenerate baselines once on the
machine that runs QA (--update), then diffs are meaningful there. Phase 3
is skipped with a notice when soffice, pdftoppm, or Pillow is missing.

Usage, from the repository root:
    python3 qa/run_qa.py             # full run
    python3 qa/run_qa.py --update    # re-baseline golden renders
    python3 qa/run_qa.py --no-golden # phases 1–2 only (any machine)

Exit 0 = all phases pass (or are skipped with a stated reason).
"""

import argparse
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GOLDEN = ROOT / "qa" / "golden"
GENERATORS = {
    "standalone-deck": "generate_standalone_deck.py",
    "presented-deck": "generate_presentation_deck.py",
}
DPI = 80            # baseline render resolution
# A page fails if EITHER metric exceeds its tolerance. Same-machine renders
# are byte-stable (observed 0.00%), so these are tight by design; after an
# intentional visual change, re-baseline with --update.
MEAN_TOL = 0.5      # mean absolute pixel difference, % of full scale
FRAC_TOL = 0.5      # % of pixels whose max channel difference exceeds 24

DATA_RE = re.compile(
    r"(# =+\n# DATA[^\n]*\n(?:#[^\n]*\n)*# =+\n)(.*?)(\n# =+\n# BUILD)",
    re.S)


def run_script(workdir, script_text, label):
    """Write and execute a generator; return (ok, tail_of_output)."""
    path = Path(workdir) / "gen.py"
    path.write_text(script_text, encoding="utf-8")
    r = subprocess.run([sys.executable, str(path)], cwd=workdir,
                       capture_output=True, text=True)
    out = (r.stdout + r.stderr).strip()
    tail = "\n".join(out.splitlines()[-6:])
    ok = r.returncode == 0
    print("  [%s] %s" % ("PASS" if ok else "FAIL", label))
    if not ok:
        print("        " + tail.replace("\n", "\n        "))
    return ok


def splice(generator_text, data_text):
    m = DATA_RE.search(generator_text)
    if not m:
        raise SystemExit("could not locate the DATA section markers")
    return generator_text[:m.start(2)] + data_text + generator_text[m.end(2):]


def phase_build(tmp):
    print("PHASE 1 — demo builds")
    ok = True
    for deck, gen in GENERATORS.items():
        d = Path(tmp) / deck
        d.mkdir()
        ok &= run_script(d, (ROOT / gen).read_text(encoding="utf-8"),
                         "%s (shipped demo)" % gen)
    return ok


def phase_exemplars(tmp):
    print("PHASE 2 — exemplars through both generators (shared schema)")
    exemplars = sorted((ROOT / "exemplars").glob("*.py"))
    if not exemplars:
        print("  [FAIL] no exemplars found")
        return False
    ok = True
    for ex in exemplars:
        data = ex.read_text(encoding="utf-8")
        for deck, gen in GENERATORS.items():
            d = Path(tmp) / ("ex-%s-%s" % (ex.stem, deck))
            d.mkdir()
            spliced = splice((ROOT / gen).read_text(encoding="utf-8"), data)
            ok &= run_script(d, spliced, "%s -> %s" % (ex.stem, gen))
    return ok


def _tools_missing():
    missing = [t for t in ("soffice", "pdftoppm") if not shutil.which(t)]
    try:
        import PIL  # noqa: F401
    except ImportError:
        missing.append("Pillow")
    return missing


def render_deck(pptx, outdir, stem):
    subprocess.run(["soffice", "--headless", "--convert-to", "pdf",
                    str(pptx), "--outdir", str(pptx.parent)],
                   capture_output=True, check=True)
    pdf = pptx.with_suffix(".pdf")
    subprocess.run(["pdftoppm", "-png", "-r", str(DPI), str(pdf),
                    str(Path(outdir) / stem)], capture_output=True,
                   check=True)
    return sorted(Path(outdir).glob(stem + "-*.png"))


def diff_metrics(a, b):
    """(mean abs diff % of 255, % of pixels with max channel diff > 24)."""
    from PIL import Image, ImageChops
    ia, ib = Image.open(a).convert("RGB"), Image.open(b).convert("RGB")
    if ia.size != ib.size:
        return 100.0, 100.0
    diff = ImageChops.difference(ia, ib)
    h = diff.histogram()
    n_ch = ia.size[0] * ia.size[1] * 3
    s = 0
    for band in range(3):
        for v, count in enumerate(h[band * 256:(band + 1) * 256]):
            s += v * count
    mean_pct = 100.0 * s / (n_ch * 255.0)
    # fraction of pixels visibly changed: max channel diff over threshold
    changed = diff.convert("L").point(lambda v: 255 if v > 24 else 0)
    n_px = ia.size[0] * ia.size[1]
    frac_pct = 100.0 * changed.histogram()[255] / n_px
    return mean_pct, frac_pct


def phase_golden(tmp, update):
    print("PHASE 3 — golden renders" + (" (re-baselining)" if update else ""))
    missing = _tools_missing()
    if missing:
        print("  [SKIP] missing tools: %s — phases 1–2 still gate"
              % ", ".join(missing))
        return True
    ok = True
    for deck in GENERATORS:
        pptx = Path(tmp) / deck / (deck + ".pptx")
        if not pptx.exists():
            print("  [FAIL] %s.pptx was not built" % deck)
            ok = False
            continue
        rendir = Path(tmp) / ("render-" + deck)
        rendir.mkdir()
        pages = render_deck(pptx, rendir, "p")
        gold_dir = GOLDEN / deck
        if update:
            if gold_dir.exists():
                shutil.rmtree(gold_dir)
            gold_dir.mkdir(parents=True)
            for p in pages:
                shutil.copy(p, gold_dir / p.name)
            print("  [PASS] %s: baselined %d pages" % (deck, len(pages)))
            continue
        if not gold_dir.exists():
            print("  [FAIL] %s: no baseline — run with --update first"
                  % deck)
            ok = False
            continue
        gold = sorted(gold_dir.glob("p-*.png"))
        if len(gold) != len(pages):
            print("  [FAIL] %s: %d pages vs %d baselined"
                  % (deck, len(pages), len(gold)))
            ok = False
            continue
        worst_mean = worst_frac = 0.0
        worst_page = None
        for g, p in zip(gold, pages):
            mean_pct, frac_pct = diff_metrics(g, p)
            if max(mean_pct / MEAN_TOL, frac_pct / FRAC_TOL) > max(
                    worst_mean / MEAN_TOL, worst_frac / FRAC_TOL):
                worst_mean, worst_frac, worst_page = mean_pct, frac_pct, p.name
        page_ok = worst_mean <= MEAN_TOL and worst_frac <= FRAC_TOL
        where = " on %s" % worst_page if worst_page else ""
        print("  [%s] %s: worst page mean %.2f%% / changed px %.2f%%%s "
              "(tol %.1f%% / %.1f%%)"
              % ("PASS" if page_ok else "FAIL", deck, worst_mean,
                 worst_frac, where, MEAN_TOL, FRAC_TOL))
        ok &= page_ok
    return ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--update", action="store_true",
                    help="re-baseline the golden renders")
    ap.add_argument("--no-golden", action="store_true",
                    help="skip phase 3 (renders)")
    args = ap.parse_args()
    ok = True
    with tempfile.TemporaryDirectory() as tmp:
        ok &= phase_build(tmp)
        ok &= phase_exemplars(tmp)
        if args.no_golden:
            print("PHASE 3 — skipped (--no-golden)")
        else:
            ok &= phase_golden(tmp, args.update)
    print("=" * 56)
    print("QA %s" % ("PASSED" if ok else "FAILED"))
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
