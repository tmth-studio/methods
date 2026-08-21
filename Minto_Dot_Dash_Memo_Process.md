# Minto dot-dash-memo process — for an LLM

**Version 2 — 21 August 2026.**
Changes from v1 (chat draft, not published): added format selection by reader state (Stage 2); made the evidence register a flow-through artifact that later stages must draw from; added the session state header; added independent fresh-chat verification at the two gates; added grounding rules for evidence depth (Stage 6). The adversarial attack step from the presentation workbook was considered and deliberately left out — memos go outline → prose.

## What this is

A process another LLM follows to produce a Minto-style memo through a dot-dash outline. The LLM produces; the user checks. Use it one of two ways:

- paste this whole file and say "follow this process; start at Stage 1", or
- run stage by stage in separate prompts, with the session state header at the top of each.

The process does not write prose until the outline is approved at Stage 6. A wrong skeleton is expensive; prose is cheap.

---

## Session state header — paste at the top of every prompt

The LLM has no memory of your process. Without this header it repeats completed work, proposes steps you have done, and does not ask for the information that would improve the output.

```
SESSION STATE
Completed stages: [example: 1–3]
Current stage: [example: 4]
Approved outputs attached below: [list them]

Rules for this session:
1. Do not repeat or redo work from the completed stages. Their outputs are
   final unless I ask for a change.
2. Do not propose next steps or a plan. The process sets the sequence.
   Do only the current stage.
3. BEFORE you produce the output: if information is missing that would make
   the output materially better, ask me numbered questions first and stop.
   If you have enough, say "no questions" and produce the output.
4. If an instruction in this prompt conflicts with something you assume,
   follow the prompt and flag the conflict.
```

Rule 3 is the important one. It turns the LLM from a passive producer into an active interviewer.

---

## Rules of engagement

- **R1.** Interview before you produce. If required input is missing, ask numbered questions and STOP. Do not fill gaps with plausible inventions.
- **R2.** Never invent facts, numbers or quotes. Mark every assumption `[ASSUMED]`.
- **R3.** Every point at every level is a full assertion sentence with a verb — never a topic label. "Costs" is banned; "Costs fall 20% by year 2" is the form.
- **R4.** At the end of each stage, show the output and the stage's self-check table (check | pass/fail). Wait for approval before the next stage.
- **R5.** If a later stage breaks an earlier one (for example the evidence will not support a key-line point), go BACK and fix the pyramid. Never patch in prose.
- **R6.** From Stage 5 onward, every claim must trace to an entry in the Stage 1 evidence register. A claim with no register entry is flagged for the user, not written around.

---

## Stage 1 — Intake and evidence register

Ask, then STOP for answers:

1. Who is the single primary reader? What do they already know and accept?
2. What question is this memo answering? (One question. If the user gives two, ask which one the memo must settle.)
3. What action should the reader take after reading?
4. What evidence exists? List every item the user supplies or points to.
5. Length and register constraints? (Default: 1–2 pages, plain English.)

Then build the **evidence register** — the artifact every later stage draws from:

| ID | Statement | Source | Type | Note |
|----|-----------|--------|------|------|
| E1 | ... | dataset / doc / person | fact · derived · expert · assumption | quality caveat, date |

Type definitions:
- **fact** — raw observation from a named source
- **derived** — an analysis output; record the calculation or where it lives
- **expert** — a named person's judgment; record who and their basis
- **assumption** — no source; carries `[ASSUMED]` everywhere it appears

Self-check: one reader named · one question · one action · register built with every item typed and sourced · missing items listed for the user, not invented.

## Stage 2 — Select the memo format

The reader's state of mind sets the memo shape and the key-line pattern. A wrong format causes a full rebuild, so decide it before any content.

| Format | Reader's state | Key-line pattern | The ask |
|--------|----------------|------------------|---------|
| Recommendation | Knows the problem. Needs a solution. | Parallel reasons (often desirable / feasible / viable) | Approve the action |
| Options paper | In conflict between paths. | Criteria → options → comparison → selected option | Select one (with a recommendation) |
| Diagnostic | Surprised by an event. Needs the explanation. | What occurred → why (evidence) → consequences | Accept the explanation; agree the next step |
| Project update | Aligned. Wants a progress check. | Status against plan → variances → decisions needed | Record progress; unblock decisions |
| Strategic plan | Committed. Needs the roadmap. | Where we play → how we win → what it takes | Approve the plan and the resources |

If two formats are possible, show both with the trade-off and let the user choose.

Self-check: reader-state description matches Stage 1 · format matches the state · key-line pattern and the ask written out.

## Stage 3 — SCQA introduction

Draft the intro as four labelled parts:

- **SITUATION:** facts the reader already accepts. Nothing contested lives here.
- **COMPLICATION:** what changed or went wrong — the thing that raises the question.
- **QUESTION:** must fall out of the complication naturally. One sentence.
- **ANSWER:** comes in Stage 4 — leave a placeholder.

Self-check: Situation uncontested for THIS reader · Question follows from Complication (if the reader could read the complication and ask a different question, rewrite) · no evidence or argument smuggled into the Situation.

## Stage 4 — Governing thought

Write the answer to the question.

- ≤ 25 words. One sentence.
- It is a SO-WHAT, not a WHAT: it tells the reader what to do or conclude, not what the memo is about. "This memo reviews pricing" is banned.
- Verb-led and specific. The informed reader should nod ("interesting — how?"), not shrug.

