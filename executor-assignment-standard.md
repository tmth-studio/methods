# Executor assignment — readiness, tooling and graduated autonomy standard

**Version 1.0 · August 2026 · Tough Minds, Tender Hearts**

*v1.0 — first release. Split out of `organisation-architecture-standard.md` at v1.0 so each document stays small enough for an assistant to hold whole.*

*The second half of the organisation architecture core. Reads directly against [`organisation-architecture-standard.md`](organisation-architecture-standard.md), whose vocabulary, specification field set and design sequence this standard assumes. Executed at Stage 4 of [`operating-model-design-process.md`](operating-model-design-process.md).*

An operating manual an AI assistant can execute. It answers the question the architecture standard deliberately defers: **once the work is specified, who or what performs it, how much may it decide alone, and what evidence moves that boundary.** Decision procedures, contrastive examples, and lint rules throughout.

---

## Part 0 — What this standard is (read first, play back before executing)

**The problem this solves.** Organisations attempt to automate work they have never specified. A capable assistant arrives, budgets are approved, pilots are run, and a year later the work is done much as it always was with a layer of software bolted to the outside. The promise was automation; what landed was decoration. The reason is rarely named: **you cannot automate work you have not specified.** An executor — a new joiner, a script, an agent — needs three things: what comes in, what good looks like, who decides. Most organisations cannot supply those on demand, because the work lives in people's heads.

A second failure follows the first. Where automation does land, it is often pointed at the judgement rather than at the legwork — the least checkable work is delegated while people continue doing extraction, routing and assembly by hand.

**The claim.** The specification is fixed; the executor changes. Assignment is therefore a *later and separate* decision from design, made per subfunction on two axes that must not be confused:

- **Agent-readiness** — a property of the *work*: how codified its inputs, methods and acceptance criteria are. Scored in §1.
- **Tooling rung** — a property of the *current environment*: which executor is available and **approved** today. Recorded in §2.

A subfunction can be highly agent-ready and correctly sitting on rung 2, because rung 2 is what is approved. Treating readiness as a claim about tooling is the most common misreading of a heatmap.

**The third quantity, kept separate from both.** *Autonomy* is not readiness and not rung. It is how much an executor may decide without asking, and it is governed by **reversibility and accountability** — not by seniority, not by capability, and not by comfort. §4.

**Execution gate.** Before running any procedure below, play back to your user in four sentences: (1) that readiness describes the work and the rung describes the environment; (2) that autonomy is a third, separate question decided by reversibility; (3) that a rating is an assessment, never an authorisation; (4) whether the subfunctions they want rated are specified to the architecture standard's nine-field set — if they are not, rating them is guesswork and the specification comes first.

---

## Part 1 — The agent-readiness rubric

### 1.1 — Scoring

Score each subfunction 1–3 on six criteria, where 3 is always the condition most favourable to automation. Total ranges 6–18.

| Criterion | 1 — unfavourable | 2 — partial | 3 — favourable |
|---|---|---|---|
| **Input specifiability** | Inputs tacit, scattered, held in heads | Identifiable but inconsistently formatted or sourced | Fully specified, structured, machine-accessible |
| **Output verifiability** | Quality is a matter of taste; reviewers disagree on what good looks like | Checkable by an experienced reviewer against loose criteria | A written quality bar exists; pass or fail is determinable from the output alone |
| **Ambiguity of method** | The approach is reinvented each time; no two instances follow the same path | A common pattern exists with frequent judgement-based deviations | The method is stable and repeatable; deviations are rare and nameable |
| **Consequence of error** | An undetected error causes customer, financial or regulatory harm | An error is costly but caught downstream before harm occurs | An error is cheap, visible and reversible at the review step |
| **Regulatory constraint** | Regulation or internal policy requires a named accountable person to perform or approve the work | Automation is permitted with conditions — approved tooling, audit trail, human review | No regulatory or policy constraint on how the work is performed |
| **Relationship-dependence** | The work succeeds through trust, influence or negotiation with specific people | The work involves people through structured, low-stakes interaction | The work involves no interpersonal dependency |

### 1.2 — Mapping rule and overrides

| Total | Rating | Override |
|---|---|---|
| 15–18 | Agent-ready | Only if no individual criterion scores 1. A single 1 caps the rating at agent-assist. |
| 11–14 | Agent-assist | — |
| 6–10 | Human-essential | — |

