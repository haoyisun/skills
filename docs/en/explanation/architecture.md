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

## One shared diagramming skill

`technical-diagrams` is a shared foundation that the reading skills use by name when they decide a diagram would help. It holds Mermaid syntax and C4 architecture guidance, and it is bundled with the reading skills in a Skill Pack so it is always present. It is not reader-specific, so future non-reader skills can depend on it too.

## Why skills reference each other by name

The skills CLI installs each skill into its own directory by skill name, not by its source category path. Relative paths between skill folders do not survive installation, so a skill that needs another skill references it by name and is distributed together with it in the same pack.

## Why `skills/<category>/<name>`

Category directories exist only to organize browsing. `skills.sh` walks one or two levels deep to find `SKILL.md`, so the category does not affect installation.

## Why all artifacts go under `.reader/`

Reading artifacts are kept separate from user source code. Type folders under `.reader/` make outputs easy to find and clean up.

## i18n convention

`docs/zh/` and `docs/en/` must keep the same relative paths. Run `npm run check:i18n` to detect missing pages.
