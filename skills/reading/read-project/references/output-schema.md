# read-project output schema

Write one Markdown deliverable with the sections below, in this order. Adapt headings to the project, but do not omit a section that has useful content.

## 1. Project in one paragraph

State what the project does, who it is for, and the main problem it solves.

## 2. Recommended reading path

Give the lowest-plausible reader a concrete file-by-file or module-by-module path. Start with the smallest entry that builds the right mental model, not necessarily the README's marketing order.

## 3. Minimal runnable path

Include prerequisites, installation, startup, and the smallest end-to-end example. Only include commands that can be traced to the repository or are standard for its ecosystem. Mark any command the reader should verify before running.

## 4. Architecture map

Explain:

- main components or modules;
- public API versus internal implementation;
- how data and control flow between components;
- where the important entry points live.

Use a short tree or flow diagram when it clarifies more than prose.

## 5. Key technology and business flows

For each important flow:

- the business scenario or trigger;
- which modules participate;
- how data changes at each step;
- relevant technical decisions, algorithms, tradeoffs, and edge cases.

## 6. Core mechanism walkthrough

Trace one representative execution path from an entry point to a result. Name files and functions, and show what happens at each meaningful step.

## 7. Glossary

List project-specific terms, abbreviations, and domain jargon. Define each in plain language using the project's actual usage.

## 8. Documentation drift

Report where the documentation is outdated, missing, misleading, or contradicted by the code. Cite the specific document and the code or test that disagrees.

## 9. Getting started and contributing

Explain where to change behavior, where tests live, and what to run before submitting. If the project has no contributing guide, say what evidence exists.

## 10. Common pitfalls and boundaries

Describe likely misunderstandings, sharp edges, unsupported use cases, and assumptions the reader should not carry into the project.

## 11. Evidence notes

Separate:

- **Supported by**: file paths, line references, tests, or command output;
- **Inferred**: reasonable inference not directly stated;
- **Not verified**: areas not deeply inspected.

## Output location and naming

- Root: `.scholar/projects/`
- Session folder: `<YYYY-MM-DD>-<slug>/`
- Markdown: `<YYYY-MM-DD>-<slug>.md`
- Images: `assets/`
- Keep Latin titles as lowercase hyphenated slugs; keep Chinese titles in the filename with illegal characters removed.
