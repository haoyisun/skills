# Install your first skill

## Prerequisites

- Node.js 18 or newer
- An AI tool that can invoke agent skills

## Install the whole project

```bash
npx skills@latest add haoyisun/skills
```

The installer lists the available skills. You can install all of them or select only the ones you need.

## Install one skill

```bash
npx skills@latest add haoyisun/skills --skill read-project
```

After installation, invoke a skill by name. Slash-command agents such as Claude Code and Cursor use `/read-project`, `/read-standard`, and `/read-fast`; Codex uses `$read-project`, `$read-standard`, and `$read-fast`.
