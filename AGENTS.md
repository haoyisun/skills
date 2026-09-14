# AGENTS.md

This repository is **Scholar** (学者), an open-source collection of agent skills that help people read material they already have and turn a goal or a decision into material they can use.

The Reader (读者) family ships four explicit-only reading skills: `read-project`, `read-standard`, `read-fast`, and `read-skill`.

The Scholar (学者) family ships `scholar`, which turns a learning goal into sourced learning material, and `investigate`, which turns a technical decision into a verified design and implementation plan.

The shared skills hold what both families use: `scholarly-standards` for the source, writing, image, capability, question, and experiment protocols, and `technical-diagrams` for Mermaid and C4 guidance.

## Agent skills

### Issue tracker

Issues and specs for this repo live as Markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the default triage roles: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: one root `CONTEXT.md` plus `docs/adr/`. See `docs/agents/domain.md`.

## Repository layout

```text
.
├── docs/                  # Diátaxis documentation, zh/ and en/
│   ├── adr/               # Architecture decision records
│   ├── zh/
│   └── en/
├── skills/                # Installable agent skills
├── scripts/               # Validation and scaffolding utilities
├── CONTEXT.md             # Shared domain vocabulary
└── package.json           # npm package metadata
```
