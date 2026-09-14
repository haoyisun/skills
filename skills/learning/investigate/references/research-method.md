# Research method

Research here is decision-driven: you read to answer the decision question, and you stop when the decision can be made. Reading everything is neither the goal nor possible.

## What to read, in what order

1. **Framing sources**: what the thing is and what problem it solves — an official overview, a standard, a README.
2. **Mechanism sources**: how it actually works — source code, specifications, design documents.
3. **Comparison sources**: alternatives and their trade-offs — benchmarks with a stated environment, migration reports, maintainer discussions.
4. **Constraint sources**: what the target system imposes — its code, tests, deployment configuration, existing conventions.

Skip any layer the decision does not need, and say which layers were skipped. A `brief` on a well-documented library may need only layers 1 and 2.

## Reading a codebase

- Start from entry points and from the module that implements the mechanism under decision.
- Follow a dependency only when skipping it would make a conclusion unsafe. Ask: "if I do not read this, which claim becomes a guess?"
- Read tests as executable documentation of intended behaviour.
- Sample, do not exhaust: record one line per file that says why it was read.
- Note the version or commit. Behaviour can change between releases, and a claim about "how it works" is a claim about a specific revision.
- When code and documentation disagree, report the drift with both sides rather than choosing one.

## Budget and stop conditions

The task card may set a budget: hours, or a maximum number of modules or files. A budget is a ceiling, not a target.

Stop when all three conditions hold:

1. Key claims have at least two independent S/A sources.
2. Every candidate option has been evaluated against the constraints, or against the empty-constraint case for `standalone` research.
3. The remaining uncertainty is written into open questions, and further reading has clearly diminishing returns.

When the budget runs out before these conditions hold, say so and deliver the partial result with a done / not done / unverified list. Never extend the budget silently.

## Keeping the research honest

- Keep a one-line reading log as you go: source, why it was read, which claim it supports. It becomes the evidence table.
- Record disagreements and uncertainty while reading, not as a cleanup pass.
- Note what would change the conclusion: a version bump, a constraint, an assumption that fails.
- Never summarize a source you did not open, and never cite a link you did not fetch.
- Prefer primary evidence. When the primary source is a repository, cite the file or the commit; when it is a standard, cite the section.

## Reporting the boundary

Every deliverable states what was not covered:

- modules or repositories not inspected;
- versions not tested;
- environments not measured;
- questions left open.

The reader must be able to see where the investigation stopped, and why stopping there was reasonable.
