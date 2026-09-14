<!-- A minimal, abridged example of plan-tier output. A real session carries the full
     section list from references/output-schemas.md. -->

---
task_card:
  decision_question: "How should the internal API expose pagination?"
  subject: API design
  grounding: standalone
  project_context: ""
  constraints: "Two client teams, no breaking change allowed, one quarter."
  budget: "6 hours"
  tier: plan
  language: en
  illustrations: true
  run_verification: false
  source_scope: self-research+user-provided
  exclusions: "No GraphQL work."
---

# Pagination for the internal API

- Tier: plan · Grounding: standalone · Language: en · Generated: 2026-09-14

## Task card

| # | Field | Value |
| --- | --- | --- |
| 1 | Decision question | How should the internal API expose pagination? |
| 2 | Subject | API design |
| 3 | Grounding | standalone |
| 4 | Project context | none |
| 5 | Constraints | two client teams, no breaking change, one quarter |
| 6 | Budget | 6 hours |
| 7 | Tier | plan |
| 8 | Language | English |
| 9 | Illustrations | on |
| 10 | Run verification | off |
| 11 | Source scope | self-research + user-provided |
| 12 | Exclusions | no GraphQL work |

## Problem, constraints, success criteria

The API returns full collections today, which does not scale for the two largest endpoints. Success means both client teams can adopt pagination without a breaking change, and the choice survives a year of growth.

## Option comparison

| Option | Evidence | Cost | Risk | Fit with constraints |
| --- | --- | --- | --- | --- |
| Cursor pagination | E1, E2 | Medium | Low for append-only data | Strong: stable under insertion |
| Offset pagination | E3 | Low | Skips or duplicates rows under writes | Weak, but familiar to both teams |

## Decision points

| ID | Question | Recommendation | Reasoning | Decides |
| --- | --- | --- | --- | --- |
| D1 | Cursor or offset for the new parameters? | Cursor | Stable ordering under concurrent writes; E1, E2 | API owner |
| D2 | Deprecation window for the unpaginated responses? | Two releases | Client teams need one release to adopt and one to remove | Engineering manager |

## Open questions and unread areas

- Client SDK regeneration time was not measured (no experiment run; `run_verification` is off).

## Sources

| ID | Type | Source | Tier | Supports | Accessed |
| --- | --- | --- | --- | --- | --- |
| E1 | Document | [RFC 9110 §3.3](https://www.rfc-editor.org/rfc/rfc9110.html) | S | HTTP semantics for paging links | 2026-09-14 |
