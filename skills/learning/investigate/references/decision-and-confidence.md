# Decision points and confidence

The reader stays the decision-maker. This file defines how recommendations, confidence, assumptions, and verification paths are written.

## Decision points

Every plan closes its analysis with a table the reader can act on:

| ID | Question | Recommendation | Reasoning | Decides |
| --- | --- | --- | --- | --- |
| D1 | Which storage engine should the audit trail use? | Postgres | The team already operates it, and the write volume is two orders of magnitude below its limit (E3) | Platform owner |

Rules:

- One row per choice the human actually has to make. Do not pad the table with choices the evidence already settles.
- Every row carries a recommendation. "It depends" is not a recommendation: say what it depends on, and pick a branch.
- Reasoning cites evidence IDs or names the constraint it rests on.
- `Decides` names a role. When a specific owner exists, do not write "the team".
- When a decision needs information nobody has yet, it is an open question, not a decision point.

## Confidence labels

| Label | Meaning |
| --- | --- |
| High | Several independent S/A sources agree, no unresolved conflict, and the design follows directly |
| Medium | Evidence is consistent but thin, or the design involves a judgement call or an unverified environment assumption |
| Low | Rests on a single source, an assumption, or an analogy; state what would change it |

Rules:

- Every design choice carries one label and a one-line reason.
- Confidence describes the evidence and reasoning, not how attractive the option is.
- A low-confidence choice says what would raise it.
- Do not label everything medium; a checklist where every row is the same is not a judgement.

## Assumptions

- Collect assumptions in their own section: what is assumed, why, and what depends on it.
- Each assumption states how it could be checked, and what changes if it turns out false.
- Assumptions never masquerade as facts, even when they look obvious.

## Making the conclusion reproducible

For each key claim or design choice, give the reader a way to check it themselves:

- which file or section to read;
- which command to run, when one exists;
- which experiment would settle it, when the answer is not known yet.

A reader should be able to re-derive the recommendation from the evidence table and the reasoning, rather than trusting the conclusion.

## Independent review

When the environment supports sub-agents, give a fresh context the deliverable, the task card, and [review-checklist.md](review-checklist.md), and ask for findings rather than agreement. Otherwise run the checklist yourself and record it as a self-check. `dossier` sessions record reviews in `plan.md`; single-file sessions record them in the body.