**Hard override.** A score of 1 on *regulatory constraint* or *relationship-dependence* makes the subfunction human-essential regardless of total. High scores elsewhere cannot buy back a named-person requirement or a trust-based relationship.

Apply both overrides before recording. They are the two most-skipped steps in the rubric, and a rating recorded without them is not defensible in front of a control function.

### 1.3 — The rationale prompts

Answer all four before choosing a rating. They catch what the numbers miss.

1. Could a competent newcomer produce an acceptable output from this specification alone, with no conversation?
2. Which step in the transformation most often requires unwritten context — and could that context be written down?
3. Can every acceptance criterion in the quality bar be checked mechanically?
4. If the output were wrong, who is accountable — and does a regulator or customer expect that accountability to sit with a person?

**Decision rule.** Where the prompts and the score disagree, the prompts win and the disagreement is recorded. A total of 17 with a prompt-2 answer of "the scoring step depends on context that changes weekly and is not written down" is an agent-assist with a named blocking step, not an agent-ready. Naming the step is more useful than arguing about the rating.

### 1.4 — What each rating means

| Rating | Operating model | Migration posture |
|---|---|---|
| **Agent-ready** | Agent does the work; a human reviews the output before it is used or released | Automate first. These set the pace of the transition. |
| **Agent-assist** | Human decides; agent does the legwork — research, drafts, options, first-pass analysis | Automate the inputs now; revisit the decision step as evidence accrues. |
| **Human-essential** | Stays with a person. **The spec is still written.** | Do not automate. Re-assess on cadence; the boundary moves over time. |

**The rating describes the work — not the technology, and not the people currently doing it.** It follows from how codified the inputs, methods and quality bar are. A subfunction rated human-essential is not a judgement on its owner.

**Human-essential is not a residual category.** Writing the spec for a human-essential subfunction is what makes the rating defensible and what makes later promotion possible. Unspecified work cannot be assessed, delegated or audited.

### 1.5 — The splitting rule

Where a hard override forces human-essential, check whether the **preparation feeding the decision is separable from the decision itself.** The constraint almost always applies to the sign-off, not to the pack assembled for it.

❌ "Release governance and sign-off — human-essential. Not automatable."
✅ "Release governance splits into two subfunctions. *Readiness pack assembly*: checklist completion, evidence collation, gap list — scores 16, agent-ready, automate now. *Release sign-off*: the accountable approval — regulatory override, human-essential, does not move. The pack the human signs against gets better; the signature stays."

**This is where most of the available automation in a regulated organisation actually sits.** An override applied at the whole-subfunction level writes off the delegable half by accident.

### 1.6 — The heatmap is the migration sequence

The ratings across the whole function map form a heatmap. **The heatmap is not a status report — it is the roadmap.** It states what moves first, what moves later and what never moves, so the migration order reads off the page rather than being argued from scratch each quarter. Do not write a separate automation transition plan; there isn't one to write.

Record alongside the table: the assessor, the assessment date, and the re-assessment cadence.

---

## Part 2 — The tooling ladder

| Rung | Executor | What runs on it | Promotion trigger |
|---|---|---|---|
| **1** | Manual plus checklist | A person executes the spec by hand against a checklist that mirrors it. **This rung exists to prove the spec is real:** if a competent person cannot run the subfunction from the checklist alone, the spec is incomplete and no tool will fix that. | The checklist has run unchanged for several cycles; the steps are mechanical rather than judgement-based; inputs arrive in a consistent format. |
| **2** | Spreadsheet and standard-office automation | Formulas, pivots, conditional formatting, query and reshaping tools, scripts, mail merge, simple approval flows. Uses only tooling already approved and installed in most large enterprises — which is why it captures most of the value of automation with none of the procurement delay. | The rung-2 artefact is stable; an assistant is approved for the relevant data classification; the remaining manual effort is drafting or summarising rather than calculating. |
| **3** | Copilot-class assist | An approved assistant drafts, summarises, extracts and proposes against the spec, inside documents, mail and spreadsheets; a person triggers and reviews every output. The rung-2 artefacts become its source material. | Assist outputs need little correction over a sustained period; the quality bar is written and measurable; an approved route to autonomous tooling exists. |
| **4** | Agents | An agent executes whole steps of the specified work against the spec, on a schedule or trigger, records what it did, and escalates exceptions to a named owner. An accountable human reviews the log. | None. Top rung. The remaining work is supervision, exception handling and periodic re-verification against the spec. |

