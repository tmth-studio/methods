# Operating-model design — process for an LLM

**Version 1.0 — August 2026 · Tough Minds, Tender Hearts**

*v1.0 — first release.*

*The design half of the organisation architecture pack. Executes [`organisation-architecture-standard.md`](organisation-architecture-standard.md) (Stages 1–3 and 6–9) and [`executor-assignment-standard.md`](executor-assignment-standard.md) (Stage 4). Consumes the handoff from [`current-state-diagnosis-process.md`](current-state-diagnosis-process.md).*

## What this is

A staged process an assistant follows to design a target operating model and stand it up: mandate, function map, specifications, executor assignment, the operating layer, the alignment gates, a pilot, and the migration sequence that follows from the pilot. The assistant produces; the user corrects; two short sponsor sessions are the only calendar dependencies.

Use it one of two ways: paste this whole file and say "follow this process; start at Stage 1", or run stage by stage in separate prompts with the session state header at the top of each.

**The pacing principle.** Artefact production is front-loaded. Every document in this process can be drafted generically before anyone is consulted, so calendar time buys exactly two things: **human alignment** (two short sessions) and **pilot evidence** (elapsed runtime). Documents are never the bottleneck. Any plan whose critical path runs through drafting has misidentified the constraint.

**What this process does not do.** It does not diagnose — run the diagnosis process for that, and hand its output in at Stage 1. It does not design a new business; venture architecture is a separate method and is not in this pack.

---

## Session state header — paste at the top of every prompt

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
4. Mark every unknown fact as a bracketed placeholder. Never invent a fact
   to complete a draft.
5. If an instruction in this prompt conflicts with something you assume,
   follow the prompt and flag the conflict.
