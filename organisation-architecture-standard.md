# Organisation architecture — operating-model design standard

**Version 1.0 · August 2026 · Tough Minds, Tender Hearts**

*v1.0 — first release. Executor assignment, the tooling ladder and graduated autonomy were split into a companion standard at v1.0 so each document stays small enough for an assistant to hold whole.*

*Core standard of the organisation architecture pack. Companion reference: [`executor-assignment-standard.md`](executor-assignment-standard.md) (who performs the specified work, and how much it may decide). Execution layers: [`current-state-diagnosis-process.md`](current-state-diagnosis-process.md) and [`operating-model-design-process.md`](operating-model-design-process.md).*

An operating manual an AI assistant can execute. It defines what an operating model is made of, gives the sequence for architecting one outside-in, gives the decision rule at every step, and gives lint rules that catch a bad design before anyone is asked to live inside it. Decision procedures, contrastive examples, and lint rules throughout.

---

## Part 0 — What this standard is (read first, play back before executing)

**The problem this solves.** Organisation designs fail in two recognisable ways, and both are failures of order rather than of intelligence. The first is *boxes first*: teams, reporting lines and headcount are drawn, and only then is anyone asked what each box is for. The second is *structure without authority*: the chart moves, the decision rights and the funding route do not, and every initiative still needs a business case to a forum that predates the change. Both produce a design that reads well and cannot run.

**The claim.** An operating model is a set of specifications, not a set of boxes. Write each unit of work as a precise statement of what must be true for it to be done well *by anyone*, and three things follow at once: the work becomes portable between executors, it becomes measurable without a separate measurement project, and it becomes automatable without a redesign. Structure is then a consequence of the specification set, not an input to it.

**The corollary that does most of the work.** A function charter and an agent role definition are the same artefact at different maturities. Write the charter to this standard and you have already written the executor's instructions. This is why specification is not bureaucracy: **the spec is the unit of automation.**

**Two units of design, at two altitudes — name the difference or the design will confuse them.**

- The **unit of scope** is the whole organisation — the complete set of teams plus its leadership and its shared capabilities. Never design one team at a time. A design produced team-by-team yields boundary disputes and duplicated capabilities, because two teams draw their own edges and the edges do not meet.
- The **unit of specification** is the **subfunction** — the smallest nameable piece of recurring work with its own input, output, cadence and quality bar. Never specify at the level of the function; a function is a container, and containers are not executable.

These are not competing claims. They answer different questions: *what must be held in view while designing* (the whole) and *what must be written down* (the subfunction). A design that gets either wrong fails — the first produces turf wars, the second produces org charts nobody can execute from.

**What this standard does not cover.** *Who performs the specified work* is a later and separate decision, and lives in the companion executor-assignment standard. *Venture architecture* — designing a new business rather than an operating model for an existing mandate — is a different method with different axioms and is not in this pack. This standard assumes the organisation already has, or can be given, a mandate.

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
| **Tooling rung** | A level on the four-rung ladder in the companion standard, defining the executor of a spec: manual-plus-checklist, spreadsheet automation, copilot-assist, or agent. |
| **Agent-readiness** | A rating on a subfunction stating how far execution can migrate to an agent: agent-ready, agent-assist, human-essential. Scored in the companion standard. |
| **Graduated autonomy** | The model under which decision categories migrate from escalate-first to act-then-log on the evidence of the decision log. Companion standard, Part 4. |
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

**The one exception to the order.** Step 6 runs first in *calendar* time even though it is sixth in *logical* dependency. The operating layer relieves day-to-day load immediately and starts producing the decision and demand data that steps 1–5 are later validated against. Standing it up before the design is finished is deliberate, not a shortcut.

**Decision rule for step order.** If a step's input does not exist, do not proceed on an assumption. Record the missing input as an open question and either resolve it or stop. An honest gap is worth more than a confident guess, because a guess propagates silently into every downstream artefact and is invisible by the time it does damage.

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

**Why the three structural facts are load-bearing.** *Control versus advise* determines whether the design can staff to the work or must negotiate for every person. *Unit of value* determines what the top-tier measure can even be (Part 5). *Trigger* determines the transition risk profile: a reorganisation carries people risk that a new build does not.

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