**The governing rule: the spec is fixed; the executor changes.** The work is defined once. The rung is only who performs it today.

**Automation does not wait for procurement.** A clearly specified subfunction is already faster, more consistent and more portable at rung 1. "Agent-ready" means *ready for the highest rung available today* — a subfunction with specified inputs, a verifiable quality bar and low ambiguity should be automated **now**, at rung 2 if that is what is approved, and promoted later. The heatmap is actionable from day one.

**Record the approved rung, not the installed one.** A capability that is present but not approved for the data classification involved is a rung the organisation does not have. This distinction is the single most common source of an over-optimistic tooling baseline.

**The ladder is one-directional in spirit but reversible in practice.** Any rung can fall back to the one below within a cycle, because the checklist and the spec never went away. That rollback path is itself a promotion criterion (§3).

### 2.1 — Four rules that keep a rung-2 estate coherent

Rung-2 tooling is cheap to build and therefore cheap to proliferate badly.

1. **Every artefact mirrors exactly one spec** — its inputs, outputs, cadence and quality bar. A tracker that no spec describes means either the spec is missing or the tracker is noise. Fix one or delete the other.
2. **Names come from the function map**, not from whoever built the artefact. A column called "status" must mean the same thing everywhere. Naming drift is the first symptom of spec drift.
3. **One named owner per artefact**, and the owner's name lives inside the artefact. Shared ownership is no ownership.
4. **Weekly dated snapshots to the library, from day one.** Trend data accrues automatically — how the RAG moved, how the queue aged, how confidence shifted.

**The test of discipline is substitutability.** If the artefact's owner left tomorrow, could a successor run the subfunction from the spec, the checklist and the snapshot history alone? If yes, the subfunction is well specified — and, not coincidentally, ready for eventual automation.

**Rung-2 artefacts are not throwaway scaffolding.** The tracker schemas define the future agent's data model. The snapshot history is its context. The decision and experiment logs are its institutional memory. The checklist is its procedure. An organisation that has run disciplined rung-2 operations for a year has already written most of what its agents will need, in spreadsheet form.

---

## Part 3 — Promotion and demotion

### 3.1 — The four conditions

Promotion is an evidence decision, not a preference, and it runs one step at a time. No subfunction skips a step. All four conditions must hold:

1. **Stable spec.** The specification has not materially changed for an agreed period — typically a quarter. A subfunction still being redesigned should not be automated; it should be finished.
2. **Low error rate.** The current rung produces correct output with few corrections, and the errors that do occur are logged and understood. **Automating an error-prone process automates the errors.**
3. **Tooling approved.** The target rung's tooling has cleared the local approval route *for the data classification involved*. Not approved in general — approved for this data.
4. **Rollback path.** The rung below still works. The checklist is current, the spreadsheet still calculates, and a person could resume manual operation within one cycle if the new executor fails.

### 3.2 — Rating promotions

**Human-essential → agent-assist.** Promote when all hold:

- a written spec exists and has survived at least one re-assessment cycle without major revision;
- the delegable portion has been separated from the judgement or relationship portion, and the separated portion re-scores at 11 or above;
- any regulatory constraint has been formally checked and confirmed to apply to the decision or sign-off, **not** to the preparation feeding it;
- a named human accepts accountability for the assisted workflow.

**Agent-assist → agent-ready.** Promote when all hold:

- **trust accrual** — the agent has produced the work over a defined period, typically one to two quarters, with human acceptance above an agreed threshold (for example, accepted without substantive rework);
- **error rate** at or below the human baseline for the same work, with no severity-1 error in the trust period;
- **output verifiability has reached 3** — a written quality bar now exists and review can be performed from the output alone;
- **tooling approval** — on the approved list, with audit trail and access controls signed off by the relevant control function;
- **a rollback path** — the subfunction can return to agent-assist within one cycle if quality degrades.

### 3.3 — Demotion

Demotion uses the same evidence in reverse and is **immediate**. If acceptance rates fall or a severity-1 error occurs, the subfunction drops one rating at once and re-earns promotion through the same gates.

**The asymmetry is deliberate: promotion is slow, demotion is fast.** A system that demotes as slowly as it promotes will keep running a degraded executor through the evidence period that proves it degraded.

