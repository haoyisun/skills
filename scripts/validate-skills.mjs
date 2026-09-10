import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsRoot = join(root, 'skills');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.name === 'SKILL.md') {
      files.push(fullPath);
    }
  }

  return files;
}

function parseFrontmatter(text) {
  const match = text.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/);
  if (!match) return null;

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (pair) data[pair[1]] = pair[2].trim();
  }

  return data;
}

const files = await walk(skillsRoot);
const errors = [];

if (files.length === 0) {
  errors.push('No SKILL.md files found under skills/.');
}

for (const file of files) {
  const rel = relative(root, file);
  const text = await readFile(file, 'utf8');
  const frontmatter = parseFrontmatter(text);
  const skillDir = dirname(file);
  const skillName = frontmatter?.name ?? '';
  const expectedName = skillDir.split(/[\\/]/).at(-1);

  if (!frontmatter) {
    errors.push(`${rel}: missing YAML frontmatter`);
    continue;
  }

  if (!frontmatter.name) {
    errors.push(`${rel}: missing "name" in frontmatter`);
  } else if (skillName !== expectedName) {
    errors.push(`${rel}: name "${skillName}" does not match directory "${expectedName}"`);
  }

  if (!frontmatter.description) {
    errors.push(`${rel}: missing "description" in frontmatter`);
  }
}

if (errors.length > 0) {
  console.error('Skill validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${files.length} skill(s).`);
