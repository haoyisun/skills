[English](./README.md) · [简体中文](./README.zh-CN.md)

# Reader

[![skills.sh](https://skills.sh/b/haoyisun/skills)](https://skills.sh/haoyisun/skills)

**Reader** is a small collection of explicit-only agent skills for reading, learning, and understanding technical material through an AI tool.

It covers three different reading needs:

| Skill | Invocation | Use it when |
| --- | --- | --- |
| `read-project` | `/read-project <source>` | You want to understand and get started with a software project from its code and documentation. |
| `read-standard` | `/read-standard <source>` | You want to learn an article, blog post, book, PDF, local file, or pasted text deeply. |
| `read-fast` | `/read-fast <source>` | You want a quick, coherent overview you can read in 2–10 minutes. |

All three skills are explicit-only. They are not pulled in automatically by the model; the user starts them with a slash command.

## Why these skills exist

Many readers hit the same walls:

- project documentation is stale, incomplete, or full of unexplained jargon;
- technical articles mix abbreviations, domain terms, and assumed background;
- a reader only has ten minutes, but still needs a correct mental model;
- source material is in one language while the reader is more comfortable in another.

These skills turn that material into a plain-language Markdown guide, without replacing the original source.

## What every skill tries to do

- Match the language of the current conversation; ask once when the language is unclear.
- Write for the lowest plausible reader, then let experts skim the same text.
- Preserve accuracy. Separate source-supported facts from inference and unverified areas.
- Avoid AI-flavored filler. Prefer concrete, connected prose.
- Put downloaded or generated images in a session-local `assets/` folder.
- Write artifacts under `.reader/` instead of scattering them through the working tree.

## Install

Install the whole collection:

```bash
npx skills@latest add haoyisun/skills
```

Install one skill:

```bash
npx skills@latest add haoyisun/skills --skill read-project
```

Then use it in your AI tool:

```text
/read-project https://github.com/owner/repo
/read-standard https://example.com/deep-article
/read-fast ./notes/topic.md
```

Codex uses `$read-project`, `$read-standard`, and `$read-fast` for the same three skills.

## Output layout

Artifacts are written under `.reader/`:

```text
.reader/
  projects/   # /read-project
  deep/       # /read-standard
  quick/      # /read-fast
```

Each reading session uses a dated folder:

```text
.reader/deep/2026-09-10-harness-engineering/
  harness-engineering.md
  assets/
    ace.png
```

If the current directory is a Git repository and `.gitignore` does not already include `.reader/`, the skill appends it.

## Documentation

The project documentation follows [Diátaxis](https://diataxis.fr/):

- [English documentation](./docs/en/index.md)
- [简体中文文档](./docs/zh/index.md)

English is the canonical README language; Simplified Chinese is kept as a maintained mirror.

## Development

```bash
npm run validate
npm run check:i18n
npm run scaffold:skill -- reading <skill-name>
```

`npm run validate` checks every `SKILL.md` and confirms that `docs/en/` and `docs/zh/` have the same page tree.

## Project structure

```text
.
├── docs/                    # Diátaxis docs: en/ and zh/
│   └── adr/                 # Architecture decision records
├── skills/
│   └── reading/
│       ├── read-project/
│       ├── read-standard/
│       └── read-fast/
├── scripts/                 # Validation and scaffolding utilities
├── CONTEXT.md               # Shared vocabulary for agents
└── package.json
```

## License

[MIT](./LICENSE)
