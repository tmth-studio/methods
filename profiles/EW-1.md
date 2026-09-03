# Jurisdiction profile EW-1 — England and Wales

**Profile EW-1 · 3 September 2026 · read with the Calmly Resolve Assessment Methodology Standard v2.0 · Tough Minds, Tender Hearts Ltd · Calmly Resolve**

This is the first jurisdiction profile published under §7 of the standard. It holds the England and Wales inputs that sections 2, 3 and 5 of the standard read. The standard says how an assessment is made. This file says what the assessment reads. A report produced under both states **`v2.0 / EW-1`**.

**Country:** England and Wales. **Currency:** pounds sterling (GBP). **Courts:** the County Court, small claims track and limited fast track.

**How to read the provenance marks.** Every number carries one of two marks.

- **Researched** — taken from a published source. The source and the date it was read are stated.
- **Judgement-set** — set by Calmly, with no data fitted to it. The band it is pre-registered within is stated, and so is the thing that will measure it.

A judgement-set number is never presented as researched. Where the record holds two readings of the same fact, both are shown and the disagreement is named.

---

## Entry 1 — path tree

The outcome states an admitted claim can reach, and the share of claims that reach each one. The tree is the valuation waterfall's v1.0 tree, carried unchanged into waterfall v1.1. It runs at the baseline evidence tier E2 and before the claim-level factors are applied.

### Terminal states

| Outcome state | Share of admitted claims | Recovered, as a share of face | Provenance of the share | Provenance of the recovery |
|---|---|---|---|---|
| Settles before issue | 45.0% | 75% | Researched, bracketed — specimen claim file SP-007 (26 Aug 2026) | **Judgement-set** — a decaying-price schedule, a design choice |
| Issued, then resolved without judgment | 15.4% | 70% | Residual of the official flows below | **Judgement-set** — design choice |
| Default judgment, then collection | 33.6% | 45% | Researched — see entry 3 | Researched — tribunal-award analogue (BIS/IFF tribunal awards study 2013) |
| Defended, then settled | 4.8% | 70% | Researched — 80% of defended claims settle | **Judgement-set** — same schedule as the issued-and-resolved state |
| Defended, tried and won | 1.0% | 55% | Inference — 80% of tried claims succeed | **Judgement-set** — the default-judgment collection rate plus 10 points |
| Defended, tried and lost | 0.2% | 0% | Inference, the residual of the row above | Not applicable |

The six shares sum to 100%. A further deduction of 3.2% of gross applies as a forward-flow haircut. That figure is **judgement-set**: it is a design assumption, with no market quotation behind it.

### The underlying parameters

| Parameter | Value | Mark | Source |
|---|---|---|---|
| Settles before issue | 0.450 | Researched, bracketed | Specimen claim file SP-007, 26 Aug 2026 |
| Issued and resolved, as a share of issued claims | 0.280 | Researched, residual | The residual of the official flows |
| Default judgment, as a share of issued money claims | 0.610 | Researched | MoJ Civil Justice Statistics Quarterly, official range 60–64% |
| Defended, as a share of issued **money** claims | 0.110 | Researched | MoJ Civil Justice Statistics Quarterly, Jan–Mar 2026; corroborated by the MoJ money-claim cohort tool |
| Defended claims that settle | 0.800 | Researched | HMCTS small claims mediation data |
| Tried claims that succeed | 0.800 | Inference | Not a published figure |

**The defence rate — resolved 3 September 2026.** The record carried two readings. They are both real, they come from the same publication, and they are percentages of different things. Stating the denominator settles it.

| Reading | Arithmetic | What it is the rate of | Status |
|---|---|---|---|
| **11.3%** | 51,000 money-claim defences ÷ 450,000 money claims issued, Jan–Mar 2026 | Defences on **money claims** | **The rate this profile uses.** The tree carries 0.110 |
| 13.7% | 72,000 defended claims ÷ 527,000 County Court claims received, Jan–Mar 2026 | Defences on **all County Court claims**, money and damages together | Correct as a fact. Not used: it counts 16,000 damages-claim defences and other claim classes this profile does not admit |
| 16.0% | 72,000 defended claims ÷ 450,000 money claims issued | Nothing | **Withdrawn.** It divides the all-claims count of defences by the money-claims count of issues. The two lines come from different populations, so the result is not a rate of anything |

The published quarter reports 527,000 County Court claims received. Of those, 450,000 (85%) were money claims. It reports 72,000 claims defended in total. Of those, 51,000 were money-claim defences and 16,000 were damages-claim defences. Read 3 September 2026.

**Why the money-claims reading is the one the tree needs.** The tree runs on money claims, and every other rate in it already uses that denominator — the default-judgment rate in entry 3 is a share of issued money claims. A defence rate taken across all claim types put into the same tree would count defences the tree has no issues for.