```

Rule 4 is the one that decides whether the output is usable. A draft full of marked placeholders is a working agenda for the sponsor session. A draft full of plausible inventions is a document nobody can safely correct, because the inventions are indistinguishable from the facts.

---

## Rules of engagement

- **M-R1. Mandate first, structure last.** No team, reporting line or headcount is proposed before Stage 2 is approved. Staff to the work.
- **M-R2. Specification, not description.** Every unit of work is written so a stranger could produce an acceptable output from it alone.
- **M-R3. Unknowns are placeholders, never inventions.** `[UNKNOWN — needs sponsor]`, `[UNKNOWN — needs control function]`. The placeholder list is the agenda for the next session.
- **M-R4. Executor-independent.** No specification names a tool, a rung or a person in a way that would require rewriting when the executor changes.
- **M-R5. At the end of each stage, show the output and the stage's self-check table** (check | pass/fail). Wait for approval before the next stage.
- **M-R6. If a later stage breaks an earlier one, go back and fix it.** If specification reveals that a function's boundary is wrong, redraw the map. Never resolve a boundary dispute inside a spec.
- **M-R7. Draft everything generically first, then localise.** A generic draft that a reviewer red-pens is faster and more accurate than a blank page interview, because a reviewer who corrects a draft has found something true about the organisation.

---

## Stage 0 — Playback gate

Play back to the user in four sentences: (1) the mandate-first, structure-last order and why nothing about teams comes before Stage 2; (2) that the unit of specification is the subfunction, not the team or the role; (3) that unknowns will be marked as placeholders and become the session agenda; (4) which of the two alignment gates exist in their calendar and when.

Then confirm the entry state: **is there a diagnosis handoff?** If yes, attach it — the gap table drives Stage 8's sequencing. If no, say so plainly: the design will proceed, but the transition sequence will be ungrounded and must be revisited once a baseline exists.

**Self-check:** order explained · unit of specification named · placeholder rule confirmed · diagnosis handoff present or its absence recorded as a known limit · both alignment sessions booked or their absence flagged as the critical path.

---

## Stage 1 — The mandate one-pager

**Prompt.** Draft the mandate as one page against this structure, marking every unknown.

1. **Purpose** — one sentence. What this organisation exists to do.
2. **Boundaries** — what sits inside, what sits outside, and where it hands off. Every boundary names its neighbour.
3. **Outcomes owned** — two or three, stated as customer or commercial outcomes.
4. **Explicitly not owned** — the adjacent outcomes owned by siblings or other functions. This section prevents more disputes than the one above it.
5. **Decision rights** — a table of the significant decision classes: for each, who proposes, who decides, who is consulted, who is informed.
6. **The success line, verbatim** — `This organisation is succeeding if: [sponsor's own words]`. The most important placeholder on the page.
7. **The three structural facts** — control or advise on headcount and budget; the unit of value owned; the trigger (build, fix, or reorganise).
8. **Splitting principle** — where the organisation divides into teams, the single stated basis: sub-segment, journey, or product line.
9. **Open questions** — every contested or unclear point, listed.

**Decision rules.**

- **Do not resolve a contested point by guessing.** Move it to §9. An honest gap is worth more than a confident guess, because a guess propagates silently into every downstream artefact and is invisible by the time it does damage.
- **One splitting principle, applied uniformly.** Sub-segment, journey or product line — any works; mixing them inside one organisation does not. Mixed logic is the most common cause of ownership disputes, and it is cheap to prevent and expensive to unwind.
- **If the splitting principle is not agreed organisation-wide, agree it before finalising any boundary.** Boundaries drawn team-by-team overlap or leave gaps.
- **Decision rights are the load-bearing section.** If a right cannot be agreed, the seniority case for the role that would hold it weakens by exactly that much. Say so rather than leaving the row blank.

❌ "The team owns the customer experience and will work closely with operations."
✅ "Owns the [named journey] end to end, including pricing recommendations. Does not own the servicing operation — owned by [named neighbour], handshake: [named artefact, named cadence]. Decides backlog order and solution approach within risk gates; recommends funding above envelope, sponsor decides. `[UNKNOWN — needs sponsor: does the sponsor control or advise on headcount?]`"

**Self-check:** all nine sections present · every unknown marked as a placeholder rather than invented · every boundary names a neighbour · explicitly-not-owned is non-empty · splitting principle stated · success line marked verbatim-required · open questions listed as the session agenda.

---

## Stage 2 — Derive the function map

**Prompt.** From the mandate, derive the set of jobs the organisation must do. Target five to seven. Name each as an outcome the organisation buys. Assign one owner. Mark owned or borrowed.

| # | Function | The job to be done — one line | Owner | Owned / borrowed |
|---|---|---|---|---|

**Decision rules.**

- **Test for MECE before anything else.** If two functions could claim the same work, the boundary is wrong — redraw it, do not agree that both will collaborate. If a real piece of work has no home, that is a finding against the mandate; return to Stage 1.
- **Strike anything the mandate does not justify.** Every function kept must trace to something the organisation is accountable for. An organisation that owns no go-to-market should not build a go-to-market function; one that inherits run responsibilities from a separate operations division should map the boundary rather than duplicate it.
- **Borrowed work needs a named handshake, not a silent gap.** For each borrowed function, name the neighbour, the artefact exchanged and the cadence.
- **Fewer than five usually means a function is hiding inside another. More than seven usually means subfunctions have been promoted.** Neither is fatal; both are worth checking before proceeding.

**A reference set to react against, not to adopt.** For a product organisation in a large regulated enterprise: *decide what's worth building · discover and validate · build and ship · make it land · run and improve what exists · govern and enable.* Offer it as a strawman. Rename freely — the labels carry no authority, the decomposition does — but any renaming must leave the set MECE. In a regulated enterprise, govern-and-enable is first-class rather than overhead: designing it in from the start is what makes later automation permissible.

**Self-check:** five to seven functions · each named as an outcome, not a team or an activity · exactly one named owner each · MECE tested with overlaps and orphans stated · every function traced to the mandate · every borrowed function carries a named handshake.

---

## Stage 3 — Specify the subfunctions

**Prompt.** Break each function into its subfunctions and specify each against the nine-field set. Draft generically first; mark every local fact as a placeholder.

Fields: **job to be done · input · transformation · output · decision rights · cadence · quality bar · interfaces · agent-readiness and owner.**

**Decision rules.**

- **Name artefacts and their sources, not activities.** "Analyse the market" is not an input.
- **Name the method, not the verb.** Every transformation step states the rule, taxonomy or threshold applied. "Assess", "review" and "consider" without a named method are unfinished.
- **Make the quality bar checkable.** Numbered acceptance criteria, each answerable yes or no from the output alone. Counts, presence checks, resolving links, time limits. Untestable adjectives fail.
- **Separate three classes of decision right:** decides alone, recommends (naming the decision's owner), escalates (naming the receiving role **and the observable trigger condition**). A subfunction with an empty decides-alone row is a task list, not a subfunction.
- **Every interface names an artefact.** An interface without one is a relationship; tighten it until an artefact appears.
- **Run the stranger test before sign-off.** Hand the spec to someone outside the function and ask for one instance of the output. What they get wrong is what the spec left out.

**Sequencing rule.** Specify the pilot candidate's subfunctions to full depth first and leave the rest at one-line job-to-be-done until the pilot is chosen. Specifying all of them before Stage 6 spends effort on functions that may be renamed or struck in the room.

**Self-check:** all nine fields present per spec · every input names an artefact and a source · every transformation step names a method · every acceptance criterion answerable yes/no from the output alone · every decides-alone row non-empty · every escalation carries an observable trigger · every interface names an artefact and a cadence · one named owner each.

---

## Stage 4 — Assign executors

**Prompt.** Score every subfunction on the six-criterion rubric in [`executor-assignment-standard.md`](executor-assignment-standard.md) §1, answer its four rationale prompts, apply the mapping rule and both hard overrides, and record the rating with its rationale. Then record the tooling rung it runs on today — the **approved** rung — and the next rung up. That standard's lint rules E1–E16 govern this stage.

**Decision rules.**

- **Apply both overrides before recording.** A single 1 on any criterion caps the rating at agent-assist. A 1 on regulatory constraint or relationship-dependence forces human-essential regardless of total. High scores elsewhere cannot buy back a named-person requirement or a trust-based relationship.
- **Where an override blocks a subfunction, check whether the preparation is separable.** The constraint usually applies to the sign-off, not to the pack assembled for it. Split them into two subfunctions and rate each on its own merits — this is where most of the available automation in a regulated organisation actually sits.
- **Rate human-essential subfunctions too, and specify them fully.** The spec is what makes the rating defensible and later promotion possible. Unspecified work cannot be assessed, delegated or audited.
- **"Agent-ready" means ready for the highest rung available today.** A subfunction with specified inputs, a verifiable quality bar and low ambiguity should be automated **now**, at rung 2 if that is what is approved. The heatmap is actionable from day one; it is not contingent on tooling arriving.
- **The heatmap is the migration sequence.** Do not write a separate automation transition plan. The ratings in rating order are the plan.

**Self-check:** every subfunction scored on all six criteria · both overrides checked and applied · every rating carries a written rationale · blocked subfunctions checked for a separable preparation step · current rung recorded as the approved rung, not the installed one · next rung named for each.

---

## Stage 5 — Stand up the operating layer

**Prompt.** Build the working layer before the design is finished. It relieves load immediately and starts the data series everything is later validated against. Six timeboxed blocks, roughly three hours, in order — each uses the one before it.

| Block | Time | Work | Output |
|---|---|---|---|
| **0 · Tooling recon** | 10 min | Establish what rung 2 means locally: spreadsheet version and whether scripting or macros are permitted; whether a shared document library exists; whether a forms tool can feed a list; whether a workflow tool is available; the approval status of any assistant | A five-line tooling note. This sets the ceiling for every block below. |
| **1 · Folder structure** | 10 min | On the shared library, a root folder with one subfolder per function plus one for the mandate and one for the operating system | The filing system **is** the function map. Every artefact from now on has exactly one home. |
| **2 · Master workbook** | 60–90 min | Five tabs: function map · decision log · bet portfolio · intake queue · RAG rollup. Format every range as a table. Pre-populate the function map from Stage 2. Add conditional formatting on the RAG column. Build the rollup by counting status from the map. | The centrepiece. |
| **3 · Intake pipeline** | 20 min | Route A: a five-question form feeding the queue. Route B: a dedicated mail folder plus a standing triage slot. Either way — nothing enters the work except through intake, and everything in intake gets a status. | One structured front door. |
| **4 · Mandate draft** | 30 min | The Stage 1 one-pager into a document inside the environment, every unknown marked | The placeholder list becomes the session agenda. |
| **5 · Book both alignment sessions** | 10 min | Two invites, both booked today. These are the only calendar dependencies in the whole process. | Two meetings in the diary. |

**Decision rules.**

- **Substitute the locally approved equivalents throughout.** Record which tools those are in the Block 0 note; the process names capabilities, not products.
- **If shared folders are not yet available, build the identical structure in personal work storage and move the tree when access lands.** Nothing inside cares where it lives. Two cautions: never link files from personal storage in meeting invites — move first; and log the access request now so it resolves in the background.
- **Snapshot discipline from week one.** A dated copy of the workbook filed weekly. The trend series accrues from week zero, and that history is what any future automation will be trained and trusted on.
- **Capture on arrival; triage at a fixed slot, never on arrival.** Batching is what stops the context-switching. If it is not in the queue, it does not exist.
- **Decline must be a real category that is actually used.** A brief showing ten absorbed and nothing declined is decorating the overload, not relieving it. The system's value is triage, not absorption.

⚠ **Scripts, macros and workflow automations may themselves require approval in a regulated environment.** Block 0 answers this before anything is built on them. Never move regulated or customer data into a tool that has not been approved for it. Where an assistant is used to extract from a batch of requests, paste only what the extraction needs: the queue row needs the request type and the requesting role, never the payload.

**Self-check:** tooling note recorded with approval status per capability · folder structure mirrors the function map exactly · all five tabs built and formatted as tables · intake route live and a triage slot in the calendar · mandate draft in the environment with unknowns marked · both sessions booked · first snapshot filed.

---

## Stage 6 — Alignment gate one

**Prompt.** Twenty minutes with the sponsor. Five items, in this order — each sets up the next.

1. **Validate the functions.** Walk the list. Rename, merge or strike anything that does not fit how the work really runs.
2. **Mark owned versus borrowed.** For each function. Borrowed work needs a named handshake.
3. **Pick the pilot function** against three criteria in order: clearest pain · friendliest politics · measurable within a week.
4. **Capture the success line** in the sponsor's own words. Write it down verbatim while they say it. Do not paraphrase in the room.
5. **Confirm the three structural facts.** Control or advise; unit of value; trigger. Get a plain answer to each before the session ends.

**Decision rules.**

- **Order matters: pick the pilot after establishing what the organisation owns.** Pick it first and you will pick something the organisation only borrows.
- **The third pilot criterion is the one people skip and the one that decides the outcome.** A function whose results take a quarter to show cannot be read at the results read. Measurability is not a nice-to-have; it is what makes the pilot evidence rather than anecdote.
- **Bring evidence, not a proposal.** One line from the live queue: *since [date], N requests processed, X absorbed, Y declined, Z decisions queued.* This changes the conversation from "would this help" to "where do we point it first".
- **Hold the pilot hypothesis lightly.** A defensible default is the function whose operating layer you already built — its tooling exists and the pain is usually most felt there. But the sponsor's reaction in the room is the deciding evidence. If they pull toward a different function, follow it: picking their pain over your tidy default is the reason for the session.

**Output.** The marked-up function map becomes v1.0. Everything downstream re-points to it the same day.

**Self-check:** all five items covered in order · function map v1.0 produced and version-stamped with an attendee list · owned/borrowed marked on every row · pilot chosen against all three criteria with the reasoning recorded · success line captured verbatim · all three structural facts answered plainly · every placeholder either resolved or explicitly deferred with a date.

---

## Stage 7 — The target operating model document

**Prompt.** Write the design as an argument, not a description. One governing thought, an SCQA opening, three supporting arguments, four appendices.

**1 · Governing thought.** One sentence asserting what the target operating model is and why it is the right one. Every section either supports it or is cut.

> **Test before proceeding: can the governing thought be disagreed with?** If it is a statement nobody could oppose — "we will improve how we work" — it is a topic, not a claim. Sharpen it until a reasonable colleague could push back.

**2 · SCQA opening.** *Situation:* the stable, agreed context — what the current structure was built to do. Nothing contested lives here. *Complication:* what changed or what the structure now fails to do, specific enough that the reader feels it. *Question:* the single question the complication forces, written as the reader would ask it. *Answer:* the governing thought restated.

**3 · Three supporting arguments.** Keep the set MECE.

| # | Argument | What it must prove | Draws on |
|---|---|---|---|
| A1 | The mandate and functions are right | The target covers the work that matters, nothing duplicated, nothing orphaned | Function map; the coverage trace; the boundary cases and their resolution |
| A2 | The operating mechanics work | The model can actually run — decision rights, cadences and specs are stated, not implied | Specs; the cadence table (forum, frequency, decisions taken, standing artefact, chair); the decision-rights matrix with every regulated gate mapped to its owner |
| A3 | The transition is safe and sequenced | The path from current to target carries acceptable risk and is gated, not big-bang | Readiness heatmap; the diagnosis gap table; the phased plan; the risk register |

**4 · Appendices.** Function map · the spec set · readiness heatmap with assessment date and re-assessment cadence · transition risk register.

**Decision rules.**

- **The boundary cases are what stakeholders will probe.** The activities two teams currently claim, or no team owns, with where each lands and why. Do not leave them implicit; a design that is silent on the contested cases will be read as not having considered them.
- **A2 must show the control framework intact in the target state.** In a regulated enterprise, map every regulated gate explicitly to its owner in the new model. A gate with no named owner in the target is a transition blocker, not a detail.
- **A cadence with no decision and no artefact is a candidate for deletion.** Every forum in the cadence table states what it decides and what it produces.
- **The plan carries phases and gates, not dates as promises.** Sequence by dependency and political feasibility, not by what looks impressive early. If validation takes longer because the right people are hard to convene, the plan moves — the gates do not get skipped to protect the dates.

**Sequencing principles to state in the plan:** dependency before ambition · quick wins before structural change needing air cover · one pilot function instrumented before scaling · regulated gates respected, with no control lapsing even for a day and every handover explicit and evidenced · no big bang, every phase gated, every gate able to say no.

**Self-check:** governing thought is one sentence and disagreeable · Situation contains nothing contested · Question follows from the Complication · three arguments MECE and each with its evidence named · every regulated gate mapped to an owner in the target · boundary cases listed with resolutions · every cadence row states a decision and an artefact · sequencing principles stated · appendices attachable as standalone artefacts.

---

## Stage 8 — Alignment gate two, then run the pilot

**Prompt.** Thirty minutes: sign off the target operating model document and the pilot function's specifications. Decision rights and quality bar agreed **before** the pilot starts, not after. The pilot goes live the same day.

Then run it: **one function, to its specification, live, on the highest approved rung, for a defined window**, with the operating rhythm running underneath it the whole time and a dated snapshot filed at the end of each week.

**What the pilot tests.** The operating model, not a product. Work enters only through intake; decisions land in the log the same day; the quality bar is applied to outputs; assistant-class tooling does the legwork wherever the readiness rating says assist.

**Decision rules.**

- **Sign off before live, never after.** A pilot whose decision rights are still being negotiated while it runs tests the negotiation, not the model.
- **If the pilot needs more runtime to be conclusive, extend the evidence window — not the design phase.** These are different things and conflating them is how a design programme becomes permanent.
- **Instrument from day one or the read is unreadable.** The operating-tier indicators must be accruing before the window opens.

**Self-check:** document and pilot specs signed off with a named signatory · pilot live the same day · operating rhythm running underneath · instrumentation accruing from day one · evidence window defined with an end date · snapshot filed weekly.

---

## Stage 9 — The results read and the migration sequence

**Prompt.** A structured read of the pilot, in writing. Three questions, and the conclusions gate the next tranche.

**Q1 — Did the function perform to spec?** Compare performance against the specification: cadences held, decisions taken at the right level, outputs meeting the quality bar, outcomes tracked. State pass, partial or fail per dimension, with the data.

**Q2 — What did the design get wrong?** Where the model diverged from how work actually flowed: specs that did not match real decisions, cadences duplicating existing forums, boundaries that re-contested, quality bars that could not be checked in practice. Each item becomes a design change or an explicit, recorded acceptance.

**Q3 — What is the next migration tranche?** The functions in the next tranche, the readiness evidence supporting their inclusion, the gate criteria they must meet before migrating, and what would defer them.

Then run the autonomy read: **which escalated calls did the human approve every time, with no correction?** Those categories have earned the move from escalate-first to act-then-log. Move them one decision class at a time and record the evidence for each move.

**Decision rules.**

- **A pilot that fails the read is not a failed transition — it is the system working.** The read exists to catch design errors at one-function scale before they replicate at organisation scale. Record what was learned, amend the model, re-gate.
- **The corrections are the deliverable.** The document is only their record. A results read that changes nothing has either been run on a function that was already working or has not been run honestly.
- **Sequence the next tranche by gap and readiness, not enthusiasm.** High-readiness work first to build momentum; judgement-heavy work later or never.
- **Do not redesign the organisation to migrate it.** The same specifications acquire new executors. If migration requires a redesign, the spec was executor-dependent and is rewritten.
- **Widen autonomy on logged evidence only.** Never because a new capability arrived. Capability is not permission, and the second question is rarely the designer's to answer alone.
- **Name the owner of the model itself.** Continuous evolution belongs to a named subfunction inside govern-and-enable; episodic transformation belongs on the bet portfolio with a decide-by date. The design programme itself sits on that portfolio as row one, judged by the same kill-or-persevere discipline it installs.

**Self-check:** three questions answered in writing with data · every divergence recorded as a change or an explicit acceptance · next tranche named with gate criteria and defer conditions · autonomy moves cite specific decision-log evidence per category · never-delegate set unchanged · model owner named · design programme entered on the bet portfolio with a decide-by date.

---

## Lint rules — run before signing off any design

- **M1 — Mandate exists and is signed at the right level.** No design proceeds on an unagreed mandate. If it is contested, the open question is recorded and the design is marked provisional.
- **M2 — Success line verbatim.** Recorded in the sponsor's words, not paraphrased.
- **M3 — Three structural facts answered.** Control-or-advise, unit of value, trigger. An unanswered fact is named, not assumed.
- **M4 — Function map is MECE, outcome-named, single-owner.** No overlaps, no orphans, no function named after a team, no shared ownership.
- **M5 — Owned or borrowed marked, handshakes named.** Every borrowed function names its neighbour, the artefact and the cadence.
- **M6 — One splitting principle.** Stated in writing and applied uniformly. Mixed logic fails.
- **M7 — Nine fields per spec.** A missing field is recorded as an unanswered question about the organisation.
- **M8 — Stranger test passed.** Each spec produces an acceptable output from someone who has never met the team.
- **M9 — Quality bars checkable from the output alone.** Untestable adjectives fail.
- **M10 — Decides-alone non-empty; escalation triggers observable.**
- **M11 — Interfaces name an artefact and a cadence.**
- **M12 — Named methods.** No transformation step rests on "analyse", "assess", "review" or "consider" alone.
- **M13 — Every subfunction rated, human-essential included, both overrides applied.**
- **M14 — Blocked subfunctions checked for a separable preparation step.**
- **M15 — Rungs recorded as approved, not installed.**
- **M16 — Executor-independent specs.** If migrating a subfunction would require editing its spec, it fails.
- **M17 — Readiness is not authorisation.** No promotion without stable spec, low logged error rate, approved tooling for the data classification, and a working rollback path.
- **M18 — Regulated floor written and fixed.** The never-delegate set is explicit and carries no migration path.
- **M19 — Every regulated gate has a named owner in the target state.** A gate with no owner is a transition blocker.
- **M20 — No control lapses during transition.** Every ownership move has an explicit, evidenced handover.
- **M21 — Governing thought is disagreeable.** A statement nobody could oppose is a topic and fails.
- **M22 — Every cadence states a decision and an artefact.**
- **M23 — Measures derive from the mandate and the quality bars.** No invented measure; no activity count in the outcome or function tiers.
- **M24 — Pilot before scale, gated.** One function instrumented and read before any second tranche.
- **M25 — Autonomy widens on logged evidence, one decision class at a time.**
- **M26 — No standing transformation function.** Episodic change sits on the bet portfolio with a decide-by date; continuous evolution sits with a named subfunction.
- **M27 — No invented facts.** Every local fact is either sourced or carries a bracketed placeholder. A plausible invention in a signed-off design is the most expensive defect this process can produce.
- **M28 — Confidentiality sweep.** No customer data, personnel data or regulated payload sits in any design artefact or is pasted into any assistant not approved for that classification.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
