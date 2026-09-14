# Skill assessment

The guide exists to support a decision. This file defines the verdict, the red lines, and the accuracy rules for the claims that are most easily invented.

## The verdict

Choose one of three, and give both the reasoning and the condition that would change it:

| Verdict | When to use it |
| --- | --- |
| Recommended | It solves the stated problem, behaves as documented for the parts that matter, dependencies are clear, and no red lines were hit |
| Recommended with conditions | It is useful but has caveats: it needs companion skills, its trigger is narrow, maintenance is unclear, or a trial is needed before trusting the effects |
| Not recommended | It does not fit the need, red lines were hit, or the documented behaviour cannot be verified at all |

Rules:

- Base the verdict on behaviour and evidence, never on star count, fork count, or how polished the README looks.
- State what would change the verdict, such as a successful trial or resumed maintenance.
- When the evidence is thin, prefer "recommended with conditions" and say what to verify.
- In a multi-skill repository, give one verdict per skill.

## Red lines

Report any of these in the quality and risk section, with the evidence:

- asks for credentials, tokens, or secrets;
- runs destructive commands, or writes outside its documented output directory;
- allows implicit invocation with a broad trigger surface — say what it may auto-trigger on;
- depends on a companion skill that is not declared in the README or `SKILL.md`;
- license is missing or unclear;
- documentation that is visibly AI-generated and ambiguous, which lowers how much a reader can trust the usage instructions.

For documentation problems, quote the passage and say what it makes unclear. A generic complaint is not evidence.

## Effect claims

Every statement about what the skill produces carries a tag:

- ran it yourself, in an isolated environment, with approval → `（实测）`, plus the experiment record;
- read the claim in the repository → `（仓库声称）`;
- could not resolve it → `（未验证）`.

Prefer running the first invocation when the effects are the deciding factor and the user agrees. Never describe an effect from imagination.

## Installation accuracy

- The install command comes from the repository README or the skills CLI documentation, and the guide says which one it came from.
- List the minimal install set: the skill plus every skill it references by name. Say what breaks when a companion is missing.
- Give the invocation syntax per agent — slash command versus `$` prefix — and note that the reader should check their agent's syntax.
- Record the source repository, the version or commit, and the access date.
- When the installed copy is what was read, say so, and note any difference from the remote repository.

## Composition accuracy

- Composition claims come from by-name references inside skill files, README install instructions, or dependency notes in the references.
- Describe the direction: which skill depends on which, and the order to install them.
- Check for collisions with what is already installed: the same skill name from another source, overlapping triggers, or two skills that both allow implicit invocation.
- A composition that cannot be verified is marked `（未验证）`.

## What this assessment is not

- It is not a code review. Internal implementation quality matters only where it changes behaviour a user can observe.
- It is not a security audit. Report what is visible, and say that a full audit was not performed.
- It is not an endorsement of the author.
