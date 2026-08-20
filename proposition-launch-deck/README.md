# Proposition Launch Recommendation — deck template

A Minto-structured slide template for one specific question type: **"which proposition
features should we launch?"**

The deck is answer-first. The recommendation appears on slide 4; everything after it is
support. It is shipped with dummy features, dummy scores and `[bracketed placeholders]` —
no client data is in this repository, and none should be committed to it.

## The structure

| | |
|---|---|
| **Introduction** | Situation → Complication → Question (Minto's S-C-Q) |
| **Answer** | The governing thought, stated once, in a breath |
| **Key line** | Three reasons the answer is true — desirability, viability, feasibility |
| **Support** | One section per reason, each ending in a verdict |
| **So what** | Decisions, owners, dates |

### The one structural choice that matters

Feasibility is **not scored**. It produces two numbers — time to launch, and a confidence
band — and those numbers are applied as a discount to the viability forecast.

Three separate scores invite an average, and an average hides which dimension is driving
the answer. Folding delivery timing into the money leaves two comparable things: how much
customers want it, and what it returns once the build is priced honestly.

### Decision rule

Hard gates. A feature must clear desirability, viability and feasibility. One failure and
it is out. Gates are applied **sequentially** — a feature that fails desirability is never
carried into the viability or feasibility work.

This is unforgiving by design: a standout feature can be killed by one weak dimension. If
your client's real constraint is capital rather than capacity, you may want a weighted
trade-off instead — change it deliberately, and say so on slide 2.

### The three defensibility checks

Applied to the *forecast*, not to the feature. Each ends in a verdict on the numbers —
hold, haircut, or reject.

1. **Is there money here?** — robust profit pool
2. **Can we win it?** — linked to core competence
3. **Can we keep it?** — sustained leadership economics

Check 2 is deliberately distinct from feasibility. Feasibility asks whether you *can ship
it*. Check 2 asks whether shipping it makes you *harder to beat*. Without that distinction
the same capability analysis gets double-counted in two places in the deck.

## Slides

| # | Slide | Notes |
|---|---|---|
| 1 | Cover | |
| 2 | How to use this deck | **Delete before sending to a client** |
| 3 | Context (S-C-Q) | |
| 4 | Recommendation | The governing thought |
| 5 | The three reasons | The key line, on one page |
| 6 | Gate matrix | The proof, compressed — clients photograph this one |
| 7 | Divider: 01 Desirability | |
| 8 | OCV scores, ranked | Native chart — replace the dummy series. OCV is defined in [the OCV standard](../objective-customer-value-standard.md) |
| 9 | Where the threshold sits | The slide a sceptical client attacks first |
| 10 | Evidence base | Including its stated limits |
| 11 | Why the losers fell out | Protects the recommendation from relitigation |
| 12 | Divider: 02 Viability | |
| 13 | Base-case forecast | Native chart — replace the dummy series |
| 14 | Priced for delivery timing | Where feasibility enters the money |
| 15 | Three defensibility checks | Summary |
| 16–18 | Checks 1–3 in detail | Each ends in a forecast verdict |
| 19 | What would have to be true | Every row needs an observable early signal |
| 20 | Divider: 03 Feasibility | |
| 21 | Capabilities required | Capabilities, not tasks |
| 22 | Have / buy / build | An unnamed "buy" is a build with optimism attached |
| 23 | Time to launch + confidence | The only feasibility output that leaves the section |
| 24 | Dependencies and deferral | Deferral needs a re-entry condition |
| 25 | So what | Verb, owner, date on every line |
| 26 | Appendix | |

Guidance for each slide is in its **speaker notes**.

## Using it

1. Take a copy — do not edit the committed file.
2. Replace every `[bracketed placeholder]`. Keep client numbers in your copy only.
3. Delete slide 2.
4. Rewrite every headline as a **claim**, not a label. "Only A and C show proven pull"
   works; "Desirability analysis" does not. If a headline would still be true after the
   answer changed, it is a label — rewrite it.

`.gitignore` excludes a `private/` directory and any file ending `-client.pptx`, so working
copies do not get committed by accident.

## Branding

Brand lives as data, not code. Each Python generator carries a `THEME` dict at the top
of its DATA section — palette hexes and two font names. The committed default is the
neutral TMTH palette; no client colours or fonts appear anywhere in the code. To apply
a client's brand, either paste their hexes and font names into `THEME`, or attach any
existing client `.pptx` and run `extract_theme.py` (repository root), which prints a
ready-to-paste `THEME` dict with a suggested role mapping.

A validation gate checks `THEME` before anything is built: a malformed hex (wrong
length, a `#`, an alpha channel) or an empty font name stops the run with a named
defect and writes no file. Functional colours — PASS green, FAIL red, zebra striping —
are fixed and never remapped. Never commit a client-branded copy, or a filled-in
`THEME`, to this public repository; client brand arrives at runtime only.

## Rebuilding

The deck is generated by `gen.js` (pptxgenjs). Editing the generator and rebuilding keeps
the layout system consistent; editing the `.pptx` by hand does not.

```
node gen.js
```

## Licence

[Choose one — MIT and CC BY 4.0 are the usual options for a method you want credited.]
