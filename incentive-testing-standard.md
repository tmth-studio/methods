# Incentive Testing — design and measurement standard

**Version 1.1 · August 2026 · Tough Minds, Tender Hearts**

*v1.1 — category entry point mapping added (§2.4): the procedure for deriving the events the event-reset rule depends on, and the retrieval-versus-conversion boundary that stops incentive budgets being sold as mental availability. Retrieval diagnostic added to §5.1; lint rule I13. v1.0 — first release.*

*An application note extending the [Objective Customer Value standard](objective-customer-value-standard.md) (v1.3): its first published two-sided application, plus the experiment discipline that makes the OCV calibration loop (§4.3.4 there) executable. Companion execution layer: `Incentive_Test_Workbook.docx`.*

An operating manual an AI assistant can execute. It defines how to design an incentive offer so it can be priced, how to predict who responds, and how to test the prediction so the spend calibrates itself. Decision procedures, contrastive examples, and lint rules throughout.

---

## Part 0 — What this standard is (read first, play back before executing)

**The problem this solves.** Incentive budgets are routinely spent without counterfactual discipline. The two standard failures: paying for behaviour that would have happened anyway (deadweight), and reading take-up as success when take-up says nothing about incremental behaviour or return. Both failures are invisible without a designed test — which is why this standard treats the experiment as part of the offer design, not an afterthought.

**The claim.** An incentive is a proposition ("do X, get Y") and can be priced with the same machinery as any proposition. Run it two-sided: the *customer side* predicts whether they respond; the *sponsor side* prices what a response is worth. The gap between predicted and observed response then localises to two parameters — behavioural drag and deadweight — and a correctly designed test measures both.

**Execution gate.** Before running any procedure below, play back in three sentences: (1) the target behaviour (not the engagement proxy), (2) the two-sided construct, (3) which decision the test result will change. Do not proceed until confirmed.

---

## Part 1 — The two-sided construct

```
CUSTOMER SIDE (gates uptake):
  behavioural value of offer = face value × V × C × B
  respond if:  behavioural value  ≥  compliance cost

SPONSOR SIDE (prices the response):
  return per £ = P(uptake) × Δcontribution × persistence ÷ cost per INCREMENTAL complier
  where cost per incremental complier = reward ÷ (1 − deadweight fraction)
```

Rules inherited from the OCV standard:

- **Never sum the two sides** (L9 there). The customer's ratio predicts response; the sponsor's ratio ranks value. A blended number predicts nothing.
- **Δcontribution comes from the sponsor's own unit economics**, validated against their records — never from the incentive vendor's benefit claims.
- **Both sides are banded** pessimistic / central / optimistic, with pessimistic always meaning *worse for the case being made*.

**Contrastive pair:**

- ❌ "The offer got 12% take-up — a success."
- ✅ "Treatment activation 12% vs control 4% → 8pp incremental at £50 per complier → cost per incremental activation £75, against a validated £340/yr contribution."

---

## Part 2 — Scoring the offer

### 2.1 Pin V and C by design

Visibility and credibility are design choices before they are scores. **Design rule: make every offer contractual and pounds-visible** — a stated amount, guaranteed on compliance, landing where the customer already looks. A well-designed incentive runs V ≈ 0.9–0.95 and C ≈ 0.9 by construction. This matters beyond uptake: with V and C pinned, any gap between predicted and observed response localises to B and deadweight — which is what makes the test informative (Part 5).

### 2.2 B — behavioural drag, the discriminator

B is scored, not calculated, against the parent standard's anchors, with one sentence of justification per score (unjustified scores are lint, I10):

| B | Anchor |
|---|---|
| ≈ 1.0 | The offer slots into the existing routine unchanged — or lands at a moment when the routine is already being re-decided |
| ≈ 0.6 | Moderate routine change; a habit shifts but nothing is abandoned |
| ≈ 0.3 | The routine must be abandoned and relearned |

**The scoring question:** how much of the customer's existing routine must change for them to comply — and is that routine being re-decided anyway when the offer lands?

