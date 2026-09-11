---
name: read-standard
description: Learn a piece of technical material deeply, from an article, blog post, book, PDF, local file, or pasted text, and produce a complete plain-language Markdown study guide.
disable-model-invocation: true
---

# read-standard

Help a reader learn a piece of technical material deeply, not just get the gist. Read the whole source first, then turn it into a complete study guide that a reader with little domain background can follow without constantly searching for terms.

## Invocation

This skill is explicit-only. The model never starts it on its own; the user starts it. The exact syntax depends on the agent:

```text
/read-standard <source>   # slash-command agents such as Claude Code and Cursor
$read-standard <source>   # Codex
```

`<source>` can be a URL, local Markdown or text file, PDF, or pasted long text.

## Reader and language defaults

- Assume the reader can read, but is not familiar with the source's domain or specialized vocabulary.
- Write for the lowest plausible reader so any reader can follow.
- Match the current conversation language. If the language is unclear, ask once.

## Input policy

- Supported: web URLs, local Markdown/plain text, pasted text, and PDFs.
- Word and PowerPoint: convert to text when a usable tool is available; otherwise say so.
- Video, audio, and scanned images: do not promise deep support. Offer transcription or OCR direction only.

## Coverage rule

This skill must preserve completeness, not produce a summary.

- Follow the source order section by section.
- Preserve each section's claim, reasoning, examples, and conclusion.
- Keep every original image or explain it when it cannot be fetched.
- Add a knowledge patch where the source assumes prior knowledge.
- Explain abbreviations and terms where they first appear.
- Flag questionable or incorrect content as "Note: possible correction" with a reason.
- The output may be longer than the source. Do not compress to save space.

## Long-content workflow

1. Read the table of contents or section structure first.
2. Work in batches, usually one chapter or major section at a time.
3. Maintain a running glossary and main-line notes between batches.
4. After all batches, assemble the final deliverable.
5. If the material is too large for one session, say exactly which sections are finished and which are not. Never claim a full reading when part is missing.

## Workflow

1. Read the full source or the completed batches before writing the final file.
2. Build the deliverable with [references/output-schema.md](references/output-schema.md).
3. Write to `.scholar/deep/<date>-<slug>/<slug>.md`, with images under `assets/`.
4. If the working directory is a Git repository and `.gitignore` does not contain `.scholar/`, append `.scholar/` to `.gitignore`. State that this was done.

## Shared writing rules

- Use plain, connected prose. Avoid AI-flavored filler, forced contrasts, and empty buzzwords.
- Explain "what it is, why it exists, and how it is used" for important concepts.
- Use original images first; add a generated image only when it materially clarifies something.
- Keep a light source header: title, author, link or path, and reading time.

## Technical diagrams

When a concept, process, state, or dependency is clearer as a picture, use the shared `technical-diagrams` skill by name. It provides Mermaid syntax and C4 architecture guidance.

- Choose flowchart, sequence, state, or class/ER diagrams only when prose is not enough.
- Keep original source images in place; do not replace them with a diagram unless the diagram is clearer.
- Draw the smallest diagram that helps. Keep labels in the conversation language and explain every diagram in the surrounding text.
- If the `technical-diagrams` skill is unavailable, keep a minimal inline Mermaid block and still follow its style rules.

## What not to do

- Do not skip a section because it seems technical or long.
- Do not turn the guide into bullet-point cliffs notes.
- Do not invent background facts. If a knowledge patch is needed, keep it clearly separated from the source's own claims.
