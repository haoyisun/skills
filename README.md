<h1 align="center">Scholar</h1>

<p align="center"><strong>学者 (Scholar): explicit-only agent skills for reading, learning, and understanding technical material.</strong></p>

<p align="center">
  <a href="./README.md"><img alt="English" src="https://img.shields.io/badge/English-DBEDFA"></a>
  <a href="./README.zh-CN.md"><img alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-DFE0E5"></a>
</p>

<p align="center">
  <a href="https://skills.sh/haoyisun/skills"><img alt="skills.sh install count" src="https://skills.sh/b/haoyisun/skills"></a>
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue"></a>
  <a href="https://agentskills.io/specification"><img alt="Agent Skills specification" src="https://img.shields.io/badge/Agent%20Skills-specification-4e6b99"></a>
</p>

Scholar is the umbrella project with two families. **Reader** (读者) turns raw technical material into a Markdown guide you can follow. **Scholar** (学者) produces learning material from a goal: a quick overview, a complete study guide, or a multi-file handbook. Both families read or vet their sources before writing anything, and none of them start on their own.

## Skills

| Skill | Family | Source | Output |
| --- | --- | --- | --- |
| `read-project` | Reader | A codebase: local path, repository URL, GitHub link, or project name | An onboarding, architecture, and business-flow guide |
| `read-standard` | Reader | A technical article, blog post, book, PDF, local file, or pasted text | A complete study guide, section by section |
| `read-fast` | Reader | The same sources, when a few minutes is all you have | A 2–10 minute overview of the main idea and key concepts |
| `scholar` | Scholar | A topic or learning goal, with optional sources | A quick overview, a complete study guide, or a multi-file handbook |
| `technical-diagrams` | Shared | Called by `scholar` and the reading skills when a picture helps | Mermaid and C4 diagrams embedded in Markdown |

All five are **explicit-only**. They stay out of the model's reach until you invoke one.

## Installation

```bash
npx skills@latest add haoyisun/skills
```

The installer lists what the repository ships, then asks which skills to take and which agents to install them on. `skills` supports 75+ agents, including Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, and Windsurf, and writes each skill into the directory that agent already reads from.

`scholar` and the reading skills reference `technical-diagrams` by name for their diagrams. Installing the whole repository keeps them together: `npx skills@latest add haoyisun/skills`. If you install skills individually, include `technical-diagrams` alongside them.

```bash
# Install one skill
npx skills@latest add haoyisun/skills --skill read-project

# Preview without installing
npx skills@latest add haoyisun/skills --list

# Install user-level instead of into the current project
npx skills@latest add haoyisun/skills -g
```

Then invoke a skill:

```text
/read-project https://github.com/owner/repo
/read-standard https://example.com/deep-article
/read-fast ./notes/topic.md
/scholar ADR
```

Slash-command agents such as Claude Code and Cursor use `/read-project`. Codex uses `$read-project`.

## Design principles

Every skill in this repository follows the same rules.

- **Read the source, not the summary.** `read-project` verifies its claims against code and tests instead of trusting the README. `read-standard` follows the source section by section and keeps each section's reasoning intact.
- **Separate fact from inference.** Anything the source does not support is labelled as inference or marked unverified.
- **Write for the lowest plausible reader.** Terms and abbreviations are explained where they first appear, so a newcomer can follow without stopping to search.
- **Match the language of the conversation.** The source language and the reading language can differ.
- **Hand back artifacts you own.** Output is plain Markdown under `.scholar/`, stored beside the project it describes.
- **Vet every claim.** `scholar` traces each claim to a fetched source, marks disagreement instead of hiding it, and never treats AI-generated text as evidence.
- **Never replace the source.** The guide is a companion to the original material.

## Output layout

```text
.scholar/
  projects/   # read-project
  deep/       # read-standard
  quick/      # read-fast
  study/      # scholar sessions
```

Each session gets a dated folder:

```text
.scholar/deep/2026-09-10-harness-engineering/
  harness-engineering.md
  assets/
    ace.png
```

If the working directory is a Git repository and `.gitignore` does not already list `.scholar/`, the skill appends it and says so. `.reader/` was the pre-rename output root: existing artifacts are left in place, and both roots stay ignored.

## Compatibility

Scholar follows the [Agent Skills specification](https://agentskills.io/specification), which is what lets one repository serve many agents. Agent-specific extras sit alongside it:

| Layer | Where it lives | Purpose |
| --- | --- | --- |
| Portable | `SKILL.md` frontmatter and body | `name`, `description`, and the instructions. Read by every skills-compatible agent. |
| Claude Code | `disable-model-invocation: true` in frontmatter | Keeps the skill out of the model's reach. |
| Codex | `agents/openai.yaml` | Picker metadata and `allow_implicit_invocation: false`. |

## Documentation

The project documentation follows [Diátaxis](https://diataxis.fr/):

- [English documentation](./docs/en/index.md)
- [简体中文文档](./docs/zh/index.md)

English is the canonical README language. Simplified Chinese is a maintained mirror.

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
│   ├── reading/             # Reader family
│   │   ├── read-project/
│   │   ├── read-standard/
│   │   └── read-fast/
│   ├── learning/
│   │   └── scholar/         # Scholar family
│   └── diagrams/
│       └── technical-diagrams/
├── scripts/                 # Validation and scaffolding utilities
├── CONTEXT.md               # Shared vocabulary for agents
└── package.json
```

## License

[MIT](./LICENSE)
