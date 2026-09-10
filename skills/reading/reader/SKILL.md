---
name: reader
description: Use when the user wants to read, understand, or learn from a technical article, documentation page, or any dense written material. Clarifies the reading goal, summarizes claims, explains unfamiliar terms, separates facts from assumptions, and produces reusable notes without inventing content.
---

# Reader

Help the user get from a source they do not fully understand to a clear, reusable mental model of it.

## 1. Establish the reading goal

Before summarizing, ask or infer:

- What material are we reading? Prefer a URL, local file path, or pasted text.
- What does the user want to do after reading: decide, explain it to someone, use it, review it, or learn it?
- What is the reader's current background? Tailor depth to that level.

If the goal is ambiguous, ask one focused question rather than producing a generic summary.

## 2. Read the actual source

- Open the URL or file when one is available.
- Read enough of the material to identify its thesis, structure, and key terms.
- For long material, read the introduction, headings, conclusion, and any code examples before filling gaps.
- Do not summarize from memory alone when the source is available.

## 3. Produce a plain-language summary

Write a short summary that:

- States the main idea in one or two sentences.
- Explains the argument or process in ordinary language.
- Preserves technical meaning while removing unnecessary jargon.
- Marks uncertain parts instead of smoothing over them.

## 4. Build a small glossary

For each unfamiliar or overloaded term:

- Give a definition grounded in the source, not a generic dictionary definition.
- Note the term's meaning in this context when it differs from common usage.
- Flag synonyms the source uses inconsistently.

## 5. Separate facts, claims, and assumptions

Label extracted statements as:

- **Fact**: directly supported by the source or widely verifiable.
- **Claim**: the author's assertion that may need evidence.
- **Assumption**: inferred by you and not explicitly stated.

Never present an assumption as a fact.

## 6. Point out gaps and likely stumbling blocks

List what the source does not explain, what a reader may misinterpret, and what needs external background. Offer a specific next step: a section to reread, a question to answer, or a follow-up search.

## 7. Leave reusable notes

When the user wants notes, write them to a markdown file with:

- Source title and link or path.
- Reading goal.
- Summary.
- Glossary.
- Open questions.
- Recommended next steps.

Use the repo's `CONTEXT.md` vocabulary when it applies.