### 3.4 — The test protocol before any live connection

Do not widen an executor's reach because a demonstration looked good. Widen it because it passed a test against known answers.

1. **Run on a set of known cases.** Take work already done by hand and let the new executor process it.
2. **Compare to the human.** Put the executor's calls and proposals side by side with what a person did — same accept, same decline, same routing, same recommendation? Note every divergence.
3. **Red-pen the instructions.** The instructions *are* the spec, not a black box. Where the executor diverged wrongly, the fix is usually a sharper instruction, not a vaguer executor. Edit and rerun.
4. **Then widen** — only once the executor matches the human on reversible calls and proposes sensibly on the rest.

**The test produces the asset that makes the widening safe to grant:** a logged history of agreement with a human on real cases. Whoever owns the approval approves evidence, not a promise.

⚠ **A rating is an assessment of readiness, never an authorisation.** In a regulated environment, automating a subfunction requires approved tooling and may require sign-off from risk, compliance, data protection or model governance. Scripts, macros and workflow automations may themselves require approval before deployment. Verify the local policy before any pilot begins, and never move regulated or customer data into a tool not approved for it.

---

## Part 4 — Graduated autonomy

### 4.1 — The three postures

Autonomy is governed by **reversibility and accountability**, not by the rule that a human decides everything. The dividing line is whether a decision can be undone, and whether a named human is accountable for it.

| Posture | Applies to |
|---|---|
| **Act, then log** | Reversible calls — intake triage, routine routing, routine accept/decline, prioritisation, drafting, summarising, rollups, pack assembly. The executor decides, acts and records. A human reviews the log and can reverse any call. This is where most of the work lives once trust is earned. |
| **Escalate first** | Consequential or irreversible actions — external sends under the organisation's name, spend, decisions affecting a named person, stopping or continuing a material bet, and anything the executor itself rates low-confidence or sensitive. The executor proposes; a human decides before anything happens. |
| **Never delegate** | Regulated work and compliance sign-off, where an accountable human is legally or ethically required. |

**The model to hold in your head:** an accountable human sitting above executors that act and record. The human is accountable not because they make every call, but because they own the log, can reverse any call in it, and decide which categories of call are trusted to be made alone. **Accountability is the reason for the log and the undo — not a reason to sit in every decision.**

### 4.2 — The widening rule

**The escalate-first set shrinks. It is not fixed.** When the decision log shows repeatedly that calls in a category were sound — approved every time, with no correction — move that category from escalate-first to act-then-log.

Permission migrates **one decision class at a time, on the evidence of the log.** That migration is what "autonomously run" actually means. It is earned, not switched on.

The read that earns it asks one question of the log: **which escalated calls did the human approve every time, with no correction?** Those categories have earned the move. Record the evidence for each move alongside the move.

❌ "The agent has been performing well, so we've given it more latitude across the board."
✅ "Routing calls: 47 escalated in the period, 47 approved unchanged. Moved routing from escalate-first to act-then-log, effective [date], evidence: decision log rows [range]. Spend and external sends unchanged — both remain escalate-first with no evidence yet accrued."

### 4.3 — The regulated floor

**The never-delegate set does not move.** It is fixed regardless of how good the system becomes. It is not a failure of ambition that it stays human — it is the boundary that lets everything above it run freely, and it is what makes the automation defensible to a regulator, to a customer and to the organisation itself.

**Write it down explicitly.** A design that leaves the floor implicit has not decided where it is, and will discover its location during an incident.

### 4.4 — Capability is not permission

An executor being *able* to do something is not the same as it being *allowed* to. These are two different questions, and the second is rarely yours to answer alone.

- Grant permission deliberately, through the act-then-log migration, on decision-log evidence.
- Never grant authority because a new capability arrived. **The escalate list shrinks because decisions proved sound, not because the tooling improved.**
- Where a connection would give an executor reach over live data it has not earned, point it at a curated non-sensitive set until whoever owns tooling and data approval confirms otherwise.

### 4.5 — Data bounds are part of the spec

Scope each executor to the data its subfunction needs and no more. Bound explicitly what can be read, written and sent, and **write those bounds into the specification** — not into a separate policy document that the spec does not reference.

Where an assistant is used to extract from a batch of inbound requests, paste only what the extraction needs: the queue row needs the request type and the requesting role, never the payload. If an item carries sensitive customer, personnel or regulated content, capture the minimum and flag it.

