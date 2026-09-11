# Glossary and knowledge patches

Readers stop when a term is unexplained. This file defines how terms enter the material, how the glossary stays consistent, and how to add background without smuggling in unsourced claims.

## Terms at first use

Define a term the first time it appears:

> 架构决策记录（Architecture Decision Record，ADR）：把一次重要的架构选择、理由和后果记下来的一份短文档。

Rules:

- Explain in the output language, and keep the original-language term in parentheses when the two differ.
- Keep the definition to one clause or one sentence inside the flow; do not derail the paragraph.
- Never assume an abbreviation is known, including common ones, when the goal card says the reader is new to the domain.
- One term, one meaning. If a word carries two meanings in the domain, say so once and keep the two senses distinct.

## glossary.md

Create a separate glossary when:

- the tier is `mastery`, always;
- the tier is `guide` and the material uses more than about ten terms;
- the tier is `quick`: never, inline definitions only.

Format, ordered by first appearance rather than alphabetically:

| Term | Original | Meaning | First chapter |
| --- | --- | --- | --- |
| 架构决策记录 | Architecture Decision Record | A short record of an important architectural decision, its reasoning, and its consequences | 01 |

The glossary and the prose must agree. When a definition is corrected, correct it in both places.

## Knowledge patches

A knowledge patch is background the reader lacks, inserted where they need it. Use a clearly marked block so the reader can tell the patch apart from the source's own claims:

```markdown
#### 背景补给：为什么架构决策会丢失

团队的决定通常只留在会议记录和个人记忆里，人员变动后理由最先消失，留下的结论就没有了上下文。ADR 要解决的正是这个断层。

来源：[Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
```

Rules:

- Add a patch only when the reader genuinely lacks the background, not because the topic is interesting.
- Place it immediately before the concept that needs it.
- Give every patch its own source. Model knowledge alone is not evidence.
- Keep a patch to a few sentences. When it grows past a page, promote it to the prerequisites chapter or its own chapter.

## Prerequisites

- `mastery`: write `00-prerequisites.md` when the gap is larger than a few concepts; list each prerequisite with a short explanation and, when useful, a pointer to a source.
- `guide`: use a "Prerequisites" section near the top.
- `quick`: one sentence stating what the reader should already know, and what is out of scope.
