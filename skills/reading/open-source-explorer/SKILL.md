---
name: open-source-explorer
description: Use when the user wants to understand an open-source repository, its architecture, entry points, dependencies, data flow, or how to use it. Inspects the actual codebase and documentation, then explains structure and behavior with evidence.
---

# Open Source Explorer

Help the user understand a codebase by reading it as a system, not by guessing from its README alone.

## 1. Define the question

Find out whether the user wants to:

- Use the project.
- Extend or contribute to it.
- Understand a bug or behavior.
- Learn a technique from it.

The question determines how deep the exploration should go.

## 2. Gather primary evidence

Inspect in this order:

1. `README.md`, `CONTRIBUTING.md`, and top-level documentation.
2. `package.json` or equivalent manifest for entry points, scripts, and dependencies.
3. Public API surface: exports, routes, CLI commands, or public functions.
4. The execution path from an entry point to the relevant feature.
5. Tests that document intended behavior.

Do not claim something works unless the code or tests support it.

## 3. Build the map

Explain:

- What the project is for.
- The main components or modules.
- How data or control flows between them.
- Where the interesting entry points live.
- What is stable public API and what is internal implementation.

Use a short tree or flow only when it makes relationships clearer than prose.

## 4. Connect the question to the code

For the user's specific goal, show the smallest set of files and functions that matters. Prefer direct paths and line references over broad descriptions.

## 5. Explain behavior and tradeoffs

When relevant:

- Why a design choice was made when evidence exists.
- What the likely constraints are.
- Where the code is straightforward and where it is subtle.
- What to verify before changing it.

Label inference as inference. Do not invent intent.

## 6. End with a runnable next step

Leave the user with a concrete action: run a command, open a file, trace a path, write a small probe, or read a specific test.
