# TMTH methods

Public methodology library — Tough Minds, Tender Hearts. Each method is packaged as an operating manual an AI assistant can execute: decision procedures instead of principles, contrastive examples, staged prompts with approval gates, and checks the assistant runs on its own output.

## Execution route: single-file Python generators

The working transport for AI-assistant execution is **Python**. Each generator is one file: all content sits in a DATA section at the top (the assistant edits only that), layout and structure below are marked do-not-edit, and a self-check runs on every generation. Attach the script to an assistant with a code interpreter (Copilot, ChatGPT, Claude), edit the DATA section through the staged prompts, run it, and download the finished artefact.

| Capability | Generator | Status |
|---|---|---|
| Minto-style analysis of a problem | — | In build |
| Pyramid memo (Minto's memo archetypes) | — | In build |
| Presentation slides (text-light, presented live) from a pyramid memo | — | In build |
| Standalone slides (self-sufficient, read unaided) from a pyramid memo | — | In build |
| Proposition deck archetypes (which-of-these / should-we / backlog) | [`proposition-launch-deck/`](proposition-launch-deck/) | Live |

## Standards

| Document | What it does |
|---|---|
| [objective-customer-value-standard.md](objective-customer-value-standard.md) | Defines Objective Customer Value (OCV), a formula and measurement protocol for computing customer value from observable data, and a gated procedure for predicting solution uptake |

## The Pyramid Method: A Working Reference

A comprehensive, human-facing guide to pyramid-structured writing and thinking — for authors, reviewers, and anyone building structured business documents. Now maintained as its own repository: **[tmth-studio/pyramid-method](https://github.com/tmth-studio/pyramid-method)** (a copy remains in [`reference/`](reference/)).

**Why two forms?** The Python generators execute the method mechanically. The reference teaches *you* to think in pyramids — essential if you're going to review what your AI produces.

## Archive

Document-form (Word / PowerPoint / HTML) versions of the pyramid methods are retired to [`archive/`](archive/) — superseded as the execution route by the Python generators. See [`archive/README.md`](archive/README.md).