---

## Part 5 — Worked example

⚠ **Illustrative and generic.** The subfunction below is a plausible construction for a product organisation in a large regulated enterprise. It is not drawn from a real engagement, and the scores are not benchmark data. Score your own subfunctions; context changes the numbers.

**Subfunction:** competitive landscape monitoring · **parent function:** decide what's worth building

**Job to be done.** Keep portfolio decision-makers continuously aware of competitor moves that change the value of items on the roadmap, so prioritisation never rests on a stale view of the market.

**Input.** Competitor release notes, pricing pages, regulatory filings and analyst coverage for a named watch-list of 10–15 competitors. Sources: public collection; analyst subscriptions; field signals via account teams' call notes. Continuous collection, reviewed weekly.

**Transformation.** (1) Classify each new signal by type — feature, pricing, partnership, regulatory, exit — against a fixed taxonomy with written definitions; one signal, one primary type. (2) Score each signal for roadmap relevance on a three-point scale: changes an item's value / changes its urgency / background only — with a written rationale of 50 words or fewer for any non-background score. (3) Synthesise into a movement summary: one page maximum, leading with the single most consequential move, every claim cited to a source.

**Output.** Weekly competitive movement summary, fixed structure, to the roadmap prioritisation subfunction and the portfolio forum. Plus an off-cycle alert within 24 hours of any signal scored "changes an item's value".

**Quality bar.** *Acceptance criteria:* (1) every signal carries a source link that resolves; (2) every non-background score has a written rationale of 50 words or fewer; (3) the summary fits one page; (4) the headline is stated as a consequence for the roadmap, not as news; (5) no signal older than 14 days appears without an explicit reason. *Failure modes to reject:* news digest without scoring; scores without rationale; relevance inflation — everything marked urgent so nothing is.

**Scoring.** Input specifiability 3 · output verifiability 3 · method ambiguity 2 · consequence of error 3 · regulatory constraint 3 · relationship-dependence 3 = **17**.

**Rating.** No criterion scores 1, so no cap applies and the raw mapping gives agent-ready. But rationale prompt 2 exposes that step 2's relevance scoring depends on roadmap context that changes weekly and is only partly written down — that is the method-ambiguity 2 doing real work. **Rating recorded: agent-assist**, with the split named: steps 1 and 3 are delegable now; step 2 stays human until the roadmap-context problem is solved.

**Autonomy posture.** Classification and drafting are reversible and reviewable — act, then log. The relevance score is a judgement that changes what the portfolio forum looks at, so it stays with a person for now; it is not regulated, so it is escalate-first rather than never-delegate, and it is a candidate for the widening rule once the log has enough matched calls.

**Current rung.** Rung 1 — manual with a checklist. Next: rung 2, a tracker holding the watch-list, the taxonomy and the change log. Rung 3 once an approved assistant can draft the summary for a person to confirm.

**Promotion target, stated so it is failable.** A defined run of consecutive weekly summaries in which the agent-drafted classification matches the human classification above the agreed threshold, every mismatch logged with a cause. Scoring stays human until the context problem is solved. Next review: end of the trial quarter.

**Reading the example — three things to take from it.** First, a subfunction that scores well overall can still have one blocking step, and naming the step is more useful than arguing about the rating. Second, this subfunction is worth automating *today* at rung 2, without waiting for any assistant to be approved: readiness and rung are different questions. Third, the promotion target is written as something that can fail — a target that cannot fail is not evidence, it is an intention.

---

## Part 6 — Failure modes and their controls

