# Guide contract

A skill guide answers one question: should I use this skill, and how? The tier decides how much of the answer is written down; the content rules stay the same.

## Session metadata

Every session carries machine-readable frontmatter:

```yaml
---
skill: read-skill
tier: full
verdict: recommended | conditional | not-recommended
source:
  form: repository | name | path | installed
  resolved: anthropics/skills
  version: "<commit sha or unknown>"
  accessed: 2026-09-14
  installed_copy: false
subject: "anthropics/skills"
---
```

The body repeats the useful parts in the output language: which copy was read, the version, and the access date.

`verdict` is machine-readable so the guide can be checked and reused: `recommended` 推荐使用, `conditional` 有条件使用, `not-recommended` 不建议. A finished guide never leaves it `pending`.

## Evidence tags

Three tags appear next to claims about behaviour and effects:

- `（实测）`: we ran it ourselves, recorded as type E evidence.
- `（仓库声称）`: the repository or its documentation claims it; we read the claim but did not run it.
- `（未验证）`: the claim could not be resolved at all — no source, or sources conflict.

Tags appear inline, next to the claim, and are collected once at the end.

## card — one page

```text
.scholar/skills/2026-09-14-some-skill/
├── some-skill.md
└── assets/
```

Seven fields, in order:

1. What it does — one sentence.
2. When to use it — three concrete scenarios.
3. When not to use it — two scenarios.
4. Install — the minimal install set plus one command.
5. Minimal usage — one command plus one input example.
6. What you get — one sentence describing the output.
7. Pitfalls — at most two.

The card must stand alone: a reader who stops after this page can install the skill and run it once.

## full — the card, then ten sections

`full` opens with the same seven fields, labelled as a quick-start block, and then continues:

1. **Verdict in one paragraph**: what it is, what problem it solves, and the recommendation.
2. **Scenarios in detail**: expand the three "when to use" and two "when not to use" entries; add the boundary cases.
3. **Installation in detail**: the minimal set (the skill plus every skill it references by name), the command, per-agent invocation syntax, what happens if a companion skill is missing, and how to uninstall.
4. **Usage in detail**: arguments, required inputs, the smallest working example, common variants, and the mistakes first-time users make.
5. **Effects**: what the output looks like, how long it takes, where it lands, and its quality limits. Every effect carries an evidence tag.
6. **Composition**: which skills it pairs with, the direction of the dependency, the order to install or invoke, and any collision with skills that are already installed.
7. **Quality and risk**: the verdict, its reasoning, what would change it, and the red lines that were hit.
8. **First-run checklist**: three to five steps; the first step is a command the reader can paste.
9. **Alternatives and cost**: equivalent skills in the ecosystem, and the cost of adopting this one.
10. **Sources and unverified items**: the sources read, with links and access dates, plus the collected list of `（仓库声称）` and `（未验证）` items.

The detailed body may be longer than the card, but it must not repeat the card word for word. The card states; the body explains.

## Large repositories — multi-file form

When a repository holds more than twelve skills, or the user asks for it:

```text
.scholar/skills/2026-09-14-anthropics-skills/
├── README.md
├── 01-<skill>.md
├── 02-<skill>.md
├── appendix-sources.md
└── assets/
```

- `README.md`: the repository-level guide — the ten sections applied to the repository as a whole, plus a table of every skill with name, purpose, trigger, dependencies, and status (`done` / `pending`). This table is the resume anchor.
- `NN-<skill>.md`: one file per detailed skill. Each opens with the seven card fields and then covers usage, effects, composition, and risk for that skill, so the file stands alone.
- `appendix-sources.md`: every source with its link, access date, and what it supports, plus the collected unverified items.

Sessions with twelve or fewer skills stay single-file unless the user asks otherwise.

## Naming

- Session folder: `<YYYY-MM-DD>-<slug>/`, where the slug comes from the repository or skill name, lowercased and hyphenated for Latin names, readable for Chinese names.
- Duplicate date and slug: append `-2`, `-3`. Never overwrite.
- Multi-file chapters use `NN-<slug>.md`, two digits, in the order they appear in the repository.
- Links inside a session are relative.

## Resuming

Single-file sessions resume from the file itself: restate the source, the version, and which sections are complete. Multi-file sessions resume from the table in `README.md`: continue with the first `pending` skill, and keep the shared install and composition information consistent with what is already written.
