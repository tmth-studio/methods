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
| PRESENTED slides — text-light, speaker carries the argument, notes hold the narrative | `generate_presentation_deck.py` | `presented-deck.pptx` |
| STANDALONE slides — self-sufficient, executive summary up front, prose and sources on-slide | `generate_standalone_deck.py` | `standalone-deck.pptx` |
| BRAND EXTRACTOR — reads any client .pptx and prints a ready-to-paste THEME dict with a suggested role mapping | `extract_theme.py` | printed report |

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

## QA record (20 Aug 2026, v1.1)

All six generators (four pyramid + two proposition) and `extract_theme.py`
run clean; all self-checks pass on the shipped demonstration content.
Negative tests confirmed every new gate bites with a named defect: a
`GAP_OPEN` register row, a key-line point without a register row, a stale
exhibit vintage, an ADAPT without stated changes, an orphaned exhibit_id,
and malformed THEME hex each refuse the build with no file written. THEME
round-trip verified: a deck built from a modified THEME, fed to
`extract_theme.py`, returns the same dominant / accent / highlight /
card_fill / ink and both fonts. Visual QA: all outputs converted to PDF
(LibreOffice headless), every page rendered and inspected.

Known limits carried from v1.0 (LibreOffice font substitution in QA renders,
`line` exhibit kind unexercised by demo content, fixed-height side cards)
still apply.

Design system default: neutral TMTH palette (slate 2F4858, blue 4E7C90, gold
C9A227, tint EEF3F6, ink 1F2A31), Cambria headings / Calibri body, 13.3in ×
7.5in, 0.62in margins — now data, not code.
