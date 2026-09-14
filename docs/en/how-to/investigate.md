# How to research a technical question with investigate

1. Install `investigate`, together with `scholarly-standards` and `technical-diagrams`.
2. Invoke `/investigate <decision question, technology, project, or concept>`.
3. Answer at most five questions about the decision, the deliverable, and the grounding. Every question comes with a suggested answer you can accept.
4. Check the task card, correct anything that is wrong, and confirm it.
5. Investigate validates sources, reads only what the decision needs, and writes the deliverable under `.scholar/research/`.

The tier decides the output:

- `brief`: the conclusion and its evidence, in one file.
- `plan`: the full design and implementation plan. This is the default.
- `dossier`: a multi-file deliverable you can resume chapter by chapter.

Every plan ends with a decision table: the choices you still have to make, each with a recommendation, the reasoning, and who decides. The evidence table keeps sourced facts separate from the design's own reasoning.
