---
name: read-project
description: Use when the user invokes /read-project with a local path, repository URL, GitHub link, or project name. Read the code and documentation together, then write a beginner-friendly onboarding, architecture, and business-flow guide as Markdown.
disable-model-invocation: true
---

# read-project

Help a reader go from "this project exists" to "I know what it does, how it is built, and how to start using or modifying it". Read the real codebase and its documentation together, not one without the other.

## Invocation

This skill is explicit-only. The user starts it with:

```text
/read-project <source>
```

`<source>` can be a local path, a remote URL, a GitHub link, or a project name.

## Reader and language defaults

- Assume the reader has basic development ability but is new to this project and its domain.
- Write for the lowest plausible reader in that profile, so every output is readable by a broader audience.
- Match the language of the current conversation. If the language is unclear, ask once.

## Safety boundary

- Local paths: read in place. Do not modify the project.
- GitHub links: shallow-clone into the session folder under `.reader/projects/`, then delete the clone when done. Keep only the repository URL and commit hash in the output.
- Project names without an owner: search or ask for `owner/repo`; never guess and read the wrong repository.
- Remote non-GitHub sources: try network access first. If it cannot be read, say so.
- Allowed commands: read-only commands such as `git log`, `git status`, `rg`, `ls`, and file reads.
- Do not install dependencies, build, run tests, or start services unless the user explicitly asks. For any write outside `.reader/`, explain first and wait for approval.

## Workflow

1. If the user's goal is unclear, ask one question: do they want to run it, understand the architecture, contribute, or learn a technique? If the repository is small enough to read completely, this can be skipped.
2. Resolve the source and record the repository URL, default branch, and commit hash when available.
3. Gather primary evidence in this order:
   - `README.md`, `CONTRIBUTING.md`, and top-level documentation;
   - manifest files such as `package.json` for entry points, scripts, and dependencies;
   - public API surface, routes, CLI commands, or exported functions;
   - one representative execution path from an entry point to a result;
   - tests or examples that document intended behavior.
4. Use evidence-driven sampling for large repositories. Read only the files relevant to the user's goal and the main execution paths. Mark unread areas as "not deeply inspected"; do not pretend to have read everything.
5. Label what is code-supported fact, what is reasonable inference, and what could not be verified.
6. Build the output following [references/output-schema.md](references/output-schema.md).
7. Write the deliverable to `.reader/projects/<date>-<slug>/<slug>.md`, with downloaded or generated images under `assets/`.
8. If the working directory is a Git repository and `.gitignore` does not contain `.reader/`, append `.reader/` to `.gitignore`. State that this was done.
9. Delete the cloned source directory, leaving only the Markdown and assets. Keep the repository URL and commit hash in the deliverable.

## Shared writing rules

- Explain terms and abbreviations where they first appear, as "Term (English full name): plain explanation".
- Do not use AI-flavored filler, forced triads, or empty buzzwords. Write in connected, concrete prose. Simple examples are welcome.
- Use original images when available and useful. Generate an image only when a diagram would materially reduce confusion. Put images in `assets/` and use relative links.
- Put only a light source header in the output: title, author/project, link or path, and reading time.

## What not to do

- Do not summarize the project to death. The reader wants a usable mental model and runnable next step.
- Do not invent behavior from the README alone. Verify against code or tests.
- Do not claim a file path or command works unless the source supports it.

