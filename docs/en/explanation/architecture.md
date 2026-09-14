# Project architecture

## Top-level structure

```text
docs/      Diátaxis documentation, split into zh/ and en/
skills/    Installable agent skills
scripts/   Validation and scaffolding utilities
CONTEXT.md Shared project vocabulary
```

## Scholar and its families

Scholar (学者) is the umbrella project. Reader (读者) is the reading capability family: it reads material that already exists and turns it into a guide.

- `read-project` helps users read a software project.
- `read-standard` helps users learn technical material deeply.
- `read-fast` helps users get a quick overview.

All three are explicit-only and are invoked as `/read-project`, `/read-standard`, and `/read-fast`.

The Scholar family holds the other two product skills: `scholar` for learning material and `investigate` for decision-oriented research.

## One Scholar skill, three depth tiers

`scholar` starts from a learning goal instead of a source. It confirms a goal card, finds and vets sources, then writes learning material under `.scholar/study/`. One entry command routes to three depth tiers:

- `quick` 快读: one overview, about ten minutes of reading.
- `guide` 通学: one complete study guide, one to three hours of reading. This is the default.
- `mastery` 精修: a multi-file handbook for days or weeks of study, resumable from `plan.md`.

The skill's own protocols live in `references/`: goal model, glossary and patches, output schemas, and review checklist. Templates live in `assets/`, and two Node scripts scaffold a session and check a finished one. Source evaluation, writing, image, capability, and question rules come from the shared standards layer.

## One investigation skill, three deliverable tiers

`investigate` starts from a decision question instead of a learning goal, and writes a design or implementation plan under `.scholar/research/`. The same entry routes to three tiers:

- `brief`: the conclusion and its evidence, in one file.
- `plan`: the full design and implementation plan, in one file. This is the default.
- `dossier`: a multi-file deliverable with findings, options, design, implementation, and appendices.

Its protocols live in `references/`: research brief, research method, evidence and experiments, output schemas, decision points and confidence, and the review checklist. It also references the shared standards layer and `technical-diagrams` by name.

## One shared standards layer

`scholarly-standards` holds the protocols every sourced product follows: source evaluation, writing style, image policy, capability degradation, and the question protocol. `scholar` and `investigate` reference it by name, so the rules are maintained once instead of copied into each skill.

## One shared diagramming skill

`technical-diagrams` is a shared foundation that the reading skills use by name when they decide a diagram would help. It holds Mermaid syntax and C4 architecture guidance, and it is installed with the reading skills from the same repository so it is always present. It is not specific to the reading family, so future Scholar skills can depend on it too.

## Why skills reference each other by name

The skills CLI installs each skill into its own directory by skill name, not by its source category path. Relative paths between skill folders do not survive installation, so a skill that needs another skill references it by name and is installed together with it from the same repository.

## Why `skills/<category>/<name>`

Category directories exist only to organize browsing. `skills.sh` walks one or two levels deep to find `SKILL.md`, so the category does not affect installation.

## Why all artifacts go under `.scholar/`

Artifacts are kept separate from user source code. Type folders under `.scholar/` — `projects/`, `deep/`, `quick/`, `study/`, and `research/` — make outputs easy to find and clean up. `.reader/` was the pre-rename root and is left in place.

## i18n convention

`docs/zh/` and `docs/en/` must keep the same relative paths. Run `npm run check:i18n` to detect missing pages.
