# ADR-0003: Rebrand Reader as Scholar

Status: Accepted

Date: 2026-09-11

## Context

ADR-0001 kept the project and package names `Reader` / `reader-skills` and scoped the repository to three explicit reading commands. Since then the owner has decided the project needs a larger scope: helping a scholar produce trustworthy learning material from a learning goal, not only reading material that already exists. The reading commands remain valuable, but they are one family inside that larger idea, and the project name should reflect the umbrella rather than one family.

## Decision

- Rename the project to **Scholar** (学者).
- Keep **Reader** (读者) as the name of the reading capability family inside Scholar.
- Change the package name from `reader-skills` to `scholar-skills`.
- Move the default output root from `.reader/` to `.scholar/`, keeping `.reader/` for existing artifacts.
- Keep the repository URL `haoyisun/skills` and the command names `read-project`, `read-standard`, and `read-fast` unchanged.
- Keep `technical-diagrams` as a shared foundation that any Scholar family skill can reference by name.
- This decision supersedes the naming decision in ADR-0001. The rest of ADR-0001 stands.

## Compatibility

- Existing `.reader/` output is not migrated, moved, or deleted. Skills write new sessions under `.scholar/`, and both roots stay in `.gitignore`.
- Existing users keep their command names and installation source; only the package name and output root change.
- Documentation in `docs/en/` and `docs/zh/` is updated together.

## Consequences

- The project name now covers reading and future learning commands.
- Documentation, package metadata, and skill output paths must use the new root.
- Historical ADRs keep the old name, because they record decisions made under it.
