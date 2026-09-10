# Project architecture

## Top-level structure

```text
docs/      Diátaxis documentation, split into zh/ and en/
skills/    Installable agent skills
scripts/   Validation and scaffolding utilities
```

## Why Diátaxis

Tutorials, how-to guides, reference, and explanation answer four different kinds of questions. Keeping them separate helps users find "what do I do now" quickly instead of searching through one long page.

## Why `skills/<category>/<name>`

Category directories exist only to organize browsing. `skills.sh` walks one or two levels deep to find `SKILL.md`, so the category does not affect installation.

## i18n convention

`docs/zh/` and `docs/en/` must keep the same relative paths. Run `npm run check:i18n` to detect missing pages.
