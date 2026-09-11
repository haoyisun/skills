# Goal model

The goal card is the contract for a Scholar session. Everything downstream — depth tier, output shape, language, self-test, illustrations, review depth, and how much research is needed — comes from it. Confirm the card before writing anything.

## The eleven fields

| # | Field | Values | What it decides |
| --- | --- | --- | --- |
| 1 | Topic | one sentence | The subject and its name |
| 2 | Scope | what is in, what is out | How far the material can go |
| 3 | Purpose | `understand` / `use` / `master` / `teach` | How much depth each concept needs |
| 4 | Depth tier | `quick` / `guide` / `mastery` | Reading time, file shape, review, image budget |
| 5 | Time budget | minutes, hours, days, weeks | A sanity check on the tier |
| 6 | Starting point | known background and adjacent areas | Where the material begins, and what counts as a knowledge gap |
| 7 | Output shape | single file / multi-file handbook | File layout |
| 8 | Language | any language | The language of the material; the glossary keeps original terms |
| 9 | Self-test | on / off | Whether chapters end with questions |
| 10 | Illustrations | on / off | Whether generated pictures are allowed |
| 11 | Source scope | self-research + user-provided (default) | Where sources may come from |

Field notes:

- **Purpose** is about what the reader must be able to do afterwards. `understand` means follow a conversation; `use` means apply it on the job; `master` means design, debug, and adapt it; `teach` means explain it to someone else and answer their questions.
- **Scope** protects the material from becoming an encyclopedia. Write the exclusions down; they are as useful as the inclusions.
- **Time budget** is reading time for the finished material, not writing time.
- **Starting point** defaults to "can read, new to this domain". Never assume domain vocabulary. A reader who knows the adjacent area but not this one still needs terms defined.

## Defaults when the user does not answer

| Field | Default |
| --- | --- |
| Depth tier | `guide` |
| Language | the conversation language |
| Output shape | single file for `quick` and `guide`, multi-file for `mastery` |
| Self-test | off |
| Illustrations | on |
| Source scope | self-research, plus anything the user provides |
| Starting point | can read, no prior domain knowledge |

Source verification has no off switch. It is never a field the user can disable.

## Deriving the tier

Derive a tier, then say how you derived it. Never silently jump to `mastery` because a topic is large.

| Signals | Tier |
| --- | --- |
| The user wants orientation, a gist, or roughly ten minutes | `quick` |
| The user wants to understand and use the material, or has a few hours | `guide` |
| The user wants mastery or to teach it, or has days to weeks | `mastery` |

When purpose and time budget disagree, choose the smaller tier and say so. A reader can always continue with `/scholar 继续` and grow the material; starting too large wastes their time.

A topic with heavy prerequisites does not automatically become `mastery`. It gets a prerequisites section, or a `00-prerequisites.md` chapter in `mastery`, while keeping the tier the goal asked for.

## The card in `plan.md`

Every session keeps the card in `plan.md`. For `quick` and `guide`, a readable card near the top of the single file is enough. For `mastery`, `plan.md` starts with machine-readable metadata:

```yaml
---
goal_card:
  topic: "Architecture decision records"
  scope: "Why ADRs exist, their structure, how to write and adopt them. Not a survey of every documentation tool."
  purpose: use
  tier: guide
  time_budget: "2 hours"
  starting_point: "Software engineer, new to ADRs"
  output_shape: single-file
  language: zh
  self_test: true
  illustrations: true
  source_scope: self-research+user-provided
---
```

The body repeats the card in the output language so the reader can check it without reading YAML.

## Confirm the card

Show the card and ask for one short confirmation: change what is wrong, or say go. If the user changes one field, update the card and re-derive only the fields that depend on it. If the user does not answer at all, proceed with the defaults above and say that is what you did.

For `mastery`, the card is not the only checkpoint: the chapter outline lives in `plan.md` and the reader can redirect it while chapters are still pending.
