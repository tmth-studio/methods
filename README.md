# Pyramid Principle — think in the workbooks, generate with the scripts

A two-layer pipeline for Minto-quality documents and decks.

**The thinking layer** is a pair of guided workbooks you fill conversationally
with an assistant (Copilot, Claude, ChatGPT). A half-finished workbook is a
legitimate state — park it, come back. **The output layer** is a set of
single-file Python generators: attach one to a code-interpreter assistant,
move the approved content into its DATA section, and it builds the .docx or
.pptx deterministically, with self-checks that refuse to write a file while
any Minto rule fails.

The pipeline: **Workbook A (think — analyse the problem) → Workbook B
(structure — build the presentation) → generators (produce the artefact).**
Workbook A ends with a hand-off package; Workbook B opens by taking it in;
both map onto the generators' shared PYRAMID schema, so the thinking drops
straight into the DATA sections.

## Capability → file

| Capability | File | Output |
|---|---|---|
| GUIDED ANALYSIS workbook (Flow A: frame → situation/complication → hypotheses tested against evidence → adversarial evidence sweep → question/answer → costed, gated recommendation) | `Pyramid_Workbook_A_Analysis.docx` / `.html` | filled workbook + hand-off package |
| GUIDED PRESENTATION workbook (Flow B: format → audience → SCQA and governing thought → pyramid → attack → evidence sweep → exhibit reuse → exhibits → narrative → lint → storyboard → build) | `Pyramid_Workbook_B_Presentation.docx` / `.html` | filled workbook, ready for the generators |
| Minto ANALYSIS of a problem, executable (the Flow A method as staged prompts + a self-checked build) | `run_pyramid_analysis.py` | `pyramid-analysis.docx` |
| Minto MEMO from a completed pyramid (archetypes: recommendation memo, dot-dash lap visual, status update) — with per-section evidence lines and a rendered "stated limits" block | `generate_pyramid_memo.py` | `pyramid-memo.docx` |
| MEMO PROCESS for any LLM, no code interpreter needed — 8-stage dot-dash flow: evidence register, format by reader state, outline gate with grounding rules (G1–G5) for evidence depth, session state header, fresh-chat verifier | `Minto_Dot_Dash_Memo_Process.md` | drafted memo, in-chat |
| PRESENTED slides — text-light, speaker carries the argument, notes hold the narrative | `generate_presentation_deck.py` | `presented-deck.pptx` |
| STANDALONE slides — self-sufficient, executive summary up front, prose and sources on-slide | `generate_standalone_deck.py` | `standalone-deck.pptx` |
| BRAND EXTRACTOR — reads any client .pptx and prints a ready-to-paste THEME dict with a suggested role mapping | `extract_theme.py` | printed report |
| OCV STANDARD — Objective Customer Value: definition, formula, four cost classes, measurement protocol, deflation chain to uptake, lint rules L1–L14 | `objective-customer-value-standard.md` | reference |
| GUIDED OCV workbook (11 steps: playback gate → bare outcome → outcome ladder → routine map → cost classes → banding → ceiling → deflators → gates → uptake → lint) — same session-state + checklist pattern as the Pyramid workbooks | `OCV_Workbook.docx` | filled workbook: OCV, WTP, gate verdicts, adoption order |
| GUIDED PROFIT POOL ADJACENCY workbook (11 steps: core-strength test → pool boundary → bottom-up sizing with verification status → distribution map → adjacency distance + ownership audit → leadership screen → Porter tests → verdicts, repeatable formula, refuse-to-play list → A1–A12 lint) — Zook + Gadiesh & Gilbert + Hamel & Prahalad, TMTH synthesis | `Profit_Pool_Adjacency_Workbook.docx` | filled workbook: pool map, screened adjacency programme, refuse list |
| INCENTIVE TESTING STANDARD — two-sided OCV application for offers: pin V/C by design, B as discriminator, observed-state vs propensity targeting (base-rate arithmetic), pre-registered decision rules, cheapest-alternative benchmark, calibration loop, lint rules I1–I12 | `incentive-testing-standard.md` | reference |
| GUIDED INCENTIVE TEST workbook (8 steps: behaviour frame → offer scoring → per-1,000 banded costing → data register → experiment design → pre-registration → read against registration → calibrate and bank parameters) | `Incentive_Test_Workbook.docx` | filled workbook: scored offer, registered test, calibrated B + deadweight |

## How to use (Copilot, Claude, ChatGPT — any assistant with a code interpreter)

**Workbooks:** attach one and work through it in conversation, step by step.
Each step carries a Copilot procedure, a ready prompt, and a review checklist.
The workbooks are split in two deliberately — each stays small enough for an
assistant to hold whole.

**Generators:** attach the script and say: **"Run this script and give me the
file it creates."** It ships with fictional demonstration content (Meridian
Office Services) so the structure is visible immediately. To build your own
document, tell the assistant to follow the STAGED PROMPTS in the script's
docstring — it interviews you stage by stage, stops for approval at each
gate, writes the approved content into the DATA section only, and re-runs.
Bracketed `[placeholders]` fail the build until replaced with real content.

## Brand arrives at runtime (THEME)

Every generator holds its brand as data: a `THEME` dict at the top of the
DATA section (colour roles + heading/body fonts), shipped with the neutral
TMTH palette. Two routes to a client's brand:

