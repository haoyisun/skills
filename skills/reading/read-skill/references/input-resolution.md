# Input resolution

Work out what is being read before reading anything. A wrong source wastes the whole session and produces a guide for something the user never asked about.

## The four input forms

| Input | Example | Resolution |
| --- | --- | --- |
| Repository URL or slug | `https://github.com/owner/repo`, `owner/repo` | Fetch the repository: README, every `SKILL.md`, manifest files, license, recent history |
| Skill name | `scholar` | Check locally installed skills first, then public sources |
| Local path | `./vendor/some-skill` | Read in place, read-only |
| Installed skill | a name that matches an installed skill | Read that copy and report its path and source |

## Installed copy first

When the name matches a skill installed in the agent's skills directories, read that copy. Say which copy was read: name, path, and, when discoverable, its source repository and version.

Readers care about the copy in front of them. When the installed copy and the remote repository differ — a newer version online, a changed description, extra files — say so. Never blend the two copies into one description without noting the difference.

## Ambiguous names

A bare name can match several ecosystems. Search public sources; when more than one plausible candidate appears, ask one question listing the top three candidates, each with a one-line description and its repository. Never pick silently, and never assume the most-starred match is the right one.

## Repository scope

- **One skill**: read it as a single subject — the repository README plus the skill's `SKILL.md` and references.
- **Several skills**: produce a repository overview first (what the repo is for, how installation works, what the skills share), then one section per skill.
- **More than twelve skills**: produce a full table of every skill — name, purpose, trigger, dependencies — plus detailed sections for the ones that matter. When which ones matter is unclear, ask one question; otherwise choose by the user's stated goal and say how the choice was made.
- **Plugin marketplaces**: treat the marketplace manifest as structure information. Only actual skills get guides.

## Recording the source

Every session records:

- the input form and the resolved source;
- the version or commit for a repository, and the access date;
- whether an installed copy was used, and where it lives;
- any difference found between the installed copy and the remote repository.

This goes into the session frontmatter and the source appendix.

## What not to do

- Do not read a different skill with a similar name and assume it is the one.
- Do not silently fall back to a cached or alternate copy when a repository is unreachable. Say the fetch failed and ask.
- Do not read the user's private skills or repositories that were not pointed at.
- Do not treat a README's own description as proof of what the skill does; the `SKILL.md` and its frontmatter are the authoritative source for behaviour.