**A reference decomposition, not a target.** The six functions above are a widely serviceable set for a product organisation in a large regulated enterprise, offered as a strawman to react against. Rename freely; the labels carry no authority, the decomposition does. Any local renaming must leave the set MECE. In a regulated enterprise, "Govern and enable" is first-class rather than overhead: clear gates beat ambient fear, and designing governance in from the start is what makes later automation permissible. An organisation that owns no go-to-market should not build a go-to-market function; one that inherits run responsibilities from a separate operations division should map the boundary rather than duplicate it.

### 2.4 — Step 3: specify each subfunction

Break each function into its subfunctions and specify each one against the field set in §3.2. Rules:

1. **Name artefacts and their sources, not activities.** "Analyse the market" is not an input; "competitor release notes and pricing pages for a named watch-list, collected weekly" is.
2. **Name the method, not the verb.** For each transformation step, state the rule, taxonomy or threshold applied — not "assess", but *how* it is assessed.
3. **Make the quality bar checkable.** Counts, presence checks, resolving source links, time limits. Never an untestable adjective.
4. **Give it exactly one owner.** Owners can delegate execution; they cannot delegate accountability.
5. **Apply the completeness test** (§3.3) before signing anything off.

### 2.5 — Step 4: capture routines

A subfunction says what the work is for. A routine says how one recurring instance of it actually gets done. Capture turns tacit know-how into an explicit, checkable record — and a captured routine is automatable by definition, because it has been made explicit. The arc is *tacit → explicit → automatable*, and capture is the first step of it.

Capture each routine against these fields: **name · serves which subfunction · trigger or input · steps (numbered, in order) · output and its consumer · quality bar · decision points (each marked reversible or not) · cadence · owner and source · current tooling rung and the next one up.**

**Decision rules.**

- **If a field cannot be filled with a concrete answer, that gap is the finding** — not a detail to wave through. A good routine tightens under this discipline; a weak one exposes itself, which is what the capture is for. The three most common gaps are vague inputs, an uncheckable quality bar, and a decision point nobody will own.
- **A routine that cannot name the subfunction it serves does not yet have a place** — and that is a finding for the function map, not for the routine.
- **Mark each decision point reversible or not.** This is what later determines which steps can run under act-then-log and which must escalate.

**Placement rule.** A captured routine lives in exactly one place — the folder of the function it serves — and the subfunction's spec references it from its quality-bar field. Never a second copy, never a routine floating free of the subfunction it serves.

### 2.6 — Step 5: assign executors

Rate every subfunction for agent-readiness and record the tooling rung it runs on today. The procedure — the six-criterion rubric, the mapping rule, the two hard overrides, the four-rung ladder and the promotion gates — is in the companion executor-assignment standard.

Two properties of that step matter to the *design*, and are stated here so the design does not have to wait on it:

- **The ratings across the map form a heatmap, and the heatmap is the migration sequence.** It states what moves first, what moves later and what never moves. Do not write a separate automation transition plan; there isn't one to write.
- **Assignment never changes the design.** If migrating a subfunction to a new executor requires editing its specification, the specification was executor-dependent and is rewritten (see O13).

### 2.7 — Step 6: stand up the operating layer

Five components, all buildable in standard office tooling on day one:

| Component | Columns / contents | Standing rule |
|---|---|---|
| **Intake queue** | Received · source · request · type · linked subfunction · priority · status (new / triaged / absorbed / declined / decision-needed) · owner | Capture on arrival; triage at a fixed slot, never on arrival. **If it is not in the queue, it does not exist.** |
| **Decision log** | Date · question · options considered · decision · reason · decided by · review date | Every decision of consequence gets one row, same day. This is the audit trail, and later it is the evidence that earns execution more autonomy. |
| **Bet portfolio** | Bet · thesis · objective served · owner · stage · milestone · kill condition · decide-by date · status | Every bet traces to an objective or is declared as the organisation's own initiative. |
| **Reporting rollup** | Function · outcome metric · RAG · note — computed from the three above | Reporting is a side effect of operating, not a separate act of writing. |
| **Operating cadence** | Fixed triage slot · fixed brief · fixed snapshot | The cadence is what makes the system a habit rather than an event. Snapshot dated and filed weekly from week one. |

**Decline must be a real category that is actually used.** A brief showing ten items absorbed and nothing declined is decorating the overload, not relieving it. The system's value is triage, not absorption.

