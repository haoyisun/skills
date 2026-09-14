---
name: scholarly-standards
description: Shared evidence, writing, image, capability, and question protocols for the Scholar family skills. Referenced by name; not invoked directly.
disable-model-invocation: true
---

# scholarly-standards

Shared protocols for the skills in this repository that produce sourced material: `scholar` and `investigate`.

This skill is not a user-facing command. Another skill references it by name when it needs one of the protocols below; the agent then follows the matching file in `references/`.

## Protocols

- [references/source-evaluation.md](references/source-evaluation.md): S/A/B/C source tiers, independence, evidence thresholds, conflict handling, citation format, and the source appendix schema.
- [references/writing-style.md](references/writing-style.md): the writing contract, banned patterns, and the lowest-plausible-reader rules.
- [references/image-policy.md](references/image-policy.md): the three picture types, per-tier budgets, generation gates, captions and alt text, provenance, and fallbacks.
- [references/capabilities.md](references/capabilities.md): capability detection and honest degradation when search, fetch, image tools, sub-agents, or script execution are missing.
- [references/question-protocol.md](references/question-protocol.md): one round of at most five questions, options, labelled inferences, and skip paths.

## Rules

- Follow the protocol the invoking skill asked for; do not invent a variant.
- The invoking skill defines the card fields, defaults, and tiers. These protocols define how to ask, verify, write, draw, and degrade.
- When one protocol references another file, it lives in this skill's `references/` directory.