Self-check: word count · answers the Stage 3 question directly · contains no reasons (reasons are the key line's job) · Nod Test stated and passed.

## Stage 5 — Key line

Write 2–4 points that together support the governing thought, **following the Stage 2 pattern** — reasons for a recommendation; occurred/why/consequences for a diagnostic; and so on.

- Each point earns its place by supporting the governing thought — not by labelling a section, a lens, or a chunk of the work plan.
- Choose ONE logic: inductive (parallel points of the same kind) or deductive (premise → premise → therefore). Never mix on one line.
- MECE test, both halves shown: (a) no overlap — no register entry would sit under two points; (b) no gap — a reader who accepts all points MUST accept the governing thought.
- Order the points: deductive keeps argument order; inductive orders by degree (strongest first), time, or structure — say which and why. Degree order for busy executives.
- Every point draws on the evidence register (R6).

Self-check: pattern matches Stage 2 · one logic type · overlap test · gap test · order named · no point without register support (or flagged).

## Stage 6 — Dot-dash outline ← GATE: user sign-off + fresh-chat verify

Lay out the full skeleton before any prose:

```
• Dot  = key-line point (assertion sentence)
  – Dash = supporting point (assertion sentence + grounding)
    · Sub-dash = one further level, only where the grounding rules allow it
```

Structural rules:
- 2–5 dashes per dot. One dash alone is an orphan: merge it up or find its sibling.
- Vertical logic: reading any dot, the reader asks "why?" or "how?" — its dashes must answer exactly that question, nothing else.
- Horizontal logic: dashes under one dot follow the same MECE and ordering rules as the key line.
- Every register entry either appears under a dash or is consciously dropped — list what you dropped and why.

**Grounding rules — how deep the pyramid goes:**

- **G1. Every dash ends in a typed grounding** that cites its register entry: `[E4: fact]`, `[E7: derived → appendix A]`, `[E2: expert — name]`, or `[ASSUMED]`.
- **G2. Derived numbers carry their derivation in an appendix, not in the argument.** "Churn concentrates in month 2" is an analysis output; the dash cites the appendix item that shows the calculation. Argument in the body, arithmetic in the appendix.
- **G3. Promotion test.** If a dash needs its own argument (not just a citation) to be believed, decide: is it doing key-line-sized work? Then promote it and restructure. Otherwise allow ONE sub-dash level and stop. Three levels of live argument means the document wants to be a report, not a memo — the depth moves to the appendix.
- **G4. Appendix contract.** Every appendix item is pulled by a citation from exactly one dash. No orphan appendices; no dash citing thin air.
- **G5. Termination is reader-relative.** The pyramid bottoms out at statements THIS reader accepts without further argument. Ask of each dash: would the reader accept this bare? If yes, stop. If no, one more level — or move the depth to the appendix under G3.

Self-check: no orphans · every dash answers its dot's why/how · every dot's dashes MECE · unused register entries listed · every line an assertion · every dash grounded per G1 · G3 applied wherever a sub-dash appears · appendix list drafted with one citing dash each.

**Then verify independently:** open a NEW chat with no history, paste the verifier prompt (below) with the outline and the register. The producer must not be the only checker of its own pyramid. STOP for user approval after the verifier's report.

## Stage 7 — Draft the prose

- Intro = the SCQA in flowing prose (no labels), ending with the governing thought. Answer first — the reader knows the conclusion by line five.
- One section per dot. The section heading IS the dot, verbatim or lightly trimmed — still an assertion. Banned headings: "Background", "Context", "Analysis", "Next steps".
- One paragraph per dash, opening with the dash's assertion, then its evidence. No new arguments may appear that are not in the approved outline.
- Appendix items follow G2/G4: each shows its derivation and is cited from its dash.
- Close with three parts: restate the governing thought · name the key assumption it rests on · state the next action, with owner and date.
- Style: plain English, active voice, sentences ≤ 25 words, no jargon, no exclamation marks.

## Stage 8 — Final lint ← GATE: fresh-chat verify

Run and report every check:

1. Title-read test: reading only the title and the section headings gives the complete argument.
2. The governing thought still answers the Stage 3 question after drafting.
3. No paragraph contains a claim absent from the approved outline.
4. Every number and quote traces to a register entry or is marked `[ASSUMED]`; all `[ASSUMED]` items listed in one place for the reader.
5. Appendix contract holds: every appendix item cited from exactly one dash; every `derived` grounding has its appendix item.
6. Ending has all three parts (restate · assumption · action).
7. No section heading is a topic label.

Report the table. If any check fails, fix and re-run — do not ship a FAIL. Then run the fresh-chat verifier on the finished memo before delivery.

---

## Verifier prompt — paste into a NEW chat with no history

```
You are an independent checker. You did not produce this work and you have
no stake in it. Attached: a Minto memo outline (or finished memo) and its
evidence register.

Test it against these rules and report a table (rule | PASS or FAIL |
evidence for your verdict). Do not repair anything — report only.

1. The governing thought is ≤25 words, verb-led, and answers one question.
2. Key-line points follow one logic type and one stated order.
3. MECE: no register entry could sit under two points; if all points are
   true the reader must accept the governing thought.
4. Every dash answers the "why?"/"how?" of its dot and nothing else.
5. Every dash ends in a typed grounding that cites a register entry or
   [ASSUMED]. Spot-check five groundings against the register.
6. No dash carries more than one level of sub-argument.
7. Every appendix item is cited from exactly one dash.
8. Every line at every level is an assertion sentence, not a topic label.

End with: the single weakest point in the structure, in one sentence.
```
