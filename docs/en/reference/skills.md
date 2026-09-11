# Available skills

| Skill | Directory | Family | Purpose |
| --- | --- | --- | --- |
| `read-project` | `skills/reading/read-project` | Reader | Read code and documentation, then write a project onboarding and architecture guide |
| `read-standard` | `skills/reading/read-standard` | Reader | Learn technical articles, blogs, books, or PDFs deeply |
| `read-fast` | `skills/reading/read-fast` | Reader | Write a quick overview readable in 2–10 minutes |
| `scholar` | `skills/learning/scholar` | Scholar | Turn a learning goal into sourced, illustrated learning material: a quick overview, a complete study guide, or a multi-file handbook |
| `technical-diagrams` | `skills/diagrams/technical-diagrams` | Shared | Shared Mermaid and C4 diagram guidance used by the reading skills |

Each skill's entry point is `SKILL.md`. Its `name` field must match the directory name. All five skills have `disable-model-invocation: true`, so they are explicit-only. `scholar` and the reading skills reference `technical-diagrams` by name for their diagrams.
