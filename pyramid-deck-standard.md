# The Pyramid Principle, written for an LLM — memo to slides

**What this is:** Barbara Minto's Pyramid Principle, restated as an operating manual an AI assistant can execute. It covers converting a finished pyramid-structured memo into a slide deck: extracting the logic, storyboarding, designing exhibits, and linting the result. The memo contains the thinking; the assistant's job is faithful conversion, not authorship.

**How to use:** give your assistant this document (paste it, attach it, or point it at this page's raw URL), then run the four stages in Part 6 in order, approving each before the next. The assistant should treat Parts 1–5 as binding rules and Part 7 as a lint pass it runs on its own output.

Version 2.0 · August 2026 · Tough Minds, Tender Hearts. Based on *The Pyramid Principle* (Minto, 1987/1996), ch. 11 for slides, with exhibit discipline after Zelazny.

---

## Part 0 — Prime directives

1. **The memo is the source of truth.** Do not add arguments, soften claims, reorder logic, or "improve" wording that carries meaning. If something is unclear, ask; never improvise around it.
2. **Flag everything you invent.** Any number, example or exhibit value not present in the memo is marked `PLACEHOLDER` for human replacement.
3. **Stage gates.** Work one stage at a time and stop for explicit approval after each. Never produce slides before the storyboard and exhibit specs are approved.
4. **When the memo itself breaks a rule below, say so.** Do not silently repair the argument, and do not silently reproduce the defect. Surface it as a finding: "the memo's second grouping mixes time and degree order."

---

## Part 1 — The pyramid: the logic you are extracting

A pyramid-structured argument obeys three rules at every level:

1. **Ideas at each level summarise the ideas grouped below them** — summarise, not restate, and not merely introduce.
2. **Ideas in each grouping are the same kind of idea.**
3. **Ideas in each grouping follow one logical order** (Part 2).

The structure is a question-and-answer dialogue. **Vertically**, each level answers the question the level above raises in the reader's mind (usually "why?" or "how?"). **Horizontally**, a grouping is either *deductive* (premise → premise commenting on it → therefore conclusion; the summary above is the conclusion) or *inductive* (parallel items sharing one characteristic; the summary above is the generalisation covering them). Never mix deductive and inductive within one grouping. At the key line — the top tier of arguments — prefer inductive: deduction forces the audience to hold premises in memory before they get the payoff.

**The shape:** apex = governing thought (the single answer to the audience's one question) · key line = typically three MECE arguments (never more than five; at five-plus, a grouping opportunity has been missed above) · base = evidence.

**MECE test for any grouping:** no two items overlap (mutually exclusive); together they leave no relevant gap (collectively exhaustive). If a grouping cannot be made MECE, the thinking is incomplete — that is a finding to report, not to hide.

**SCQA — the introduction.** It reminds the audience of what they already accept; it never informs or argues. Nothing in the SCQA should need proof — if it does, it belongs in the body.

- **Situation:** what the audience already agrees is true. Tests: self-sufficient (needs no prior sentence) and noncontroversial (they nod). Anchored in a specific time and place.
- **Complication:** what changed or broke, creating tension that uses the Situation as its starting point.
- **Question:** the one question the Complication forces. There is only ever one; if there seem to be two, they are nested — the second arises only after the first is answered.
- **Answer:** the governing thought, verbatim.

The four elements can be reordered for tone: S-C-A (standard, default) · A-S-C (direct — senior, time-pressed, or confident) · C-S-A (concerned — urgent problems) · Q-S-C-A (interrogative — the question is already on the table). The elements never change; only the order does.

**The four patterns.** Nearly every business presentation answers one of four questions. Identify which, because it fixes the shape of the Complication and Question:

| Pattern | Situation | Complication | Audience's question |
|---|---|---|---|
| Giving direction | We want to do X | We need you to do Y | How? |
| Seeking approval | We have a problem | We have a solution costing £X | Should I approve? |
| Explaining how | The current system is X | It doesn't work as needed | How do we fix it? |
| Choosing | We want to do X | We have alternative routes | Which one? |

---

## Part 2 — Ordering: every grouping runs in exactly one order

**Time order** — for steps in a process. Test each pair of items: "must A happen *before* B?" (same level, time-ordered) versus "does A happen *so that* B can?" (A is a lower level — a cause beneath an effect). Mixing "before" and "so that" in one list is the most common ordering defect; separate levels, don't reorder.

**Structural order** — for parts of a whole (geographies, org units, product lines). The parts must be MECE against the whole.

**Degree order** — for items sharing a characteristic. Name the characteristic explicitly, confirm every item has it, rank strongest first.

If no single order can be named for a grouping, the grouping is wrong. Report it.

---

## Part 3 — Titles and summaries: the assertion discipline

**Every title is an assertion:** a complete sentence, containing a verb, that could be true or false. A reader should be able to disagree with it.

| ❌ Label (banned) | ✅ Assertion |
|---|---|
| Q1 revenue | Q1 revenue fell 8% against target |
| Customer research | Families fail on all three evaluation costs |
| Share of profits by region | Western Region accounts for almost half the profits |
| Next steps | Approve a four-week test in Segment B |

Tests the assistant applies to every title it writes: (a) does it contain a verb? (b) could someone say "no, that's false"? (c) could this title sit unchanged on a different deck? — if yes, it is a topic label; (d) if framed as a question, is it answerable yes/no? ("Should we enter the SME segment?" qualifies; "What should we do about SME?" is a label in disguise.)

**Intellectually blank assertions are equally banned.** "There are three problems in the organisation", "We recommend five changes" — these state the *kind* of idea coming, not the idea. They cover incomplete thinking. The fix:

- A summary of **actions** states the *effect* of taking them, worded as an end product you could hold in your hand. ❌ "Strengthen regional effectiveness" → ✅ "Assign planning responsibility to the regions". ❌ "Improve financial reporting" → ✅ "Install a system that gives early notice of change".
- A summary of **situations** states what their similarity *implies* — the inductive leap, a new claim above the items, not a description of what they have in common.

If the assistant cannot state the effect or the implication for a grouping in the memo, the grouping is defective. Report it; do not paper over it with "there are three reasons".

**Copy standards for every title and body line:** plain English, active voice, sentence case, 25 words maximum per sentence, simple numbers (£4.9M, not £4,876,987), no exclamation marks.

---

## Part 4 — Slide craft: what goes on a slide

**Two slide types, one ratio.** Text slides clarify structure and land conclusions; exhibit slides (charts, tables, diagrams) demonstrate relationships words can't carry efficiently. Target **90% exhibits, 10% text**. Text-only slides belong at structural joints: the SCQA opening, the key-line overview, section openers, the closing ask.

**What you say is not what you show.** The speaker carries the full argument — transitions, context, caveats. The slide carries the stripped skeleton. Example of the split: the script explains at length that high out-of-stock levels are eroding share and trace to manufacturing and supply-chain causes; the slide shows only the assertion title plus three short causes. A slide that reads fully as a standalone handout is overwritten — that failure mode is "visual recitation", reading slides aloud word for word.

**Text slide rules:** one idea per slide, no exceptions · title is an assertion (statements, not captions — "Sales outlook is favourable", never "Sales outlook") · maximum ~6 lines / ~30 words of body · simple words, round numbers · where the body items have a relationship (flow, hierarchy, opposition), lay the text out as a diagram rather than bullets · use progressive builds only for genuinely complex slides.

**Mapping the pyramid onto slides:**

| Pyramid element | Slide treatment |
|---|---|
| Situation + Complication | Short text slide(s); Answer prominent |
| Governing thought + key line | One numbered text slide (1, 2, 3) |
| Key-line point + its supports | Section-opener text slide (numbered, sub-lettered) |
| Each evidence point | Exhibit slide when the evidence is quantitative or structural; text only when genuinely verbal (a quote, a rule, a definition) |
| The ask | Closing text slide: one decision, one measurable gate, one date |

---

## Part 5 — Exhibit design: message first, always

Design every exhibit in this strict sequence. Never start from the data ("what chart does this table make?") — start from the claim.

**Step 1 — Write the message.** One sentence, with a verb: the specific point this exhibit proves. That sentence *is* the exhibit title. No message, no exhibit.

**Step 2 — Name the comparison the message implies.** There are six:

| The message says… | Comparison | Chart form |
|---|---|---|
| X is a share of the whole | Component | Pie — ≤5 segments, largest starting at 12 o'clock |
| X is bigger / smaller than Y | Item | Horizontal bar, ranked |
| X rises / falls over time | Time series | Column (few periods) or line (many) |
| Items cluster in ranges | Frequency distribution | Histogram / step column |
| X moves with Y | Correlation | Scatter, or paired bars |
| X is made of / flows into Y | Structure or process | Org chart, flow diagram, Gantt |

**Step 3 — Take the form from the table.** The comparison dictates the chart; there is no aesthetic choice. If a message genuinely contains two comparisons, split it into two exhibits.

**Step 4 — Strip it.** The audience glances; it cannot study. One message per exhibit. Cut gridlines, decimals, legends where direct labels work, and every series that doesn't serve the title. Highlight the one element the message is about; grey the rest. Then check: **does the visual impression match the title sentence?** If the eye is drawn to something other than the claim, change the chart or change the claim. Maximum one or two complex exhibits per deck.

**Step 5 — Spec before build.** For every exhibit, one line: *message sentence · comparison type · chart form · exact data required · source (memo section, or PLACEHOLDER)*. Specs are approved before any chart is drawn — this is where bad exhibits die cheaply.

---

## Part 6 — The four-stage conversion (run one stage per prompt)

**Stage 1 — Extract and audit the pyramid.**
> Read my memo. Play back its pyramid: the SCQA (naming which of the four patterns it is), the governing thought in one sentence, and each key-line argument with its evidence beneath. Do not rewrite anything — I am checking you have read the argument correctly. Then audit it against the standard and list findings: groupings that mix ordering types or mix deduction with induction, summaries that are intellectually blank, evidence attached to no argument, more than one question or more than one ask. Stop for my confirmation.

**Stage 2 — Action-title storyboard.**
> The pyramid is confirmed. Write the storyboard as slide titles only — one assertion per slide, per the Part 3 tests. Order: SCQA, governing thought + key line, each argument as a section (opener + evidence slides), the ask. Mark each slide TEXT or EXHIBIT per the Part 4 mapping. Then read the title list back as continuous prose and confirm it delivers the memo's entire argument on its own; rewrite any title that fails a Part 3 test. Stop for my approval.

**Stage 3 — Exhibit specs and text bodies.**
> The storyboard is approved. For every EXHIBIT slide, produce the Part 5 spec line, including the data table to be charted. For every TEXT slide, draft the body within the Part 4 limits. Mark every PLACEHOLDER. Stop for my approval.

**Stage 4 — Skeleton document, then deck.**
> The specs are approved. Write the Word document I will generate the deck from: Heading 1 = the governing thought; Heading 2 = each slide's action title; under each heading, the approved text body, or the exhibit spec plus its data table. Keep PLACEHOLDER markers visible.

Then in PowerPoint: Copilot → **Create presentation from file** → the skeleton. Headings become slides, which preserves structure far better than chat-to-deck. Build each exhibit from its spec — insertion may be manual, but every design decision is already made. Where the generator rewrites action titles into labels, paste the approved titles back.

---

## Part 7 — Lint rules (the assistant runs these on its own output at every stage)

- Title is a label, not an assertion → rewrite as the claim.
- Title in Title Case → sentence case.
- Passive sentence → active.
- Two slides make the same claim → merge.
- Chart title has no verb → rewrite as the so-what.
- Text slide over 6 lines / 30 words → split or cut.
- All-text slide where the content is a relationship → propose the chart form from the Part 5 table.
- Deck over ~10% text slides → challenge which structural slides can collapse.
- Key line over 5 items → a grouping has been missed above; find it.
- Grouping with no nameable order → report as a memo defect.
- Summary is a blank assertion ("three reasons…") → state the effect or implication, or report the defect.
- Argument framed as a non-yes/no question → rewrite as an assertion.
- Visual impression of a chart contradicts its title → change one of them.
- Any invented content unmarked → mark PLACEHOLDER.

**Final diagnostic before delivery:** governing thought clear and not blank? · key line answers "why?" and is MECE? · one order per grouping? · titles alone tell the whole story? · every exhibit one message, form matched to comparison? · placeholders all replaced with real data?

---

## Part 8 — Working with an enterprise assistant

- **No memory between sessions.** Re-supply this standard at the start of every deck session. If output drifts mid-session, re-paste Part 3 and ask it to re-lint its titles.
- **If the licence allows custom agents,** load Parts 0–5 and 7 into a declarative agent's instructions once; the stages in Part 6 remain your prompts.
- **Word is the bridge to PowerPoint.** Chat-to-deck loses structure; headings-to-deck keeps it. Always route through the Stage 4 skeleton.
- **The failure mode all of this prevents:** one-shot "make me slides" skips the structure, produces topic-titled text walls, and charts whatever the data offers rather than what the argument needs. The gates make each step checkable before errors compound into forty slides.
