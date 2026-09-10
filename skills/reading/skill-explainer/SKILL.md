---
name: skill-explainer
description: Use when the user wants to understand an installed agent skill, what it does, when to use it, and how its referenced files fit together. Reads SKILL.md and related references completely, then explains usage, triggers, and limitations.
---

# Skill Explainer

Help the user understand an agent skill before they invoke it or modify it.

## 1. Locate the skill

The user may give:

- A skill name such as `$reader`.
- A path to a `SKILL.md`.
- A description that sounds like an installed skill.

Resolve the path and confirm it exists before explaining.

## 2. Read the entry point completely

Read the entire `SKILL.md`. In particular:

- The YAML frontmatter `name` and `description`.
- The trigger conditions or "use when" text.
- Step-by-step instructions.
- Any tools, references, or scripts the skill requires.

Do not explain only from the frontmatter.

## 3. Follow referenced files

If `SKILL.md` points to:

- `references/*.md`
- `scripts/*`
- `assets/*`

Resolve those paths relative to the skill directory and read the ones required for the user's question. Avoid loading unrelated references.

## 4. Explain usage and boundaries

Answer:

- What problem does this skill solve?
- When should it be used?
- When should it not be used?
- What inputs does it expect?
- What does it produce or change?
- Does it require a specific agent, tool, or network capability?

## 5. Show a minimal invocation

Give the shortest realistic example of how to start using the skill, using the syntax appropriate to the user's agent. If the syntax is unknown, say so and show the skill name instead.

## 6. Warn about risks and prerequisites

Call out destructive actions, writes outside the workspace, credentials, network access, or assumptions the skill makes. If the skill would change user-owned files, say what it changes before proceeding.

## 7. Offer a decision

Finish with one of:

- Use this skill now.
- Use a different skill and explain why.
- Ask the user one more clarifying question before deciding.
