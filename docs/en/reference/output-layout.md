# Output layout and naming

All artifacts are written under `.scholar/` in the current workspace:

```text
.scholar/
  projects/
    <YYYY-MM-DD>-<slug>/
      <slug>.md
      assets/
  deep/
    <YYYY-MM-DD>-<slug>/
      <slug>.md
      assets/
  quick/
    <YYYY-MM-DD>-<slug>/
      <slug>.md
      assets/
  study/
    <YYYY-MM-DD>-<slug>/
      <slug>.md            # quick and guide sessions
      README.md            # mastery sessions
      plan.md
      NN-<slug>.md
      glossary.md
      appendix-sources.md
      assets/
  research/
    <YYYY-MM-DD>-<slug>/
      <slug>.md            # brief and plan sessions
      README.md            # dossier sessions
      plan.md
      NN-<slug>.md
      glossary.md
      appendix-sources.md
      assets/
  skills/
    <YYYY-MM-DD>-<slug>/
      <slug>.md            # card and full sessions
      README.md            # repositories with more than twelve skills
      NN-<skill>.md
      appendix-sources.md
      assets/
```

- `study/` holds Scholar sessions; the goal card in the material decides whether the session is a single file or a multi-file handbook.
- `research/` holds investigate sessions; the task card decides whether the session is a brief, a plan, or a multi-file dossier.
- `skills/` holds read-skill sessions; repositories with more than twelve skills use the multi-file form.
- `YYYY-MM-DD` is the generation date.
- English titles become lowercase hyphenated slugs.
- Chinese titles stay readable in the filename after illegal characters are removed.
- Repeated generations on the same date append `-2`, `-3` rather than overwriting.
- Images live under `assets/` in each session folder and are referenced with relative links.
- `.reader/` is the pre-rename root. Existing artifacts are not migrated, and both roots are ignored by Git.
