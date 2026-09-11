# Source evaluation

Every claim in Scholar output traces back to a vetted source. This file defines what counts as a source, how to weigh it, what to do when sources disagree, and how to cite them.

## Source tiers

| Tier | What it is | How it may be used |
| --- | --- | --- |
| **S** | Standards (RFC, W3C, ISO, IEEE), peer-reviewed papers, official specifications, the source code and tests of the project itself, official documentation for a versioned product | Evidence for conclusions |
| **A** | Textbooks and long-lived reference works, official tutorials from the body that owns the technology, whitepapers from the organization that built it, documentation maintained by a recognized institution | Evidence for conclusions |
| **B** | Conference talks by maintainers, well-reviewed community answers that cite their sources, issues or discussions where maintainers participate, engineering blogs with a named author | Corroboration and leads |
| **C** | Personal blogs, aggregator sites, uncited wikis, forum posts, AI-generated text, SEO content | Leads only, never evidence |

Tier notes:

- A blog post quoting an RFC is not a second source; it is the same source seen through a filter. There is one S source and one C lead.
- A Wikipedia article is C for claims, but its citations are a map to A and S material.
- An official tutorial counts as A only when it comes from the organization that owns the technology and matches the current version.
- Vendor material is S or A for what the vendor's product does, and B at best for how the industry works as a whole.

## Domain adaptations

| Domain | Primary evidence |
| --- | --- |
| Software and standards | Specifications, standards documents, source code, tests, release notes |
| Science and engineering | Peer-reviewed papers, systematic reviews, textbooks, standards |
| Industry practice | Vendor documentation, maintainer talks, adoption surveys, repository data |
| History and humanities | Primary documents, scholarly monographs, edited collections |
| Law, medicine, finance, safety | Statutes, regulations, clinical guidelines, regulator publications, current standards |

## Independence and consensus

- Two sources are independent only when they do not derive from the same underlying text, author, or organization.
- Consensus means several independent S/A sources agree. It does not mean many results on the first page.
- One S source can outweigh several B sources for a factual claim, and that hierarchy should be stated when it matters.
- When only B sources agree, write "community practice", not "consensus".
- Claims like "everyone uses X" need data: surveys, adoption reports, or repository statistics with a date.

## Evidence thresholds

- Key claims — definitions, mechanisms, why something exists, recommended practice, comparisons — need at least two independent S/A sources.
- A claim resting on a single S source is allowed when it is labelled as that source's position, for example "the specification says".
- Undisputed background facts may cite one source.
- Numbers, dates, and performance claims need a source with a date and, when relevant, a version.
- If the sources are few, say they are few. Never write around a thin evidence base as if it were solid.

## When sources disagree

- Present both positions and the conditions under which each applies.
- Name who holds each position: standards body, maintainers, practitioners, vendors.
- State the mainstream leaning and the evidence it rests on.
- If the matter is unsettled, say so and record it in "Open questions and disagreements".
- Never quietly keep the version that reads better.

## When evidence is missing

- Mark the claim "unverified" instead of stating it as fact, and keep it out of the main line when possible.
- Record what evidence is missing and what would resolve it.
- Keep model background knowledge out of the main line unless a source supports it, and label the gap for the reader.

## Freshness and versions

- Fast-moving topics: prefer sources from the last two years, and record versions and dates.
- Standards and textbooks may be older when they are still current; note any superseding version.
- Record the access date for every web source.

## AI-generated content

- AI-generated text is a C-level lead. It may point to sources; it may never carry a claim.
- Treat material with no author, no date, generic structure, and no citations as AI-generated until shown otherwise.
- Never cite a summary in place of the text it summarizes.

## Code and projects

- Source code, tests, and official documentation outrank blog posts about the code.
- When code and documentation disagree, report the drift with both sides.
- Cite the version or commit when behaviour can change between releases.

## Citation format

- Cite inline, beside the claim: `([RFC 9110 §3.3](https://...))` or `([Nygard, 2011](https://...))`.
- Use paragraph-level granularity. Every paragraph carrying an external claim has at least one link. Do not footnote every sentence.
- Do not use numbered footnotes; Markdown footnote rendering is unreliable across agent tools.
- Fetch every URL you cite in the current session. If a link cannot be opened, say so and leave it out.
- `mastery` ends each chapter with a "Sources for this chapter" section.
- `quick` and `guide` list sources once in the source appendix, while keeping inline links in the prose.

## Source appendix schema

`appendix-sources.md` starts with a table:

| Title | Author or organization | Type | Tier | Link | Accessed | Used in | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |

After the table, keep two sections:

- **Open questions and disagreements**: what is contested, who takes which side, the mainstream leaning, and what would resolve it.
- **Unverified**: claims that could not be supported, and the evidence that is missing.

## High-risk domains

Medicine, law, finance, and safety-critical engineering need extra care:

- Put a prominent notice at the top: this is informational material, not professional advice.
- Prefer guidelines, statutes, regulator documents, and current standards, and record their date and jurisdiction.
- State the version or jurisdiction a rule applies to, because both change.
- Recommend consulting a qualified practitioner for decisions, and say which decisions need one.

## Controversial topics

- Present the evidence state: mainstream consensus, minority positions, and the quality of the evidence behind each.
- Do not editorialize, and do not teach a debunked claim as if it were knowledge.
- When the mainstream position exists but has limits, describe the limits instead of smoothing them over.
