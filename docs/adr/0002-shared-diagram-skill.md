# ADR-0002: Add a shared `technical-diagrams` skill

Status: Accepted

Date: 2026-09-11

## Context

The three reading skills produce Markdown that sometimes needs a technical diagram. Their original instructions mixed "original images" and "generated diagrams" without telling the model how to draw. Surveying the skills ecosystem showed that Mermaid is the only diagram approach that stays inside Markdown with no renderer, and C4 is the only architecture convention worth teaching beginner readers.

## Decision

Add one shared foundation skill, `technical-diagrams`, containing Mermaid syntax and C4 guidance adapted from the MIT-licensed `softaworks/agent-toolkit` skills.

- Default diagram output is a Mermaid code block embedded in Markdown.
- `assets/` stays reserved for original images and screenshots.
- The reading skills reference `technical-diagrams` by name when a diagram is warranted.
- `read-project` uses C4 context/container and sequence/flow diagrams; `read-standard` uses concept and process diagrams only when prose is not enough; `read-fast` uses at most one diagram.

## Why by-name reference instead of a relative path

The skills CLI installs skills into directories named after the skill, not preserving source category paths. Relative paths between skill folders break after installation, so skills reference each other by name and are installed together from the same repository.

## Consequences

- The repository gains one shared, non-reader-specific diagramming skill that future skills can depend on.
- Diagramming knowledge lives in one place instead of being repeated across reading skills.
- Users must install `technical-diagrams` with the reading skills, which installing the whole repository enforces.
