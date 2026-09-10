# AGENTS.md

This repository is **Reader** (读者), a collection of agent skills that help people read, learn, and understand technical material through an AI tool.

The repository ships three explicit-only reading skills: `read-project`, `read-standard`, and `read-fast`.

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

