# Organisation architecture — operating-model design standard

**Version 1.0 · August 2026 · Tough Minds, Tender Hearts**

*v1.0 — first release.*

*Core standard of the organisation architecture pack. Companion execution layers: [`current-state-diagnosis-process.md`](current-state-diagnosis-process.md) (diagnose what exists) and [`operating-model-design-process.md`](operating-model-design-process.md) (design and stand up the target).*

An operating manual an AI assistant can execute. It defines what an operating model is made of, gives the sequence for architecting one outside-in, gives the decision rule at every step, and gives lint rules that catch a bad design before anyone is asked to live inside it. Decision procedures, contrastive examples, and lint rules throughout.

---

## Part 0 — What this standard is (read first, play back before executing)

**The problem this solves.** Organisation designs fail in two recognisable ways, and both are failures of order rather than of intelligence. The first is *boxes first*: teams, reporting lines and headcount are drawn, and only then is anyone asked what each box is for. The second is *structure without authority*: the chart moves, the decision rights and the funding route do not, and every initiative still needs a business case to a forum that predates the change. Both produce a design that reads well and cannot run.

There is a third failure specific to the present moment. Organisations attempt to automate work they have never specified. A capable assistant arrives, pilots are run, and a year later the work is done much as it always was with a layer of software bolted to the outside. You cannot automate work you have not specified, because an executor — human or agent — needs three things this standard forces you to write: what comes in, what good looks like, and who decides.

**The claim.** An operating model is a set of specifications, not a set of boxes. Write each unit of work as a precise statement of what must be true for it to be done well *by anyone*, and three things follow at once: the work becomes portable between executors, it becomes measurable without a separate measurement project, and it becomes automatable without a redesign. Structure is then a consequence of the specification set, not an input to it.

**The corollary that does most of the work.** A function charter and an agent role definition are the same artefact at different maturities. Write the charter to this standard and you have already written the agent's instructions. This is why specification is not bureaucracy: the spec is the unit of automation.

**Two units of design, at two altitudes — name the difference or the design will confuse them.**

- The **unit of scope** is the whole organisation — the complete set of teams plus its leadership and its shared capabilities. Never design one team at a time. A design produced team-by-team yields boundary disputes and duplicated capabilities, because two teams draw their own edges and the edges do not meet.
- The **unit of specification** is the **subfunction** — the smallest nameable piece of recurring work with its own input, output, cadence and quality bar. Never specify at the level of the function; a function is a container, and containers are not executable.

These are not competing claims. They answer different questions: *what must be held in view while designing* (the whole) and *what must be written down* (the subfunction). A design that gets either wrong fails — the first produces turf wars, the second produces org charts nobody can execute from.

**What this standard does not cover.** Venture architecture — designing a *new business* rather than an operating model for an existing mandate — is a different method with different axioms and is not in this pack. This standard assumes the organisation already has, or can be given, a mandate.

**Execution gate.** Before running any procedure below, play back to your user in four sentences: (1) what the unit of specification is and why it is not the team; (2) the mandate-first, structure-last order; (3) which of the two companion processes their question actually needs — diagnosis, design, or both in sequence; (4) whether a mandate exists or must be agreed first. Do not proceed until they confirm.

---

## Part 1 — Definitions

Fixed vocabulary. Use these words with these meanings throughout the pack; do not substitute local synonyms without recording the mapping.

| Term | Definition |
|---|---|
| **Mandate** | A statement of what the organisation owns, where its boundaries lie, and who holds which decision rights. One page. Everything downstream traces to it. |
| **Function** | A job the organisation must do to deliver its mandate, named as an outcome the organisation buys, and owned once. A container, not a unit of execution. |
| **Subfunction** | A component of a function, specified individually against the field set in §3.2. The unit of specification, of readiness rating, of measurement and of automation. |
| **Specification (spec)** | A statement of what must be true for a piece of work to be done well by anyone. States input, transformation, output, decision rights, cadence and quality bar. Complete enough that a stranger produces an acceptable result. |
| **Description** | What a spec is not. States what a team does and assumes shared context. Adequate for a reader who already knows the job; useless to an executor who does not. |
| **Routine** | The "how" beneath a subfunction: an explicit, checkable record of one repeatable piece of work — steps, inputs, checks, definition of done. One subfunction usually holds several. |
| **Quality bar** | The verifiable criteria for the work being done well. Checkable from the output alone, without consulting the producer. The leaf-level measure. |
| **Operating layer** | The machine that runs the functions day to day: intake queue, decision log, bet portfolio, reporting rollup, operating cadence. |
| **Bet** | A discretionary piece of work held in a portfolio, each with an owner, a thesis, a milestone and a date to decide whether to continue or stop. |
| **Tooling rung** | A level on the ladder in §4.2 defining the executor of a spec: manual-plus-checklist, spreadsheet automation, copilot-assist, or agent. |
| **Agent-readiness** | A rating on a subfunction stating how far execution can migrate to an agent: agent-ready, agent-assist, human-essential. |
| **Graduated autonomy** | The model under which decision categories migrate from escalate-first to act-then-log on the evidence of the decision log. |
| **The regulated floor** | Work never delegated to an agent because a human must be legally and personally accountable for it. Fixed; does not move as the system matures. |
| **Splitting principle** | The single stated basis on which the organisation divides into teams — sub-segment, journey, or product line. One principle, applied uniformly. |

