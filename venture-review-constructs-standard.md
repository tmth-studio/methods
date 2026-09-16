# Two review constructs venture design needs that systems engineering does not supply — method note

**DRAFT v0.1 · 16 September 2026 · Tough Minds, Tender Hearts — for Tom's signature before publication.** First draft. Nothing in this note has been released.

*v0.1 — two constructs stated as definitions, each with a procedure, a check list and a shared worked example. Written for a systems engineer who has not seen this studio's method.*

A method note a review team can execute. It defines two constructs that a venture design review needs and that the free systems engineering canon does not contain. The first is a rule for the reviewer: reject only on integrity grounds and record departure from convention as a finding in the design's favour. The second is a rule for the requirement: when a design starts from a product already sold, the value requirement is defined only over the people that product excludes. Each construct is given as a definition, a procedure with numbered steps, a check list and a worked example on an invented case.

---

## Part 0 — What this note is and is not (read first)

**The problem this solves.** Systems engineering has a mature review discipline. It puts an independent reviewer between the producer and the decision. It names the producer's bias toward their own design. It restricts the reviewer to technical integrity. Venture design uses all of that. It then meets two situations the canon does not describe.

The first situation. A venture design is correct only when it departs from the conventional way its market delivers the job. A reviewer trained in that market carries the conventional way as a standard. Left to that standard, the reviewer marks down the departure that is the point of the design. The canon guards against the producer's fondness for their own work. It does not guard against the reviewer's fondness for the usual way.

The second situation. A venture design may start from a product line that a company already sells. The people who buy that line are, by definition, already served at its price. A value requirement asked of them has no answer. The canon's stakeholder analysis widens the set of people whose needs count. It never narrows a requirement to the people an existing product leaves out.

**The claim.** Both situations need a construct. Neither construct was found in the free canon. That canon is 13 pages of the Systems Engineering Body of Knowledge, the NASA Systems Engineering Handbook and its Expanded Guidance supplement. It includes NPR 7123.1D Appendix G. Both are expressible in canon vocabulary. Neither is derivable from a canon construct. That is the definition of a gap, and both gaps are stated below so that a working group can test them.

**What this note is not.** It is not a replacement for independent peer review. Construct A keeps the canon's independence and integrity-only rules and adds one rule. It is not a market-sizing method. Construct B decides which population a requirement may be asked of. It does not size that population. It is not a claim that the paid standards lack these constructs. The INCOSE Systems Engineering Handbook and ISO/IEC/IEEE 15288 are paid sources and were not consulted. Either may contain a construct that closes one of the gaps. If it does, this note is wrong on that point and says so in Part 4.

**Execution gate.** Before applying either construct, state in two sentences which situation you are in. Construct A applies when a reviewer is briefed. Construct B applies when a design starts from a product already sold. A design can be in both situations at once. The worked example is.

---

## Part 1 — Sources and prior art

**Canon consulted (free sources).**

- Systems Engineering Body of Knowledge (SEBoK), sebokwiki.org, 13 pages. Cited by page title.
- NASA/SP-2016-6105 Rev 2, *NASA Systems Engineering Handbook*. Cited by section and page.
- NASA/SP-2016-6105-SUPPL, *Expanded Guidance for NASA Systems Engineering*. Cited by section and page.
- NPR 7123.1D, Appendix G, review entrance and success criteria. Cited by table.

**Canon not consulted (paid sources).** INCOSE Systems Engineering Handbook, 4th edition. ISO/IEC/IEEE 15288:2015. Neither was opened. Where this note says the canon lacks a construct, it means the free canon above.

**Prior art.** The independent review, the integrity-only criterion and the naming of producer bias are the canon's and are cited in place. Two orientations come from the venture-design practice of Erik Simanis and collaborators. A venture must depart from the conventional business form. The value requirement lives with the people that form does not reach. The two constructs, their definitions, procedures and checks are original to this studio.

---

## Part 2 — Construct A: the reviewer-side conformity guard

### 2.1 Definition

> **The reviewer-side conformity guard** is a rule of independent review with two parts. **(i)** The reviewer may reject a design element only on integrity grounds: it cannot be realised, it is inconsistent with another element of the same design, or the role that would run it cannot run it as specified. **(ii)** The reviewer must record every departure from the conventional way the function is performed and may not penalise it. A departure is a finding in the design's favour unless part (i) fails on the same element.