**The event-reset rule:** B resets toward 1.0 at events where the routine is being re-decided regardless (category entry, renewal, refinancing, formation, a failure). Event-timed offers are therefore the highest-leverage incentive class: the same money meets no drag. Do not list these events by instinct — derive them (§2.4).

**The reminder that B never makes a case alone:** a customer about to defect scores B ≈ 1.0 (their routine is being re-decided) — and targeting them by *predicted propensity* still fails, on Part 2.3's arithmetic. B is one term in a chain.

### 2.3 Deadweight — target observed states, never predicted propensities

Deadweight is reward paid to customers who would have behaved anyway. Two targeting classes:

- **Observed state** (the card is dormant; the balance is idle; the customer is new): the counterfactual is verifiable, deadweight is near zero by design, and cost scales with success.
- **Predicted propensity** (a model says this customer will probably churn / lapse / convert): deadweight is governed by base-rate arithmetic, and for rare behaviours it is fatal.

**The base-rate arithmetic (run it before any propensity-targeted spend):**

```
precision ≈ base rate × model lift
waste fraction ≈ 1 − precision

Example: base rate 4%/yr, model lift 3× → precision ~12% → ~88% of spend
is paid to customers who were staying anyway. No model tuning escapes a
low base rate; the failure is structural.
```

If the targeting is propensity-based and the base rate is below ~10%, redesign around an observed state or an observed event before costing anything (I2). Derive the candidate events in §2.4 rather than naming the ones already in view.

### 2.4 Finding the events: category entry point mapping

The event-reset rule (§2.2) and observed-event targeting (§2.3) both depend on knowing which events matter. Listing them from the sponsor's side produces a short list, biased toward the events the sponsor already happens to see. Derive them instead.

A **category entry point (CEP)** is an occasion that makes a buyer think of the category and search memory for who is in it — the when, where, why, with whom and what-just-happened of a buying situation. CEP mapping is the buyer-side enumeration of those occasions.

**Procedure:**

1. **Enumerate from the buyer's side.** List the occasions when the category need arises, in the buyer's terms, cued by situation prompts — what just changed, what are they doing, who is with them, what are they feeling. Breadth-first. Do not filter by what the sponsor sells.
2. **Weight each occasion** by how much of the decision it re-opens and how much value rides on it. In rare-purchase categories a single entry point can carry most of the acquisition, so frequency is not the ranking.
3. **Mark observability.** For each occasion: can the sponsor see it in its own data, in a partner's data, in a public registry, or not at all?
4. **Route by observability.** Observable occasions become the trigger list for event-timed offers (§2.2) and observed-event targeting (§2.3). **Unobservable but high-value occasions are a retrieval problem, not an incentive problem** — route them to brand and distribution, and out of the incentive budget.

**The boundary that matters most.** An incentive converts at an entry point; it does not create retrieval at one. An offer is visible only to buyers already in contact with the sponsor. Whether the sponsor is considered at all is decided in memory, before any offer is seen, and is bought with reach, consistency and distinctive assets — a different budget, with a different measurement. Selling an incentive programme internally as the way to win an entry point is the most common way this spend is oversold (I13).

**Measuring retrieval is admissible.** CEP-prompted recall — cue the buyer with the entry point, count which providers come to mind — is memory measurement, not stated preference. It does not fall foul of the parent standard's L1, which bans asking buyers what they would pay, not asking them what they remember.

**Contrastive pair:**

- ❌ "We will target the refinance date, the annual review and the complaint." (three events the sponsor happens to see)
- ✅ "Twelve occasions enumerated buyer-side: four observable in our data, two through partners, six not observable. The four become triggers. The largest unobservable one is a brand brief, not an offer."

---

## Part 3 — Costing conventions

1. **Normalise per 1,000 eligible customers.** The sponsor's own counts then convert the model instantly, and mechanics become comparable.
2. **Band everything** pess / central / opt. Headline = central, never optimistic.
3. **Prefer conditional payment structures** (pay on the behaviour, not on enrolment): cost then scales with success and the pessimistic corner is bounded by design.
4. **Flag every non-measured figure.** Illustrative and model-derived values are marked as such and never blended silently with measured ones.
5. **State the funding ceiling.** Every recurring offer has a revenue line that funds it; if that line is regulated or competed, the design must survive its compression.

