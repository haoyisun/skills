# CONTEXT.md

This file gives agents a shared vocabulary for the **Reader** (读者) repository.

## Project

Reader is an open-source collection of agent skills. Its purpose is to help users read, learn, and understand technical material through an AI tool: technical articles, documentation, open-source projects, and other agent skills.

## Terms

- **Reader / 读者**: this project and the set of skills it ships.
- **Skill**: a self-contained set of agent instructions in a directory containing a `SKILL.md` file.
- **SKILL.md**: the entry point of a skill. It must contain YAML frontmatter with `name` and `description`.
- **Category**: a grouping folder under `skills/`, such as `reading`. Categories exist for navigation, not for installability.
- **Source material**: the document, article, codebase, or skill the user wants to understand.
- **Glossary**: a small, shared vocabulary produced while reading so later explanations stay consistent.
- **Claim**: a statement extracted from source material. Claims must be traceable to a source, and assumptions must be marked separately.

## Naming rules

- Use `reader` only for the general reading skill.
- Use `open-source-explorer` when the source material is a repository.
- Use `skill-explainer` when the source material is an agent skill.
- Prefer these exact names in issue titles and ADRs; do not invent synonyms.