Three properties follow from the definition.

1. **Convention is not a ground.** "This is not how it is done" is never, on its own, a reason to reject. It is a reason to record.
2. **Integrity is the only ground.** The three integrity grounds are closed. A reviewer who wants a fourth ground must show that it reduces to one of the three.
3. **The two parts are tested on the same element.** A departure that also fails integrity is rejected on the integrity ground and recorded as a departure. The record survives the rejection, because the next generation of the design may keep the departure and fix the defect.

**What the guard is not.**

| Not this | Why |
|---|---|
| A rule that rewards novelty | Departure is recorded, not scored. A design earns nothing for being unusual. It loses nothing for it either. |
| A relaxation of review | Part (i) is the canon's own criterion, unchanged. The guard removes one ground for rejection, not the standard of proof for the others. |
| A rule for the producer | The producer's bias is already named by the canon. This construct acts on the reviewer. |
| A veto on the reviewer's expertise | The reviewer's craft knowledge is what makes the integrity test possible. The guard directs that knowledge at whether the design runs, not at whether it is usual. |

### 2.2 Why the canon needs it

The canon already supplies most of the review. It supplies the independent reviewer. SEBoK, *Decision Management*, under mitigation of cognitive bias, says advice on decisions should come from an outside body. It names the Independent Technical Authority that the Columbia Accident Investigation Board called for. NPR 7123.1D, Appendix G, Table G-19, requires that peer reviewers independent of the project be selected for their technical background.

It supplies the integrity-only criterion. The Expanded Guidance, §6.7.2.2.6, p.303, says peer reviewers should be concerned only with the technical integrity and quality of the product. The Handbook, §4.4.1.2.7, p.72, asks a design review to show that the design is realisable within its constraints and consistent with its technical requirements. Those two criteria are part (i) of the definition above, written as entrance and success criteria.

It names bias. The Handbook, §4.4.1.2.2, p.67, says designers become "fond of the designs they create" and lose objectivity. SEBoK names bias in the decision maker: rank, complacency, optimism.

**The residual.** The canon names bias in the producer and bias in the decision maker. It does not name bias in the reviewer toward the conventional solution. It has no instruction to record a departure from convention, and no rule that stops a reviewer penalising one. The nearest positive instruction, in the Expanded Guidance §6.7.2.5.6, p.312, asks a peer review to identify work that might be high risk but high reward. That sentence is written for research proposals. It rewards expected payoff, not departure from the conventional form.

**One canon criterion works against the guard.** NPR 7123.1D, Appendix G, Table G-3, sets a success criterion for the mission concept review: alternative concepts have adequately considered the use of existing assets or products. The Expanded Guidance, p.302, lists confirmation of approach among a peer review's purposes. Both direct the reviewer toward the existing way of doing things. A reviewer who follows Table G-3 marks down a design that ignores existing assets. A reviewer who follows part (ii) records the same design's departure in its favour. The two instructions conflict on the same element. That conflict is the reason the guard exists as a stated rule rather than as a briefing habit.

**Searched and not found.** "Devil's advocate" and "non-advocate review": no occurrence in the Handbook, the Expanded Guidance or the SEBoK *Decision Management* page. "Conformity", "groupthink", "status quo" and "anchoring": none on the SEBoK *Decision Management* page. "Conservative" as a reviewer attribute: none in either NASA document. The 11 heuristics quoted on the SEBoK *Systems Engineering Heuristics* page: none concerns rewarding an unconventional design.

### 2.3 The tailoring this constitutes

The canon's own tailoring chapters ask that each departure from a named construct be documented as such. This construct tailors independent peer review in three moves.

1. **Keep** the independence of the reviewer (SEBoK *Decision Management*; NPR 7123.1D Table G-19).
2. **Keep** the integrity-only criterion (Expanded Guidance §6.7.2.2.6; Handbook §4.4.1.2.7).
3. **Add** part (ii) of the definition, and **strike** the existing-assets criterion of NPR 7123.1D Table G-3 for any review to which this construct applies.

