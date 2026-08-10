# Pyramid deck standard — memo to slides with an AI copilot

**What this is:** the TMTH standard for converting a finished Pyramid Principle memo into a slide deck using a chat-based AI assistant (Microsoft 365 Copilot or similar). It assumes the thinking is already done — the memo exists, with its SCQA, governing thought and supporting arguments. The assistant's job is conversion and formatting, not thinking.

**How to use:** give your assistant this document (paste it, attach it, or point it at this page's raw URL), then run the three stages in Part 2 in order, approving each before the next. Version 1.0 · August 2026 · Tough Minds, Tender Hearts.

---

## Part 1 — The standard (the rules the assistant must follow)

> You are converting a finished Pyramid Principle memo into a presentation. The memo contains the argument; your job is to restructure it for slides without weakening it. Follow these rules without exception:
>
> 1. **The memo is the source of truth.** Do not add arguments, soften claims, or reorder the logic. If something in the memo is unclear, ask — never improvise around it.
> 2. **Answer first.** The deck opens with the recommendation, then supports it. Never build up to the answer.
> 3. **SCQA up front.** Slide one or two carries the memo's Situation, Complication, Question and Answer. No agenda slide, no "context" section before it.
> 4. **Governing thought as deck title.** One sentence stating the answer and previewing the supporting legs — lifted from the memo, not rewritten.
> 5. **One section per argument.** The memo's supporting arguments (typically three, MECE) become the deck's sections, in the memo's order.
> 6. **Action titles only.** Every slide title is a complete sentence stating that slide's takeaway — "Families fail on all three evaluation costs", never "Customer research". If a title could sit on a different deck, it is a topic label; rewrite it as the claim.
> 7. **The title test.** Reading the slide titles alone, in order, must deliver the memo's entire argument. If a title doesn't advance the argument, cut the slide.
> 8. **Body = evidence for its own title.** Each slide's content supports only that slide's claim. Evidence that supports a different claim moves to that slide or is cut.
> 9. **One ask, one gate.** The final slide requests a single decision, with a measurable success threshold and a review date — taken from the memo's ask.
> 10. **Flag anything you invent.** If you generate a number, example or exhibit not present in the memo, mark it clearly as a placeholder for replacement.
> 11. **Stage gates.** Work stage by stage and stop for explicit approval after each. Never produce slides until the storyboard is approved.

---

## Part 2 — The three-stage conversion

Run one stage per prompt. Do not merge stages.

**Stage 1 — Extract the pyramid.**
> Read my memo. Play back its pyramid: the SCQA, the governing thought in one sentence, and each supporting argument with its two or three strongest pieces of evidence. Do not rewrite or improve anything — I am checking you have read the argument correctly. Flag anything in the memo that doesn't fit the pyramid (an argument without evidence, evidence attached to no argument, more than one ask). Stop for my confirmation.

**Stage 2 — Action-title storyboard.**
> The pyramid is confirmed. Write the storyboard as slide titles only — one complete sentence per slide, each stating that slide's takeaway. Order: SCQA, governing thought, each argument as a short section, the ask. Then read your title list back as continuous prose and tell me whether it delivers the memo's full argument on its own. Fix any title that is a topic label rather than a claim. Stop for my approval.

**Stage 3 — Skeleton document, then deck.**
> The storyboard is approved. Write it as a Word document I will generate the deck from: Heading 1 = the governing thought, Heading 2 = each slide's action title, and under each heading 3–5 evidence bullets from the memo supporting only that title, plus a one-line note of the ideal exhibit (chart, table, diagram) where one is needed. Mark any placeholder content clearly.

Then in PowerPoint: Copilot → **Create presentation from file** → select the skeleton document. Headings become slides, which preserves structure far better than asking chat for a deck directly. Review the result against Part 1; where the generator has rewritten action titles into topic labels, paste the correct titles back.

---

## Part 3 — The target shape (reference skeleton)

```
# [Governing thought — one sentence: answer + preview of the legs]

## SCQA
Situation: …   Complication: …   Question: …   Answer: …

## Argument 1 — [action title: the claim, as a full sentence]
- evidence bullet · evidence bullet · exhibit: …

## Argument 2 — [action title]
## Argument 3 — [action title]

## The ask
- the single decision requested · the success threshold · the review date
```

---

## Part 4 — Working with an enterprise assistant

- **No memory between sessions.** Re-supply this standard at the start of every deck session. If output drifts back to topic titles mid-session, re-paste rules 6 and 7 and ask it to re-check its titles.
- **If your licence allows custom agents,** put Part 1 into a declarative agent's instructions once and skip the re-supplying. If not, the ritual is the agent.
- **Word is the bridge to PowerPoint.** Chat-to-deck loses structure; headings-to-deck keeps it. Always route through the Stage 3 skeleton.
- **The failure mode this prevents:** asking an assistant for slides in one shot skips the structure and produces topic-titled mush. The value is in the gates — each stage is checkable, and errors get caught before they compound into forty slides.
