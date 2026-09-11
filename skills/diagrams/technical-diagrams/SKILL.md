---
name: technical-diagrams
description: Create beginner-friendly technical diagrams for Markdown outputs using Mermaid syntax and C4 architecture views. Use when another skill needs a flowchart, sequence diagram, class diagram, state diagram, ER diagram, or C4 system-context/container diagram to make technical material clearer.
disable-model-invocation: true
---

# technical-diagrams

Produce technical diagrams that a reader with little domain background can understand. This skill is a shared foundation: other skills reference it by name when they decide a diagram would reduce confusion more than prose would.

## Invocation

This skill is explicit-only and is normally reached through another skill, not started directly. It has no separate slash command of its own.

## Output format

- Default to a Mermaid code block embedded in the surrounding Markdown:

  ````markdown
  ```mermaid
  flowchart LR
    A[Start] --> B[End]
  ```
  ````

- Keep `assets/` for original source images and screenshots only. Do not dump Mermaid source into `assets/`.
- Do not require a renderer, Mermaid CLI, or external editor. The diagram is plain text that GitHub, VS Code, and many Markdown viewers render directly.
- If the reader's target viewer cannot render Mermaid, note that once, then continue; do not silently replace the diagram with prose.

## Style rules

- Draw the smallest diagram that makes the idea clear. If prose already explains it, do not add a diagram.
- Use plain, short labels. Write labels in the conversation language.
- Keep each diagram under about 10 nodes. Split a complex system into separate focused diagrams instead of one tangled map.
- A diagram must be explained in the surrounding prose. Never drop in a bare diagram.
- Prefer left-to-right (`LR`) for flows and top-to-bottom (`TD`) for hierarchies.

## Diagram types and minimal syntax

### Flowchart

Use for processes, decisions, and user journeys.

```mermaid
flowchart LR
  A[Request] --> B{Valid?}
  B -- yes --> C[Process]
  B -- no --> D[Reject]
  C --> E[Response]
```

Shapes: `[rectangle]`, `(rounded)`, `{diamond}`, `([stadium])`, `[[subroutine]]`, `((circle))`.

### Sequence diagram

Use for request/response flows and interaction between components.

```mermaid
sequenceDiagram
  actor U as User
  participant A as App
  participant D as Database
  U->>A: submit
  A->>D: query
  D-->>A: rows
  A-->>U: result
```

Arrows: `->>` solid message, `-->>` reply, `-)` async. Use `actor` for people and `participant` for systems.

### Class diagram

Use only when the reader needs to see type relationships, not for every code explanation.

```mermaid
classDiagram
  class Order {
    +id: string
    +total(): number
  }
  class LineItem
  Order "1" --> "*" LineItem : contains
```

Relationships: `-->` association, `--|>` inheritance, `..>` dependency, `o--` aggregation, `*--` composition.

### State diagram

Use for lifecycles, state machines, and workflows with explicit states.

```mermaid
stateDiagram-v2
  [*] --> Idle
  Idle --> Running : start
  Running --> Done : finish
  Done --> [*]
```

### ER diagram

Use only for data models, not for casual concept relationships.

```mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE_ITEM : contains
```

Cardinality: `||` exactly one, `o|` zero or one, `}o` zero or many, `}|` one or many.

## C4 architecture views

C4 is a way to describe architecture at four zoom levels. For beginner readers, almost always use only the first two levels.

### Level 1: System Context

Shows the system, its users, and external systems. Always the first architecture diagram.

```mermaid
C4Context
  title System Context - Workout Tracker
  Person(user, "User", "Tracks workouts")
  System(app, "Workout Tracker", "Vue PWA")
  System_Ext(browser, "Web Browser", "Stores data locally")
  Rel(user, app, "Uses")
  Rel(app, browser, "Persists data to")
```

### Level 2: Container

Shows deployable units such as apps, services, and databases. Add this only for multi-service systems.

```mermaid
C4Container
  title Container Diagram - Workout Tracker
  Person(user, "User", "Tracks workouts")
  Container(spa, "SPA", "Vue 3", "Single-page app")
  ContainerDb(db, "Database", "PostgreSQL", "Application data")
  Rel(user, spa, "Uses")
  Rel(spa, db, "Reads and writes")
```

Level 3 (Component) and Level 4 (Deployment) are rarely worth the reader's attention. Produce them only when another skill explicitly asks and the audience needs that depth.

### C4 element syntax

- People: `Person`, `Person_Ext`
- Systems: `System`, `System_Ext`, `SystemDb`
- Containers: `Container`, `ContainerDb`, `ContainerQueue`
- Relationships: `Rel(from, to, "label")`; use action verbs like "Reads", "Publishes to", not bare "uses".
- Boundaries: wrap related elements in `System_Boundary` or `Container_Boundary`.

## Rules inherited from this skill's purpose

- One idea per diagram. A context diagram and a container diagram are two different diagrams, not one.
- Every element needs a short description so a beginner knows what it is.
- Prefer unidirectional arrows. Label the arrow with an action.
- Do not invent a "subcomponent" level. C4 levels are context, container, component, and deployment only.

## When not to draw

- When the prose already makes the point.
- When the reader is a beginner and the diagram adds vocabulary they must decode first.
- When the source already has a clear image: keep the original image instead.

## Source attribution

Mermaid syntax and C4 guidance are condensed from the open-source `softaworks/agent-toolkit` skills `mermaid-diagrams` and `c4-architecture` (MIT licensed), then adapted for beginner reading outputs.
