# Experiments

Some sessions need to run something to settle a question. This protocol defines when that is allowed, how to run it, and how to record the result as type E evidence. It applies to every skill that offers approved experiments, currently `investigate` and `read-skill`.

## Approval and isolation

Default mode is static work plus read-only commands: `git log`, `rg`, file reads, and fetching documentation.

Anything beyond that — installing dependencies, running the project's tests, benchmarks, spikes, containers, or invoking a third-party skill in a live directory — requires all of:

1. state the purpose and the evidence it would produce;
2. state the impact: writes, network access, time, and anything that touches the user's project or their installed skills;
3. get explicit user approval;
4. run in an isolated location, such as a scratch directory or a throwaway skills directory, never inside the user's project or their live agent configuration without agreement;
5. record the result as an E entry, including failures.

Never install, build, or modify the user's project or installed skills silently.

## Recording an experiment

Every E entry records:

- the exact command or script;
- dependency and runtime versions;
- the environment: operating system, runtime, and hardware where it matters;
- the date;
- the observed result, including the relevant output;
- what the result supports, and what it does not.

Rules:

- A failed experiment is recorded too, together with what it ruled out.
- A benchmark or a trial without environment and version information is not evidence.
- E supports a statement like "in this environment, this behaved like this". It never replaces an authoritative source explaining the mechanism.
- Re-running the same command in a different environment creates a new E entry. The old one stays, because it records a different observation.

## Using E in the deliverable

- Mark which claims and comparison cells rest on E rather than on S/A evidence.
- Say which conclusions depend on environment-bound results.
- List experiments with their limitations in the appendix.
- When an E result conflicts with authoritative documentation, report both, and explain which one the decision should trust, and why.
