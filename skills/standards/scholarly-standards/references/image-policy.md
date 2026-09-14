# Image policy

Pictures carry part of the explanation, so they follow the same rules as prose: sourced, explained, and never decoration. Illustrations are on by default and can be turned off in the goal card.

## Three kinds of pictures

1. **Mermaid diagrams** for structure, flow, sequence, state, and relationships. Use the shared `technical-diagrams` skill by name. Anything Mermaid can express precisely is never a generated bitmap.
2. **Original material images** — screenshots, photos, and figures from a source. Keep them, place them where they belong, and record the origin and licence.
3. **Generated illustrations** for abstract ideas, spatial relations, analogies, and mental models. Use them only when a picture explains faster than prose.

## Budget

| Tier | Budget |
| --- | --- |
| `quick` | at most 1 picture |
| `guide` | 1–3 pictures |
| `mastery` | 0–2 pictures per chapter |

A budget is a ceiling, not a target. Zero pictures is the correct answer when prose already carries the idea.

## When to generate

Generate a picture when:

- the reader must hold a spatial or structural relationship in mind;
- a concrete analogy removes a misunderstanding that prose alone keeps producing;
- the concept is invisible — data flow, state, hierarchy — and a Mermaid diagram cannot express it precisely.

Do not generate when:

- the picture is decoration, a hero image, or a mood setter;
- Mermaid can express the same thing exactly;
- the picture would introduce vocabulary the reader must decode first;
- the source already has a usable image; keep the original instead.

## Style

- One fixed style: a teaching schematic — clean lines, flat shapes, short labels, no photorealism.
- Labels in the goal-card language.
- No realistic faces, no logos, no copyrighted characters.
- Never copy a copyrighted image. Link to it or describe it instead.
- Keep a generated picture free of text that the reader must read to understand the idea; the surrounding prose carries the explanation.

## Every picture is explained

- A caption stating what the reader is looking at.
- Alt text carrying the same information for readers who cannot see the image.
- At least one sentence in the surrounding prose explaining what the picture shows and why it matters.
- A picture may only carry information the prose already supports with sources. It never introduces a new claim.

## Provenance

Record every picture in `assets/SOURCES.md`:

| File | Type | Origin or tool | Prompt or link | Generated | License or permission | Used in |
| --- | --- | --- | --- | --- | --- | --- |

- Generated pictures: tool name and the prompt used.
- Original pictures: source title, link, and licence.
- Unknown licence: do not ship the picture; describe it in prose instead.

## Failure and fallback

- Generation fails: retry once, then fall back to a Mermaid diagram or prose. Never leave a placeholder.
- No image tool: follow [capabilities.md](capabilities.md), say that pictures are unavailable, and use Mermaid and tables instead.
- The target viewer cannot render Mermaid: note it once and keep the code block; do not silently replace the diagram with prose.
