# Organisation architecture — specify the work, then choose who does it

A four-document method for architecting an operating model outside-in, in a large regulated enterprise: two reference standards and two staged processes.

**The claim the pack rests on:** an operating model is a set of specifications, not a set of boxes. Write each unit of work as a precise statement of what must be true for it to be done well *by anyone*, and the work becomes portable between executors, measurable without a separate measurement project, and automatable without a redesign. Structure is then a consequence of the specification set, not an input to it. The corollary that does most of the work: **a function charter and an agent role definition are the same artefact at different maturities.**

**Two units of design, deliberately at different altitudes.** The **unit of scope** is the whole organisation — never one team at a time, because boundaries drawn team-by-team overlap or leave gaps. The **unit of specification** is the **subfunction** — never the function, because a function is a container and containers are not executable. Most operating-model failures are one of these two units being wrong.

**Three quantities the pack keeps strictly apart**, because conflating them is how heatmaps get misread:

```
READINESS (a property of the work)  ·  RUNG (what is approved today)  ·  AUTONOMY (what may be decided alone)
```

A subfunction can be highly agent-ready and correctly sitting on rung 2 because rung 2 is what is approved — and still escalate every call, because autonomy is decided by reversibility, not by either of the other two.

The pipeline: **diagnose what exists → design the target → assign executors → stand it up, pilot one function, migrate on evidence.** The diagnosis hands a baseline, a gap table and a sequence to the design process; the design process consumes them at its transition stage. Either half runs alone — a design with no diagnosis is legitimate but its transition sequence is ungrounded, and the pack says so out loud rather than hiding it.

## Capability → file

| Capability | File | Output |
|---|---|---|
| ORGANISATION ARCHITECTURE STANDARD — what an operating model is made of and how to build one: the two units of design, the seven-step sequence, the nine-field specification set and the stranger test, decision rights and the three authorities, one splitting principle and one trade-off forum, three-tier measurement derived from the mandate, objectives-become-bets, who owns the model, ten failure modes with controls, lint rules O1–O25 | `organisation-architecture-standard.md` | reference |
| EXECUTOR ASSIGNMENT STANDARD — who performs the specified work and how much it may decide: the six-criterion readiness rubric with its two hard overrides and four rationale prompts, the splitting rule for regulated sign-off, the four-rung tooling ladder and the four rung-2 discipline rules, promotion and demotion gates, the test protocol before any live connection, graduated autonomy (act-then-log / escalate-first / never-delegate) with the widening rule and the fixed regulated floor, a worked example, lint rules E1–E16 | `executor-assignment-standard.md` | reference |
| CURRENT-STATE DIAGNOSIS process for any LLM, no code interpreter needed — 8-stage flow: playback gate → evidence register → six-dimension baseline → routine capture at the load concentrations → gap table severity-rated by blocking power → dated operating-tier before-picture → quick wins / foundational / dependency sequencing → handoff package. Session state header, structural-never-personal rule, lint rules D1–D14 | `current-state-diagnosis-process.md` | baseline, gap table, sequence — in-chat |
| OPERATING-MODEL DESIGN process for any LLM — 10-stage flow: playback gate → mandate one-pager → function map → subfunction specs → executor assignment → operating layer stood up in six timeboxed blocks → alignment gate one → target operating model document (governing thought, SCQA, three MECE arguments) → alignment gate two and live pilot → results read and migration sequence. Session state header, placeholders-never-inventions rule, lint rules M1–M28 | `operating-model-design-process.md` | target model, specs, pilot read, migration sequence — in-chat |

## How the pieces sequence

**If an organisation already exists and is being redesigned:** diagnosis first, in full, then design. The gap table drives the design's transition stage; without it, the sequence is guesswork wearing a Gantt chart.

**If the organisation is being stood up new:** design only. Run the diagnosis later against the standing-up, once there is something to diagnose.

**If a target function map does not yet exist:** run the design process to Stage 3, then run the diagnosis against that draft map, then return to design Stage 4 with the gap table in hand. The diagnosis needs something to compare against, and a strawman is enough.

**In every case, the operating layer is stood up on day one, in parallel with everything else.** It is sixth in logical dependency and first in calendar time. It relieves load immediately and starts the trend series against which every later claim of improvement is checked. Skip it and the results read has nothing to read.

**The two standards split at a real seam, not an arbitrary one.** The architecture standard answers *what the work is and who decides* — a design question, answerable before any tooling exists. The executor standard answers *who performs it and how much it may decide alone* — an assignment question, answerable only against what is approved today, and re-answered every quarter as evidence accrues. The design does not change when the answer to the second question does. That is the whole point of the split, and of the specification discipline underneath it.

## How to use (any assistant — Copilot, Claude, ChatGPT)

**The two standards** are reference: attach one and ask for a specific procedure, or paste the relevant Part. They are written to be executed rather than admired, so a request like "score these subfunctions against §1 of the executor standard and apply both hard overrides" is the intended mode of use. Attach only the one you need — each is sized to be held whole.

**The two processes** are staged prompts. Two ways to run them: paste the whole file and say *"follow this process; start at Stage 1"*, or run stage by stage in separate prompts with the session state header at the top of each. Each stage ends with a self-check table and waits for approval before the next one. A half-finished process is a legitimate state — park it, come back, resume with the header.

**The session state header is not optional.** Without it the assistant repeats completed work, proposes steps you have already taken, and does not ask for the information that would improve the output.

## Two rules that override the rest

**Structural, never personal.** Every current-state finding, gap and political observation is recorded by capability, role or boundary — never by an individual's name, and never written so one person is identifiable from a role description. This is a hazard rule as much as a method rule: a baseline that names individuals cannot be circulated, and it converts a design conversation into a performance conversation. Lint rule D1 requires a mechanical name search over the output before release.

**Placeholders, never inventions.** Every local fact is either sourced or carries a bracketed placeholder — `[UNKNOWN — needs sponsor]`. A draft full of marked placeholders is a working agenda for the next session. A draft full of plausible inventions is a document nobody can safely correct, because the inventions are indistinguishable from the facts. Lint rule M27 exists because this is the most expensive defect the design process can produce.

## Evidence grade — read before quoting the pack

Everything in this pack is stated as a **design rule**, not as an evidenced finding. It synthesises public practitioner work — stream-aligned team design, empowered product teams, the documented large-bank agile transformations of the mid-2010s, and specification-first automation practice — with the specification discipline that connects them. No controlled comparison of organisation designs exists, and successful counter-models show the stream-aligned pattern is specific to a class of problem rather than universal. Where a rule could be tested in a given organisation, the pilot is the test: one function, run to spec, read against three questions.

**No client data, client structures or client results live in this pack, and none should be committed to it.** Filled specs, populated gap tables and live operating workbooks are engagement assets — they live in the client tenant.

## Licence

Everything in this repository is **CC BY 4.0** — reuse freely with credit to TMTH. See [`LICENSE.md`](LICENSE.md). Your outputs are your own; client data and brand never enter this repository.