**Why the snapshot discipline matters more than it looks.** A dated weekly copy of the operating layer accrues a trend series from week zero. That history is the before-picture every later results read is measured against, and it is the context any future agent inheriting the subfunction will need. An agent inheriting a year of clean weekly snapshots starts with context; one inheriting a bare current-state tracker starts blind.

### 2.8 — Step 7: pilot one function, then migrate

1. **Select one function** against three criteria, in this order: *clearest pain* (where the current mess is most felt), *friendliest politics* (owners who will cooperate, no turf contest), *measurable within a week* (visible outputs at a weekly-or-faster cadence). The third is the one people skip and the one that decides whether the pilot produces evidence or anecdote.
2. **Run it to its specification, live**, on the highest tooling rung currently approved. Let real data accrue against the quality bars.
3. **Read the results** against three questions, in writing: *did the function run to spec? · where was the spec wrong about reality? · what migrates next?*
4. **Correct the specification** on the strength of what the pilot proved. The corrections are the deliverable; the document is only their record.
5. **Sequence the remaining migration** by gap and readiness rating, not by enthusiasm. High-readiness work first to build momentum; judgement-heavy work later, or never.

**Standing rule for the results read.** A pilot that fails the read is not a failed transition — it is the system working. The read exists to catch design errors at one-function scale before they replicate at organisation scale. Record what was learned, amend the model, re-gate.

**If the pilot needs more runtime to be conclusive, extend the evidence window — not the design phase.** These are different things, and conflating them is how a design programme becomes permanent.

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
| **Agent-readiness + owner** | The companion standard's rating with its rationale, and the single named human accountable. |

**Decision-rights rule.** A subfunction with no "decides alone" entries is not a subfunction — it is a task list waiting for instructions. If that row is empty, the design is incomplete.

**Interface rule.** An interface without a named artefact is a relationship, not an interface. Tighten it until an artefact appears. "We work closely with risk" is a relationship; "risk returns a gate decision with conditions within five working days of a submitted change pack" is an interface.

**Escalation-trigger rule.** State the *observable fact* that makes escalation mandatory, not the feeling that makes it advisable.

❌ "Escalate significant issues to the function lead."
✅ "Escalation is mandatory when two consecutive weekly summaries score the same competitor move at the highest relevance level without a prioritisation response."

**Quality-bar rule.** Every acceptance criterion is answerable yes or no from the output alone.

❌ "Timely, well-evidenced and clearly written."
✅ "(1) Every signal carries a source link that resolves. (2) Every non-background score has a written rationale of 50 words or fewer. (3) The summary fits one page. (4) Out by Monday noon."

### 3.3 — The completeness test

**A spec is finished when a person who has never met the team can read it and produce an acceptable output.** If it still needs a conversation to be usable, it is a job description wearing a specification's clothes.

Run the test literally where you can: hand the spec to someone outside the function and ask them to produce one instance of the output. What they get wrong is what the spec left out.

---

## Part 4 — Decision rights

Decision rights are the load-bearing section of any operating model. Structure that moves while decision rights stay put is the most reliably documented failure in organisation redesign, and seniority without authority produces escalation and attrition rather than advocacy. **If a right cannot be agreed, the seniority case for the role that would hold it weakens by exactly that much** — say so rather than leaving the row blank.

**The three authorities.** Three rights determine whether a team-level lead actually holds a mandate. Withhold any one and the design is nominal:

1. **Backlog and trade-off authority within their outcome set** — no external sign-off on sequencing.
2. **Solution authority** — what to build to move the outcome, within risk and compliance gates.
3. **A real seat at the capacity table** — engineering and funding allocation contested in the one forum where their advocacy can bind.

**What stays above the team, everywhere:** organisation-wide strategy, the funding envelope, the splitting principle, and cross-team conflicts.

**What stays outside the product line in a regulated enterprise:** prudential and conduct risk gates — threaded through as a named partner per team rather than as a ticket queue.

**Cross-team trade-offs have exactly one home.** A single forum where leads contest priorities openly. Bilateral deals between teams re-create the silos the split was meant to remove, and should be explicitly out of bounds.