---

## Part 2 — The design sequence

Seven steps. Execute in order. Each produces an input the next requires; skipping one does not save time, it moves the cost to a later and worse moment.

### 2.1 — The order, and why it is this order

| # | Step | Produces | Cannot start before |
|---|---|---|---|
| 1 | Agree the mandate | Purpose, boundaries, decision rights, open questions | — |
| 2 | Derive the function map | 5–7 functions, one owner each, MECE | Step 1 |
| 3 | Specify each subfunction | Spec per subfunction against the §3.2 field set | Step 2 |
| 4 | Capture routines | The "how" beneath the specs, checkable | Step 3 (per subfunction) |
| 5 | Assign executors | Readiness rating + current rung per subfunction | Step 3 |
| 6 | Stand up the operating layer | Intake, decision log, bet portfolio, rollup, cadence | Nothing — start on day one, in parallel |
| 7 | Pilot one function, then migrate | Corrected specs + a migration sequence | Steps 1–5 for the pilot function only |

**The one exception to the order.** Step 6 runs first in *calendar* time even though it is seventh in *logical* dependency. The operating layer relieves day-to-day load immediately and starts producing the decision and demand data that steps 1–5 are later validated against. Standing it up before the design is finished is deliberate, not a shortcut.

**Decision rule for step order.** If a step's input does not exist, do not proceed on an assumption. Record the missing input as an open question and either resolve it or stop. An honest gap is worth more than a confident guess, because a guess propagates silently into every downstream artefact.

### 2.2 — Step 1: agree the mandate

1. **State the purpose in one sentence.** What this organisation exists to do. Not what it does — what it is for.
2. **Draw the boundaries.** What sits inside, what sits outside, where it hands off to neighbours. For every boundary, name the neighbour.
3. **Settle decision rights** for each significant class of decision: who proposes, who decides, who is consulted, who is informed.
4. **Capture the success line verbatim.** One sentence in the sponsor's own words: *"This organisation is succeeding if: ___"*. Do not paraphrase. Everything the organisation does later is judged against this line, and a paraphrase silently substitutes your judgement for theirs.
5. **Confirm three structural facts.** These decide what kind of organisation this is:
   - Does the sponsor **control** headcount and budget, or **advise** on them?
   - What **unit of value** does the organisation own — a P&L, a customer journey, or a set of propositions?
   - What is the **trigger** — build something new, fix what exists, or reorganise?
6. **Mark every contested or unclear point as an open question.** Do not resolve it by guessing.

❌ "The team owns the customer experience for this segment and will drive improved outcomes."
✅ "This organisation owns the [named journey] end to end for [named segment], including pricing recommendations and excluding the servicing operation, which is owned by [named neighbour]. It decides backlog order and solution approach; it recommends funding above envelope; the sponsor decides. Success line, sponsor's words: '[verbatim].'"

**Why the three structural facts are load-bearing.** *Control versus advise* determines whether the design can staff to the work or must negotiate for every person. *Unit of value* determines what the top-tier measure can even be (§5). *Trigger* determines the transition risk profile: a reorganisation carries people risk that a new build does not.

### 2.3 — Step 2: derive the function map

1. **Derive the set of jobs required to deliver the mandate.** Target five to seven. Fewer than five usually means a function is hiding inside another; more than seven usually means subfunctions have been promoted.
2. **Name each function as an outcome the organisation buys**, not as an activity or a team name.
3. **Assign each function exactly one owner.** Not a committee, not "shared".
4. **Test the set for MECE.** Mutually exclusive so nothing overlaps; collectively exhaustive so nothing falls through.
5. **Mark each function owned or borrowed.** Borrowed work — performed by an adjacent organisation — needs a named handshake, not a silent gap.

**Decision rules.**

- If two functions could claim the same work, the **boundary is wrong**. Redraw it. Do not resolve it by agreeing that both will "collaborate".
- If a real piece of work has no home, that is a **finding, not a tidy-up**. It usually means the mandate missed something — return to step 1.
- If a function is not in the mandate, **strike it**. Every function kept must trace to something the organisation is actually accountable for.

❌ Functions named "Product", "Delivery", "Ops" — these are teams, and they invite the boxes-first failure back in through the naming.
✅ Functions named "Decide what's worth building", "Discover and validate", "Build and ship", "Make it land", "Run and improve what exists", "Govern and enable" — each states an outcome, and the set can be tested for gaps.

**A reference decomposition, not a target.** The six functions above are a widely serviceable set for a product organisation in a large regulated enterprise, offered as a strawman to react against. Rename freely; the labels carry no authority, the decomposition does. Any local renaming must leave the set MECE. In a regulated enterprise, "Govern and enable" is first-class rather than overhead: clear gates beat ambient fear, and designing governance in from the start is what makes later automation permissible.

### 2.4 — Step 3: specify each subfunction

Break each function into its subfunctions and specify each one against the field set in §3.2. Rules:

1. **Name artefacts and their sources, not activities.** "Analyse the market" is not an input; "competitor release notes and pricing pages for a named watch-list, collected weekly" is.
2. **Name the method, not the verb.** For each transformation step, state the rule, taxonomy or threshold applied — not "assess", but *how* it is assessed.
3. **Make the quality bar checkable.** Counts, presence checks, resolving source links, time limits. Never an untestable adjective.
4. **Give it exactly one owner.** Owners can delegate execution; they cannot delegate accountability.
5. **Apply the completeness test** (§3.3) before signing anything off.

