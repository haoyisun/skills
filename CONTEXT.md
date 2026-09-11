# CONTEXT.md

This file gives agents a shared vocabulary for the **Reader** (读者) repository.


## Project

Reader is an open-source collection of agent skills. Its purpose is to help people read, learn, and understand technical material through an AI tool.

## Skills

The repository ships three explicit-only reading skills:

- `read-project`: read a software project from its code and documentation, and produce an onboarding, architecture, and business-flow guide.
- `read-standard`: read technical articles, blog posts, books, PDFs, local files, or pasted text deeply, and produce a complete study guide.
- `read-fast`: read technical material quickly, and produce a 2–10 minute overview.

Each skill is a directory under `skills/reading/<name>/` containing a required `SKILL.md` file. The `name` in frontmatter must match the directory name.

The repository also ships one shared foundation skill:

- `technical-diagrams`: Mermaid syntax and C4 architecture guidance for the diagrams that reading skills produce. It is not reader-specific; future non-reader skills may depend on it too.

It lives at `skills/diagrams/technical-diagrams/` and is distributed together with the reading skills in a Skill Pack.

## Terms

- **Reader / 读者**: this project and the set of skills it ships.
- **Skill**: a self-contained set of agent instructions in a directory containing a `SKILL.md` file.
- **SKILL.md**: the entry point of a skill. It must contain YAML frontmatter with `name` and `description`.
- **Explicit-only**: a skill with `disable-model-invocation: true`. It is triggered when the user names it, not automatically by the model.
- **Source material**: the repository, article, book, PDF, file, or pasted text the user wants to understand.
- **Glossary**: a small shared vocabulary produced while reading so later explanations stay consistent.
- **Claim**: a statement extracted from source material. Claims must be traceable to a source, and assumptions must be marked separately.
- **Knowledge patch**: plain-language background inserted where the source assumes prior knowledge.
- **`.reader/`**: the default output root. It contains `projects/`, `deep/`, and `quick/` subfolders.
- **By-name reference**: a skill that needs another skill references it by name, not by a relative path, because the skills CLI installs skills into directories named after the skill rather than preserving source category paths.

## Naming rules

- Use `read-project` when the source is a software project.
- Use `read-standard` when the user wants to learn technical material deeply.
- Use `read-fast` when the user wants a short, coherent overview.
- Do not invent synonyms for these names in issues, docs, or ADRs.

## Output conventions

- Root: `.reader/`
- Project output: `.reader/projects/<YYYY-MM-DD>-<slug>/`
- Deep output: `.reader/deep/<YYYY-MM-DD>-<slug>/`
- Quick output: `.reader/quick/<YYYY-MM-DD>-<slug>/`
- Images: `assets/` inside each session folder.
- Latin titles become lowercase hyphenated slugs. Chinese titles stay readable in the filename after illegal characters are removed.
- Diagrams: embedded Mermaid code blocks in the Markdown. `assets/` is only for original images and screenshots.