**Independent corroboration, on a better construct.** The MoJ money-claim cohort tool follows every money claim issued in a year through to its end. That is what the tree models. The quarterly bulletin instead compares issues and defences arising in the same quarter, which is a flow ratio and not a cohort. The 2024 cohort gives 10.8% defended and the 2023 cohort 11.1%. The tree's 0.110 sits between them.

**One arithmetic note, carried rather than corrected here.** 51,000 ÷ 450,000 is 11.3%, and the record has been labelling that division 11.0%. The tree's 0.110 is right against the cohort readings and wrong against its own stated division by 0.3 of a point. Correcting the parameter is a model recompute and is held for the CEO's numbers approval; it is named here so no reader has to find it again.

**Sources behind the tree.** MoJ Civil Justice Statistics Quarterly Q1 2026; Civil Justice Council enforcement report, April 2025; HMCTS small claims mediation data; BIS/IFF tribunal awards study 2013; HCEOA 2024; EX50A fees, November 2025 edition. All carried through specimen claim file SP-007, 26 August 2026.

## Entry 2 — court and procedural fee schedule

**Effective date of the schedule below: 13 July 2026**, the date the EX50 civil court fees page was last updated. Read 2 September 2026.

### Money-claim fees by value band

| Face value, up to | Issue fee | Hearing fee | Verified against EX50A? |
|---|---|---|---|
| £300 | £35 | £27 | No — reconstructed |
| £500 | £50 | £59 | No — reconstructed |
| £1,000 | £70 | £85 | No — reconstructed |
| £1,500 | £80 | £123 | No — reconstructed |
| £3,000 | £115 | £170 | **Yes** — verified in specimen claim file SP-007 |
| £5,000 | £205 | £346 | No — reconstructed |
| £10,000 | £455 | £346 | No — reconstructed |
| Above £10,000 | 5% of face | £346 | No — reconstructed |

**Two warnings on this table.** First, only the £1,500–£3,000 band is verified. Every other row was reconstructed for the model and must be checked against EX50A before any live pricing. Second, the table was built against the November 2025 edition of EX50A, while the effective date above is the July 2026 edition. The two editions have not been reconciled row by row. The £115 issue fee and the £455 fee at £5,000–£10,000 are separately confirmed against the July 2026 edition; the rest are not.

There has been no discount for bulk filing since 18 May 2021, when the Civil Proceedings Fees (Amendment) Order 2021 (SI 2021/588) removed the separate online fee. Bulk users on the secure data transfer route pay the same fee as anyone else. Researched, read 2 September 2026.

### Fixed costs and procedural fees in the escalation path

| Step | Amount | Kind | Source |
|---|---|---|---|
| Issue the claim, solicitor's fixed cost, £1,000–£5,000 | £80 | Recoverable fixed cost | Practice Direction 45, Table 2 (2024 tables) |
| Request default judgment | £22 | Recoverable fixed cost, no court fee applies | Practice Direction 45, Table 3 |
| Enforcement instruction, writ | £51.75 | Recoverable fixed cost | Practice Direction 45, Table 7 |
| Writ fee | £82 | Court fee, refunded only on full recovery | EX50, fees order 7.1; HCEOA fees and charges page |
| Compliance fee when the writ fails | £79 | Payable by the creditor | Taking Control of Goods (Miscellaneous Amendments) Regulations 2026, in force 1 May 2026 |
| Attachment of earnings | £8.50 | Recoverable fixed cost | Practice Direction 45 |
| Third party debt order | £98.50 | Recoverable fixed cost | Practice Direction 45 |
| Charging order | £110 | Recoverable fixed cost | Practice Direction 45 |
| Second enforcement method | £139 | Court fee, half of it lost on average | EX50 |

All researched, checked 2 September 2026. The split between court fee and recoverable fixed cost is verified for the rows where the kind column states it and is not separately verified elsewhere.

## Entry 3 — undefended-judgment rate

Two rates, two denominators. Both are needed, and they are not interchangeable.

| Rate | Value | Denominator | Source |
|---|---|---|---|
| Share of judgments entered that are default judgments | **94%** | 256,000 judgments entered, Jan–Mar 2026 | MoJ Civil Justice Statistics Quarterly, Jan–Mar 2026 |
| Share of issued money claims that reach default judgment | **61%** | Issued money claims; the official range is 60–64% | MoJ Civil Justice Statistics Quarterly |

Both researched. Read 2 September 2026.

**Context from the same publication.** The County Court received 527,000 claims in Jan–Mar 2026, 85% of them money claims. A small claim that reaches trial takes a median of **37.6 weeks** from issue. A judgment stays on the Register of Judgments for six years unless it is paid within one calendar month.

## Entry 4 — enforcement route, step by step

