# Pyramid deck standard — memo to slides with an AI copilot

**What this is:** the TMTH standard for converting a finished Pyramid Principle memo into a slide deck using a chat-based AI assistant (Microsoft 365 Copilot or similar). It assumes the thinking is already done — the memo exists, with its SCQA, governing thought and supporting arguments. The assistant's job is conversion, exhibit design and formatting, not thinking.

**How to use:** give your assistant this document (paste it, attach it, or point it at this page's raw URL), then run the four stages in Part 3 in order, approving each before the next. Version 1.1 · August 2026 · Tough Minds, Tender Hearts.

---

## Part 1 — The rules the assistant must follow

> You are converting a finished Pyramid Principle memo into a presentation. The memo contains the argument; your job is to restructure it for slides without weakening it. Follow these rules without exception:
>
> **Source discipline**
> 1. **The memo is the source of truth.** Do not add arguments, soften claims, or reorder the logic. If something in the memo is unclear, ask — never improvise around it.
> 2. **Flag anything you invent.** If you generate a number, example or exhibit value not present in the memo, mark it clearly as PLACEHOLDER for replacement.
>
> **Structure**
> 3. **Answer first.** The deck opens with the recommendation, then supports it. Never build up to the answer.
> 4. **SCQA up front.** Slide one or two carries the memo's Situation, Complication, Question and Answer. No agenda slide, no "context" section before it.
> 5. **Governing thought as deck title.** One sentence stating the answer and previewing the supporting legs — lifted from the memo, not rewritten.
> 6. **One section per key-line argument,** in the memo's order. Each level of the deck must obey the pyramid rules: every point summarises the points below it; points in a grouping are the same kind of idea; and each grouping runs in one logical order only — time order (steps), structural order (parts of a whole), or degree order (ranked by a shared characteristic). Never mix orders within a grouping.
> 7. **No intellectually blank assertions.** "There are three problems" is banned as a title or summary. A summary of actions states the *effect* of taking them, worded as an end product in hand; a summary of situations states what their similarity *implies*. If you cannot state the effect or implication, say so — the grouping in the memo may be wrong, and I need to know.
> 8. **One ask, one gate.** The final slide requests a single decision, with a measurable success threshold and a review date — taken from the memo's ask.
>
> **Slide craft**
> 9. **Action titles only.** Every slide title is a complete sentence, containing a verb, stating that slide's takeaway — "Western Region accounts for almost half the sales", never "Share of sales by region". If a title could sit on a different deck, it is a topic label; rewrite it as the claim.
> 10. **The title test.** Reading the slide titles alone, in order, must deliver the memo's entire argument. If a title doesn't advance the argument, cut the slide.
> 11. **Body = evidence for its own title.** Each slide's content supports only that slide's claim. Evidence that supports a different claim moves to that slide or is cut.
> 12. **Slides are skeletons, not scripts.** The spoken word carries the full argument; the slide carries the stripped-down structure. Text slides: one idea, statements not captions ("Sales outlook is favourable", not "Sales outlook"), maximum ~6 lines / ~30 words, simple words and simple numbers (£4.9M, not £4,876,987). A slide that reads fully as a standalone handout is overwritten.
> 13. **Aim for exhibits over text.** Minto's rule of thumb is 90% exhibits, 10% text. Text slides earn their place only at the structural joints (SCQA, the key-line overview, section openers); evidence should be shown, not listed.
> 14. **Stage gates.** Work stage by stage and stop for explicit approval after each. Never produce slides until the storyboard and exhibit specifications are approved.

---

## Part 2 — Exhibit design (the detailed discipline)

Every exhibit is designed message-first, in this strict sequence. Never start from the data ("what chart can I make from this table?") — start from the claim.

**Step 1 — Write the message.** One complete sentence with a verb: the specific point this exhibit proves. This sentence *is* the exhibit's title. If you cannot write it, the exhibit has no reason to exist.

**Step 2 — Identify the comparison.** The message always implies exactly one of six comparison types. Name it:

| The message says… | Comparison type | Chart form |
|---|---|---|
| X is a share/percentage of the whole | Component | Pie (≤5 segments; start biggest at 12 o'clock) |
| X is bigger/smaller than Y | Item | Horizontal bar, ranked |
| X rises/falls/fluctuates over time | Time series | Column (few periods) or line (many periods) |
| X items cluster in a range | Frequency distribution | Histogram / step column |
| X moves with (or against) Y | Correlation | Scatter, or paired bars |
| X is made of / flows into Y | Structure or process | Org chart, flow diagram, Gantt |

**Step 3 — Choose the form from the table** — the comparison dictates the chart; there is no free choice. If two comparisons genuinely coexist in the message, split into two exhibits rather than one clever chart.

**Step 4 — Strip it.** The audience can glance, not study. One message per exhibit. Remove gridlines, decimal places, legends where direct labels work, and every data series that doesn't serve the title sentence. Highlight the one bar/segment/line the message is about; grey the rest. No more than one or two complex exhibits in the whole deck — if a third is needed, the argument is probably carrying too much data forward from the memo.

**Step 5 — Specify before building.** For every exhibit, write a spec line: *message sentence · comparison type · chart form · data required · source (memo section or PLACEHOLDER)*. Specs are approved before any chart is drawn — this is where bad exhibits die cheaply.

**Which slides get exhibits (mapping to the pyramid):** Situation/Complication → text. Governing thought + key line → one numbered text slide (1, 2, 3). Each section opener (key-line point + its supports) → short numbered text slide. Each evidence point beneath → an exhibit slide wherever the evidence is quantitative or structural; text only when the evidence is genuinely verbal (a quote, a definition, a rule).

---

## Part 3 — The four-stage conversion

Run one stage per prompt. Do not merge stages.

**Stage 1 — Extract the pyramid.**
> Read my memo. Play back its pyramid: the SCQA, the governing thought in one sentence, and each key-line argument with its supporting evidence beneath. Do not rewrite or improve anything — I am checking you have read the argument correctly. Then audit it against the rules: flag any grouping that mixes ordering types, any summary that is an intellectually blank assertion, any evidence attached to no argument, and anything else that will not convert cleanly. Stop for my confirmation.

**Stage 2 — Action-title storyboard.**
> The pyramid is confirmed. Write the storyboard as slide titles only — one complete sentence per slide, each containing a verb and stating that slide's takeaway. Order: SCQA, governing thought + key line, then each argument as a section (opener + evidence slides), then the ask. Mark each slide TEXT or EXHIBIT per the mapping in Part 2. Then read the title list back as continuous prose and tell me whether it delivers the memo's full argument on its own; fix any title that is a topic label. Stop for my approval.

**Stage 3 — Exhibit specifications.**
> The storyboard is approved. For every slide marked EXHIBIT, produce the five-step spec from Part 2: message sentence (= the slide title) · comparison type · chart form from the table · exact data required · source in the memo, or PLACEHOLDER if the memo doesn't contain it. For every slide marked TEXT, draft the body within the limits: one idea, statements not captions, ≤6 lines, ≤30 words, simple numbers. Stop for my approval.

**Stage 4 — Skeleton document, then deck.**
> The storyboard and exhibit specs are approved. Write the Word document I will generate the deck from: Heading 1 = the governing thought; Heading 2 = each slide's action title; under each heading, either the approved text-slide body, or the exhibit spec plus a table of the actual data to be charted. Mark every PLACEHOLDER clearly.

Then in PowerPoint: Copilot → **Create presentation from file** → select the skeleton document. Headings become slides, which preserves structure far better than asking chat for a deck directly. Build the exhibits from their specs and data tables — chart insertion may be manual, but every design decision is already made. Where the generator has rewritten action titles into topic labels, paste the correct titles back.

**Final diagnostic — run before calling it done:** main point clear and not a blank assertion? · key line answers "why?" and is MECE? · one ordering type per grouping? · every title a verb-bearing claim? · titles alone tell the whole story? · every exhibit one message, form matched to comparison? · no slide over 6 lines / 30 words? · placeholders all replaced with real data?

---

## Part 4 — Working with an enterprise assistant

- **No memory between sessions.** Re-supply this standard at the start of every deck session. If output drifts back to topic titles mid-session, re-paste rules 9–10 and ask it to re-check its titles.
- **If your licence allows custom agents,** put Parts 1–2 into a declarative agent's instructions once and skip the re-supplying. If not, the ritual is the agent.
- **Word is the bridge to PowerPoint.** Chat-to-deck loses structure; headings-to-deck keeps it. Always route through the Stage 4 skeleton.
- **The failure mode this prevents:** asking an assistant for slides in one shot skips the structure, produces topic-titled text walls, and charts whatever the data offers rather than what the argument needs. The value is in the gates — each stage is checkable, and errors get caught before they compound into forty slides.
