---
name: read-fast
description: Get a quick, coherent overview of technical material, from an article, blog post, book, PDF, local file, or pasted text, as a guide readable in 2–10 minutes.
disable-model-invocation: true
---

# read-fast

Help a reader understand the main idea and key concepts of technical material quickly. This is a short-focus read, not a deep study guide.

## Invocation

This skill is explicit-only. The model never starts it on its own; the user starts it. The exact syntax depends on the agent:

```text
/read-fast <source>   # slash-command agents such as Claude Code and Cursor
$read-fast <source>   # Codex
```

`<source>` can be a URL, local Markdown or text file, PDF, or pasted long text.

## Reader and language defaults

- Assume the reader is short on time and wants the gist plus the key concepts, not mastery.
- Write for the lowest plausible reader so the output stays understandable.
- Match the current conversation language. If the language is unclear, ask once.

## Input policy

- Supported: web URLs, local Markdown/plain text, pasted text, and PDFs.
- Word and PowerPoint: convert when possible; otherwise say so.
- Video, audio, and scanned images: do not promise deep support.

## Time budget

The deliverable should be readable in **2–10 minutes**.

- Short sources are not forcibly cut.
- Long sources keep only the main line, key concepts, and conclusions.
- If a topic cannot be explained accurately in that budget, say what was omitted and suggest `/read-standard`.

## Workflow

1. Read enough of the source to understand its thesis, structure, and key conclusions. For long material, read the introduction, headings, conclusion, and any examples or code that carry the main argument.
2. Write the deliverable with [references/output-schema.md](references/output-schema.md).
3. Write to `.scholar/quick/<date>-<slug>/<slug>.md`, with images under `assets/`.
4. If the working directory is a Git repository and `.gitignore` does not contain `.scholar/`, append `.scholar/` to `.gitignore`. State that this was done.

## Shared writing rules

- Write plain, connected prose. Avoid AI-flavored filler and empty buzzwords.
- Explain only the terms needed to understand the main argument.
- Use few images. Add one only when the core logic is unclear without it.
- Keep a light source header: title, author, link or path, and reading time.

## Technical diagrams

Diagrams are almost never needed in a 2–10 minute read. Add at most one when the core logic would otherwise be misunderstood.

- When you do draw, use the shared `technical-diagrams` skill by name for Mermaid syntax and style rules.
- Prefer a simple flowchart or a single relationship line, not an architecture map.
- Keep labels in the conversation language and explain the diagram in one sentence.
- If the `technical-diagrams` skill is unavailable, keep a minimal inline Mermaid block.

## What not to do

- Do not turn a quick read into a full translation or study guide.
- Do not omit the reasoning chain so much that the main point becomes wrong.
- Do not add background that is unnecessary for the 2–10 minute reading.
