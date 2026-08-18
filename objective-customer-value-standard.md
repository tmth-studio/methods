# Objective Customer Value (OCV) — measurement and uptake-prediction standard

**Version 1.0 · August 2026 · Tough Minds, Tender Hearts**

An operating manual an AI assistant can execute. It defines a single quantity — Objective Customer Value — gives the formula and a measurement protocol for computing it from observable data, and gives a procedure for converting it into a prediction of solution uptake. Decision procedures, contrastive examples, and lint rules throughout.

---

## Part 0 — What this standard is (read first, play back before executing)

**The problem this solves.** Most value estimates are one of two bad kinds. The first asks customers what they would pay — a stated preference, systematically unreliable. The second lists the vendor's features and asserts benefits — a supply-side story with no customer arithmetic in it. Both produce numbers that cannot predict whether anyone will actually adopt the solution.

**The claim.** A customer's value from a solution is an objective quantity. It is the difference between their expected economic position with the solution and their expected economic position under their current routine — computed entirely from observable parameters of what they do today. No survey answers. No vendor features. If you cannot observe the parameter, you band it and label it an assumption.

**Value is not willingness to pay, and willingness to pay is not uptake.** These are three different quantities, linked by a deflation chain this standard makes explicit:

```
OCV  →(×visibility ×credibility ×behavioural drag)→  WTP  →(vs price + switching cost)→  UPTAKE
```

Skipping the chain — treating a value estimate as an uptake forecast — is the single most common error in business cases.

**Execution gate.** Before running any procedure below, play back to your user in three sentences: (1) what OCV is, (2) the deflation chain, (3) which of the three quantities their question actually needs. Do not proceed until they confirm.

---

## Part 1 — Definition

> **Objective Customer Value (OCV)** is the expected economic gain to a specific customer segment from replacing its current routine with the solution, computed from observable parameters of the current routine, risk-adjusted, and expressed in money per customer per period (or per transaction).

Three properties make it *objective*:

1. **Grounded in the current routine.** Every input is something the customer already does, spends, loses, or risks — observable in their behaviour, accounts, or records today. The solution appears in the formula only as changes to those parameters.
2. **Observed, not stated.** No input may come from asking customers what something is worth to them or what they would pay. Stated answers may be used only as corroboration, never as the source.
3. **Risk-adjusted.** Where an outcome is uncertain (a payment that may not arrive, a claim that may not succeed, a failure that may not happen), it enters as probability × magnitude — never as the optimistic point value and never omitted because it is "intangible".

**What OCV is not:**

| ❌ Not this | Why |
|---|---|
| Willingness to pay | WTP is a deflated fraction of OCV — a behavioural quantity, not an economic one. Customers underweight gains, overweight what they give up, and discount what they cannot verify. |
| The vendor's cost-plus price | Price is a claim on OCV, set by the vendor. It says nothing about how much value exists. |
| Survey or conjoint output | These measure stated preference. Useful as a cross-check; inadmissible as a source. Where used, haircut them and label them. |
| A benefits list | "Saves time, reduces risk, improves visibility" is a hypothesis inventory, not a measurement. Each item must be converted to money via Part 2 or dropped. |

---

## Part 2 — The formula

### 2.1 General form

```
OCV = EV(with solution) − EV(current routine)

where, for each state:
EV = Σ [ p_i × outcome_i ]  −  C_expended  −  C_foregone  −  C_risk  −  C_friction
```

- `p_i × outcome_i` — each uncertain outcome at its probability-weighted value
- `C_expended` — cash the customer currently pays out to run the routine
- `C_foregone` — value the customer fails to capture because the problem exists
- `C_risk` — unpriced risk the customer is carrying, priced as probability × loss
- `C_friction` — time and error load, priced at loaded rates

### 2.2 The four cost classes

Every candidate "benefit" must be classified into exactly one class and priced by that class's rule. If it fits no class, it is not monetizable — record it as unpriced and exclude it from OCV.

| Class | Definition | Pricing rule | Typical evidence |
|---|---|---|---|
| **Expended** | Cash currently paid to manage the problem: fees, subscriptions, staff time already budgeted, write-offs taken | Sum the actual outflows from records | Invoices, P&L lines, payroll allocation |
| **Foregone** | Revenue, income, or asset value not captured *because* the problem exists | Size the blocked value × the probability the solution actually unblocks it | Sales records, utilisation data, comparable benchmarks |
| **Risk-borne** | A loss that may occur, currently uninsured and unmanaged — what is loosely called "fear" | probability of loss × magnitude of loss (= the fair insurance premium for the exposure) | Incident rates, claims data, industry loss statistics |
| **Friction** | Time and error load of running the routine — what is loosely called "stress" | hours × fully-loaded rate + error rate × cost per error | Time studies, support logs, rework records |

