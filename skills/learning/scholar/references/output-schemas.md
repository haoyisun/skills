# Output schemas

Scholar writes under `.scholar/study/<YYYY-MM-DD>-<slug>/`. The depth tier decides the shape, and every file is written in the goal-card language.

## Naming

- Session folder: `<YYYY-MM-DD>-<slug>/`, where the date is the generation date.
- Latin titles become lowercase hyphenated slugs. Chinese titles stay readable, with illegal characters removed.
- When the same date and slug already exist, append `-2`, `-3`. Never overwrite a session.
- Chapter files use `NN-<slug>.md`, two digits, starting at `01`. `00-prerequisites.md` is reserved for prerequisites.
- Links between files in a session are relative.

## quick — one file, about 10 minutes

```text
.scholar/study/2026-09-11-adr/
├── adr.md
└── assets/
```

Sections, in order:

1. Goal card, as a short readable block.
2. The answer in one sentence.
3. What it is and why it exists.
4. The minimum vocabulary the reader needs, defined in place.
5. The main line: the reasoning chain, not a list of facts.
6. One concrete example.
7. Common misreadings.
8. Sources, as a compact appendix.

At most one diagram. No self-test unless the goal card turned it on.

## guide — one file, 1–3 hours

```text
.scholar/study/2026-09-11-adr/
├── adr.md
└── assets/
```

Sections, in order:

1. Goal card and reading map: what the reader will be able to do, how to read the material, and the time estimate.
2. Prerequisites: what the reader needs first, each explained briefly.
3. Glossary: a separate section only when there are more than about ten terms; otherwise define terms inline.
4. Main body: chapters in a deliberate order, each carrying one main line, with knowledge patches where background is missing.
5. Putting it together: how the parts depend on one another.
6. Common misunderstandings.
7. Self-test, when enabled: three to five questions with answer pointers.
8. Sources and open questions.

One to three diagrams across the whole guide.

## mastery — multi-file handbook

```text
.scholar/study/2026-09-11-adr/
├── README.md
├── plan.md
├── 00-prerequisites.md      # only when needed
├── 01-<slug>.md
├── 02-<slug>.md
├── glossary.md
├── appendix-sources.md
└── assets/
    └── SOURCES.md
```

- `README.md`: what the handbook covers, the reading order, where to start, and how to resume. One short page.
- `plan.md`: the machine-readable goal card, the readable card, the chapter table, the research log, and the review log. This is the resume anchor.
- Chapters: each one is 15–30 minutes of reading, connects to the chapter before it, ends with "Sources for this chapter", and carries self-test questions when enabled.
- `00-prerequisites.md`: written when the reader needs more than a few concepts of background; otherwise fold prerequisites into the early chapters.
- `glossary.md`: every domain term, abbreviation, and overloaded word.
- `appendix-sources.md`: the source table, open questions and disagreements, and unverified claims.
- `assets/SOURCES.md`: image provenance.
- Optional `99-capstone.md` when the goal is `master` or `teach` and the reader wants a final exercise.

## plan.md chapter table

```markdown
| # | File | Title | Status | Updated |
| --- | --- | --- | --- | --- |
| 01 | 01-why-adr.md | Why ADRs exist | done | 2026-09-11 |
| 02 | 02-adr-structure.md | The shape of an ADR | in-progress | 2026-09-11 |
| 03 | 03-adopting-adrs.md | Adopting ADRs in a team | pending | |
```

Status values are `pending`, `in-progress`, and `done`. Update the row after each chapter lands, and keep the file order matching the table.

## Chapter rules

- Target 15–30 minutes of reading per chapter.
- Open by connecting to what the reader already read.
- One main line per chapter; do not turn a chapter into a list of unrelated facts.
- Explain every new term at first use.
- End with "Sources for this chapter".
- When self-test is on, close with three to five questions and answer pointers, not full answers.

## Session header

Every session file starts with a light header: title, tier, the topic from the goal card, language, and generation date. No author bylines, no marketing lines, no "welcome" paragraphs.

## Resuming

To continue a `mastery` session, read `plan.md` first, restate the goal card and progress to the user, then continue from the first non-`done` chapter. Reuse the same glossary and source appendix, and keep terminology consistent when rewriting a chapter. A chapter may be rewritten alone, but it must not introduce a second definition of a term or a source that is absent from the appendix.
