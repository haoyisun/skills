# Capabilities and degradation

Scholar runs in many agent tools with different abilities. Detect before promising, degrade honestly, and never invent a result.

## Detection and fallback

| Capability | How to detect | When it is missing |
| --- | --- | --- |
| Web search | Try a query for the topic | Ask the user for sources or pasted text; do not fill gaps from memory |
| Web fetch | Try opening one candidate URL | Mark the claim unverified, do not cite unread pages, and ask the user to paste the source |
| Image generation | Check whether an image tool is available | Use Mermaid, tables, and prose; say so in the summary |
| Sub-agents | Check whether sub-agent tools exist | Self-review with the invoking skill's review checklist |
| Script execution | Try running one script | Walk the same checks by hand |
| File writes | Try writing the session folder | Ask the user for a writable path before producing anything else |

## Rules

- Never claim a source was read when the fetch failed.
- Never present model knowledge as a sourced claim.
- Tell the user what was unavailable and how the material changed because of it.
- When fetch works, do not ask the user to paste what you can open yourself.
- When nothing can be fetched, build the material from user-provided sources only, and state the coverage limit at the top.
- When an ability appears later in the session, use it and update the source or picture records.

## Degradation examples

No search:

> I cannot search this environment, so I will work from the sources you provide. Paste the primary document, or a link I can fetch, and I will vet and cite it.

No image tool:

> Pictures are unavailable here, so the material uses Mermaid diagrams and prose instead. Nothing else changes.

No sub-agents:

> I reviewed the material against the checklist myself and recorded it as a self-check.

No script execution:

> I ran the session checks by hand against the same list the script uses.
