import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

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

// Skill consumers (the `skills` CLI, Claude Code, and skill indexes built on them)
// read SKILL.md frontmatter with a real YAML parser. Parse it the same way here:
// a lenient line-based reader accepts frontmatter such as
// `description: ... guide: what it does` that the ecosystem parsers reject, and a
// rejected frontmatter makes the skill disappear from the index without any error.
function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;

  return parseYaml(match[1]) ?? {};
}

const files = await walk(skillsRoot);
const errors = [];

if (files.length === 0) {
  errors.push('No SKILL.md files found under skills/.');
}

for (const file of files) {
  const rel = relative(root, file);
  const text = await readFile(file, 'utf8');
  const skillDir = dirname(file);
  const expectedName = skillDir.split(/[\\/]/).at(-1);

  let frontmatter;
  try {
    frontmatter = parseFrontmatter(text);
  } catch (error) {
    // The parser reports positions relative to the frontmatter block, which starts on
    // line 2 of the file, so shift them by one line to point at the real file location.
    const position = error.linePos?.[0];
    const reason = String(error.message).split('\n')[0].replace(/\s+at line \d+, column \d+:?$/, '');
    const where = position ? ` (line ${position.line + 1}, column ${position.col})` : '';
    errors.push(`${rel}: invalid YAML frontmatter — ${reason}${where}`);
    continue;
  }

  if (!frontmatter) {
    errors.push(`${rel}: missing YAML frontmatter`);
    continue;
  }

  if (typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
    errors.push(`${rel}: frontmatter must be a YAML mapping`);
    continue;
  }

  const skillName = frontmatter.name;

  if (typeof skillName !== 'string' || skillName.trim() === '') {
    errors.push(`${rel}: missing "name" in frontmatter`);
  } else if (skillName !== expectedName) {
    errors.push(`${rel}: name "${skillName}" does not match directory "${expectedName}"`);
  }

  const description = frontmatter.description;

  if (typeof description !== 'string' || description.trim() === '') {
    errors.push(`${rel}: missing "description" in frontmatter`);
  }
}

if (errors.length > 0) {
  console.error('Skill validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${files.length} skill(s).`);
