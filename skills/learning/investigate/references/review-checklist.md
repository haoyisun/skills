# Review checklist

Run the appropriate list before delivering. `brief` uses the short list; `plan` and `dossier` use the full list.

## Full review

Structure:

- [ ] The task card is present and matches the deliverable.
- [ ] The grounding matches how the implementation chapter is written.
- [ ] Sections follow the schema order; for `dossier`, chapter files match the plan table and the statuses are current.
- [ ] Links between files resolve.

Evidence:

- [ ] Every claim-bearing paragraph carries an evidence ID or a link.
- [ ] Key claims rest on at least two independent S/A sources.
- [ ] Every E entry records the command, versions, environment, date, and result.
- [ ] Disagreements are presented rather than resolved silently.
- [ ] Unverified items and unread areas are listed.

Options and design:

- [ ] At least one alternative is compared, or the deliverable states why none exists.
- [ ] Every design choice has a confidence label and a reason.
- [ ] Sourced facts and design synthesis are visibly separated.

Decision points:

- [ ] The decision table is present, and every row has a recommendation, reasoning, and a decider.
- [ ] No decision was made silently on the reader's behalf.
- [ ] Open questions are kept separate from decision points.

Writing:

- [ ] The `scholarly-standards` writing contract is followed.
- [ ] Terms are defined at first use and the glossary stays consistent.
- [ ] A reader at the task card's level can follow the reasoning without external searches.

Pictures:

- [ ] The tier's picture budget is respected.
- [ ] Every picture has a caption, alt text, a prose explanation, and provenance.

## Short review for brief

- [ ] The task card is present and matches.
- [ ] The conclusion answers the decision question directly.
- [ ] Key evidence and decision points are present.
- [ ] Source links were fetched.
- [ ] The opening and closing paragraphs contain no banned pattern.

## Machine checks

When scripts can run:

```text
node scripts/check-session.mjs .scholar/research/2026-09-14-express-multitenancy
```

The script checks the file set, the task card in the frontmatter, chapter numbering against the plan, the decision-points section, source links, and the appendix sections. It recognizes English and Chinese headings; for other output languages, verify the section names by hand. When scripts cannot run, walk the same checks manually.

## Recording the result

`dossier` sessions add one row per review to the review log in `plan.md`:

| Date | Review | Reviewer | Result |
| --- | --- | --- | --- |

Single-file sessions record the same information in the body. `Result` is `pass`, or the list of findings and what changed. Anything that cannot be fixed moves to "Open questions and disagreements" or "Unverified and unread" in the sources appendix.
