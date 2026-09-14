# ADR-0005: Add investigate and extract shared scholarly standards

Status: Accepted

Date: 2026-09-14

## Context

The Scholar family could already turn a learning goal into study material, but technical work also needs a different outcome: a decision. Comparing options, reading an unfamiliar codebase, and producing a design or implementation plan is research in service of a decision, not learning material for a person. That workflow needs the same evidence, writing, image, capability, and question rules that `scholar` already follows; copying those rules into a second skill would guarantee that they drift apart. The repository already accepted shared foundation skills in ADR-0002.

## Decision

- Add `investigate`, a decision-oriented research skill that produces a `brief`, a `plan`, or a multi-file `dossier` under `.scholar/research/`.
- Confirm a twelve-field task card before researching; `grounding` distinguishes project, standalone, and concept work; the default tier is `plan`.
- Extend the evidence model with type E: local experiments recorded with command, dependency versions, environment, date, and result. Anything beyond read-only commands needs the user's approval and runs in isolation.
- Make decision points mandatory: every plan ends with the choices the human must settle, each with a recommendation, reasoning, and decider, plus three confidence levels, an assumptions section, and a reproducible verification path.
- Extract source evaluation, writing style, image policy, capability degradation, and the question protocol into a new shared skill, `scholarly-standards`, referenced by name by both Scholar-family skills.
- Keep `scholar`'s workflow, tiers, goal model, and output schemas unchanged. Its dry-run sessions must still pass after the refactor.
- Bump the package to `0.5.0`.

## Consequences

- One standards layer now serves both skills; protocol fixes land once.
- `scholar` behaviour is unchanged by construction and by verification.
- `investigate` deliverables are resumable through `plan.md` in dossier sessions, and machine-readable through frontmatter and fixed tables.
- Installing a single skill individually requires the shared skills, which installing the whole repository provides.
