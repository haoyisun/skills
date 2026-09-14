# Evidence and experiments

Evidence for a decision must be checkable. The shared `scholarly-standards` skill defines the S/A/B/C tiers, independence, and citation format. This file adds the evidence table, the E tier for local experiments, and the approval rules for running anything.

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

Every E entry records:

- the exact command or script;
- dependency and runtime versions;
- the environment: operating system, runtime, and hardware where it matters;
- the date;
- the observed result, including the relevant output;
- what the result supports, and what it does not.

Rules:

- A failed experiment is recorded too, together with what it ruled out.
- A benchmark without environment and version information is not evidence.
- E supports a statement like "in this environment, this behaved like this". It never replaces an authoritative source explaining the mechanism.
- Re-running the same command in a different environment creates a new E entry. The old one stays, because it records a different observation.

## Approval and isolation for running anything

Default mode: static research plus read-only commands — `git log`, `rg`, file reads, and fetching documentation.

Anything beyond that — installing dependencies, running the project's tests, benchmarks, spikes, containers — requires all of:

1. state the purpose and the evidence it would produce;
2. state the impact: writes, network access, time, and anything that touches the user's project;
3. get explicit user approval;
4. run in an isolated location, such as a scratch directory, never inside the user's project without agreement;
5. record the result as an E entry, including failures.

Never install, build, or modify the user's project silently.

## Using E in the deliverable

- The option comparison marks which cells rest on E rather than on S/A evidence.
- The design section says which choices depend on environment-bound results.
- The appendix lists experiments with their limitations and environment.
- When an E result conflicts with authoritative documentation, report both, and explain which one the decision should trust, and why.