**One splitting principle, applied uniformly.** Sub-segment, journey or product line — any works; mixing them inside one organisation does not. Mixed logic is the most common cause of ownership disputes, it is cheap to prevent and expensive to unwind, and it shows up as two teams both believing they own the same customer moment while the shared forum turns into a border tribunal. If the principle is not agreed organisation-wide, agree it before finalising any boundary: boundaries drawn team-by-team overlap or leave gaps.

**Shared capabilities are pooled once, at organisation level.** Per-team embedding of scarce specialist capability at small scale produces under-utilised specialists or, worse, quality divergence and quietly growing cost. Pool with named allocation, and hold craft standards centrally.

**Test any emerging design against five questions.** Four or five yeses: the design matches the reference pattern — proceed. Three or fewer: the gap list is the agenda for the sponsor conversation, in that order.

1. Is there one written splitting principle covering all teams?
2. Can each team's mandate be stated as outcomes — and would two team leads independently draw the same boundary between them?
3. Do all three authorities above appear, explicitly, in the design?
4. Does funding and capacity allocation move to the new forum, or does it stay in pre-change channels?
5. Are scarce shared capabilities pooled with named allocation?

**How much a given executor may decide** — the act-then-log / escalate-first / never-delegate boundary and the rule that widens it — is a separate question, answered in the companion executor-assignment standard.

---

## Part 5 — Measurement

### 5.1 — Three tiers, derived top-down

Measures are **derived from the mandate, not invented and bolted on**. This is why the top two tiers cannot be defined before the mandate is agreed.

| Tier | The question it answers | Where it comes from | When it becomes measurable |
|---|---|---|---|
| **Outcome** | Is the organisation delivering the value it owns? | The success line, made measurable against the unit of value | Once the mandate is agreed and functions are live |
| **Function** | Is each function doing its job well? | One outcome metric per function, drawn from its quality bars | As each function runs |
| **Operating** | Is the machine running? | Leading indicators from the operating layer — decision latency, intake throughput, decline rate, cadence kept, rung progression | From day one |

**The scorecard is not a separate build.** The leaf-level measures already exist if the work was specified, because every spec carries a quality bar. The scorecard is those bars aggregating up through the functions to the success line. Measuring well is in the design.

**Sequencing rule.** The operating tier is all that is honestly measurable with nothing live — so it is week one's scorecard. The outcome and function tiers come online as the pilot runs. Do not fabricate an outcome reading before there is an outcome.

### 5.2 — Activity is not outcome

⚠ Counts of requests processed, items shipped or meetings held are **throughput**. They feel like success and are not. A scorecard built from activity counts glows green while the organisation delivers nothing of value. Measure the value delivered, the decisions made faster, the bets that survived the kill gate — not the motion that produced them.

❌ "42 requests processed this week; 6 workshops held; 11 documents produced."
✅ "Decision latency fell from 9 days to 3 across the queue; 2 bets killed against their stated conditions, releasing their capacity to [named bet]; sponsor time returned, measured as hours no longer spent triaging: [n]."

### 5.3 — Objectives arriving from outside

A target handed down from the wider enterprise ("grow this line by X per cent") is not executable — it has no mechanism. The discipline: **the enterprise hands the organisation objectives; the organisation only ever executes bets.**

1. The objective enters through **intake**, like all demand, so the total ask is visible in one place.
2. The strategy subfunction **translates** it: which levers could plausibly move the number, and which become bets — typically two to four per objective, each with an owner, a thesis and a kill-or-persevere date.
3. The translation gets **one decision-log row**: which levers were chosen, which were explicitly not pursued, and why.
4. Each bet carries an **objective-served** field, so every bet traces to an objective or is declared the organisation's own initiative.
5. Performance tracking feeds actuals back into the rollup, so status is trackable as a side effect of normal operation.

**Where the objective is vague, translate it with placeholders and put one line on the sponsor brief:** *"I have read your objective as [this] — correct me if not."* A sponsor confirms a draft in seconds rather than authoring an answer.

**When the bets do not sum to the target, report the gap upward with evidence:** the committed bets credibly deliver this much, the gap is this much, closing it needs one of these. A bet portfolio turns a missed imposed target from a failure into a negotiation.

---

## Part 6 — Who owns the model

Evolving the operating model is a different job from working inside it, and it must not become a standing transformation function. A permanent change office makes change someone else's job, drains ownership from line leaders, breaks the rule that each outcome is owned exactly once, and — being unable to describe its own completion — becomes a budget line dressed as progress.