The tailoring is bounded. It applies to the review of a venture design's architecture. It applies to the review of each function's planned activity by the role that will run it. It does not apply to a mission concept review of a system that must reuse existing assets by policy. There, Table G-3 stands.

### 2.4 Procedure

**Step 1 — Select the reviewer.** Independent of the producer. Competent in the function under review. Where the design assigns an activity to a role, the reviewer is a holder of that role or a person with its craft knowledge. Record the reviewer's name, role and independence in the review record.

**Step 2 — Brief the reviewer in writing.** The brief contains, in this order:

1. The definition in §2.1, verbatim.
2. The three integrity grounds, each with one sentence on what evidence would establish it.
3. The statement: "A finding whose only ground is that this is not how the function is usually performed is recorded under part (ii) and does not reject."
4. The set of elements under review, with the cost and volume at which each must run.
5. The instruction that the output is findings, never rewrites. The reviewer does not redesign. The reviewer says what fails and why.

The reviewer confirms the brief before starting. A review that starts without a confirmed brief is not a guarded review.

**Step 3 — The reviewer returns findings.** One finding per element per ground. Each finding carries:

| Field | Content |
|---|---|
| Element | The design element reviewed |
| Part | (i) integrity or (ii) departure |
| Ground | For part (i): unrealisable, inconsistent or unexecutable by the role. For part (ii): the conventional way, stated, and the departure, stated |
| Evidence | What the reviewer saw that establishes the ground |
| What the role needs | For an unexecutable finding: what the role would need that the plan does not give it |

A reviewer with no craft standard for the function reviews from general practice and returns one extra finding: "standard missing". That is a gap in the standards library and is logged as such.

**Step 4 — Dispose of each finding.** The review owner, not the reviewer, decides what is done with each finding. This studio uses three classes. Every part (i) finding lands in exactly one.

| Class | Meaning | What happens next |
|---|---|---|
| Design defect | The element is wrong as designed. It cannot be realised or is inconsistent with another element | Returns to generation. The design changes |
| Standing constraint | The element is right as designed and the world imposes a condition the design must carry | The constraint is recorded against the element and every later version inherits it |
| Build item | The element is right as designed and the role needs something the plan does not yet provide | The item joins the build list with the role that needs it |

Part (ii) findings are not disposed. They are recorded as departures and carried with the design. A departure that is later removed from the design is a design decision, taken by the producer, with a reason on record.

**Step 5 — Record the review.** The record holds the brief, the reviewer's confirmation, every finding with its fields and the class given to each part (i) finding. A review with findings and no record is not a review.

**Step 6 — Fire the review at the points the process names.** As a minimum: once per requirement on the elements that requirement added or changed, and once across all functions when the design is fixed. The second firing is where handoffs between functions are checked. The first cannot see them.

### 2.5 Check list (lint)

Run these on any review record before accepting it. Report each failure by rule number.

- **A1 — Convention as ground.** A rejecting finding whose only stated ground is that the function is not usually performed this way. Re-file under part (ii). If the reviewer holds that an integrity ground also applies, they must state which and give the evidence.
- **A2 — Unnamed departure.** An element that departs from the conventional way of performing its function, with no part (ii) finding on record. The reviewer has not looked for departures, or has found one and not recorded it.
- **A3 — Fourth ground.** A rejecting finding on a ground other than unrealisable, inconsistent or unexecutable by the role. Either reduce it to one of the three or remove it.
- **A4 — Rewrite in the findings.** A finding that contains a redesign. The reviewer has produced a solution. Strip it to the ground and the evidence.
- **A5 — Existing-assets criterion applied.** A finding that penalises the design for not reusing an existing asset or product. This is Table G-3 and it is struck for guarded reviews.
- **A6 — Unbriefed reviewer.** No confirmed written brief on record, or a brief that omits the definition or the three grounds.
- **A7 — Finding not classed.** A part (i) finding with no class, or with two.
- **A8 — Departure removed without a decision.** A recorded departure absent from the next version of the design, with no design decision and reason on record.
- **A9 — Missing second firing.** A design fixed across all functions with no cross-function review on record.

---

## Part 3 — Construct B: the excluded-population restriction

### 3.1 Definition

