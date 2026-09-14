# Evidence and experiments

Evidence for a decision must be checkable. The shared `scholarly-standards` skill defines the S/A/B/C tiers, independence, and citation format. This file adds the evidence table and how the E tier is used in a deliverable; the E-tier recording rules and the approval process live in the shared `experiments` protocol.

## Evidence table

| ID | Type | Source or artifact | Tier | Supports | Accessed or run |
| --- | --- | --- | --- | --- | --- |
| E1 | Document | RFC 9110 §3.3 | S | HTTP method semantics | 2026-09-14 |
| E2 | Experiment | Benchmark on Node 22, 8 vCPU | E | Throughput under load | 2026-09-14 |

Rules:

- Every claim-bearing statement points at an evidence ID.
- IDs are stable: `E1`, `E2`, and so on in order of first use, reused everywhere they apply. Do not renumber.
- S and A evidence can carry conclusions; B corroborates; C is a lead and never evidence; E carries environment-bound observations.
- The appendix repeats the table for the whole session, even when individual chapters also cite inline.

## Local experiments (type E)

Type E covers observations produced by running something. Record every experiment with the command, dependency versions, environment, date, and result, following the shared `scholarly-standards` experiments protocol. Approval and isolation are mandatory for anything beyond read-only commands.

## Using E in the deliverable

- The option comparison marks which cells rest on E rather than on S/A evidence.
- The design section says which choices depend on environment-bound results.
- The appendix lists experiments with their limitations and environment.
- When an E result conflicts with authoritative documentation, report both, and explain which one the decision should trust, and why.
