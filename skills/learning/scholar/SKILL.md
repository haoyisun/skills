---
name: scholar
description: Turn a learning goal into trustworthy illustrated Markdown learning material, from a quick orientation to a multi-week handbook. Use when the user wants to understand a concept or knowledge system and needs sourced, coherent teaching material rather than a chat answer.
disable-model-invocation: true
---

# scholar

Help a scholar understand a concept or knowledge system and keep the result. Scholar finds and vets the sources itself, plans the material around the learner's goal, writes it for a reader with no prior domain background, and reviews it before delivering.

This skill produces learning material, not a conversation. A chat answer evaporates; a Scholar session ends with files the reader can study, revisit, and continue.

## Invocation

This skill is explicit-only. The model never starts it on its own; the user starts it. The exact syntax depends on the agent:

```text
/scholar <topic, source, or learning goal>   # slash-command agents such as Claude Code and Cursor
$scholar <topic, source, or learning goal>   # Codex
```

Examples:

```text
/scholar ADR
/scholar 我想在三周内吃透 Kubernetes 调度器，能给别人讲清楚
/scholar 继续 .scholar/study/2026-09-11-adr/plan.md
```

## Hard rules

These rules hold in every session and are not negotiable.

1. Confirm the learning goal before writing. Follow [references/goal-model.md](references/goal-model.md) and [references/question-protocol.md](references/question-protocol.md).
2. Never state a claim without a traceable source. Vet sources as described in [references/source-evaluation.md](references/source-evaluation.md). AI-generated content is a lead, never evidence.
3. Write for the lowest plausible reader. Explain every term and abbreviation where it first appears, and keep the glossary consistent.
4. Write plain, connected prose. No AI-flavored filler. Follow [references/writing-style.md](references/writing-style.md).
5. Every picture is explained in the surrounding prose and traceable to its origin. Follow [references/image-policy.md](references/image-policy.md).
6. Never fake a capability. When search, fetch, image generation, sub-agents, or script execution is unavailable, follow [references/capabilities.md](references/capabilities.md) and tell the user what changed.
7. Write under `.scholar/study/`. Never overwrite an existing session.

## Workflow

### 1. Confirm the goal

Ask the smallest number of questions that pins down the goal: usually two to five, never more than five. Infer what you can and label each inference, so the user only has to correct what is wrong. Produce the goal card and get one short confirmation.

Skip the questions when the invocation already contains a complete goal. When the user gives no topic at all, ask one question — "What do you want to learn?" — in the user's language, then continue.

### 2. Research and vet

Find sources before writing anything. Classify every source as S, A, B, or C, require at least two independent S/A sources for key claims, record disagreements instead of picking a side, and mark anything unproven. Fetch every link you cite; never cite a URL you did not open.

### 3. Plan the material

Choose the depth tier from the goal card:

- `quick` 快读: a single overview readable in about 10 minutes.
- `guide` 通学: a complete single-file study guide, 1–3 hours of reading.
- `mastery` 精修: a multi-file handbook for days or weeks of study.

Build the outline before the prose. For `mastery`, write the outline into `plan.md` with one row per chapter and keep those rows updated as chapters land. Structures live in [references/output-schemas.md](references/output-schemas.md).

### 4. Write

Write chapter by chapter for `mastery`, and in one pass for `quick` and `guide`. Follow the output schema, the writing contract, and the glossary and knowledge-patch rules. Use the shared `technical-diagrams` skill by name when a diagram makes structure or flow clearer than prose.

### 5. Review and deliver

Run the review for the tier: `quick` uses the short list, `guide` and `mastery` use the full list. When the environment supports sub-agents, have a fresh context review the material; otherwise self-check against the list. Record the result in `plan.md`, and run `scripts/check-session.mjs` when scripts can execute.

Deliver a short summary: what was produced, where it lives, which sources were used, and what remains uncertain.

## Continuing a session

`/scholar 继续 <session folder or plan.md>` resumes exactly. When the user only says "continue", take the most recently modified incomplete session under `.scholar/study/`, restate the goal card and progress, then continue. Reuse the same glossary and source appendix when rewriting a single chapter.

## Output

```text
.scholar/study/<YYYY-MM-DD>-<slug>/
├── <slug>.md            # quick and guide
└── ...                  # mastery: README.md, plan.md, chapters, glossary, appendix
```

Never write a new session over an existing one. When the same date and slug already exist, append `-2`, `-3` instead.

A worked example of `quick` output ships in [assets/example-quick-adr.md](assets/example-quick-adr.md).

## References

- [references/goal-model.md](references/goal-model.md)
- [references/question-protocol.md](references/question-protocol.md)
- [references/source-evaluation.md](references/source-evaluation.md)
- [references/writing-style.md](references/writing-style.md)
- [references/glossary-and-patches.md](references/glossary-and-patches.md)
- [references/image-policy.md](references/image-policy.md)
- [references/output-schemas.md](references/output-schemas.md)
- [references/review-checklist.md](references/review-checklist.md)
- [references/capabilities.md](references/capabilities.md)
