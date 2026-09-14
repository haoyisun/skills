---
name: investigate
description: Research a technical question and produce a verified, illustrated design or implementation plan. Use when a decision must be made: comparing technologies, studying an open-source project, or turning a concept into an implementable design.
disable-model-invocation: true
---

# investigate

Help a technical decision get made. Investigate finds and vets the evidence, reads the code that matters, compares the realistic options, and writes a design or implementation plan that a human can act on and re-derive.

The output is a decision document: not a learning guide, and not the implementation itself. Sourced facts and the skill's own design synthesis are always labelled separately.

## Invocation

This skill is explicit-only. The model never starts it on its own; the user starts it. The exact syntax depends on the agent:

```text
/investigate <decision question, technology, project, or concept>   # slash-command agents
$investigate <decision question, technology, project, or concept>   # Codex
```

Examples:

```text
/investigate 为现有 Express 服务设计多租户隔离方案
/investigate 调研 Temporal 的工作流模型，给出接入方案
/investigate 只有一个概念：把本地缓存改造成可观测的共享层，给出实现设计
/investigate 继续 .scholar/research/2026-09-14-express-multitenancy/plan.md
```

## Hard rules

These rules hold in every session and are not negotiable.

1. Confirm the research brief before researching. Follow [references/task-card.md](references/task-card.md); ask at most five questions in one round.
2. Vet everything with the shared `scholarly-standards` skill: source evaluation, writing style, image policy, capability degradation, and the question protocol. AI-generated content is a lead, never evidence.
3. Read code and documents only as far as the decision needs. Keep the budget, stop deliberately, and report what was not inspected. Follow [references/research-method.md](references/research-method.md).
4. Separate sourced facts from design synthesis. Every design choice carries a confidence level and its reasoning, and is never written as if a source had stated it.
5. Record experiments with their environment. Anything beyond read-only commands needs the user's approval first. Follow [references/evidence-and-experiments.md](references/evidence-and-experiments.md).
6. Every plan contains the decision points the human must settle. A recommendation is never presented as the decision. Follow [references/decision-and-confidence.md](references/decision-and-confidence.md).
7. Write under `.scholar/research/`, and never overwrite an existing session.

## Workflow

### 1. Confirm the research brief

Read [references/task-card.md](references/task-card.md). Ask at most five questions covering the decision question, the deliverable tier, and the grounding; infer the rest and label each inference. Skip the questions when the invocation already contains a complete brief, and confirm the card either way.

### 2. Research and vet

Search, read, and sample code. Classify sources S/A/B/C with the shared `scholarly-standards` rules, and record local experiments as E. Keep a one-line note of why each source was read, and record disagreements and gaps as you go. Stop when the three stop conditions hold: key claims have two independent S/A sources; every option has been checked against the constraints; what remains is written down as open questions.

### 3. Compare and design

Build the option comparison before the design. For each option: what it is, the evidence, cost, risk, and fit with the constraints. Then design the recommendation: architecture, interfaces, data flow, and key mechanisms. Label every design choice with its confidence and reasoning.

### 4. Write the deliverable

The task card sets the tier:

- `brief`: one file with the conclusion and its evidence.
- `plan` (default): one file with the full design and implementation plan.
- `dossier`: a multi-file handbook with findings, options, design, implementation, and appendices.

Structures live in [references/output-schemas.md](references/output-schemas.md). For `dossier`, keep `plan.md` updated as chapters land.

### 5. Review and deliver

Run the review in [references/review-checklist.md](references/review-checklist.md). When the environment supports sub-agents, have a fresh context review the material; otherwise self-check. Run `scripts/check-session.mjs` when scripts can execute. Deliver a short summary: what was produced, where it lives, what is decided and what is still open, and what was not inspected.

## Continuing a session

`/investigate 继续 <session folder or plan.md>` resumes exactly. When the user only says "continue", take the most recently modified incomplete session under `.scholar/research/`, restate the task card and progress, then continue. Reuse the same glossary and source appendix when rewriting a single chapter.

## Output

```text
.scholar/research/<YYYY-MM-DD>-<slug>/
├── <slug>.md            # brief and plan
└── ...                  # dossier: README.md, plan.md, chapters, glossary, appendix
```

Never write a new session over an existing one. When the same date and slug already exist, append `-2`, `-3` instead.

## References

- [references/task-card.md](references/task-card.md)
- [references/research-method.md](references/research-method.md)
- [references/evidence-and-experiments.md](references/evidence-and-experiments.md)
- [references/output-schemas.md](references/output-schemas.md)
- [references/decision-and-confidence.md](references/decision-and-confidence.md)
- [references/review-checklist.md](references/review-checklist.md)

Shared protocols live in the `scholarly-standards` skill (source evaluation, writing style, image policy, capability degradation, question protocol, experiments), and diagrams come from the `technical-diagrams` skill. Both are installed from the same repository.