> **The excluded-population restriction.** When a design starts from an existing solution — a product line already sold — the requirement "the existing form cannot deliver at or below the value the customer receives" is defined only over the population the existing solution excludes: those who cannot buy today. It is never defined over current buyers. Current buyers are, by construction, already served at the existing price. The requirement has no answer for them.

Three properties follow.

1. **It is a restriction on the domain of a requirement, not on the set of stakeholders.** Current buyers remain stakeholders. They are observed, counted and priced. The requirement is not asked of them.
2. **The existing price is a fact about current buyers.** It is a lower bound on what they will pay. It is not, on its own, a ceiling for anyone else.
3. **A run with no excluded population has no requirement to open.** If every person who would use the solution can buy it today, the value barrier the requirement exists to remove is absent. The run stops at the requirement's entry gate. It does not proceed on current buyers.

**What the restriction is not.**

| Not this | Why |
|---|---|
| A market-sizing rule | It decides who the requirement may be asked of. It does not count them. Counting comes after |
| A rule that current buyers do not matter | They are the evidence that the job is paid for at scale. They are recorded first |
| A claim that the existing solution is bad | The existing solution is the baseline. It serves its buyers. The restriction asks what it does not do, not what it does badly |
| A rule about a market | The input is one line of one company. An industry is a category and does not name a population |

### 3.2 Why the canon lacks it

The canon identifies stakeholders by widening the set. The Handbook, §4.1.1.2.1, defines a stakeholder as a group or individual affected by or with a stake in the product or project. SEBoK, *Stakeholder Needs Definition*, includes the public at large within the context of the business and the proposed solution. SEBoK, *Identifying and Understanding Problems and Opportunities*, calls persons affected by, benefiting from or harmed by the system stakeholders. All three add people to the set. None removes a population from a requirement's domain. Widening and narrowing are different operations.

The Handbook, §4.2, p.57, notes that requirements can be generated from non-obvious stakeholders and may not directly support the current mission. That note adds secondary uses for the system being built. It says nothing about who the existing solution fails to serve.

The canon describes an as-is baseline. SEBoK, *Business or Mission Analysis*, describes listing the problems with the existing as-is system and the reasons it needs to change. SEBoK, *Identifying and Understanding Problems and Opportunities*, says operations research asks about the limitation and cost of the current system. Both describe the existing system's faults for its existing users. Neither defines a population outside them.

The canon constrains within the legacy. SEBoK, *Synthesizing Possible Solutions*, defines brownfield systems as those in which legacy elements constrain the system structure. The legacy is a constraint to design within. Construct B treats the existing line as a baseline to design away from, for people it does not reach.

The canon rewards reuse. NPR 7123.1D, Table G-3, asks that alternative concepts consider the use of existing assets or products. That is the reverse of the restriction.

**Searched and not found.** "Unserved", "underserved", "non-user", "capability gap" and "excluded": no occurrence in either NASA document. SEBoK *Stakeholder Needs Definition* and *Business or Mission Analysis*: no sentence on unmet or unserved needs, non-users or excluded groups.

**Why this is a gap and not a tailoring.** Every candidate above shares vocabulary with the construct: stakeholder, as-is, problem, gap. None shares the mechanism. The construct is a domain restriction on a requirement. The canon has no construct that restricts a requirement's domain by reference to whom an existing solution serves. A team following the canon would list the excluded population as one stakeholder group among several. It would still be permitted to size and price the design on current buyers. On a design that starts from an existing line, that permission produces a margin test that reads as passing when it is not. The canon lets a problem statement say "population X is not served today". So the construct can be written in canon vocabulary. It cannot be derived from any canon construct.

### 3.3 Procedure

**Step 1 — Name the entry object.** One line of one company, named by a person who knows what it sells, to whom, at what price and who cannot buy. An industry is refused. A company is refused until one line is named.

**Step 2 — Level the line to the job it does.** State the job the line does for its buyer, in the buyer's words. Broaden the statement one step at a time. Stop at the point where the next broader job would be delivered a different way today. Record three things: the job as first stated, the levelled job and the next-broader job with the difference in delivery that excludes it. A record with no next-broader job named has not levelled.

**Step 3 — Check typicality.** State whether the company delivers the line the way the market does. Where it differs, the market's default is the conventional form and the difference is recorded. A company that is itself an innovator on the line does not supply the conventional form.

