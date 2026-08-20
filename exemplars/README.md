# Exemplars — the slide library's content half

One filled DATA block per Minto pattern. Each file is a complete, fictional,
self-check-passing DATA section for both deck generators.

| File | Pattern | The question it answers | Chart paths it exercises |
|---|---|---|---|
| `seeking-approval.py` | Seeking approval | "Should you approve this?" | two-series line, single-series bar, waterfall (build-up), table |
| `giving-direction.py` | Giving direction | "How do we do X?" | single-series line, bar with highlight |
| `choosing-among-alternatives.py` | Choosing | "Which option makes most sense?" | two-series column, table |
| `explaining-how.py` | Explaining how | "How will the new system work?" | waterfall with a negative delta, bar, table |

## How to use them

**As an assistant filling a DATA section (the main use).** Before writing
content for a new deck, read the exemplar matching the presentation's
pattern (the Stage 1 frame question decides which). Copy its moves, not its
words: how the complication carries a number, how the key line is ordered,
how a losing option is dispatched, how a trade-off is named on the slide,
how sidebar bullets add a second layer instead of restating the exhibit.

**As a working deck.** Paste everything below an exemplar's header comment
between the DATA markers of either generator and run — it builds a complete
deck. Useful for seeing a pattern rendered end to end.

**As regression fixtures.** `qa/run_qa.py` splices every exemplar into both
generators on each run, which keeps the shared schema honest and exercises
chart paths the shipped demos do not.

## Rules for adding an exemplar

- Fictional content only — invented companies, invented numbers, and the
  footer_tag saying so. Never a client engagement, however anonymised.
- It must pass the self-check of BOTH generators (`python3 qa/run_qa.py
  --no-golden` proves it).
- State the pattern and its signature moves in the header comment — the
  header is what teaches; the DATA is what demonstrates.
- Prefer content that exercises a chart path or check no other exemplar
  covers.