The split that works:

- **Continuous evolution → a named subfunction inside "govern and enable".** It owns the function map and the specs as living documents, runs the heatmap migration sequence rung by rung, and proposes model changes off each results read. Small, quarterly cadence. Naming its owner is the succession plan for any externally-led design programme.
- **Episodic transformation → a bet, not a function.** A reorganisation, a team stand-up, a design programme: a time-boxed entry on the bet portfolio with an owner, a milestone and a decide-by date. When the work is done it ends and folds back into the functions it improved. **The design programme itself belongs on the bet portfolio as row one, judged by the same kill-or-persevere discipline it installs.**

---

## Part 7 — Failure modes and their controls

| Failure mode | How it shows up | Control |
|---|---|---|
| **Skipping the mandate** | Wrong functions, wrong measures, work automated that nobody agreed the organisation owns; the gap surfaces only after the system is built | Agree the mandate before any other step. This underlies every other failure below. |
| **Structure without authority** | Teams formed; funding still flows through old lines; every initiative needs a case to a pre-change forum | Move budget and capacity allocation to the new forum in the same change that moves the boxes (Part 4) |
| **Mixed splitting logic** | Two teams both believe they own the same customer moment; the forum becomes a border tribunal | One splitting principle, stated in writing, applied uniformly across all teams |
| **Feature factory with senior titles** | Senior people hired; the roadmap stays a delivery list set elsewhere; advocacy becomes escalation, and attrition follows | Write each team's mandate as 2–3 outcomes; grant the three authorities in Part 4 explicitly |
| **Ceremony without decision rights** | Vocabulary and rituals adopted; who decides what is unchanged | Test the design against Part 4, not against the ceremony calendar. Vocabulary is the cheapest part and the only part that always ships. |
| **Per-team specialist hoarding** | Each team hires its own designer, researcher, analyst; standards diverge; cost grows quietly | Pool scarce shared capabilities once, at organisation level, with named allocation |
| **The permanent transformation function** | A standing change office, perpetually busy, never finished | Hold episodic change as a bet with a decide-by date (Part 6) |
| **Bilateral deal-making** | Teams settle boundary disputes privately; the shared forum decides nothing | One home for cross-team trade-offs, contested openly |
| **Vanity metrics** | A scorecard of throughput counts glows green while value is not delivered | Measure outcome and value (§5.2) |
| **Design by team** | Each team writes its own charter; the edges do not meet | The unit of scope is the whole organisation (Part 0) |

---

## Part 8 — Lint rules

Run all of these before signing off any operating-model design, alongside the E-rules in the companion executor-assignment standard. Each names a specific failure the design must not contain. A design that fails any rule is not ready; state which rule failed and what would fix it.

**Mandate and scope**

- **O1 — No mandate, no design.** Every artefact traces to a written mandate with a purpose sentence, stated boundaries and settled decision rights. If the mandate is absent or contested, the design cannot be signed off; record the open question instead.
- **O2 — Success line is verbatim.** The sponsor's success sentence is recorded in their own words, not paraphrased. A paraphrase substitutes the designer's judgement for the sponsor's and is undetectable later.
- **O3 — Three structural facts answered.** Control-or-advise on headcount and budget; the unit of value owned; the trigger. An unanswered structural fact is named, not assumed.
- **O4 — Design at the level of the whole.** The design covers the complete set of teams plus leadership and shared capabilities. A design produced one team at a time fails this rule regardless of its quality.

**Function map**

- **O5 — MECE.** No two functions can claim the same work, and no real piece of work lacks a home. An overlap is a boundary error to be redrawn, not a collaboration to be encouraged. An orphan is a finding against the mandate.
- **O6 — Functions are outcomes, one owner each.** Every function is named as an outcome the organisation buys and has exactly one named owner. "Shared ownership" fails.
- **O7 — Owned or borrowed, marked.** Every function is marked owned or borrowed, and every borrowed function names its neighbour, the artefact exchanged and the cadence. A silent gap at a boundary fails.

**Specification**