**Step 4 — Record current buyers as a fact.** Count, source and price. Three fields, all required. The count comes from the company's own records or a published figure with the source named. This population is the evidence that the job is paid for at scale. It is not the population the requirement is asked of.

**Step 5 — Research the excluded population.** Those who have the job and cannot buy the line today. For each excluded group record the reason for exclusion, from a closed list: price, eligibility, access or another reason named in full. Flag every figure in this step as unvalidated until it has a source of its own. A group with no stated reason is not yet an excluded population. It is a guess.

**Step 6 — Label every price ceiling by population.** The existing price is a lower bound on what current buyers will pay. For a group excluded by price, the existing price is an upper bound on their ceiling. For a group excluded for another reason, the existing price is not a bound in either direction. Every ceiling figure in the record carries the name of the population it belongs to. A ceiling with no population label is discarded.

**Step 7 — Open the requirement, or stop.** If the excluded population is empty, or is current buyers under another name, the requirement is not opened. The run stops at the entry gate and the record says why. If the excluded population is non-empty and has at least one stated reason, the requirement is opened for that population only. Its loss-to-price ratio is left open until the design isolates the cost the customer would pay to remove. Write that line as open. Do not estimate it.

**Step 8 — Set the scale target from the levelled population.** The company's scale is the floor of the target, never the target. The target is the levelled population at a penetration rate that has a source.

### 3.4 Check list (lint)

Run these on any record that starts from an existing line. Report each failure by rule number.

- **B1 — Unlabelled ceiling.** A price ceiling figure with no population named against it.
- **B2 — Unreasoned exclusion.** An excluded population, or group within it, with no reason for exclusion from the closed list.
- **B3 — Requirement opened on current buyers.** The value requirement asked of, sized on or priced against the population that buys the line today.
- **B4 — Existing price carried as ceiling.** The line's current price used as the ceiling for a population excluded for a reason other than price. Or used for a price-excluded group without the words "upper bound".
- **B5 — Unlevelled line.** No next-broader job on record, or a levelled job that would be delivered a different way today.
- **B6 — Current buyers without count or source.** A current-buyer population stated without its count, its source or its price.
- **B7 — Industry as entry.** The entry object is a category, a sector or a company with no line named.
- **B8 — Company scale as target.** The scale target equals the company's own volume.
- **B9 — Ratio estimated.** A loss-to-price ratio for the excluded population written as a number before the design has isolated the cost it removes.
- **B10 — Innovator supplying the conventional form.** The typicality check absent, or the company recorded as atypical and its delivery still used as the conventional form.

---

## Part 4 — How the two constructs are tested

Both constructs are stated so that they can be shown wrong.

**Construct A fails** if a canon source contains a review criterion that records or rewards departure from the conventional form. The free sources consulted contain none. The INCOSE Handbook and ISO 15288 were not consulted and may. If either does, part (ii) is a tailoring of that criterion and this note should say so.

**Construct B fails** if any canon construct restricts a requirement's domain by reference to an existing solution's non-customers. None was found in the sources consulted. The same paid-source caveat applies.

**Both constructs also fail in practice** under one condition. A guarded review or a restricted requirement produces a worse design than the unguarded or unrestricted form on the same case. That is an empirical test. It is run by keeping both records and comparing the designs at sign-off.

---

## Part 5 — Worked example (invented; no real company or venture)

**Case.** A regional accounting firm sells a payroll line. It runs payroll for client businesses with five to 50 employees. A partner in the firm brings the line to a design team. All figures below are invented.

### 5.1 Construct B applied

**Step 1 — Entry object.** One line: the firm's payroll service. Not the firm, not accounting, not payroll as an industry.

**Step 2 — Level the line.** As stated by the partner: "we run our clients' payroll". Levelled to the buyer's job: "my people are paid the right amount on the right day and the tax authority is told". Next-broader job: "my people are paid and my books are kept". That job is delivered today by a different service, the firm's bookkeeping line, with a different staff and a different price. The levelling stops there.

**Step 3 — Typicality.** The firm delivers the line the way the market does. A payroll clerk keys each run from timesheets the client sends. The firm is not an innovator on the line.

