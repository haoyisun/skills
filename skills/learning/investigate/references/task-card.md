# Research brief

The task card is the contract for an investigation. It fixes what decision is being made, how the session is grounded, how much effort is allowed, and what the deliverable must contain. Confirm the card before searching.

## The twelve fields

| # | Field | Values | What it decides |
| --- | --- | --- | --- |
| 1 | Decision question and success criteria | One sentence, plus how you will know the research succeeded | The scope of the whole session |
| 2 | Subject | Technology / open-source project / concept / combination | Where sources come from |
| 3 | Grounding | `project` / `standalone` / `concept` | Which implementation chapter gets written |
| 4 | Project context | Optional: local path, repository, existing constraints | Whether the plan is bound to a real system |
| 5 | Hard constraints | Optional, may be empty: stack, team skill, time, compliance | Which options survive |
| 6 | Research budget | Optional: hours, or a maximum number of modules or files | When to stop reading |
| 7 | Deliverable tier | `brief` / `plan` / `dossier`, default `plan` | File shape |
| 8 | Output language | Any language, default the conversation language | The language of every file |
| 9 | Illustrations | On / off, default on | Picture budget |
| 10 | Run verification | Off by default; `approved` once the user agrees | Whether experiments may run |
| 11 | Source scope | Self-research plus user-provided by default | Where evidence may come from |
| 12 | Exclusions | What is explicitly out of scope | Boundaries |

Field notes:

- **Success criteria** are what makes the research stop: "we can choose between A and B and justify it", not "we know everything about the topic".
- **Constraints** may be empty. An empty constraint list means the deliverable is a technical design study, not a project rollout plan.
- **Budget** is a ceiling, not a target. When it is empty, the stop conditions in [research-method.md](research-method.md) still apply.
- **Run verification** stays off unless the user agrees after hearing the purpose and the impact.

## Defaults when the user does not answer

| Field | Default |
| --- | --- |
| Deliverable tier | `plan` |
| Language | The conversation language |
| Illustrations | On |
| Run verification | Off |
| Source scope | Self-research plus user-provided |
| Constraints | Empty |
| Budget | Empty |

## Grounding rules

- **`project`**: a real codebase or system is in scope. The implementation chapter describes how the design lands there: affected modules, migration or rollout, rollback. Field 4 must be filled.
- **`standalone`**: no project. The implementation chapter describes how the technology itself works and the generic adoption paths with their costs and risks. Constraints may be empty.
- **`concept`**: no reference implementation exists. The chapter turns the idea into first-principles design, lists assumptions, and describes how each assumption could be validated. State "no precedent found" explicitly when that is the case.

Derive the grounding from what the user provides. When it is genuinely ambiguous, ask one question with the three options.

## Question strategy

- One round, at most five questions, then the card. Do not drip questions across turns.
- Topic only: ask the decision question, the tier, and the grounding. Constraints and budget come after, and may be skipped.
- Skip everything when the invocation already contains a complete brief; show the card and ask for one-line confirmation.
- Never ask about the language; infer it and confirm it in the card.
- Label every inferred value as a guess so the user only corrects what is wrong.

Example round, written in the user's language:

> I need three things before I start reading. Correct anything that is wrong.
>
> 1. What decision does this research support?
>    A. Choose between concrete options · B. Confirm one option is safe · C. Shape a concept into something buildable
>    ➡️ My guess: A
> 2. How much do you want out of this?
>    A. The conclusion and its evidence (`brief`) · B. A full design and implementation plan (`plan`) · C. A multi-file dossier (`dossier`)
>    ➡️ My guess: B
> 3. Is there a real system this must fit?
>    A. Yes, this project (I will give you the path) · B. No, I want the technology itself · C. No precedent exists, only an idea
>    ➡️ My guess: A
>
> Then I will confirm the card, check sources, and start reading.

## Edge cases

- **Concept only, no sources**: state "no precedent found", design from first principles, and make assumptions and validation steps their own sections.
- **No constraints**: go to `standalone` and do not force a project rollout template onto the output.
- **Topic too broad** (for example "research Kubernetes networking"): ask one scoping question with concrete options. Never pick the scope silently.
- **Budget exhausted before the stop conditions hold**: deliver what exists, and list "done / not done / unverified" explicitly. Never present a partial investigation as complete.
- **User asks for "everything"**: treat it as a scope problem, and turn it into one concrete decision question plus an explicit exclusion list.
