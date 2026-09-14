<!-- A minimal example of card-tier output, for a skill shipped in this repository. -->

---
skill: read-skill
tier: card
verdict: recommended
source:
  form: installed
  resolved: "https://github.com/haoyisun/skills"
  version: "0.6.0"
  accessed: 2026-09-14
  installed_copy: true
subject: "scholar"
---

# scholar — usage card

- Tier: card · Source: installed copy of `scholar` (haoyisun/skills) · Accessed: 2026-09-14

## What it does

Turns a learning goal into sourced, illustrated study material instead of a chat answer.

## When to use it

- You want to learn a concept or knowledge system and keep the result for later.
- You need the material to explain terms and abbreviations as they appear.
- You want the sources checked first, with disagreements and gaps written down.

## When not to use it

- You need a technical decision or a design plan; use `investigate` instead.
- You only want a five-minute answer about an article you already have; use `read-fast`.

## Install

Install the whole repository, which brings the shared skills with it:

```bash
npx skills@latest add haoyisun/skills
```

`scholar` references `scholarly-standards` and `technical-diagrams` by name; installing it alone leaves those missing (`（仓库声称）` from the repository README).

## Minimal usage

```text
/scholar architecture decision records
```

It asks up to five questions, shows a goal card, and then writes under `.scholar/study/`.

## What you get

A single-file study guide, or a multi-file handbook for the `mastery` tier.

## Pitfalls

- The default tier is `guide`; ask for `mastery` when you want a multi-week handbook.
- Generated images are on by default, and the budgets differ per tier.
