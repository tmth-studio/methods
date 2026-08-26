# Current-state diagnosis — process for an LLM

**Version 1.0 — August 2026 · Tough Minds, Tender Hearts**

*v1.0 — first release.*

*The diagnosis half of the organisation architecture pack. Obeys the vocabulary and lint rules of [`organisation-architecture-standard.md`](organisation-architecture-standard.md); uses the four-rung ladder defined in [`executor-assignment-standard.md`](executor-assignment-standard.md) §2 to record the tooling dimension. Hands off to [`operating-model-design-process.md`](operating-model-design-process.md).*

## What this is

A staged process an assistant follows to produce an honest current-state read of an existing organisation: what it has, what it is missing against a target operating model, and in what order the gaps should be closed. The assistant produces; the user checks and corrects.

Use it one of two ways: paste this whole file and say "follow this process; start at Stage 1", or run stage by stage in separate prompts with the session state header at the top of each.

**Where this sits.** The arc is *target-state → current-state → transition → execute*. This process is the current-state step. It assumes a target function map exists — even a strawman. If none exists, run the design process first to Stage 3 and come back.

**The process does not produce a plan.** It produces a baseline, a gap table and a sequence. The plan is built from them in the design process. A plan written before the baseline sequences against fiction.

---

## Session state header — paste at the top of every prompt

The assistant has no memory of your process. Without this header it repeats completed work, proposes steps you have done, and does not ask for the information that would improve the output.

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
4. Record every finding structurally — by capability, role or boundary.
   Never by an individual's name.
5. If an instruction in this prompt conflicts with something you assume,
   follow the prompt and flag the conflict.