---

## Part 4 — The data register: desk validation before experimentation

Most of a costing de-risks for free from the sponsor's own records. Before any test, build a register — one row per model parameter:

```
parameter → current assumption (band + evidence tier) → internal dataset
that validates it → what a materially different answer changes
```

Run the register to completion first. Experiments are for the parameters records cannot supply — which, with V and C pinned, is almost always take-up (B) and deadweight. Testing what a database query could answer is wasted budget and wasted statistical power.

---

## Part 5 — The experiment

### 5.1 Design

- **Randomisation unit.** Individual RCT by default. Switch to cluster designs (geo cells, time cohorts, matched branches) when the offer leaks between individuals — spread by intermediaries, word of mouth, or public advertising. Analyse clusters with difference-in-differences on matched cells (I11).
- **The holdout is the deadweight measurement.** Control-group behaviour *is* the counterfactual — this is the whole reason the test can price what no literature can.
- **Primary metric = the target behaviour**, defined before launch. Never an engagement proxy — clicks, enrolments, and offer views are not behaviours the sponsor earns from (I8).
- **Persistence is mandatory.** A follow-up window (typically 6–12 months) measures whether the behaviour survives the incentive. Value claimed on launch-window behaviour alone is lint (I5).
- **Guardrail metrics.** Name in advance what the offer must not damage (cohort quality, margin mix, complaint rates).
- **Diagnose retrieval separately.** Where the mechanic depends on being considered at an entry point (§2.4), pair the behavioural test with CEP-prompted recall in the same cells, measured before and at readout. Weak conversion and weak retrieval look identical in the outcome metric and need opposite fixes — a better offer, or being remembered at all.

### 5.2 Sizing and duration

Rough minimum sample per arm, for a proportion outcome at 95% confidence / 80% power:

```
n ≈ 16 × p̄(1 − p̄) ÷ d²        (p̄ = average rate across arms, d = detectable difference)

Fast, common behaviours (activation): hundreds per arm, weeks to read.
Slow, rare behaviours (attrition): thousands per arm, 12+ months — and no
valid early call on the primary metric (I9). Match the test's clock to the
variable's clock, and give slow-variable mechanics measurement budget, not
programme budget, until they report.
```

### 5.3 Decision rules — registered before launch

Every test pre-registers, in writing, before the first offer lands (I3):

- **Scale threshold**, tied to unit economics: e.g. *scale if cost per persisting incremental behaviour < ⅓ × validated contribution*. The ⅓ multiple inherits the parent standard's Gate 2 logic — deflators and decay routinely halve realised value.
- **Kill threshold**: the result below which the mechanic is dropped without renegotiation.
- **The benchmark rule:** a mechanic is judged against the *cheapest alternative* way of buying the same outcome — a product fix, a default, a service change — never against doing nothing (I7). An incentive that works but costs more than the product-shaped alternative still fails.

### 5.4 The calibration loop

The first cohort read outranks the entire model. After each test:

1. Compare observed take-up against the B-predicted band → corrected B for this offer class.
2. Compare control-group behaviour against the assumed deadweight → corrected deadweight fraction.
3. If the observed *ordering* across mechanics deviates from the predicted ordering, a score is wrong — find which, correct it, re-rank before scaling any spend (I12).
4. Bank the corrected parameters. They transfer: every future incentive decision in the organisation reuses them. **A correctly run test programme is buying a behavioural pricing capability; the incentive programme is merely its first application.**

---

## Part 6 — Worked example (illustrative; all figures invented)

**Offer:** £50 bonus for ≥£500 of card spend in 90 days, targeted at the *observed state* of card dormancy. **Sponsor economics:** validated contribution £340/yr per active card.