| Failure mode | How it shows up | Control |
|---|---|---|
| **Automating judgement instead of legwork** | Machines do the least checkable work; humans keep doing the extraction, routing and assembly | Migrate verifiable legwork first. Judgement is where humans add most and machines are least checkable. |
| **Rating without specifying** | A heatmap produced from role descriptions rather than specs; ratings that cannot be defended to a control function | Rate only subfunctions specified to the nine-field set. Unspecified work cannot be assessed, delegated or audited. |
| **Override skipped** | A regulated sign-off rated agent-ready because the total was high | Apply both overrides before recording (§1.2); check every rating with a criterion score of 1 |
| **Whole-subfunction write-off** | An override applied at subfunction level, discarding a delegable preparation step with it | Apply the splitting rule (§1.5) to every human-essential rating |
| **Aspirational rung** | The baseline records the tooling that exists rather than the tooling approved for that data | Record the approved rung; the approval status is part of the record (§2) |
| **Promotion on a demonstration** | Reach widened because a demo looked good rather than because a test passed | Run the test protocol (§3.4); approve evidence, not a promise |
| **Capability read as permission** | Authority granted because new tooling arrived | §4.4. Every widening cites decision-log evidence in that specific category |
| **Symmetric demotion** | A degraded executor kept running through the evidence period that proves it degraded | Demotion is immediate (§3.3) |
| **Promising automation ahead of approval** | Commitment to a rung the organisation has not cleared | Take each rung only as tooling and governance allow. "In the run of the work as it is approved" is the honest version and the more credible one. |
| **Rung-2 sprawl** | Trackers proliferate; column names diverge; nobody owns half of them | The four rules in §2.1 — one spec per artefact, names from the map, one owner, weekly snapshots |

---

## Part 7 — Lint rules

Run these alongside the architecture standard's O-rules before signing off any executor assignment.

- **E1 — Specified before rated.** Every rated subfunction is specified to the nine-field set. A rating derived from a role description fails.
- **E2 — Every subfunction rated, human-essential included.** Ratings are recorded for all subfunctions with the six criterion scores and the four rationale-prompt answers behind them.
- **E3 — Both overrides applied.** A single 1 on any criterion caps the rating at agent-assist; a 1 on regulatory constraint or relationship-dependence forces human-essential regardless of total. A rating recorded without both checks fails.
- **E4 — Blocked subfunctions checked for a separable preparation step.** Every human-essential rating states whether the preparation was separable and, if it was, names the split.
- **E5 — Prompts override the score, and the disagreement is recorded.** Where the rationale prompts and the total disagree, the recorded rating follows the prompts and names the blocking step.
- **E6 — Rungs recorded as approved, not installed.** Every current rung is the approved rung for the data classification involved.
- **E7 — Executor-independent specs.** No spec names a tool, a rung or a person in a way that would require rewriting when the executor changes. If migrating a subfunction would require editing its spec, it fails.
- **E8 — Readiness is not authorisation.** No promotion without all four conditions: stable spec, low logged error rate, tooling approved for that data classification, and a working rollback path. A green rating alone fails.
- **E9 — Promotion is stepwise and evidenced.** No subfunction skips a rating step, and every promotion cites the evidence its gate requires.
- **E10 — Demotion is immediate.** A demotion trigger — falling acceptance or a severity-1 error — drops the rating at once, before any review.
- **E11 — Capability is not permission.** No autonomy widening is justified by a new capability arriving. Every widening cites decision-log evidence of calls that proved sound in that specific category.
- **E12 — Widening is one class at a time.** No blanket latitude. Each moved decision class is named, dated and evidenced separately.
- **E13 — The regulated floor is written and fixed.** The never-delegate set is explicit and carries no migration path.
- **E14 — Data bounds live in the spec.** What each executor may read, write and send is stated in the specification itself, not only in a separate policy.
- **E15 — No payload in the queue.** Where an executor processes inbound work, the record captures the request type and the requesting role — never sensitive customer, personnel or regulated content.
- **E16 — Promotion targets are failable.** Every stated promotion target could, in principle, not be met. A target that cannot fail is an intention, not evidence.

---

## Prior art and positioning

This standard rests on one observation that is general across enterprise automation practice: **codified inputs, methods and acceptance criteria are the precondition for delegating work to any executor** — a new joiner, a script or an agent. The pack's contribution is to treat the function charter and the executor's instruction set as one artefact at two maturities, and to make autonomy widen on logged evidence rather than on capability announcements.

The three-posture autonomy model (act-then-log / escalate-first / never-delegate) is a reversibility-and-accountability framing of controls that regulated organisations already operate under other names — delegated authority, four-eyes approval, and the named-person requirements written into supervisory frameworks. Nothing here relaxes those requirements; the regulated floor exists precisely to hold them fixed while the rest of the boundary moves.

**Evidence grade.** Everything in this standard is stated as a **design rule**, not as an evidenced finding. The rubric anchors, the thresholds and the trust periods are conventions chosen so that a rating is reproducible between two assessors — not measurements. Where a rule could be tested in a given organisation, the test protocol in §3.4 and the pilot in the architecture standard are the tests.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
