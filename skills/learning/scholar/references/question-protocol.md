# Question protocol

Ask the smallest set of questions that pins the goal down, then stop asking and show the card. A long interview is a failure, not diligence.

## Principles

1. Ask in one round, never more than five questions, then produce the goal card. Do not drip questions across turns.
2. Every question must be answerable without domain knowledge: give two to four options plus room for a free-form answer.
3. Infer before asking. Mark each inference — "my guess is B" — so the user only corrects what is wrong.
4. Never ask for facts you can find yourself: what a term means, which sources exist, what the popular explanation is.
5. Never ask about the output language. Infer it from the conversation and confirm it in the card.
6. Never ask "how deep do you want to go?" in the abstract. Ask about purpose and reading time, then derive the tier.
7. If the invocation already contains a complete goal, ask nothing. Show the card and ask for one-line confirmation.

## Which slots to ask

| Situation | Ask | Skip |
| --- | --- | --- |
| Topic only | purpose, time budget, starting point | scope and language, unless the topic is a whole domain |
| Topic plus time budget | purpose, starting point | time budget |
| Broad domain ("machine learning") | one scope question: which part matters first | everything else, until scope is fixed |
| Source provided, goal unclear | purpose, time budget | source scope |
| Complete goal in the invocation | nothing | all questions |
| No topic at all | one question: "What do you want to learn?" | all others until the topic arrives |
| "You decide" | nothing; infer everything and show the card | all questions |

Self-test is the only preference that always needs an explicit answer to turn on. Ask it as a yes/no inside the round, or leave it off.

## Round template

Write the round in the conversation language. Keep it short enough to answer in one reply.

> I want to pin down three things before I start. Correct anything that is wrong.
>
> 1. What should you be able to do afterwards?
>    A. Follow a conversation about it · B. Use it at work · C. Design and debug with it · D. Teach it to others
>    ➡️ My guess: B
> 2. How much reading time do you want to invest?
>    A. About 10 minutes · B. One to three hours · C. Several days or weeks
>    ➡️ My guess: B
> 3. What do you already know that is adjacent to this?
>    ➡️ My guess: you work with software teams, but have not used this concept in practice
>
> Once you confirm, I will check authoritative sources first and then write.

## Confirmation

After the answers, show the goal card and ask for one short confirmation. State the tier you derived, why, and what that means for the reader: reading time, file shape, and whether there will be self-test questions. Then stop and wait. Do not start researching while the card is unconfirmed.

When the user does not reply, use the defaults from [goal-model.md](goal-model.md) — `guide`, conversation language, self-test off, illustrations on — and say that you did.

## Anti-patterns

- Ten questions, or the same axis asked twice in different words.
- Essay prompts like "describe your learning goals and background" instead of options.
- Asking the user to define the term they came to learn.
- Asking which sources they trust before you have looked for any.
- Asking about output format, file layout, or tier directly; those are derived, not interviewed.
- Asking about language, or about "AI flavor", or about how long the text should be in words.
- Restarting the interview when the user only changes one card field.
