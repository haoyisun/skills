# Output schemas

Sessions live under `.scholar/research/<YYYY-MM-DD>-<slug>/`. The tier sets the shape, the grounding sets the implementation chapter, and every file is written in the task-card language.

## Naming

- Session folder: `<YYYY-MM-DD>-<slug>/`, dated by the day the session starts.
- Latin titles become lowercase hyphenated slugs. Chinese titles stay readable, with illegal characters removed.
- When the same date and slug already exist, append `-2`, `-3`. Never overwrite a session.
- `dossier` chapter files use `NN-<slug>.md`, two digits, starting at `01`.
- Links inside a session are relative.

## Session metadata

Every session carries the task card as YAML frontmatter so it stays machine-checkable:

- `brief` and `plan`: the frontmatter sits at the top of the single material file.
- `dossier`: the frontmatter sits at the top of `plan.md`.

The body repeats the card in the output language, so the reader can check it without reading YAML.

## brief — one file

```text
.scholar/research/2026-09-14-express-multitenancy/
├── express-multitenancy.md
└── assets/
```

Sections, in order:

1. Task card, as a short readable block.
2. Conclusion and recommendation.
3. Key evidence, as a compact table with evidence IDs.
4. Main risks.
5. Open questions.
6. Sources.

At most one picture.

## plan — one file, the default tier

```text
.scholar/research/2026-09-14-express-multitenancy/
├── express-multitenancy.md
└── assets/
```

Sections, in order:

1. Task card, as a short readable block.
2. Problem, constraints, and success criteria. State explicitly when the constraint list is empty.
3. Research approach and evidence overview: what was read, what was skipped, what the budget was.
4. Option comparison: a table of options against criteria, with evidence IDs.
5. Recommended design: architecture, interfaces, data flow, and key mechanisms. Every design choice carries a confidence level and its reasoning.
6. Implementation path. Its content depends on the grounding:
   - `project`: affected modules, migration or rollout, rollback.
   - `standalone`: how the technology implements it, plus generic adoption paths with costs.
   - `concept`: first-principles design, assumptions, and how to validate each assumption.
7. Risks and rollback.
8. Decision points: the table of choices the human must settle.
9. Open questions, unverified items, and unread areas.
10. Sources appendix: the evidence table and the source table.

One to three pictures.

## dossier — multi-file

```text
.scholar/research/2026-09-14-express-multitenancy/
├── README.md
├── plan.md
├── 01-findings.md
├── 02-options.md
├── 03-design.md
├── 04-implementation.md
├── glossary.md
├── appendix-sources.md
└── assets/
    └── SOURCES.md
```

- `README.md`: what the dossier covers, the reading order, where to start, and how to resume. One short page.
- `plan.md`: frontmatter task card, readable card, chapter table, research log, and review log. This is the resume anchor.
- `01-findings.md`: what the sources say, with evidence IDs; disagreements and gaps included.
- `02-options.md`: the option comparison and the reasoning that survives the constraints.
- `03-design.md`: the recommended design, mechanism by mechanism, with confidence labels.
- `04-implementation.md`: the grounding-specific implementation path.
- `glossary.md`: domain terms, abbreviations, and overloaded words.
- `appendix-sources.md`: the evidence table, the source table, open questions, and unverified items.
- `assets/SOURCES.md`: picture provenance.

Chapter rules: 15–30 minutes of reading each; open by connecting to the previous chapter; end with "Sources for this chapter" / "本章来源"; carry self-test-style checkpoints only when the task card asks for them.

## plan.md chapter table

```markdown
| # | File | Title | Status | Updated |
| --- | --- | --- | --- | --- |
| 01 | 01-findings.md | Findings | done | 2026-09-14 |
| 02 | 02-options.md | Options | in-progress | 2026-09-14 |
| 03 | 03-design.md | Design | pending | |
```

Status values are `pending`, `in-progress`, and `done`. Update the row after each chapter lands, and keep the file order matching the table.

## Decision points and evidence

Both live in the deliverable, not in separate files:

- Decision points: a table of ID, question, recommendation, reasoning, and who decides. See [decision-and-confidence.md](decision-and-confidence.md).
- Evidence: a table of ID, type, source, tier, supported claim, and access or run date. See [evidence-and-experiments.md](evidence-and-experiments.md).

## Resuming

To continue a `dossier`, read `plan.md` first, restate the task card and progress, then continue from the first non-`done` chapter. Reuse the same glossary and source appendix. A chapter may be rewritten alone, but it must not introduce a second definition of a term or a source that is missing from the appendix.
