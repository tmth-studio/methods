# Handoff — proposition launch deck template

Picking this up cold? Read this file, then `gen.js`. Everything else is generated.

## What this is

A reusable, Minto-structured slide template for one question type: **"which proposition
features should we launch?"** Built to be published publicly (GitHub) with dummy data, so
a client fills in their own confidential numbers on a private copy.

It came out of a wider thesis: **there are only a handful of presentation structures**, and
a consulting practice can carry a small library of them rather than rebuilding a deck spine
every engagement. This is the first one. The archetype set identified was:

1. **Which of these?** — options → criteria → recommendation *(this template)*
2. **Should we, yes/no?** — single-option case with risks
3. **Why is this happening?** — diagnostic tree
4. **How do we get there?** — sequencing / roadmap
5. **What's going on?** — informational, no recommendation

## Decisions already made (locked unless revisited deliberately)

| Decision | Choice | Why |
|---|---|---|
| Output format | `.pptx`, generated from `gen.js` | Client opens it with zero tooling; the generator is the diffable source, so git still works |
| Decision rule | **Hard gates**, applied sequentially | A feature must clear all three tests. Unforgiving but easy to defend |
| Feasibility | **Not scored.** Emits time-to-launch + confidence band, applied as a discount to the viability forecast | Three scores invite an average; an average hides which dimension drives the answer. This leaves two comparable things: demand and return |
| Key line | Phrased as **reasons**, not lenses | "Only A and C show proven pull" is an argument; "Desirability" is a label. Test: if the headline survives the answer changing, it's a label |
| Defensibility | 3 checks: robust profit pool / linked to core competence / sustained leadership economics | Client's own framing (Bain–Zook synthesis). Retitled on-slide as *Is there money here? / Can we win it? / Can we keep it?* |
| Losers | Given their own slide (11) | A client who thinks their favourite wasn't considered relitigates the whole deck |

### The non-obvious bit

Check 2 ("linked to core competence") and the feasibility section were double-counting the
same capability analysis. Resolved by splitting the question:

- **Feasibility** — *can we ship it?* (capabilities, timing, dependencies)
- **Check 2** — *does shipping it make us harder to beat?* (compounding advantage)

Slide 17 states this distinction explicitly. Do not collapse it back.

## Open decisions

- [ ] **Weighted trade-off variant.** Hard gates can kill a standout feature on one weak
      dimension. If the client's constraint is capital rather than capacity, a weighted
      model is more honest. Not built. Would be an alternate slide 6 + a rule change on slide 2.
- [ ] **Licence.** `README.md` has a placeholder. MIT or CC BY 4.0 are the usual choices
      for a method you want credited.
- [ ] **Publishing the method publicly gives it away.** Decided in principle (credibility /
      inbound), never formally confirmed.
- [x] **OCV metric** — defined in [`../objective-customer-value-standard.md`](../objective-customer-value-standard.md)
      (this repo hosts the full OCV standard one directory up). Resolved 19 Aug 2026.

## Transport decision (tested, closed)

**19 Aug 2026:** Python does not run on the Barclays estate — no runtime, so no
`python-pptx`/generator route client-side. Transport is the **committed `.pptx` only**.
The generator stays home-side as the source of truth; edits round-trip as: Copilot
drafts the change client-side → the change is applied to the generator at home →
regenerated `.pptx` crosses the boundary. Do not ship the script and expect it to run.

## Repo layout

```
gen.js              # source of truth — pptxgenjs generator, 26 slides
README.md           # public-facing: structure, slide inventory, usage
HANDOFF.md          # this file
.gitignore          # excludes private/ and *-client.pptx
proposition-launch-template.pptx   # build artefact, committed for non-technical users
docs/pyramid.png    # the logic diagram (portrait, phone-readable)
docs/pyramid.mermaid
docs/build_pyramid.py
```

## Rebuild

```bash
npm i pptxgenjs
node gen.js                                    # → proposition-launch-template.pptx
python3 docs/build_pyramid.py                  # → docs/pyramid.svg
```

Paths in `gen.js` and `docs/build_pyramid.py` are relative — run both from this directory.

Requires `pptxgenjs` (npm). The pyramid script needs `cairosvg` for PNG export.

## QA loop used (repeat it after any layout change)

```bash
node gen.js
python3 <pptx-skill>/scripts/office/validate.py proposition-launch-template.pptx
python3 <pptx-skill>/scripts/office/soffice.py --headless --convert-to pdf proposition-launch-template.pptx
rm -f slide-*.jpg && pdftoppm -jpeg -r 110 proposition-launch-template.pdf slide
# then LOOK at every slide-NN.jpg — two rounds of this caught ~15 real defects
```

Both QA rounds are worth it. Round 1 found title/eyebrow collisions and text escaping
cards; round 2 found three slides breaching the bottom margin that round 1 missed.

## Design system (constants live at the top of `gen.js`)

```
SLATE  2F4858   dominant — cover, dividers, answer, so-what
BLUE   4E7C90   key line headers, chart series 1
GOLD   C9A227   sharp accent — numbers, eyebrows, chart series 2
TINT   EEF3F6   card fill
INK    1F2A31   body headings
Fonts: Cambria (headings) / Calibri (body) — both render true-to-width in LibreOffice QA
Canvas: 13.3 x 7.5in, margin 0.62in
Motif: gold numbered circles + soft-shadowed rounded cards. No accent stripes or rules.
```

## pptxgenjs gotchas hit while building this

- `addNotes()` exists on a slide, not on the presentation.
- A `rect` with `line: {width: 0}` still renders a **dark stroke** in LibreOffice. Set
  `line: {color: <same as fill>, width: 1}` for invisible-bordered shapes (zebra rows).
- Slide titles must be `valign: "top"` in a tall box. With `valign: "middle"` a two-line
  title overflows **upward** into the eyebrow label above it.
- `s.background = {color}` leaves a 1px seam on the right edge. Add an oversized full-bleed
  rect on dark slides.
- Hex colours: no `#`, no alpha. Alpha in the hex corrupts the file.
- Never share an options object between two `add*` calls — pptxgenjs mutates in place.

## Suggested next moves

1. Define OCV in `docs/` so the template stands alone.
2. Build archetype #2 (*should we, yes/no?*) reusing the `gen.js` helper functions —
   `slide()`, `title()`, `card()`, `numCircle()`, `pill()`, `divider()` are all generic.
3. Extract those helpers into `lib/deck.js` once there are two decks, not before.