Each step states its precondition and its cost. Costs are the entry 2 figures.

1. **Judgment.** On an undefended claim, request default judgment. Recoverable fixed cost £22. No court fee. Where the judgment is for a sum payable by instalments, it is entered as a judgment for the full sum payable by instalments, never as a Tomlin schedule.
2. **Change of party, where the claim or the judgment debt has been sold.** The sale is an absolute written assignment under section 136 of the Law of Property Act 1925, with written notice to the defendant. The buyer then applies without notice under CPR 83.2(3)(b), which requires permission where a change has taken place in the parties entitled to enforce. A judgment debt is a thing in action, so section 136 reaches it. Confidence in the record: medium.
3. **Wait for a default, where the order is by instalments.** County Courts Act 1984 section 86: a warrant of control may not issue until after default in payment of an instalment.
4. **Warrant of control, county court.** The route for judgments under £600. That threshold is a rule, not a choice.
5. **Writ of control, High Court.** Available on judgments of £600 and above. Writ fee £82, refunded only on full recovery. Compliance fee £79 falls on the creditor when the writ fails.
6. **A second method, where control fails.** Third party debt order, charging order, or attachment of earnings for an individual. Court fee £139, of which about half is lost on average.

All steps researched from published rules and fee pages, read 2 September 2026. The one medium-confidence item is step 2, which rests on the legal closure memo of 2 September 2026 and is carried with counsel ratification outstanding.

## Entry 5 — limitation period by claim class

| Claim class | Period | Runs from | Statute | Mark |
|---|---|---|---|---|
| K1 — consumer goods and services, county court | Six years | The date the cause of action accrued | Limitation Act 1980, section 5 (simple contract) | Researched |
| K2 — deposit and housing, county court, disrepair below the small-claims boundary | Six years | The date the cause of action accrued | Limitation Act 1980, section 5 | Researched |
| K4 — platform contract debt, county court | Six years | The date the cause of action accrued | Limitation Act 1980, section 5 | Researched |
| A claim framed in tort rather than contract | Six years | The date the damage occurred | Limitation Act 1980, section 2 | Researched |
| K3 — employment, tribunal-native | **Not carried by this profile** | — | — | — |

K3 is outside the launch book. The valuation waterfall is built on county-court fee objects, so a tribunal-native claim has no fee schedule in this profile and no path tree. Its limitation position is deliberately not stated here rather than stated loosely. A profile that admits K3 needs a per-class fee and flow set of its own.

The limitation period sets the admission window. A claim whose period has expired is refused at intake.

## Entry 6 — solvency registers, named, with refusal conditions

| Defendant's legal form | Register consulted | Admission refused when the register shows |
|---|---|---|
| Company or limited liability partnership | Companies House | Dissolved · in liquidation · in administration · strike-off pending · a first Gazette notice |
| Sole trader or individual | Individual Insolvency Register | An undischarged bankruptcy · a debt relief order · a covering individual voluntary arrangement |
| Partnership | Both registers | Any condition in either row above |

Researched: the registers are public and the conditions are register states. The check runs before admission. **A check that cannot be completed means supplement the file, never admit.**

### Solvency tiers — judgement-set

The tier decides the share of any agreed or ordered sum treated as collectable. Every value below is **judgement-set** within a pre-registered band. No data has been fitted to any of them. Tranche one is what measures them.

| Tier | Collectable share | Pre-registered band | Register position |
|---|---|---|---|
| S-A | 1.00 | 0.95–1.00 | Company or LLP trading, no adverse register signal |
| S-B | 0.85 | 0.70–0.95 | Trading, minor adverse signal such as late filing or charges |
| S-C | 0.75 | 0.55–0.90 | Sole trader or individual, no insolvency record |
| S-D | 0.35 | 0.15–0.60 | Strike-off pending, dormant, or no accounts filed |
| S-E | 0.00 | — | Any refusal condition in the table above. Refused, not priced |

The evidence tiers that sit alongside them are judgement-set on the same terms: E1 0.550 (band 0.470–0.640), E2 0.450 (band 0.400–0.500), E3 0.350 (band 0.250–0.430). E2 is the baseline the path tree runs at.

## Entry 7 — consumer-rights baseline

Liability under §3 section 5 of the standard is assessed against the **Consumer Rights Act 2015**, read with the contract terms. Goods sit under Part 1 Chapter 2 and services under Part 1 Chapter 4. Researched: this is the statute, and it is the one statute version 1.1 of the standard named.

**One change of route to note, because it moves what a consumer holds before Calmly exists.** The Alternative Dispute Resolution for Consumer Disputes Regulations 2015 (SI 2015/542) were revoked on 6 April 2026 by the Digital Markets, Competition and Consumers Act 2024, Schedule 27 paragraph 10, commenced by SI 2026/284. They are replaced by DMCCA Part 4 Chapter 4 and Schedule 26. The 90-day outcome deadline, the closed list of six refusal grounds and the three-week reasoned-refusal notice went with them. Researched, read 24 August 2026.