- **O8 — Spec, not description.** Every subfunction carries all nine fields of §3.2. A missing field is an unanswered question about the organisation, and is recorded as one.
- **O9 — The stranger test.** For each subfunction, a person who has never met the team could produce an acceptable output from the spec alone. If it needs a conversation, it is a description.
- **O10 — Checkable quality bar.** Every acceptance criterion is answerable yes/no from the output alone. Untestable adjectives — "clear", "high-quality", "timely" — fail. "Timely" fails; "out by Monday noon" passes.
- **O11 — Decides-alone is non-empty.** Every subfunction states at least one decision it makes without asking. An empty decides-alone row means a task list, not a subfunction.
- **O12 — Escalation triggers are observable.** Every escalation names the observable condition that makes it mandatory, not the judgement that makes it advisable.
- **O13 — Interfaces name an artefact.** Every upstream and downstream interface names the artefact exchanged and its cadence. An interface without an artefact is a relationship.
- **O14 — Named methods.** Every transformation step names the rule, taxonomy, threshold or framework applied. "Analyse", "assess", "review" and "consider" without a named method fail.

**Decision rights**

- **O15 — The three authorities are explicit.** Backlog and trade-off authority, solution authority, and a seat at the capacity table each appear in the design by name, or their absence is stated as a known limit on the role.
- **O16 — One splitting principle, one trade-off forum.** The splitting principle is written and applied uniformly; cross-team trade-offs have exactly one stated home; bilateral resolution is explicitly out of bounds.
- **O17 — Budget moves with the boxes.** Funding and capacity allocation is stated as moving to the new forum, or the design records that it does not — which is the single most documented cause of a stalled redesign.

**Measurement**

- **O18 — Measures derive from the mandate.** Every outcome and function measure traces to the success line or to a subfunction quality bar. A measure invented independently of the specs fails.
- **O19 — No activity as outcome.** No count of requests processed, items shipped, documents produced or meetings held appears in the outcome or function tiers. Throughput lives in the operating tier and is labelled as such.
- **O20 — No premature readings.** Outcome-tier measures are not reported before the functions producing them are live. An asserted baseline with no data behind it fails.

**Transition and ownership**

- **O21 — Pilot before scale.** One function runs the full target model, instrumented, before any second tranche migrates. Every phase has a gate, and every gate can say no.
- **O22 — Regulated gates never lapse.** No control, approval or accountability required by the regulatory framework lapses during transition, even for a day. Where ownership moves, the handover is explicit and evidenced, and every regulated gate has a named owner in the target state.
- **O23 — Sequence by gap and dependency, not enthusiasm.** The migration order follows the readiness heatmap and the dependency graph. Quick wins precede structural changes that need air cover; nothing is scheduled before what it depends on.
- **O24 — No standing transformation function.** Episodic change appears on the bet portfolio with an owner, a milestone and a decide-by date. A change function on the function map fails.
- **O25 — Structural, never personal.** Current-state findings, gaps and political terrain are recorded by capability, role and position — never by individual name. A design document that names an individual as a weakness fails, and is a hazard as well as a rule breach.

---

## Prior art and positioning

This standard synthesises three bodies of public practitioner work with the specification discipline that connects them.

- **Stream-aligned team design** — Skelton & Pais, *Team Topologies* (2019): teams own a continuous stream of work aligned to a customer journey, sub-segment or product line; other team types exist to reduce the load on them; the split logic is explicit and organisation-wide. Part 4's splitting principle is this argument made mandatory.
- **Empowered product teams** — Cagan / SVPG, *Inspired* and *Empowered*: teams are given problems to solve, not features to ship; each has a lead accountable for an outcome, with direct customer access and authority over solution approach. Part 4's three authorities are this argument made testable.
- **The large-scale agile transformations of the mid-2010s**, widely documented in the management literature and in the transforming organisations' own retrospectives. The transferable lesson is less the vocabulary than the documented failure mode: organisations that adopted the structure without moving budget authority saw the model stall. That failure is the origin of lint rule O17 and of the "structure without authority" row in Part 7.

**Evidence grade — read this before quoting the pack as proof of anything.** "Documented practice" here means widely cited transformation cases and practitioner literature. **No controlled comparison of organisation designs exists**, and successful counter-models — notably functional organisations at large product companies — show the stream-aligned pattern is specific to a class of problem rather than universal. Everything in this standard is stated as a **design rule**, not as an evidenced finding. Where a rule could be tested in a given organisation, the pilot in §2.8 is the test.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
