# CONTEXT.md

This file gives agents a shared vocabulary for the **Scholar** (学者) repository.


## Project

Scholar is an open-source collection of agent skills. Its purpose is to help people read, learn, and understand technical material through an AI tool. Scholar is the umbrella project; **Reader** (读者) is the reading capability family inside it.

## Skills

The repository ships three explicit-only reading skills:

- `read-project`: read a software project from its code and documentation, and produce an onboarding, architecture, and business-flow guide.
- `read-standard`: read technical articles, blog posts, books, PDFs, local files, or pasted text deeply, and produce a complete study guide.
- `read-fast`: read technical material quickly, and produce a 2–10 minute overview.

Each skill is a directory under `skills/reading/<name>/` containing a required `SKILL.md` file. The `name` in frontmatter must match the directory name.

The repository also ships one shared foundation skill:

- `technical-diagrams`: Mermaid syntax and C4 architecture guidance for the diagrams that reading skills produce. It is not specific to the reading family; future skills may depend on it too.

It lives at `skills/diagrams/technical-diagrams/` and is installed together with the reading skills from the same repository.

The Scholar family ships two skills:

- `scholar`: turn a learning goal into sourced, illustrated learning material: a quick overview, a complete study guide, or a multi-file handbook.
- `investigate`: turn a technical decision question into a verified design or implementation plan: a brief, a full plan, or a multi-file dossier.

They live at `skills/learning/scholar/` and `skills/learning/investigate/`, and reference `scholarly-standards` and `technical-diagrams` by name.

The repository also ships one shared standards skill:

- `scholarly-standards`: the source-evaluation, writing, image, capability, and question protocols used by the Scholar family skills. It is not invoked directly; other skills reference it by name.

It lives at `skills/standards/scholarly-standards/`.

## Terms

- **Scholar / 学者**: this project and the set of skills it ships.
- **Reader / 读者**: the reading capability family inside Scholar. It reads source material that already exists and turns it into a guide.
- **Depth tier / 深度档位**: `quick` (快读), `guide` (通学), or `mastery` (精修). The tier decides the reading time, file shape, review depth, and image budget.
- **Goal card**: the confirmed learning goal that drives a Scholar session: topic, scope, purpose, tier, time budget, starting point, output shape, language, self-test, illustrations, and source scope.
- **Source tier**: the S/A/B/C classification used to weigh a source. AI-generated content is always a C-level lead, never evidence.
- **Claim-source mapping**: the rule that every claim in Scholar output is traceable to a vetted source, with disagreement and uncertainty marked instead of hidden.
- **Shared standards / 共享标准层**: the `scholarly-standards` skill. It holds the protocols that apply to every sourced product in this repository, so the skills do not each keep a copy.
- **Investigation brief / 调研任务卡**: the confirmed card that drives an `investigate` session: decision question, subject, grounding, constraints, budget, tier, language, illustrations, run verification, source scope, and exclusions.
- **Grounding**: how a session is anchored — `project` (a real codebase and its constraints), `standalone` (a technology or practice, no project), or `concept` (a design idea with no reference implementation).
- **Decision point / 决策点**: a choice the human must settle, recorded with the skill's recommendation, reasoning, and who decides.
- **Evidence tier E / E 类证据**: a local experiment run with the user's approval and recorded with the command, dependency versions, environment, date, and result. The recording and isolation rules live in the shared `scholarly-standards` experiments protocol.
- **Skill**: a self-contained set of agent instructions in a directory containing a `SKILL.md` file.
- **SKILL.md**: the entry point of a skill. It must contain YAML frontmatter with `name` and `description`.
- **Explicit-only**: a skill with `disable-model-invocation: true`. It is triggered when the user names it, not automatically by the model.
- **Source material**: the repository, article, book, PDF, file, or pasted text the user wants to understand.
- **Glossary**: a small shared vocabulary produced while reading so later explanations stay consistent.
- **Claim**: a statement extracted from source material. Claims must be traceable to a source, and assumptions must be marked separately.
- **Knowledge patch**: plain-language background inserted where the source assumes prior knowledge.
- **`.scholar/`**: the default output root. It contains `projects/`, `deep/`, and `quick/` for the reading family, and `study/` for the Scholar family.
- **Legacy `.reader/`**: the output root used before the Scholar rename. It is not migrated; both roots stay ignored by Git.
- **By-name reference**: a skill that needs another skill references it by name, not by a relative path, because the skills CLI installs skills into directories named after the skill rather than preserving source category paths.

## Naming rules

- Use `read-project` when the source is a software project.
- Use `read-standard` when the user wants to learn technical material deeply.
- Use `read-fast` when the user wants a short, coherent overview.
- Use `scholar` when the user wants learning material produced from a learning goal rather than a reading of existing material.
- Use `investigate` when the user needs a decision-oriented research deliverable: option comparison, design, and implementation plan.
- Do not invent synonyms for these names in issues, docs, or ADRs.

## Output conventions

- Root: `.scholar/`
- Project output: `.scholar/projects/<YYYY-MM-DD>-<slug>/`
- Deep output: `.scholar/deep/<YYYY-MM-DD>-<slug>/`
- Quick output: `.scholar/quick/<YYYY-MM-DD>-<slug>/`
- Scholar output: `.scholar/study/<YYYY-MM-DD>-<slug>/`
- Investigation output: `.scholar/research/<YYYY-MM-DD>-<slug>/`
- Images: `assets/` inside each session folder.
- Latin titles become lowercase hyphenated slugs. Chinese titles stay readable in the filename after illegal characters are removed.
- Diagrams: embedded Mermaid code blocks in the Markdown. `assets/` is only for original images and screenshots.
