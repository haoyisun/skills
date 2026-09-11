# read-standard output schema

Produce one Markdown study guide with these sections.

## 1. Reading map

Include source title, author, publication date, access date, link or local path, and estimated reading time. State the reader profile and language used.

## 2. Prerequisites

List the minimum concepts a reader must have before starting. Explain each briefly in plain language.

## 3. Master glossary

Collect the source's abbreviations, domain terms, and overloaded words. Define each using the source's actual meaning. Keep this as a reference table or list that the reader can return to.

## 4. Section-by-section deep reading

For every section of the source:

- keep the section's thesis, argument, examples, and conclusion;
- explain unfamiliar terms where they appear;
- insert original images where they belong;
- add "Knowledge patch" for missing prior knowledge;
- add "Note: possible correction" when the source appears wrong or contradictory;
- keep the explanation in plain prose, not bullet-fragment notes.

Do not skip sections. Do not compress a section into one line unless the source itself is that short.

## 5. After-reading synthesis

Connect the main line across the whole source. Show how the sections depend on one another.

## 6. Common misunderstandings

List likely places where a beginner reader would misread the material.

## 7. Self-check questions

Give a small set of questions a reader can use to test whether they understood the material.

## 8. Next steps

Recommend related sections to reread, external searches, or when `/read-standard` is more appropriate than a shorter read.

## Output location and naming

- Root: `.scholar/deep/`
- Session folder: `<YYYY-MM-DD>-<slug>/`
- Markdown: `<YYYY-MM-DD>-<slug>.md`
- Images: `assets/`
- Keep Latin titles as lowercase hyphenated slugs; keep Chinese titles in the filename with illegal characters removed.
