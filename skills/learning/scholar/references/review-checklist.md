# Review checklist

`quick` uses the short list. `guide` and `mastery` use the full list and, when the environment supports sub-agents, an independent review. Record the result in `plan.md`.

## Full review

Structure:

- [ ] The goal card is present and matches the material.
- [ ] The reading order works without jumps: prerequisites appear before the material that needs them.
- [ ] `mastery`: chapter files match the plan table, numbering is sequential, and statuses are current.
- [ ] Links between files resolve.

Knowledge gaps:

- [ ] Every term is explained at first use.
- [ ] Missing background has a patch or a prerequisites entry, and the patch has its own source.
- [ ] Each "therefore" has a "because"; no reasoning jumps.

Terms:

- [ ] One term keeps one meaning.
- [ ] The glossary covers every domain term and abbreviation.
- [ ] Glossary entries and inline definitions agree.

Sources:

- [ ] Every claim-bearing paragraph has at least one source link.
- [ ] Key claims have at least two independent S/A sources.
- [ ] Disagreements are presented, not resolved silently.
- [ ] Unverified claims are labelled and collected in the appendix.
- [ ] Every link was fetched in this session.

Reader level:

- [ ] A reader with the goal card's starting point can follow without searching.
- [ ] Abbreviations are expanded at first use.
- [ ] Examples are concrete rather than gestured at.

Language:

- [ ] The banned patterns in [writing-style.md](writing-style.md) are absent.
- [ ] The material reads aloud like a person explaining, not like a manual.
- [ ] The output language matches the goal card.

Pictures:

- [ ] The tier budget is respected.
- [ ] Every picture has a caption, alt text, a prose explanation, and provenance.
- [ ] No picture introduces an unsourced claim.

## Short review for quick

- [ ] The goal card is present.
- [ ] The one-sentence answer actually answers.
- [ ] The main line is intact: why → what → how → when it breaks.
- [ ] Terms are defined at first use.
- [ ] Sources are present and were fetched.
- [ ] The opening and closing paragraphs contain no banned pattern.

## Independent review

When the environment supports sub-agents, give a fresh context the material, the goal card, and this checklist, and ask for a findings list. Do not pass the writer's reasoning; the point is a second pair of eyes, not agreement. When sub-agents are unavailable, run the list yourself and record it as a self-check.

## Recording the result

Add one row per review to the review log in `plan.md`:

| Date | Review | Reviewer | Result |
| --- | --- | --- | --- |

`Result` is `pass`, or the list of findings and what was fixed. Anything that cannot be fixed moves to "Open questions and disagreements" or "Unverified" in `appendix-sources.md`.

## Machine checks

When scripts can run, use `scripts/check-session.mjs`:

```text
node scripts/check-session.mjs .scholar/study/2026-09-11-adr
```

It checks the file set, chapter numbering against the plan, glossary coverage, source appendix presence, plan status values, and the goal card in the frontmatter. The script recognizes English and Chinese headings; when the output language is different, verify the section names by hand. When scripts cannot run, walk the same checks by hand.
