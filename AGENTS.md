# AGENTS.md

This repository is **Reader** (读者), a collection of agent skills that help people read, learn, and understand technical articles, documentation, open-source projects, and other agent skills.

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
├── skills/                # Installable agent skills
├── scripts/               # Validation and scaffolding utilities
├── CONTEXT.md             # Shared domain vocabulary
└── package.json           # npm package metadata
```