This taxonomy is the fix for the standard failure mode where "hard" savings get counted and "soft" ones get waved at. Fear and stress are not soft; they are risk-borne and friction costs that have simply not been priced. Price them or exclude them — never adjectivise them.

**Contrastive pair:**

- ❌ "The tool reduces the stress of chasing late payers (qualitative benefit)."
- ✅ "Chasing late payers consumes 6.5 hours/month at a £42/hr loaded rate (friction, £273/month) and 2.1% of invoice value is written off annually (expended, £4,100/year on £195k revenue)."

### 2.3 Special cases

- **Deterministic case.** If nothing is probabilistic, the formula collapses to `OCV = costs eliminated` — the classic "size the loss the customer escapes". This is the special case, not the general one; treat any analysis with no probabilities in it as a prompt to check what uncertainty was ignored.
- **Novel-outcome case.** If the solution delivers an outcome the customer cannot obtain today at any price, there is no current-routine cost to displace. Then `EV(current)` contains a foregone term equal to the blocked outcome's value × the probability the customer would capture it — evidenced from adjacent markets where the outcome *is* purchasable. If no such evidence exists, OCV for that component is a labelled assumption, not a number.
- **Two-sided or multi-party case.** Compute a separate OCV per party. Never sum OCVs across parties into one number — each party decides adoption against its own OCV.

### 2.4 Outcome framing — the largest lever in the calculation

The same solution can carry values an order of magnitude apart depending on **which customer outcome it is framed against**, because different outcomes sit in different budgets with different magnitudes. Before computing anything, enumerate the plausible outcome framings, compute OCV under each, and select the largest framing that the customer would *recognise as causally true*. Record the rejected framings. An OCV computed under an unexamined framing is lint (L3).

---

## Part 3 — Measurement protocol

Run these steps in order. Do not skip a step because the answer feels obvious — the load-bearing costs are usually the ones the customer has adapted around and no longer notices.

**Step 1 — Define the customer and the outcome.** One segment, one high-importance outcome, stated in the customer's terms ("get paid on time", "pass the audit", "keep the line running"). If you cannot name the outcome without mentioning the solution, stop — you are working vendor-side.

**Step 2 — Map the current routine.** What the segment actually does to achieve the outcome today: the sequence of actions, what they buy and use, what they believe, where the process hurts. Observed or documented behaviour outranks self-report at every point. The gap between what customers say they do and what records show they do is where the real cost usually lives.

**Step 3 — Extract and classify costs.** Walk the routine; log every candidate cost into the four classes of §2.2. Apply each class's pricing rule. For every parameter record: value, unit, source, and an evidence tier:

| Tier | Meaning |
|---|---|
| **T1** | Measured from this segment's own records or a controlled trial |
| **T2** | Published data for this segment (industry body, regulator, credible survey of behaviour — not of preference) |
| **T3** | Analogue from an adjacent segment or market, with the bridge stated |
| **T4** | Assumption — no external source. Must be banded and flagged |

**Step 4 — Band every parameter.** Three values per parameter — pessimistic, central, optimistic — with the direction chosen so "pessimistic" always means *worse for the case being made*. Point estimates flatter; asymmetric bands are the honest default.

**Step 5 — Compute OCV** under the general formula, at all three band corners. Report: central OCV, the pessimistic corner, and which single parameter moves the result most (one-way sensitivity). If the pessimistic corner changes the decision, the analysis is not done — the dominant parameter needs better evidence, not a better narrative.

**Step 6 — State the ceiling honestly.** OCV is the ceiling on what the solution can capture from this segment. Present it as `OCV ≈ [central per-customer value] × [segment population]`, with the per-customer bands attached. Never present the optimistic corner as the headline.

---

## Part 4 — From OCV to uptake prediction

This is the part most value analyses omit, and the reason they fail to predict adoption. OCV sets the ceiling; three deflators and two gates determine what actually happens.

### 4.1 The deflation chain

```
WTP = OCV × V × C × B
```

