# Review checklist

Run the appropriate list before delivering. `card` uses the short list; `full` and repository sessions use the full list.

## Full review

Structure:

- [ ] Frontmatter sets `skill`, `tier`, `verdict`, and the source block: form, resolved, version, accessed, installed copy.
- [ ] The card block is present at the top and can stand alone.
- [ ] All ten sections are present for `full`; repository sessions keep the skill table, and its statuses match the chapter files on disk.
- [ ] Relative links between files resolve.

Accuracy:

- [ ] The install command traces to the repository README or the skills CLI documentation, and the guide names which one.
- [ ] The minimal install set lists every companion skill, and says what breaks without it.
- [ ] Invocation syntax is given per agent, with the reminder to check the reader's own agent.
- [ ] Composition claims trace to by-name references or install instructions.
- [ ] Collisions were checked: the same skill name from another source, overlapping triggers, implicit-invocation conflicts.
- [ ] Every effect carries `（实测）`, `（仓库声称）`, or `（未验证）`.

Verdict:

- [ ] The verdict is one of the three, and matches the frontmatter.
- [ ] The reasoning is present, and the condition that would change the verdict is stated.
- [ ] No part of the verdict rests on star count, fork count, or README polish.

Red lines:

- [ ] Every red line that was hit appears in the quality and risk section with its evidence.
- [ ] Documentation problems quote the passage and state what it makes unclear.

Reader level:

- [ ] Ecosystem jargon is explained at first use: frontmatter, explicit-only, implicit invocation, companion skill, name collision, progressive disclosure.
- [ ] A reader who knows what an agent skill is can follow the guide without writing any further prompts.
- [ ] The `scholarly-standards` writing contract is followed; no AI-flavor patterns.

Pictures:

- [ ] Diagrams appear only where they help; captions, alt text, and provenance are present.

## Short review for card

- [ ] The seven fields are present, in order, on one page.
- [ ] The install command traces to a source.
- [ ] The verdict is in the frontmatter and visible in the text.
- [ ] Unverified and claimed items are collected.
- [ ] The opening and closing lines contain no banned pattern.

## Machine checks

When scripts can run:

```text
node scripts/check-session.mjs .scholar/skills/2026-09-14-anthropics-skills
```

The script checks the frontmatter fields, the verdict, the card fields, the skill table for repository sessions, chapter files, source links, and the collected unverified list. It recognizes English and Chinese headings; for other output languages, verify the section names by hand. When scripts cannot run, walk the same checks manually.

## Recording the result

Report the review in the delivery summary: what was checked, what was fixed, and what remains open. When a fix changes a claim, update the guide itself rather than correcting it only in the summary.