### 2.5 — Step 4: capture routines

A subfunction says what the work is for. A routine says how one recurring instance of it actually gets done. Capture turns tacit know-how into an explicit, checkable record — and a captured routine is automatable by definition, because it has been made explicit.

Capture each routine against these fields: **name · serves which subfunction · trigger or input · steps (numbered, in order) · output and its consumer · quality bar · decision points (each marked reversible or not) · cadence · owner and source · current tooling rung and the next one up.**

**Decision rule.** If a field cannot be filled with a concrete answer, that gap **is the finding** — not a detail to wave through. A good routine tightens under this discipline; a weak one exposes itself, which is what the capture is for.

**Placement rule.** A captured routine lives in exactly one place — the folder of the function it serves — and the subfunction's spec references it from its quality-bar field. Never a second copy. If a routine cannot name the subfunction it sits under, it does not yet have a place, and that is a finding for the function map.

### 2.6 — Step 5: assign executors

Rate every subfunction for agent-readiness using the rubric in §4.1, then record the tooling rung it runs on today and the next rung up. The ratings across the whole map form a heatmap, and **the heatmap is the migration sequence** — it states what moves first, what moves later and what never moves. There is no separate transition plan for automation.

### 2.7 — Step 6: stand up the operating layer

Five components, all buildable in standard office tooling on day one:

| Component | Columns / contents | Standing rule |
|---|---|---|
| **Intake queue** | Received · source · request · type · linked subfunction · priority · status (new / triaged / absorbed / declined / decision-needed) · owner | Capture on arrival; triage at a fixed slot, never on arrival. **If it is not in the queue, it does not exist.** |
| **Decision log** | Date · question · options considered · decision · reason · decided by · review date | Every decision of consequence gets one row, same day. This is the audit trail, and later it is the evidence that earns execution more autonomy. |
| **Bet portfolio** | Bet · thesis · objective served · owner · stage · milestone · kill condition · decide-by date · status | Every bet traces to an objective or is declared as the organisation's own initiative. |
| **Reporting rollup** | Function · outcome metric · RAG · note — computed from the three above | Reporting is a side effect of operating, not a separate act of writing. |
| **Operating cadence** | Fixed triage slot · fixed brief · fixed snapshot | The cadence is what makes the system a habit rather than an event. Snapshot dated and filed weekly from week one. |

**Why the snapshot discipline matters more than it looks.** A dated weekly copy of the operating layer accrues a trend series from week zero. That history is the before-picture every later results read is measured against, and it is the context any future agent inheriting the subfunction will need. An agent inheriting a year of clean weekly snapshots starts with context; one inheriting a bare current-state tracker starts blind.

### 2.8 — Step 7: pilot one function, then migrate

1. **Select one function** against three criteria, in this order: *clearest pain* (where the current mess is most felt), *friendliest politics* (owners who will cooperate, no turf contest), *measurable within a week* (visible outputs at a weekly-or-faster cadence).
2. **Run it to its specification, live**, on the highest tooling rung currently approved. Let real data accrue against the quality bars.
3. **Read the results** against three questions, in writing: *did the function run to spec? · where was the spec wrong about reality? · what migrates next?*
4. **Correct the specification** on the strength of what the pilot proved. The corrections are the deliverable; the document is only their record.
5. **Sequence the remaining migration** by gap and readiness rating, not by enthusiasm.

**Standing rule for the results read.** A pilot that fails the read is not a failed transition — it is the system working. The read exists to catch design errors at one-function scale before they replicate at organisation scale. Record what was learned, amend the model, re-gate.

**Do not redesign the organisation to migrate it.** The same specifications acquire new executors over time. If a migration requires a redesign, the spec was executor-dependent and should be rewritten (see O7).

---

## Part 3 — The specification

### 3.1 — Specification versus description

A description is written for the people already doing the job. It assumes context: the shared history, the unspoken standards, the "you know what I mean". A specification assumes nothing. That completeness is precisely what a new joiner needs, what a reviewer needs to check an output without consulting the producer, and what an agent needs — because an agent has no shared history to draw on and has only what is written.

❌ "Owns competitor intelligence and keeps the leadership team informed of market movements."
✅ "Input: competitor release notes, pricing pages, regulatory filings and analyst coverage for a named watch-list of 10–15 competitors, collected continuously, reviewed weekly. Transformation: (1) classify each signal against a fixed five-type taxonomy, one signal one primary type; (2) score each for roadmap relevance on a three-point scale — changes an item's value, changes its urgency, background only — with a written rationale for any non-background score; (3) synthesise into a one-page movement summary, leading with the most consequential move, every claim cited. Output: weekly one-page summary to roadmap prioritisation and the portfolio forum, plus an off-cycle alert within 24 hours of any 'changes value' signal."

### 3.2 — The spec field set

Every subfunction carries all nine fields. A missing field is an unanswered question about the organisation, not a formatting omission.