| Deflator | What it measures | How to score it |
|---|---|---|
| **V — Visibility** | Can the customer *see* the causal link between this solution and the cost it removes? Foregone and risk-borne costs are real but often invisible to the customer. | 1.0 = the cost is a line in their accounts. 0.5 = they acknowledge it when shown. 0.2 = they must take the causal chain on trust. |
| **C — Credibility** | Does the customer believe the solution will actually deliver the parameter change claimed? Unproven mechanisms deflate hard. | 1.0 = demonstrated in their own operation (trial). 0.7 = proven in a peer they recognise. 0.3 = vendor claim only. |
| **B — Behavioural drag** | Loss-aversion asymmetry: customers overweight what the switch makes them give up (habit, sunk learning, incumbent relationships) by roughly 3×, while innovators overweight their own benefits by roughly 3× — a ~9× perception gap on habit-embedded routines. | 1.0 = the solution slots into the existing routine unchanged. 0.6 = moderate routine change. 0.3 = the routine itself must be abandoned and relearned. |

Score each deflator explicitly, with one sentence of justification. Multiplying unexamined 1.0s is lint (L7).

### 4.2 The two gates

**Gate 1 — Surplus gate (will they buy at this price?):**

```
Adopt if:  WTP  ≥  Price + Switching cost
```

Switching cost is priced like any friction cost: implementation hours × loaded rate + integration spend + parallel-running period. It is paid once; annualise it over a defensible horizon (default 3 years) when comparing against a recurring price.

**Gate 2 — Multiple screen (is the case strong enough to survive being wrong?):**

```
OCV ÷ Price   ≥ 3   → strong case; uptake limited by reach, not economics
OCV ÷ Price   1–3   → marginal; uptake will be slow and sensitive to V, C, B
OCV ÷ Price   < 1   → no case; do not model adoption, redesign or reprice
```

The 3× threshold exists because the deflators in §4.1 routinely halve or quarter WTP relative to OCV. A solution priced at parity with OCV fails in practice even when the arithmetic says it shouldn't.

### 4.3 Predicting uptake across segments

1. Compute OCV, deflators, and both gates **per segment** (Part 3 per segment — do not average across segments).
2. Rank segments by `(OCV ÷ Price) × V × C × B`. This is the **adoption-order prediction**: the top-ranked segment adopts first; segments failing Gate 1 do not adopt at all at the current price.
3. For segments passing both gates, the addressable ceiling is the segment population; the realistic first-period penetration is a T3/T4 parameter — band it (a defensible default band for a new B2B solution is 1–5% of the passing segment in year one) and label it an assumption. Do not dress this number up: pre-launch, penetration is the least evidenced parameter in the model.
4. **Calibration loop.** The first real sales data outranks the whole model. After any pilot: compare observed conversion against the predicted adoption order; if a lower-ranked segment converts better, one of the deflator scores is wrong — find which, correct it, and re-rank before scaling spend.

### 4.4 Using the prediction

- **To predict uptake of a proposed solution:** run Parts 3–4; report adoption order, the gate verdicts per segment, and the dominant sensitivity. That *is* the uptake prediction — an ordering plus a gated ceiling plus a banded penetration assumption, not a false-precision adoption curve.
- **To diagnose weak uptake of a live solution:** compute OCV and the deflators for the segments that are *not* converting. The failure is almost always locatable: OCV < price (no case), V low (value invisible), C low (claim unproven), or switching cost unpriced by the vendor and decisive for the customer.
- **To set price:** price against OCV and the gates, not against cost-plus. The strong-case region is price ≤ OCV/3 with V, C, B managed upward by design (make the cost visible, prove the mechanism in-segment, minimise routine change).

---

## Part 5 — Worked example (illustrative; all figures invented)

**Solution:** an automated invoice-chasing tool for small trade contractors. Price: £600/year. **Segment:** UK contractors, £150k–£400k revenue, invoicing ~£20k/month on 30-day terms.

**Step 1–2.** Outcome: "get paid what I'm owed, on time." Current routine: owner chases by phone/email in evenings; some invoices drift 60–90 days; a fraction are written off; a credit line covers the cash gap.

**Step 3 — costs of the current routine (central values, tiers shown):**

| Cost | Class | Calculation | Annual value | Tier |
|---|---|---|---|---|
| Write-offs | Expended | 1.8% of £240k invoiced | £4,320 | T2 |
| Credit-line interest on late-paid balance | Expended | £9,000 avg late balance × 11% | £990 | T2 |
| Owner chasing time | Friction | 5 hrs/month × £45/hr | £2,700 | T3 |
| Jobs not taken while cash-constrained | Foregone | £12,000 margin blocked × 0.25 probability the constraint binds | £3,000 | T4 ⚠ |
| Insolvency exposure from one large default | Risk-borne | 0.8% × £15,000 | £120 | T2 |

