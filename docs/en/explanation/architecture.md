# Project architecture

## Top-level structure

```text
docs/      Diátaxis documentation, split into zh/ and en/
skills/    Installable agent skills
scripts/   Validation and scaffolding utilities
CONTEXT.md Shared project vocabulary
```

## Three reading skills

- `read-project` helps users read a software project.
- `read-standard` helps users learn technical material deeply.
- `read-fast` helps users get a quick overview.

All three are explicit-only and are invoked as `/read-project`, `/read-standard`, and `/read-fast`.

## Why `skills/<category>/<name>`

Category directories exist only to organize browsing. `skills.sh` walks one or two levels deep to find `SKILL.md`, so the category does not affect installation.

## Why all artifacts go under `.reader/`

Reading artifacts are kept separate from user source code. Type folders under `.reader/` make outputs easy to find and clean up.

## i18n convention

`docs/zh/` and `docs/en/` must keep the same relative paths. Run `npm run check:i18n` to detect missing pages.

