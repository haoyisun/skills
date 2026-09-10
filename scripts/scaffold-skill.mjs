import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const [, , category, name] = process.argv;

if (!category || !name) {
  console.error('Usage: node scripts/scaffold-skill.mjs <category> <name>');
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(category) || !/^[a-z0-9-]+$/.test(name)) {
  console.error('Category and name must use lowercase letters, digits, and hyphens.');
  process.exit(1);
}

const skillDir = join(root, 'skills', category, name);
const skillPath = join(skillDir, 'SKILL.md');

try {
  await access(skillPath);
  console.error(`Skill already exists: ${skillPath}`);
  process.exit(1);
} catch {}

const template = `---
name: ${name}
description: TODO: Describe when to use this skill and what it helps the user do.
---

# ${name}

TODO: Write the skill instructions.
`;

await mkdir(skillDir, { recursive: true });
await writeFile(skillPath, template, 'utf8');
console.log(`Created ${skillPath}`);