**Step 4–5.** `EV(with)` assumes the tool cuts write-offs to 0.9% (vendor's mechanism: earlier, systematic chasing — scored for credibility below), halves chasing time, and shortens the late balance by a third. 

`OCV (central) = £2,160 + £330 + £1,350 + £750 + £30 ≈ £4,620/year.` Pessimistic corner ≈ £1,900; optimistic ≈ £7,400. Dominant parameter: the write-off reduction (T3 until trialled).

**Step 6 + Part 4.**

- Multiple screen: `£4,620 ÷ £600 ≈ 7.7×` → strong case.
- Deflators: V = 0.9 (write-offs and interest are visible in their accounts; the foregone-jobs term is not — excluded from the WTP calc, kept in OCV with its T4 flag), C = 0.7 (proven in peer segment), B = 0.9 (slots into existing invoicing). `WTP ≈ £4,620 × 0.9 × 0.7 × 0.9 ≈ £2,600`.
- Surplus gate: switching cost ≈ £300 one-off → annualised ~£100. `£2,600 ≥ £700` → passes comfortably.
- Prediction: this segment adopts; year-one penetration banded 1–5% (T4, flagged); first calibration point = trial conversion vs the neighbouring segment (£400k–£1m revenue, where an office manager already chases and friction OCV is lower — predicted to convert *worse* despite being "bigger customers").

That last sentence is the standard doing its job: the model predicts the *smaller* customer adopts first, against the sales instinct to chase larger ones — a falsifiable, decision-changing prediction.

---

## Part 6 — Lint rules

Run these on any OCV analysis before presenting it. Report each failure by rule number.

- **L1 — Stated-preference source.** Any parameter sourced from "customers said they'd pay X" or survey importance scores. Inadmissible; find a behavioural source or band it as T4.
- **L2 — Vendor-side benefit.** Any term that is a gain to the vendor (retention, upsell, data) counted inside customer OCV.
- **L3 — Unexamined outcome framing.** OCV computed under a single outcome framing with no record of alternatives considered (§2.4).
- **L4 — Adjectivised cost.** A "soft" benefit named but not priced through the risk-borne or friction rules — either price it or exclude it explicitly.
- **L5 — Missing probability.** An uncertain outcome entered at its full value, or an uncertain unblocking (foregone class) entered without its capture probability.
- **L6 — Point estimates.** Any parameter without a pess/central/opt band, or a headline built on the optimistic corner.
- **L7 — Free deflators.** WTP presented as equal to OCV, or deflators set to 1.0 without justification.
- **L8 — Unpriced switching cost.** Gate 1 run without a computed switching cost.
- **L9 — Cross-party summing.** OCVs of different parties added into one number (§2.3).
- **L10 — Uptake without gates.** A penetration or revenue forecast presented for a segment that has not passed both gates.
- **L11 — Ceiling inflation.** Segment population sourced from a market-size report rather than from the segment definition used in Steps 1–3.
- **L12 — Stale calibration.** Live sales data exists but the deflator scores and adoption ranking have not been reconciled against it (§4.3.4).

---

## Prior art and positioning

This standard consolidates and extends several established lines of work; none alone provides the full chain.

- **Economic Value to the Customer (EVC)** — Forbis & Mehta (1981): reference price + differentiation value. OCV generalises EVC with risk adjustment, the four-class cost taxonomy, and the deflation chain to uptake.
- **Escaped-loss doctrine** — the principle that willingness to pay is governed by the size of the loss a customer escapes, not the quality of the experience offered, is central to the venture-design practice of Erik Simanis and collaborators. This standard owes that orientation to their work while the construct, formula, taxonomy, protocol, and uptake procedure here are original to TMTH.
- **Jobs-to-be-done / Outcome-Driven Innovation** — Christensen; Ulwick: outcome framing and routine mapping (Steps 1–2).
- **Prospect theory and the 9× problem** — Kahneman & Tversky (1979); Gourville, *Eager Sellers and Stony Buyers* (HBR, 2006): the behavioural-drag deflator.
- **Diffusion theory** — Rogers; Bass: adoption ordering and the caution against smooth adoption curves without evidence.

---

*© Tough Minds, Tender Hearts. All rights reserved. This document may be read and executed by AI assistants; republication requires permission.*
