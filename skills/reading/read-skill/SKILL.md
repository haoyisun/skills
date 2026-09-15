---
name: read-skill
description: "Turn a third-party skill or skill repository into a usage guide: what it does, when to use it, how to install it, what it produces, how it combines with other skills, and whether it is worth adopting."
disable-model-invocation: true
---

# read-skill

Help someone decide whether to use a third-party skill, and then actually use it. Read the skill's own files and its repository, verify what can be verified, and write a guide a human can act on without writing more prompts.

Where this sits among its neighbours: `read-project` reads code to explain a system, `read-standard` reads material to teach it, and `investigate` researches a decision into a design plan. This skill reads the skill ecosystem, and its depth stops at what is needed to choose, install, invoke, and combine a skill.

## Invocation

This skill is explicit-only. The model never starts it on its own; the user starts it. The exact syntax depends on the agent:

```text
/read-skill <repo URL, owner/repo, skill name, or local path>   # slash-command agents
$read-skill <repo URL, owner/repo, skill name, or local path>   # Codex
```

Examples:

```text
/read-skill anthropics/skills
/read-skill scholar
/read-skill ./vendor/some-skill
/read-skill 继续 .scholar/skills/2026-09-14-anthropics-skills/README.md
```

## Hard rules

1. Resolve the input before reading anything. Follow [references/input-resolution.md](references/input-resolution.md). When the user names a skill that is installed locally, read that copy and say so.
2. Static reading by default. Installing or running a third-party skill needs explicit approval and an isolated directory, following the shared `scholarly-standards` experiments protocol.
3. Label every effect claim: what the repository claims, versus what was actually run. Mark unverified claims inline and collect them at the end.
4. Install commands, invocation syntax, and composition claims must be traceable to the repository README, the skill's own files, or the skills CLI documentation. Never invent them.
5. Give a verdict — recommended, recommended with conditions, or not recommended — with the reasoning and what would change it. Star counts are never the reason.
6. Follow the shared `scholarly-standards` rules for writing, sources, images, capabilities, and questions. Diagrams come from `technical-diagrams`.
7. Write under `.scholar/skills/`, and never overwrite an existing session.

## Workflow

### 1. Resolve the input

Identify what is being read: a repository, a single skill name, a local path, or an installed skill. Record the version or commit, and whether the repository holds one skill or many. Ask at most one question when a bare name matches several candidates.

### 2. Read statically

Read the README, `SKILL.md`, frontmatter, references, examples, license, and recent history. Note the frontmatter fields that change behaviour, such as explicit-only versus implicit invocation, and any declared dependency on other skills. Follow [references/skill-assessment.md](references/skill-assessment.md) for the verdict, the red lines, and the accuracy rules for install and composition claims.

### 3. Try it, only if approved

When the effects matter and the user agrees, install the skill into a throwaway skills directory and run one invocation. Record it as type E evidence with the command, versions, environment, and result. Never install into the user's live skills directory without explicit agreement.

### 4. Write the guide

The request sets the tier: `full` (the default) or `card`. Structures live in [references/guide-contract.md](references/guide-contract.md). For a repository with more than twelve skills, switch to the multi-file form.

### 5. Review and deliver

Run [references/review-checklist.md](references/review-checklist.md), and run `scripts/check-session.mjs` when scripts can execute. Summarize what was read, what was verified, what is claimed but unverified, and the verdict.

## Continuing a session

`/read-skill 继续 <session folder>` resumes exactly. When the user only says "continue", take the most recently modified incomplete session under `.scholar/skills/`, restate the source and progress, then continue.

## Output

```text
.scholar/skills/<YYYY-MM-DD>-<slug>/
├── <slug>.md            # card and full sessions
└── ...                  # large repositories: README.md, NN-<skill>.md, appendix-sources.md
```

Never write a new session over an existing one. When the same date and slug already exist, append `-2`, `-3` instead.

## References

- [references/input-resolution.md](references/input-resolution.md)
- [references/guide-contract.md](references/guide-contract.md)
- [references/skill-assessment.md](references/skill-assessment.md)
- [references/review-checklist.md](references/review-checklist.md)

Shared protocols live in the `scholarly-standards` skill (source evaluation, writing style, image policy, capability degradation, question protocol, experiments), and diagrams come from the `technical-diagrams` skill. Both are installed from the same repository.
