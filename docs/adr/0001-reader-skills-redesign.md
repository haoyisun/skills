# ADR-0001: Redesign Reader skills around explicit reading commands

Status: Accepted

Date: 2026-09-10

## Context

The original repository shipped three skills: `reader`, `open-source-explorer`, and `skill-explainer`. Their instructions were broad and did not clearly separate a deep, mastery-oriented read from a quick overview. The project also used passive skill discovery while the owner wanted a set of user-invoked commands.

## Decision

Replace the three skills with three explicit-only skills:

- `read-project`: read a software project from code and documentation.
- `read-standard`: deeply read and explain technical material.
- `read-fast`: produce a short, coherent overview readable in 2–10 minutes.

Each skill is explicit-only and is named after its invocation: `/read-project`, `/read-standard`, `/read-fast`.

Additional decisions:

- Keep the project and package names: `Reader` / `reader-skills`.
- Delete `skill-explainer` rather than keeping it as a fourth skill.
- Default output root is `.reader/` with type folders `projects/`, `deep/`, and `quick/`.
- Each output uses a dated session folder and an `assets/` subfolder.
- Assume a low-domain reader, and follow the conversation language unless unclear.
- For remote GitHub projects, shallow-clone into the output folder, then delete the source after recording the repository URL and commit hash.
- Allow only read-only commands for `read-project`; do not install, build, test, or start services by default.
- Add `.reader/` to the working repository's `.gitignore` when it is missing.
- For long deep-reading sources, read in batches while maintaining a glossary and main-line notes, and clearly report partial completion.
- Write ADR-0001 to preserve the reasoning for these changes.

## Consequences

- The repository has fewer, more purpose-specific skills.
- Users always choose the desired reading depth explicitly.
- Output artifacts are isolated under `.reader/` and are easy to locate and clean up.
- Documentation and validation scripts must use the new skill names.
- The `skill-explainer` use case is no longer part of this repository's shipped skills.