1. paste the client's palette hexes and font names into `THEME`, or
2. attach any existing client .pptx and run `extract_theme.py` — it reads
   the file's theme part (falling back to the colours observed on the
   slides) and prints a ready-to-paste `THEME` dict.

A validation gate refuses to build on malformed values (hex must be 6 chars,
no `#`, no alpha; fonts must be named). **No client brand lives in this
repository, and none should be committed to it.**

## Evidence and exhibit registers (engagement assets)

- `run_pyramid_analysis.py` and `generate_pyramid_memo.py` carry an
  adversarial **evidence register**: every claim that carries weight records
  its best supporting evidence, its source, and a counter-evidence search —
  what was looked for and what was found, even when nothing was found. The
  build refuses while any row is `GAP_OPEN`; accepted gaps need a stated
  reason and render in the memo as an explicit "stated limits" block.
- The two deck generators carry an **exhibit register**: every exhibit is
  catalogued (the message it proves, chart form, source deck, data vintage)
  and decided REUSE / ADAPT / NEW. A staleness guard fails the build on any
  REUSE/ADAPT whose underlying data is older than `MAX_VINTAGE_MONTHS`
  (default 6) unless the vintage is explicitly accepted with a reason.

**Filled registers are engagement assets. They live in the client tenant.
Never commit a filled register to this repository** — the shipped registers
hold fictional demonstration content only.

## The shared schema

`generate_pyramid_memo.py`, `generate_presentation_deck.py` and
`generate_standalone_deck.py` carry an **identical shared DATA block** (the
PYRAMID schema: META, SCQA, GOVERNING_THOUGHT, KEY_LINE_ORDER, KEY_LINE,
CONCLUSION, ASK, NEXT_STEPS). Fill it once, paste it between the DATA markers
of all three, and one argument drives the memo and both decks. Generator-
specific registers sit at the end of each DATA section — keep each script's
own registers in place when pasting. `run_pyramid_analysis.py` ends its .docx
with a hand-off section mapping the analysis field-for-field onto the schema.

## The slide library (v1.3)

Two halves, both regression-checked by `qa/run_qa.py`:

- **Exemplars** (`exemplars/`) — one filled, fictional, self-check-passing
  DATA block per Minto pattern (seeking approval, giving direction,
  choosing among alternatives, explaining how). Assistants read the
  matching exemplar before filling a new DATA section; the QA runner
  splices every exemplar into both generators on every run, which keeps
  the shared schema honest. See `exemplars/README.md`.
- **Golden renders** (`qa/golden/`) — baseline PNG renders of both demo
  decks. The QA runner rebuilds the decks, re-renders them and fails if
  any page drifts past tolerance (mean pixel diff or changed-pixel
  fraction). Baselines are environment-specific: re-baseline once on the
  QA machine with `python3 qa/run_qa.py --update`.

The library is regression fixtures and exemplars, deliberately not an
acceptance benchmark for finished decks — the self-checks in the
generators are the acceptance test, because rules generalise where
examples do not.

## QA record (20 Aug 2026, v1.3)

**v1.3 (slide library):** `qa/run_qa.py` passes all three phases on the QA
machine: both demo builds, all four exemplars spliced through both
generators (eight builds), and golden renders at 0.00% drift. The golden
gate was negative-tested: an accent-colour swap fails phase 3 at 3.93%
changed pixels. The exemplars close v1.2's coverage gaps — single-series
line, two-series column and a negative-delta waterfall now build and
render correctly (verified by page inspection). New known limit: the
value label on a very small waterfall segment can overflow its bar.

## QA record (20 Aug 2026, v1.2)

**v1.2 (deck generators only — memo and analysis generators unchanged at
v1.1):** both deck generators run clean on the shipped demonstration
content. Negative tests confirmed every new gate bites with a named defect
and no file written: a 16-word assertion, on-slide prose over 55 words,
four bullets on one support, waterfall totals index out of range, and a
mismatched two-series length each refuse the build. The
numbers-without-exhibit warning fires on the two demo supports that quote
figures without a chart (warning, not failure — by design). Visual QA:
standalone deck converted to PDF (LibreOffice headless), every page
rendered and inspected — two-series divergence line, cost build-up
waterfall, parallel no-exhibit cards and page numbers all verified.
Paste-compatibility verified: the v1.2 exhibit kinds (`series`,
`waterfall`) validate identically in both deck generators.

Known limits at v1.2: LibreOffice font substitution in QA renders;
single-series `line`, two-series `column`/`bar` and negative-delta
waterfalls are code-supported but unexercised by demo content; the
presentation generator's new chart paths are code-identical to the
standalone's but not separately rendered.

**v1.1 record:** all six generators and `extract_theme.py` ran clean;
negative tests confirmed the register gates (GAP_OPEN, missing register
row, stale vintage, ADAPT without changes, orphaned exhibit_id, malformed
THEME hex). THEME round-trip verified via `extract_theme.py`.

Design system default: neutral TMTH palette (slate 2F4858, blue 4E7C90, gold
C9A227, tint EEF3F6, ink 1F2A31), Georgia headings / Arial body (travel-safe
on client machines), 13.3in × 7.5in, 0.62in margins — data, not code.

## Licence

Everything in this repository is **CC BY 4.0** — reuse freely with credit to TMTH. See [`LICENSE.md`](LICENSE.md). Your outputs are your own; client data and brand never enter this repository.