## Entry 8 — card-rights baseline

What a buyer already holds before the cover exists. Two routes, both narrower than they sound.

**Section 75 of the Consumer Credit Act 1974.** The credit-card lender is equally liable with the seller. It needs four things at once:

- a credit card, not a debit card
- a cash price above £100 and not above £30,000
- an unbroken relationship between the borrower, the lender and the supplier of the thing bought — the FCA has said that paying through a marketplace or other intermediary can break it
- a consumer borrower, so a company buying on a business card is usually outside it

**Scheme chargeback.** A scheme rule, not a law. It works on debit and credit alike, has short deadlines, and turns on evidence. Goods that never arrived are straightforward to evidence. A service performed badly is not, because the site's own record usually shows the service was delivered.

Both researched from published sources, read 3 September 2026.

### Inputs to the residual-rights band

A transaction is placed in a band on five inputs, all taken from public record:

1. the published payment methods
2. whether the site takes the money, and who supplies the thing bought
3. goods against services
4. the typical transaction value against the £100 floor and the £30,000 ceiling
5. whether the seller side trades as a company or as an individual

The three bands are **wide gap** (on most of the value the buyer has no usable card claim), **partial** (a real card claim exists but one structural feature makes it contestable) and **narrow** (most of the money is a consumer credit-card purchase of goods, in range, from a company seller). The band belongs to a site and a country together, never to a site alone. Section 75 stops at the border.

---

## Country-scoped values read by §2 and §3

These are the figures and lists the country-scoped sections of the standard read. They are stated here so that a profile for another country states its own and no reader takes an English figure by default.

| Read by | Value under EW-1 |
|---|---|
| Currency | Pounds sterling |
| Scope bounds (§1) | £200–£25,000 |
| Value floor for admission (§2) | £500 |
| Qualifying evidence classes (§2) | A signed contract or written terms; a payment record; dated photographs or an independent report of the defect; a written admission; proof of non-delivery; correspondence evidencing the disputed promise |
| Consumer-rights baseline for the liability section (§3) | Consumer Rights Act 2015, read with the contract terms — entry 7 |
| Reference classes (§3, §5) | Held under EW-1 and updated only from outcomes coded under EW-1 |

**The £500 value floor is not the whole admission test.** It is the methodological floor: below it, the cost of assessing and resolving a dispute exceeds any realistic recovery, and that holds for anyone applying this standard in England and Wales. Calmly Resolve additionally admits nothing below **£2,500 of face value** into its launch book. That second figure is a commercial choice about which cases the venture takes first. It is not a finding about which cases can be assessed. So it is not a rule of the standard, and not a rule of this profile. It is set and versioned in the Calmly Resolve venture design record, in the C4 admission rules. A case between £500 and £2,500 is assessable under this profile and is outside the launch book.

---

## Open items in this profile

These are stated rather than smoothed over. Each is a defect a reader is entitled to see.

1. **The fee table is verified in one band only.** Seven of the eight rows in entry 2 are reconstructed. They must be checked against EX50A before any live pricing.
2. **Two editions of EX50A are mixed.** The table was built against the November 2025 edition and the effective date is the July 2026 edition. The two have not been reconciled row by row.
3. ~~**Two readings of the defence rate.**~~ **Closed 3 September 2026.** Both readings are right and they measure different populations. The profile uses defences on money claims; the all-claims rate is recorded next to it with its denominator. See the resolution table in entry 1. A third reading, 16.0%, was found in use elsewhere in the venture record and is withdrawn: it divides an all-claims numerator by a money-claims denominator.
4. **The recovery percentages in entry 1 are judgement-set.** Four of the five paying states recover at a judgement-set percentage. The shares of claims reaching each state are researched; what is collected there is mostly not.
5. **Step 2 of the enforcement route is medium confidence.** The permission route on a change of party is carried with counsel ratification outstanding.

The £2,500 launch-book minimum was listed here as item 6 and is now removed. It is not a defect and it was never a rule of this profile. It is set in the Calmly Resolve venture design record, in the C4 admission rules, and the cross-reference above the open items says so.

*Item 3 closed 3 September 2026. Items 1, 2, 4 and 5 remain open.*

---

*Profile EW-1, 3 September 2026. First published with standard v2.0. Profile versions and standard versions move independently. Reports already issued keep the profile version they were produced under.*

*Amended the same day, before any report was issued under it. Two changes. The defence rate is resolved to a stated denominator (entry 1, open item 3). The £2,500 launch-book minimum moved from the open items to a cross-reference, because it belongs to the venture record. No parameter value changed, so the profile name does not change.*
