# ADR-0004: Single-entry goal-driven Scholar skill

Status: Accepted

Date: 2026-09-11

## Context

The Reader family starts from material the user already has. The owner wants the repository to also produce learning material for a learning goal, where good sources may not exist yet, where the reader's starting point varies, and where the same topic can deserve ten minutes or three weeks. Splitting that into several commands would scatter the goal confirmation, which must happen exactly once. The repository convention is one skill per invocation, with detail in `references/` and shared foundations referenced by name (ADR-0002).

## Decision

- Ship one user-facing command, `/scholar`, that routes internally to three depth tiers: `quick` 快读, `guide` 通学, and `mastery` 精修.
- Make goal confirmation the first mandatory phase: an eleven-field goal card, at most five questions in one round, inferred defaults labelled for correction, and `guide` as the fallback tier.
- Make source research and vetting mandatory: every claim traceable, key claims backed by two independent S/A sources, disagreements shown rather than resolved silently, AI-generated content never treated as evidence.
- Turn illustrations on by default with per-tier budgets, captions, alt text, prose explanations, and provenance in `assets/SOURCES.md`.
- Keep the protocols in `references/`, templates in `assets/`, and two Node-standard-library scripts: one scaffolds a session, one checks a finished session.
- Reference `technical-diagrams` by name for diagrams instead of duplicating Mermaid guidance.

## Consequences

- Goal confirmation stays in one place, and users learn one command instead of a command family.
- `SKILL.md` stays short; the detailed protocols load only when the workflow reaches them.
- Sessions are resumable because `plan.md` carries the goal card, the chapter table, and the review log.
- Users who want diagrams install `scholar` and `technical-diagrams` together, which installing the whole repository already does.