- **Score:** V 0.95 (cash bonus) · C 0.9 (contractual) · B 0.6 (moderate habit change; card already held) → behavioural value ≈ £26 vs compliance effort ≈ £10–20 → passes, multiple 1.5–3× → moderate take-up predicted.
- **Cost (per 1,000 dormant):** take-up banded 5/10/20% → £2.5k/£5k/£10k paid, only on compliance.
- **Test:** individual RCT, ~1,000/arm (detects 3pp on a ~3% control base); primary = activation at 90 days; persistence at 6 and 12 months; guardrail = spend quality.
- **Registered rule:** scale if cost per persisting activation < ⅓ × £340; kill if > 1×; benchmark = making the card the default settlement instrument (the product-shaped alternative).
- **Calibration:** observed take-up 8% against the 10% central prediction → B corrected 0.6 → 0.55 for habit-change offers; control activation 2.5% → deadweight confirmed near zero.

The example shows the standard doing its job twice: cost bounded by conditional design, and the test output being a *reusable parameter*, not just a verdict.

---

## Part 7 — Lint rules

Run on any incentive analysis or test plan before presenting it. Report failures by rule number.

- **I1 — No holdout.** Any test without a randomised or matched-cell control.
- **I2 — Propensity without precision.** Propensity-targeted spend with no base-rate × lift arithmetic shown, or base rate < ~10% with no observed-state redesign considered.
- **I3 — Unregistered decision rule.** Scale/kill thresholds set, or changed, after results are visible.
- **I4 — Take-up as success.** Take-up reported without incremental-vs-control behaviour.
- **I5 — Persistence assumed.** Value claimed from the launch window with no follow-up measurement.
- **I6 — Deadweight unreported.** Spend to would-have-anyway compliers not separated in the readout.
- **I7 — Zero benchmark.** A mechanic judged against doing nothing rather than the cheapest alternative route to the same outcome.
- **I8 — Proxy metric.** An engagement measure (clicks, enrolments, views) as the primary metric.
- **I9 — Early call on a slow variable.** A retention/attrition mechanic read before the variable can plausibly move.
- **I10 — Unjustified deflator.** A B score without an anchor and one sentence of justification; or V/C left unpinned when the design could pin them.
- **I11 — Leaky randomisation.** Individual randomisation where the offer spreads through intermediaries, advertising, or word of mouth.
- **I12 — Uncalibrated scale-up.** Spend scaled without reconciling observed take-up, deadweight, and mechanic ordering against the predictions.
- **I13 — Undermapped events.** An event-timed offer, or a B ≈ 1.0 event-reset score, with no CEP map on record (§2.4); or an incentive proposed as the fix for a retrieval problem the map has identified.

---

## Prior art and positioning

- **Objective Customer Value standard (TMTH, 2026)** — the parent: definition, deflation chain, gates, calibration loop. This note operationalises §4.1's deflators for offers and §4.3.4's loop as a test design.
- **Prospect theory and the 9× problem** — Kahneman & Tversky (1979); Gourville (HBR, 2006): the behavioural-drag deflator.
- **Field-experiment practice** — the FCA's banking field trials (Occasional Papers 36/40) as the exemplar of default-vs-encouragement designs; Duflo & Banerjee on RCT discipline; Kohavi, Tang & Xu on online controlled experiments (guardrails, proxy-metric hazards).
- **Category entry points and mental availability** — Romaniuk & Sharp (Ehrenberg-Bass Institute): the retrieval construct and the prompted-recall measurement protocol behind §2.4.
- **Loyalty-programme scepticism** — Dowling & Uncles (1997); Sharp, *How Brands Grow*: continuous reward schemes skew to buyers who would have bought anyway. That is §2.3's deadweight finding reached from a different direction, and the two converge on the same verdict for ongoing schemes. Scope caution: this evidence base is largely repertoire categories with frequent purchase. In subscription categories with single-homing and rare purchase occasions, the critique bites harder on ongoing schemes and less on one-off state-change offers — while the entry-point argument gets stronger, because acquisition concentrates into a few rare occasions.
- **Deadweight in incentive schemes** — the UK Incentivised Switching Scheme (2019–21) as the cautionary natural experiment: scheme-scale reporting without retention measurement is what this standard's I5/I6 exist to prevent.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
