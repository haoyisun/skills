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
```

- `YYYY-MM-DD` is the generation date.
- English titles become lowercase hyphenated slugs.
- Chinese titles stay readable in the filename after illegal characters are removed.
- Repeated generations on the same date append `-2`, `-3` rather than overwriting.
- Images live under `assets/` in each session folder and are referenced with relative links.
- `.reader/` is the pre-rename root. Existing artifacts are not migrated, and both roots are ignored by Git.
