# ADR-0006: Add read-skill and supersede the skill-explainer decision

Status: Accepted

Date: 2026-09-14

## Context

ADR-0001 deleted the `skill-explainer` skill and stated that the use case no longer belonged to this repository. That decision was made when the repository was a small set of reading commands and the use case was vaguely defined.

The need is now sharper. People browsing skill repositories want to know whether a skill is worth adopting and how to use it: what it does, when to use it, when not to, how to install and invoke it, what it produces, how it composes with other skills, and what to watch out for. Official documentation is often hard to read, and asking an assistant usually takes several rounds of prompting before the answer fits. The existing skills cover adjacent ground: `read-project` explains a codebase, `read-standard` teaches material, and `investigate` researches a decision into a design plan.

## Decision

- Add `read-skill` to the Reader family, explicit-only, writing under `.scholar/skills/`.
- Two tiers: `card` (one page) and `full` (ten sections, the default). Repositories with more than twelve skills use a multi-file form: a repository guide plus one chapter per detailed skill.
- When the user names a skill that is installed locally, read that copy and say so; ask one question when a bare name matches several candidates.
- Static reading by default. Installing or running a third-party skill requires approval and an isolated directory, and is recorded as type E evidence under the shared experiments protocol.
- Label effect claims as `（实测）`, `（仓库声称）`, or `（未验证）`; give a three-way verdict — recommended, conditional, or not recommended — with the reasoning and the condition that would change it; report red lines with evidence.
- Install commands and composition claims must trace to the repository README, the skill's own files, or the skills CLI documentation.
- This supersedes ADR-0001's deletion decision for the `skill-explainer` use case. The difference is scope and rigour: this skill covers the skill ecosystem, requires traceable install and composition claims, and produces a usage guide rather than a code explanation.
- Bump the package to `0.6.0`.

## Consequences

- The Reader family gains a fourth skill, and the repository re-introduces a use case it once removed — on record, with the reason.
- Guides about third-party skills become auditable: effects carry evidence tags, and install and composition claims carry sources.
- Users naming a locally installed skill get a guide for the copy they actually have, with differences from the remote repository called out.