**Step 4 — Current buyers as a fact.** 1,200 client businesses. Source: the firm's own client ledger. Price: a minimum of £60 per month, rising with headcount.

**Step 5 — Excluded population.** Two groups, both flagged unvalidated until sourced.

| Group | Who | Reason for exclusion |
|---|---|---|
| E1 | Businesses with one to four employees | Price: at £60 per month the fee exceeds what a one-employee business will pay for the job. Flagged unvalidated |
| E2 | Businesses of any size that do not hold an annual accounts engagement with the firm | Eligibility: the firm sells payroll only to accounts clients. Flagged unvalidated |

**Step 6 — Ceilings by population.**

| Population | Existing price is | Ceiling |
|---|---|---|
| Current buyers | A lower bound | At least £60 per month. Paid at scale |
| E1, excluded by price | An upper bound | Below £60 per month. The figure is open |
| E2, excluded by eligibility | Not a bound | Open in both directions |

**Step 7 — Open or stop.** E1 and E2 are non-empty and each has a reason. The requirement is opened for E1 and E2 only. The loss-to-price ratio for each is written as open. It is not estimated.

**Step 8 — Scale target.** The floor is 1,200. The target is the levelled population, businesses with one to 50 employees in the firm's region that have the job, at a sourced penetration rate. That count is a research item and is not asserted here.

**Check list result.** B1 to B10 pass. Had the team asked "would our 1,200 clients pay less for the same service", B3 would have fired and the run would have stopped.

### 5.2 Construct A applied

**The design element under review.** The design proposes that each employee enters their own hours through a fixed-format form and that the firm checks only exceptions: hours outside a set range, a new starter, a leaver or a tax code change. No clerk keys a run. This departs from the conventional way, in which a payroll clerk keys every run from the client's timesheet.

**Step 1 — Reviewer.** The head of payroll operations at a firm that is not the producer. Independent, competent in the function, named in the record.

**Step 2 — Brief.** The definition in §2.1 verbatim. The three integrity grounds. The sentence on part (ii). The element above, at a volume of 4,000 runs per month and a cost of £11 per run. Findings, never rewrites. The reviewer confirms.

**Step 3 — Findings returned.**

| Ref | Element | Part | Ground | Evidence |
|---|---|---|---|---|
| F1 | Employee self-entry | (ii) departure | Conventional way: clerk keys every run from the client's timesheet. Departure: employees key their own hours and the firm checks exceptions only | The reviewer's own practice and the practice of three firms known to them |
| F2 | Exception check | (i) inconsistent | The exception check needs the employee's current tax code before the run starts. The plan produces the tax code after the run, from the authority's response | Plan step order, pages 4 and 7 of the design |
| F3 | Exception check | (i) unexecutable by the role | At 4,000 runs per month the role cannot read exception flags from a plain list. It needs a view that sorts flags by type and client. The plan provides no such view | The reviewer's throughput at their own firm, 600 runs per month with a sorted view |

No finding rejects F1 on convention. Had the reviewer written "clerks do not let employees key their own pay" as a rejecting ground, A1 would have fired.

**Step 4 — Class given to each part (i) finding.**

| Ref | Class | Reason |
|---|---|---|
| F2 | Design defect | The element is wrong as designed. Two steps are in the wrong order. Returns to generation |
| F3 | Build item | The element is right as designed. The role needs a sorted exception view that the plan does not provide. Joins the build list against the head of payroll operations |

F1 is not classed. It is recorded as a departure and travels with the design.

A fourth finding is shown for contrast. Suppose the reviewer had also found two facts. The tax authority's filing window closes at 19:00 on the day of payment. The design's overnight batch runs at 22:00. That is a part (i) finding, unexecutable as specified. Its class would be standing constraint: the world imposes the 19:00 close, every later version inherits it, and the design must run its batch before it. The design is not wrong. It carries a condition.

**Step 5 — Record.** Brief, confirmation, three findings with fields, two classes. On file.

**Check list result.** A1 to A9 pass. The departure that is the point of the design survives the review. The two integrity faults are found and classed. The reviewer has not redesigned anything.

---

## Change log

- **v0.1 — 16 September 2026.** First draft from the studio's second pass over the free systems engineering canon. Two constructs stated. Worked example on an invented payroll line. For Tom's signature before publication. Not released.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