| Field | What it states |
|---|---|
| **Job to be done** | One line: when X happens, this subfunction exists so that Y is true. The outcome the organisation buys, not the activities performed. |
| **Input** | Each artefact or data feed, named, with its source and its frequency. |
| **Transformation** | The steps performed, in order, each with the named method, rule or taxonomy applied. |
| **Output** | Each artefact produced, named, with its consumer and its cadence — including the trigger for any off-cycle issue. |
| **Decision rights** | Three classes kept separate: what it **decides alone**, what it **recommends** (naming the decision's owner), what it **escalates** (naming the receiving role and the observable trigger condition). |
| **Cadence** | The rhythm at which the work runs. |
| **Quality bar** | What good looks like, plus numbered acceptance criteria each answerable yes/no from the output alone, plus the failure modes a reviewer should reject. |
| **Interfaces** | Upstream and downstream neighbours, each with the shared artefact and the cadence of exchange. |
| **Agent-readiness + owner** | The §4.1 rating with its rationale, and the single named human accountable. |

**Decision-rights rule.** A subfunction with no "decides alone" entries is not a subfunction — it is a task list waiting for instructions. If that row is empty, the design is incomplete.

**Interface rule.** An interface without a named artefact is a relationship, not an interface. Tighten it until an artefact appears. "We work closely with risk" is a relationship; "risk returns a gate decision with conditions within five working days of a submitted change pack" is an interface.

**Escalation-trigger rule.** State the *observable fact* that makes escalation mandatory, not the feeling that makes it advisable.

❌ "Escalate significant issues to the function lead."
✅ "Escalation is mandatory when two consecutive weekly summaries score the same competitor move at the highest relevance level without a prioritisation response."

### 3.3 — The completeness test

**A spec is finished when a person who has never met the team can read it and produce an acceptable output.** If it still needs a conversation to be usable, it is a job description wearing a specification's clothes.

Run the test literally where you can: hand the spec to someone outside the function and ask them to produce one instance of the output. What they get wrong is what the spec left out.

---

## Part 4 — Executor assignment

### 4.1 — The agent-readiness rubric

Score each subfunction 1–3 on six criteria, where 3 is always the condition most favourable to automation. Total ranges 6–18.

| Criterion | 1 — unfavourable | 2 — partial | 3 — favourable |
|---|---|---|---|
| **Input specifiability** | Inputs tacit, scattered, held in heads | Identifiable but inconsistently formatted or sourced | Fully specified, structured, machine-accessible |
| **Output verifiability** | Quality is a matter of taste; reviewers disagree | Checkable by an experienced reviewer against loose criteria | Written quality bar; pass/fail determinable from the output alone |
| **Ambiguity of method** | Approach reinvented each time | Common pattern with frequent judgement deviations | Method stable and repeatable; deviations rare and nameable |
| **Consequence of error** | Undetected error causes customer, financial or regulatory harm | Costly but caught downstream before harm | Cheap, visible and reversible at the review step |
| **Regulatory constraint** | Regulation or policy requires a named person to perform or approve | Permitted with conditions — approved tooling, audit trail, human review | No constraint on how the work is performed |
| **Relationship-dependence** | Succeeds through trust, influence or negotiation with specific people | Involves people through structured, low-stakes interaction | No interpersonal dependency |

**Mapping rule.**

| Total | Rating | Override |
|---|---|---|
| 15–18 | Agent-ready | Only if no individual criterion scores 1. A single 1 caps the rating at agent-assist. |
| 11–14 | Agent-assist | — |
| 6–10 | Human-essential | — |

**Hard override.** A score of 1 on *regulatory constraint* or *relationship-dependence* makes the subfunction human-essential regardless of total. High scores elsewhere cannot buy back a named-person requirement or a trust-based relationship.

**The rating describes the work, not the technology, and not the people currently doing it.** It follows from how codified the inputs, methods and quality bar are.

| Rating | Operating model | Migration posture |
|---|---|---|
| **Agent-ready** | Agent does the work; a human reviews the output before it is used or released | Automate first. These set the pace of the transition. |
| **Agent-assist** | Human decides; agent does the legwork — research, drafts, options, first-pass analysis | Automate the inputs now; revisit the decision step as evidence accrues. |
| **Human-essential** | Stays with a person. **The spec is still written.** | Do not automate. Re-assess on cadence. |

**Human-essential is not a residual category.** Writing the spec for a human-essential subfunction is what makes the rating defensible and what makes later promotion possible. Unspecified work cannot be assessed, delegated or audited.

**Splitting rule for blocked subfunctions.** Where a regulatory override forces human-essential, check whether the *preparation feeding the decision* is separable. The constraint usually applies to the sign-off, not to the pack assembled for it. Split them into two subfunctions and rate each on its own merits.

### 4.2 — The tooling ladder

| Rung | Executor | What runs on it | Promotion trigger |
|---|---|---|---|
| **1** | Manual plus checklist | A person executes the spec by hand against a checklist that mirrors it. This rung exists to prove the spec is real. | The checklist has run unchanged for several cycles; the steps are mechanical rather than judgement-based; inputs arrive in a consistent format. |
| **2** | Spreadsheet and standard-office automation | Formulas, pivots, conditional formatting, query tools, scripts, mail merge, simple approval flows. Usually already approved in a large enterprise. | The rung-2 artefact is stable; an assistant is approved for the relevant data classification; the remaining manual effort is drafting or summarising, not calculating. |
| **3** | Copilot-class assist | An approved assistant drafts, extracts, summarises and proposes against the spec; a human triggers and reviews every output. | Assist outputs need little correction over a sustained period; the quality bar is written and measurable; an approved route to autonomous tooling exists. |
| **4** | Agents | An agent executes whole steps of the specified work on a schedule or trigger and records what it did; an accountable human reviews the log and handles exceptions. | None. Top rung. Remaining work is supervision, exception handling and periodic re-verification against the spec. |

**The governing rule of the ladder: the spec is fixed; the executor changes.** The work is defined once. The rung is only who performs it today.

**Automation does not wait for AI procurement.** A clearly specified subfunction is already faster, more consistent and more portable at rung 1. "Agent-ready" means *ready for the highest rung available today* — a subfunction with specified inputs, a verifiable quality bar and low ambiguity should be automated **now**, at rung 2 if that is what is approved, and promoted later. The readiness heatmap is therefore actionable from day one, not contingent on tooling arriving.

### 4.3 — Promotion and demotion

Promotion is an evidence decision. It runs one step at a time; no subfunction skips a step. All four conditions must hold:

1. **Stable spec.** The specification has not materially changed for an agreed period — typically a quarter. A subfunction still being redesigned should not be automated; it should be finished.
2. **Low error rate.** The current rung produces correct output with few corrections, and the errors that do occur are logged and understood. Automating an error-prone process automates the errors.
3. **Tooling approved.** The target rung's tooling has cleared the local approval route *for the data classification involved*.
4. **Rollback path.** The rung below still works. The checklist is current, a person could resume manual operation within a cycle if the new executor fails.

For the rating promotions specifically:

- **Human-essential → agent-assist:** a written spec exists and has survived at least one re-assessment cycle without major revision; the delegable portion has been separated from the judgement or relationship portion and re-scores at 11 or above; the regulatory constraint has been formally checked and confirmed to apply to the decision rather than to the preparation; a named human accepts accountability for the assisted workflow.
- **Agent-assist → agent-ready:** the agent has produced the work over a defined period with human acceptance above an agreed threshold and no severity-1 errors; measured error rate at or below the human baseline for the same work; output verifiability has reached 3; tooling approved with audit trail and access controls signed off; a rollback path exists.

**Demotion uses the same evidence in reverse and is immediate.** If acceptance rates fall or a severity-1 error occurs, the subfunction drops one rating at once and re-earns promotion through the same gates. The asymmetry is deliberate: promotion is slow, demotion is fast.

⚠ **A rating is an assessment of readiness, not an authorisation.** In a regulated environment, automating a subfunction requires approved tooling and may require sign-off from risk, compliance, data protection or model governance. Macros, scripts and workflow automations may themselves require approval. Verify before any pilot begins.

---

## Part 5 — Decision rights and graduated autonomy

### 5.1 — Decision rights are the spine

Decision rights are the load-bearing section of any operating model. Structure that moves while decision rights stay put is the most reliably documented failure in organisation redesign, and seniority without authority produces escalation and attrition rather than advocacy.

Three authorities determine whether a team-level lead actually holds a mandate. Withhold any one and the design is nominal:

1. **Backlog and trade-off authority within their outcome set** — no external sign-off on sequencing.
2. **Solution authority** — what to build to move the outcome, within risk and compliance gates.
3. **A real seat at the capacity table** — engineering and funding allocation contested in the one forum where their advocacy can bind.

What stays above the team: organisation-wide strategy, the funding envelope, the splitting principle, and cross-team conflicts. What stays outside the product line in a regulated enterprise: prudential and conduct risk gates — threaded through as a named partner per team rather than as a ticket queue.

**Cross-team trade-offs have exactly one home.** A single forum where leads contest priorities openly. Bilateral deals between teams re-create the silos the split was meant to remove, and should be explicitly out of bounds.

### 5.2 — The three autonomy postures

Autonomy is governed by **reversibility and accountability**, not by the rule that a human decides everything. The dividing line is whether a decision can be undone, and whether a named human is accountable for it.

| Posture | Applies to |
|---|---|
| **Act, then log** | Reversible calls — intake triage, routine routing, prioritisation, drafting, summarising, rollups, pack assembly. The executor decides, acts and records. A human reviews the log and can reverse any call. |
| **Escalate first** | Consequential or irreversible actions — external sends under the organisation's name, spend, decisions affecting a named person, stopping or continuing a material bet, anything the executor itself rates low-confidence or sensitive. Propose; a human decides before anything happens. |
| **Never delegate** | Regulated work and compliance sign-off, where an accountable human is legally or ethically required. |

### 5.3 — The widening rule

**The escalate-first set shrinks. It is not fixed.** When the decision log shows repeatedly that calls in a category were sound — approved every time, with no correction — move that category from escalate-first to act-then-log. Permission migrates **one decision class at a time, on the evidence of the log**. That migration is what "autonomously run" actually means. It is earned, not switched on.

**The never-delegate set does not move.** It is fixed regardless of how good the system becomes, and it is not a failure of ambition that it stays human. It is the boundary that lets everything above it run freely.

### 5.4 — Capability is not permission

An executor being *able* to do something is not the same as it being *allowed* to. These are two different questions and the second is rarely yours to answer alone. Grant permission deliberately, through the act-then-log migration, on decision-log evidence — never automatically because a new capability arrived. The escalate list shrinks because decisions proved sound, not because the tooling improved.

**Data bounds are part of the spec, not an afterthought.** Scope each executor to the data its subfunction needs and no more. Bound explicitly what can be read, written and sent, and write those bounds into the specification.

---

## Part 6 — Measurement

### 6.1 — Three tiers, derived top-down

Measures are **derived from the mandate, not invented and bolted on**. This is why the top two tiers cannot be defined before the mandate is agreed.

| Tier | The question it answers | Where it comes from | When it becomes measurable |
|---|---|---|---|
| **Outcome** | Is the organisation delivering the value it owns? | The success line, made measurable against the unit of value | Once the mandate is agreed and functions are live |
| **Function** | Is each function doing its job well? | One outcome metric per function, drawn from its quality bars | As each function runs |
| **Operating** | Is the machine running? | Leading indicators from the operating layer — decision latency, intake throughput, decline rate, cadence kept, rung progression | From day one |

**The scorecard is not a separate build.** The leaf-level measures already exist if the work was specified, because every spec carries a quality bar. The scorecard is those bars aggregating up through the functions to the success line. Measuring well is in the design.

**Sequencing rule.** The operating tier is all that is honestly measurable with nothing live — so it is week one's scorecard. The outcome and function tiers come online as the pilot runs. Do not fabricate an outcome reading before there is an outcome.

### 6.2 — Activity is not outcome

⚠ Counts of requests processed, items shipped or meetings held are **throughput**. They feel like success and are not. A scorecard built from activity counts glows green while the organisation delivers nothing of value. Measure the value delivered, the decisions made faster, the bets that survived the kill gate — not the motion that produced them.

❌ "42 requests processed this week; 6 workshops held; 11 documents produced."
✅ "Decision latency fell from 9 days to 3 across the queue; 2 bets killed against their stated conditions, releasing their capacity to [named bet]; sponsor time returned, measured as hours no longer spent triaging: [n]."

### 6.3 — Objectives arriving from outside

A target handed down from the wider enterprise ("grow this line by X per cent") is not executable — it has no mechanism. The discipline: **the enterprise hands the organisation objectives; the organisation only ever executes bets.**

1. The objective enters through **intake**, like all demand, so the total ask is visible in one place.
2. The strategy subfunction **translates** it: which levers could plausibly move the number, and which become bets — typically two to four per objective, each with an owner, a thesis and a kill-or-persevere date.
3. The translation gets **one decision-log row**: which levers were chosen, which were explicitly not pursued, and why.
4. Each bet carries an **objective-served** field, so every bet traces to an objective or is declared the organisation's own initiative.
5. Commercial or performance tracking feeds actuals back into the rollup.

**When the bets do not sum to the target, report the gap upward with evidence:** the committed bets credibly deliver this much, the gap is this much, closing it needs one of these. A bet portfolio turns a missed imposed target from a failure into a negotiation.

---

## Part 7 — Who owns the model

Evolving the operating model is a different job from working inside it, and it must not become a standing transformation function. A permanent change office makes change someone else's job, drains ownership from line leaders, breaks the rule that each outcome is owned exactly once, and — being unable to describe its own completion — becomes a budget line dressed as progress.

The split that works:

- **Continuous evolution → a named subfunction inside "govern and enable".** It owns the function map and the specs as living documents, runs the heatmap migration sequence rung by rung, and proposes model changes off each results read. Small, quarterly cadence. Naming its owner is the succession plan for any externally-led design programme.
- **Episodic transformation → a bet, not a function.** A reorganisation, a team stand-up, a design programme: a time-boxed entry on the bet portfolio with an owner, a milestone and a decide-by date. When the work is done it ends and folds back into the functions it improved. **The design programme itself belongs on the bet portfolio as row one, judged by the same kill-or-persevere discipline it installs.**

---

## Part 8 — Failure modes and their controls

| Failure mode | How it shows up | Control |
|---|---|---|
| **Skipping the mandate** | Wrong functions, wrong measures, work automated that nobody agreed the organisation owns; the gap surfaces only after the system is built | Agree the mandate before any other step. This underlies every other failure below. |
| **Structure without authority** | Teams formed; funding still flows through old lines; every initiative needs a case to a pre-split forum | Move budget and capacity allocation to the new forum in the same change that moves the boxes (§5.1) |
| **Mixed splitting logic** | Two teams both believe they own the same customer moment; the forum becomes a border tribunal | One splitting principle, stated in writing, applied uniformly across all teams |
| **Feature factory with senior titles** | Senior people hired; the roadmap stays a delivery list set elsewhere; advocacy becomes escalation | Write each team's mandate as 2–3 outcomes; grant the three authorities in §5.1 explicitly |
| **Ceremony without decision rights** | Vocabulary and rituals adopted; who decides what is unchanged | Test the design against §5.1, not against the ceremony calendar. Vocabulary is the cheapest part and the only part that always ships. |
| **Per-team specialist hoarding** | Each team hires its own designer, researcher, analyst; standards diverge; cost grows quietly | Pool scarce shared capabilities once, at organisation level, with named allocation |
| **The permanent transformation function** | A standing change office, perpetually busy, never finished | Hold episodic change as a bet with a decide-by date (Part 7) |
| **Automating judgement instead of legwork** | Machines do the least checkable work; humans keep doing the extraction and assembly | Migrate verifiable legwork first. Judgement is where humans add most and machines are least checkable. |
| **Vanity metrics** | A scorecard of throughput counts glows green while value is not delivered | Measure outcome and value (§6.2) |
| **Promising automation ahead of approval** | Commitment to a rung the organisation has not cleared | Take each rung only as tooling and governance allow. "In the run of the work as it is approved" is the honest version and the more credible one. |

---

## Part 9 — Worked example

⚠ **Illustrative and generic.** The subfunction below is a plausible construction for a product organisation in a large regulated enterprise. It is not drawn from a real engagement, and the scores are not benchmark data. Score your own subfunctions; context changes the numbers.

**Subfunction:** competitive landscape monitoring · **parent function:** decide what's worth building

**Job to be done.** Keep portfolio decision-makers continuously aware of competitor moves that change the value of items on the roadmap, so prioritisation never rests on a stale view of the market.

**Input.** Competitor release notes, pricing pages, regulatory filings and analyst coverage for a named watch-list of 10–15 competitors. Sources: public collection; analyst subscriptions; field signals via account teams' call notes. Continuous collection, reviewed weekly.

**Transformation.** (1) Classify each new signal by type — feature, pricing, partnership, regulatory, exit — against a fixed taxonomy with written definitions; one signal, one primary type. (2) Score each signal for roadmap relevance on a three-point scale: changes an item's value / changes its urgency / background only — with a written rationale of 50 words or fewer for any non-background score. (3) Synthesise into a movement summary: one page maximum, leading with the single most consequential move, every claim cited to a source.

**Output.** Weekly competitive movement summary, fixed structure, to the roadmap prioritisation subfunction and the portfolio forum. Plus an off-cycle alert within 24 hours of any signal scored "changes an item's value".

**Decision rights.** *Decides alone:* watch-list composition within the agreed market scope; the signal taxonomy; the summary format. *Recommends:* re-scoring of any roadmap item's value — decision owned by roadmap prioritisation. *Escalates:* any proposal to widen the market scope of the watch-list, to the parent function lead. *Escalation trigger:* mandatory when a signal implies a roadmap item has lost its differentiating value entirely, or when two consecutive weekly summaries score the same competitor move at the highest relevance level without a prioritisation response.

**Quality bar.** *What good looks like:* a decision-maker reads the summary in under three minutes and knows whether anything on the roadmap needs re-examination this week. *Acceptance criteria:* (1) every signal carries a source link that resolves; (2) every non-background score has a written rationale of 50 words or fewer; (3) the summary fits one page; (4) the headline is stated as a consequence for the roadmap, not as news; (5) no signal older than 14 days appears without an explicit reason. *Failure modes to reject:* news digest without scoring; scores without rationale; relevance inflation — everything marked urgent so nothing is.

**Interfaces.** *Upstream:* market scoping — agreed market scope definition, quarterly or on change. *Downstream:* roadmap prioritisation — weekly summary and off-cycle alerts. *Downstream:* proposition development — quarterly landscape deep-dive.

**Readiness scoring.** Input specifiability 3 · output verifiability 3 · method ambiguity 2 · consequence of error 3 · regulatory constraint 3 · relationship-dependence 3 = **17**. No criterion scores 1, so no cap applies; the raw mapping gives agent-ready. But the rationale prompts expose that step 2's relevance scoring depends on roadmap context that changes weekly and is only partly written down — that is a method-ambiguity 2 doing real work. **Rating recorded: agent-assist**, with the split noted: steps 1 and 3 are delegable now; step 2 stays human until the roadmap-context problem is solved.

**Current rung.** Rung 1 — manual with a checklist. Next rung: rung 2, a tracker holding the watch-list, the taxonomy and the change log. Rung 3 once an approved assistant can draft the summary for a person to confirm.

**Reading the example.** Note two things. First, the split: a subfunction that scores well overall can still have one blocking step, and naming the step is more useful than arguing about the rating. Second, the rung: this subfunction is worth automating *today* at rung 2, without waiting for any assistant to be approved. The readiness rating and the tooling rung are different questions.

---

## Part 10 — Lint rules

Run all of these before signing off any operating-model design. Each names a specific failure the design must not contain. A design that fails any rule is not ready; state which rule failed and what would fix it.

**Mandate and scope**

- **O1 — No mandate, no design.** Every artefact traces to a written mandate with a purpose sentence, stated boundaries and settled decision rights. If the mandate is absent or contested, the design cannot be signed off; record the open question instead.
- **O2 — Success line is verbatim.** The sponsor's success sentence is recorded in their own words, not paraphrased. A paraphrase substitutes the designer's judgement for the sponsor's and is not detectable later.
- **O3 — Three structural facts answered.** Control-or-advise on headcount and budget; the unit of value owned; the trigger. An unanswered structural fact means the design is being built on an unknown, and the unknown is named, not assumed.
- **O4 — Design at the level of the whole.** The design covers the complete set of teams plus leadership and shared capabilities. A design produced one team at a time fails this rule regardless of its quality.

**Function map**

- **O5 — MECE.** No two functions can claim the same work, and no real piece of work lacks a home. An overlap is a boundary error to be redrawn, not a collaboration to be encouraged. An orphan is a finding against the mandate.
- **O6 — Functions are outcomes, one owner each.** Every function is named as an outcome the organisation buys and has exactly one named owner. "Shared ownership" fails this rule.
- **O7 — Owned or borrowed, marked.** Every function is marked as owned by this organisation or borrowed from a neighbour, and every borrowed function names its handshake. A silent gap at a boundary fails.

**Specification**

- **O8 — Spec, not description.** Every subfunction carries all nine fields of §3.2. A missing field is an unanswered question about the organisation, and is recorded as one.
- **O9 — The stranger test.** For each subfunction, a person who has never met the team could produce an acceptable output from the spec alone. If it needs a conversation, it is a description.
- **O10 — Checkable quality bar.** Every acceptance criterion is answerable yes/no from the output alone. Untestable adjectives — "clear", "high-quality", "timely" — fail. "Timely" fails; "out by Monday noon" passes.
- **O11 — Decides-alone is non-empty.** Every subfunction states at least one decision it makes without asking. An empty decides-alone row means a task list, not a subfunction.
- **O12 — Escalation triggers are observable.** Every escalation names the observable condition that makes it mandatory, not the judgement that makes it advisable.
- **O13 — Interfaces name an artefact.** Every upstream and downstream interface names the artefact exchanged and its cadence. An interface without an artefact is a relationship.
- **O14 — Named methods.** Every transformation step names the rule, taxonomy, threshold or framework applied. "Analyse", "assess", "review" and "consider" without a named method fail.

**Executor and autonomy**

- **O15 — Every subfunction rated, including human-essential.** A rating is recorded for all subfunctions with the six-criterion scores behind it. Human-essential subfunctions are still specified and still rated; unspecified work cannot be assessed, delegated or audited.
- **O16 — Overrides applied.** A score of 1 on regulatory constraint or relationship-dependence forces human-essential regardless of total. A single 1 on any criterion caps the rating at agent-assist. Check both before recording.
- **O17 — Executor-independent specs.** No spec names a tool, a rung or a person in a way that would require rewriting when the executor changes. If migrating a subfunction requires editing its spec, the spec was executor-dependent.
- **O18 — Readiness ≠ authorisation.** No subfunction is promoted a rung without: stable spec, low logged error rate, tooling approved for that data classification, and a working rollback path. A green rating alone fails this rule.
- **O19 — Capability is not permission.** No autonomy widening is justified by a new capability arriving. Every widening cites decision-log evidence of calls that proved sound in that specific category.
- **O20 — The regulated floor is stated and fixed.** The never-delegate set is written down explicitly and carries no migration path. A design that leaves it implicit fails.

**Measurement**

- **O21 — Measures derive from the mandate.** Every outcome and function measure traces to the success line or to a subfunction quality bar. A measure invented independently of the specs fails.
- **O22 — No activity as outcome.** No count of requests processed, items shipped, documents produced or meetings held appears in the outcome or function tiers. Throughput lives in the operating tier and is labelled as such.
- **O23 — No premature readings.** Outcome-tier measures are not reported before the functions producing them are live. An asserted baseline with no data behind it fails.

**Transition and ownership**

- **O24 — Pilot before scale.** One function runs the full target model, instrumented, before any second tranche migrates. Every phase has a gate, and every gate can say no.
- **O25 — No standing transformation function.** Episodic change appears on the bet portfolio with an owner, a milestone and a decide-by date. A change function on the function map fails.
- **O26 — Regulated gates never lapse.** No control, approval or accountability required by the regulatory framework lapses during transition, even for a day. Where ownership moves, the handover is explicit and evidenced.
- **O27 — Sequence by gap and dependency, not enthusiasm.** The migration order follows the readiness heatmap and the dependency graph. Quick wins precede structural changes that need air cover; nothing is scheduled before what it depends on.
- **O28 — Structural, never personal.** Current-state findings, gaps and political terrain are recorded by capability, role and position — never by individual name. A design document that names an individual as a weakness fails, and is a hazard as well as a rule breach.

---

## Prior art and positioning

This standard synthesises four bodies of public practitioner work with the specification discipline that connects them.

- **Stream-aligned team design** — Skelton & Pais, *Team Topologies* (2019): teams own a continuous stream of work aligned to a customer journey, sub-segment or product line; other team types exist to reduce the load on them; the split logic is explicit and organisation-wide.
- **Empowered product teams** — Cagan / SVPG, *Inspired* and *Empowered*: teams are given problems to solve, not features to ship; each has a lead accountable for an outcome, with direct customer access and authority over solution approach. §5.1's three authorities are this argument made testable.
- **Tribe and squad structures** — the widely documented large-bank agile transformations of the mid-2010s. The transferable lesson is less the vocabulary than the documented failure mode: organisations that adopted the structure without moving budget authority saw the model stall. That failure is the origin of lint rule O18's ancestor, and of the failure-mode row "structure without authority".
- **Specification-first automation** — the observation, general across enterprise automation practice, that codified inputs, methods and acceptance criteria are the precondition for delegating work to any executor. The pack's contribution is to treat the function charter and the agent instruction set as one artefact at two maturities, and to make autonomy widen on logged evidence rather than on capability announcements.

**Evidence grade — read this before quoting the pack as proof of anything.** "Documented practice" here means widely cited transformation cases and practitioner literature. No controlled comparison of organisation designs exists, and successful counter-models — notably functional organisations at large product companies — show the stream-aligned pattern is specific to a class of problem rather than universal. Everything in this standard is stated as a **design rule**, not as an evidenced finding. Where a rule could be tested in a given organisation, the pilot in §2.8 is the test.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
