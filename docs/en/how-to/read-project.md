# How to understand and get started with a software project

1. Install the `read-project` skill.
2. Invoke `/read-project <source>`.
3. The source can be a local path, repository URL, GitHub link, or project name.
4. If the skill asks for your goal, say whether you want to run it, understand the architecture, contribute, or learn a technique.
5. Ask the skill to start from the README, manifest files, entry points, and key execution paths instead of the project description alone.

The skill writes to `.scholar/projects/` and includes a minimal run path, architecture map, key business flows, glossary, and documentation drift.

It uses read-only analysis by default and does not install dependencies, build, or run tests.