```

Rule 4 is not a courtesy. A baseline that names individuals is unusable — it cannot be circulated, it converts a design conversation into a performance conversation, and it is a hazard in an employment context.

---

## Rules of engagement

- **R1. Scan before you ask.** Read everything supplied — the intake queue, the decision log, existing process documents, prior reviews — and build the evidence register from it first. Ask numbered questions only for what scanning cannot settle.
- **R2. Structural, never personal.** Capabilities, roles, boundaries and positions. ❌ "The current lead does not push back on scope." ✅ "One role holds prioritisation with no stated decision right, so scope is set upstream."
- **R3. Record what is, not what should be.** The baseline is an observation, not an argument. Judgement belongs in the gap table, where it is labelled.
- **R4. Every finding carries provenance and a type.** `[OBSERVED — source: X]`, `[REPORTED — source: X]`, `[INFERRED — from: X]`, `[ASSUMED — basis: X]`. A bare claim with no type is the one banned move.
- **R5. Severity is blocking power, not size.** A small gap that stops the mandate being met is red. A large gap in something the mandate does not depend on is amber at most.
- **R6. At the end of each stage, show the output and the stage's self-check table** (check | pass/fail). Wait for approval before the next stage.
- **R7. If a later stage breaks an earlier one, go back and fix it.** If the gap table reveals a dimension the baseline missed, amend the baseline. Never patch the contradiction in the sequence.

---

## Stage 0 — Playback gate

Before any diagnosis, play back to the user in four sentences: (1) what the target function map is being compared against, and whether it is agreed or a strawman; (2) that findings will be recorded structurally and never by name; (3) that the output is a baseline, a gap table and a sequence — not a plan; (4) what evidence sources exist to read.

Then confirm the scope boundary: **which organisation is being diagnosed, and where does it stop?** A diagnosis with an unstated boundary produces gaps that belong to a neighbour.

**Self-check:** target map named and its status stated · structural rule confirmed · scope boundary stated with named neighbours · evidence sources listed · user has confirmed.

---

## Stage 1 — Evidence register

**Prompt.** Scan every supplied source and build the register. Do not interpret yet — record.

| ID | Finding | Source | Type | Date | Note |
|---|---|---|---|---|---|
| F1 | … | queue export / decision log / process doc / interview note | observed · reported · inferred · assumed | … | quality caveat |

Sources worth reading before asking anything, in descending order of reliability:

1. **The intake or demand record**, if one exists — the only honest read on where load actually concentrates.
2. **The decision log or its substitute** — minutes, approval records, mail threads. Reveals decision latency and who actually decides, which is usually not what the chart says.
3. **Existing process documentation** — reveals what is written down versus what is tribal.
4. **Tooling inventory and approval status** — reveals the real rung, which is usually lower than the aspiration.
5. **Reporting packs** — reveals what is measured and, by omission, what is not.
6. **Interview notes** — last, because they are the most reconstructed.

Then ask only what scanning cannot settle, as numbered questions.

**Self-check:** all supplied material scanned before any question asked · every row typed and sourced · no row names an individual · gaps in evidence recorded as gaps rather than filled by inference.

---

## Stage 2 — The six-dimension baseline

**Prompt.** For each of the six dimensions, state what good looks like in one line, then record the current reality from the Stage 1 register. Capture each as it is, not as it should be.

| Dimension | What to capture | What good looks like |
|---|---|---|
| **People and skills** | Capacity against demand; capability gaps; key-person dependencies — described structurally ("one role holds X with no backup"), never by who | Capacity roughly matches demand; no single point of failure; the skills each function needs are present |
| **Processes and ways of working** | What is documented, what is ad hoc, what is tribal knowledge held in heads | The work that matters is documented to a portable standard and runs the same way regardless of who is in |
| **Tooling and data** | The current rung per area (manual → spreadsheet → copilot-assist → agents); what is **approved** versus what is only aspirational | Each area runs on the lowest rung that does the job reliably; the data is trusted; nothing in use is unapproved |
| **Demand and load** | Where the request load concentrates, its volume and its shape over time — peaks, recurring asks, the long tail | Demand is visible in one place, its concentration is known, and the shape is steady enough to staff against |
| **Political terrain** | Sponsorship strength; where the allies are; which boundaries are contested with adjacent functions; where resistance is likely — by position, never named | A strong sponsor; clear allies; boundaries with adjacent functions agreed; resistance understood in advance |
| **Performance and measurement** | What is measured; what is not measured at all; which existing numbers are actually **trusted** in decisions | Outcomes are measured, not just activity; numbers are consistent; decisions are made on data people trust |

**Decision rules.**

- **Tooling: record the approved answer, not the installed one.** A capability present but unapproved for the data classification involved is a rung the organisation does not have.
- **Measurement: separate "measured" from "trusted".** A number produced weekly and quietly ignored in every decision is not a measure; it is an artefact. Record which numbers actually move decisions.
- **Political terrain is a dimension, not gossip.** It is recorded because sequencing depends on it: a foundational change needing air cover cannot be scheduled before the air cover exists. Record contested boundaries and the position they sit with, and stop there.

❌ "Morale in the team is low and there is scepticism about the change."
✅ "Two prior redesigns in three years closed without a stated outcome `[REPORTED — source: three interview notes]`. Sequencing implication: the first 30 days must ship something visibly useful before any structural ask."

**Self-check:** all six dimensions completed · every current-reality entry traces to a register row · no individual named anywhere · tooling recorded as approved-or-not · measurement separates measured from trusted · nothing aspirational recorded as current.

---

## Stage 3 — Routine capture on the load concentrations

**Prompt.** Take the two or three places where Stage 2 showed demand concentrating and capture the routines that run there. One record per routine.

Fields: **name · serves which subfunction · trigger or input · steps (numbered, in order) · output and its consumer · quality bar · decision points, each marked reversible or not · cadence · owner and source · current tooling rung and the next rung up.**

**Why capture here and not everywhere.** Capturing every routine in the organisation is a project; capturing the routines at the load concentrations is a diagnosis. The concentrations are where the gap between what people believe happens and what happens is widest, and where a rung-2 fix pays back first.

**Decision rules.**

- **A field that cannot be filled with a concrete answer is the finding.** Record it as a gap, do not wave it through. Vague inputs, an uncheckable quality bar, or a decision point nobody will own are the three most common, and each maps directly to a gap-table row.
- **A routine that cannot name the subfunction it serves does not yet have a place** — that is a finding against the function map, not against the routine.
- **Mark each decision point reversible or not.** This is what later determines which steps can be delegated under act-then-log and which must escalate.

**Self-check:** one record per routine, all fields attempted · every unfillable field recorded as a gap · every routine names its subfunction or is flagged · every decision point marked for reversibility · current rung recorded as the approved rung.

---

## Stage 4 — The gap table

**Prompt.** One row per target function. Pre-fill the target column from the function map. Fill current state, gap, severity and sequencing implication from Stages 1–3.

| Function | Target — one line | Current state | Gap | Severity | Sequencing implication |
|---|---|---|---|---|---|
| [function 1] | [the outcome it must produce] | [structural read] | [what is missing] | R / A / G | [what this forces about order] |

**Decision rules.**

- **Rate severity by blocking power, not size** (R5). Severity asks how much the gap blocks the function from doing its job — not how much work it would take to close.
- **Where a function is not in the mandate, mark the row not applicable** rather than rating it. Rating a function the organisation does not own manufactures a gap.
- **Drop below the function line where one subfunction carries the whole gap.** Add a row for that subfunction so the implication points at the right thing. A function-level red that is really one subfunction's problem sends the sequence to the wrong place.
- **Every gap row cites at least one register ID.** A gap with no evidence behind it is an opinion, and is either evidenced or removed.

❌ "Function 4 — weak. Needs investment."
✅ "Function 4 — no owner for the distance between in-production and adopted; adoption is not measured after launch `[OBSERVED — F14, F22]`. Severity R: the mandate's unit of value is realised revenue, which this gap makes unreadable. Sequencing: measurement must be instrumented before any adoption target can be set, so this precedes the commercial workstream."

**Self-check:** one row per target function · every function marked applicable or not against the mandate · severity rated on blocking power with the reason stated · every gap cites a register ID · subfunction rows added wherever a single subfunction carries the gap · no row names an individual.

---

## Stage 5 — The operating-tier baseline

**Prompt.** Populate the operating tier of the three-tier scorecard from whatever data exists today, and state honestly which cells cannot yet be filled.

| Indicator | What it reads | Current | Note |
|---|---|---|---|
| **Decision latency** | Time from a decision-needed item appearing to the decision being logged | | |
| **Intake throughput** | Items in, triaged and closed across the period | | |
| **Decline rate** | Share of intake declined, each with a stated reason | | |
| **Cadence kept** | Snapshot filed and brief sent on the agreed rhythm, no missed cycle | | |
| **Rung progression** | Share of subfunctions at rung 2 or above | | |

**Decision rules.**

- **The operating tier is the only tier honestly measurable at diagnosis.** The outcome and function tiers require the target model to be running. Do not fill them; state that they come online with the pilot.
- **An empty cell is a finding, not a failure.** "Decision latency cannot be computed because no decision record exists" is one of the more valuable lines a diagnosis can produce, and it belongs in the gap table too.
- **This is the before-picture.** Without it there is no trend later, only assertion. Date it and file it.

**Self-check:** every indicator either populated with a dated figure or marked uncomputable with the reason · outcome and function tiers explicitly deferred, not estimated · the baseline is dated and its source stated · every figure traces to a register row.

---

## Stage 6 — From gaps to sequence

**Prompt.** Sort every gap into exactly one of three buckets. The buckets — not the table's row order — set the sequence.

**a. Quick wins.** Low effort, high relief, no air cover needed. Doable this week by the people already there. **Do these first.** They prove the system works and buy the standing everything after requires.

**b. Foundational changes.** Need sponsor air cover or tooling approval before they can move — a contested boundary, a new approved tool, a decision right that must be granted. Sequence these **after** the quick wins have built credibility, so the harder ask lands on a track record.

**c. Dependencies.** Order forced by logic — X must precede Y. A measurement gap closed before the outcome it feeds can be read; an approval secured before the work it unblocks can start. Map these explicitly so nothing is sequenced ahead of what it relies on.

**Decision rules.**

- **A gap in two buckets has not been thought through.** If a change is both a quick win and needs air cover, it needs air cover — classify it as foundational.
- **Test each quick win against "could the current team do this without asking anyone?"** If the honest answer is no, it is foundational.
- **The dependency bucket overrides the other two.** A quick win that depends on an unclosed foundational change is not available yet; move it behind its dependency.

⚠ **Quick wins before structural changes that need air cover.** Lead with a foundational, sponsor-dependent change and the early stumble spends credibility you have not yet earned. Lead with quick wins and the foundational ask lands on proof.

**Self-check:** every gap in exactly one bucket · every quick win passes the no-permission-needed test · dependency ordering explicit and no item scheduled ahead of its dependency · the sequence is stated as an order, not as a list.

---

## Stage 7 — Handoff package

**Prompt.** Assemble the four artefacts the design process consumes. Nothing else.

1. **The six-dimension baseline** (Stage 2), dated.
2. **The gap table** (Stage 4) with severities and sequencing implications.
3. **The operating-tier baseline** (Stage 5), dated — the before-picture every later results read measures against.
4. **The sequence** (Stage 6) as three ordered buckets with the dependency map.

Plus a short covering read, no more than one page: **the three gaps that most constrain the mandate, in severity order, each with the one line of evidence behind it and the one sentence of sequencing implication.**

**Decision rules.**

- **The covering read leads with the gap, not the process.** Nobody needs to be told how the diagnosis was conducted before being told what it found.
- **Do not include recommendations in the handoff.** The handoff is a baseline. Recommendations follow from the design, which has not happened yet, and a recommendation smuggled into a baseline is very hard to dislodge later.
- **Every artefact carries a date and a re-read cadence.** A baseline with no date cannot be trended against.

**Self-check:** four artefacts present and dated · covering read is one page and leads with findings · no recommendations included · no individual named in any artefact · every claim traceable to a Stage 1 register ID.

---

## Lint rules — run before handing anything over

- **D1 — Structural, never personal.** No artefact names an individual, describes a person's performance, or is written so that one person is identifiable from a role description. This is checked mechanically: search the output for personal names before release.
- **D2 — Every finding typed and sourced.** Every claim carries `[OBSERVED / REPORTED / INFERRED / ASSUMED]` and a source. A bare claim fails.
- **D3 — Baseline records what is.** No current-reality entry contains a recommendation, a should, or an aspiration. A baseline that records only what is working is not a baseline.
- **D4 — Severity is blocking power.** Every severity rating states *why* — what it blocks the function from doing. A rating with no stated blocking reason fails.
- **D5 — Mandate-scoped.** Functions outside the mandate are marked not applicable, not rated. A gap against work the organisation does not own fails.
- **D6 — Approved, not installed.** Every tooling rung recorded is the approved rung for the data classification involved. An aspirational rung fails.
- **D7 — Measured versus trusted separated.** The measurement dimension distinguishes numbers produced from numbers used in decisions.
- **D8 — Empty cells are findings.** Every uncomputable indicator states why it cannot be computed. A silently blank cell fails.
- **D9 — One bucket per gap.** Every gap sits in exactly one of quick win / foundational / dependency, and no item is scheduled ahead of its dependency.
- **D10 — Quick wins need no permission.** Every quick win passes the test: the current team could do it this week without asking anyone. If not, it is foundational.
- **D11 — Dated before-picture exists.** The operating-tier baseline is dated and filed. Without it every later claim of improvement is assertion.
- **D12 — No recommendations in the baseline.** The handoff contains findings and a sequence, not proposals.
- **D13 — Traceability.** Every gap-table row cites at least one evidence register ID.
- **D14 — Confidentiality sweep.** No customer data, no personnel data, no regulated payload sits in any artefact. A queue row needs the request type and the requesting role — never the payload.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
