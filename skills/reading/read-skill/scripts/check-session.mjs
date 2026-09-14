import { readdir, readFile, stat } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const sessionDir = resolve(process.argv[2] ?? '');

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!process.argv[2]) {
  fail('Usage: node scripts/check-session.mjs <session-dir>');
}

try {
  const info = await stat(sessionDir);
  if (!info.isDirectory()) fail(`Not a directory: ${sessionDir}`);
} catch {
  fail(`Session directory not found: ${sessionDir}`);
}

const errors = [];
const notes = [];

const entries = await readdir(sessionDir, { withFileTypes: true });
const files = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
const markdownFiles = files.filter((name) => name.endsWith('.md'));

async function read(path) {
  return readFile(join(sessionDir, path), 'utf8');
}

async function exists(path) {
  try {
    await stat(join(sessionDir, path));
    return true;
  } catch {
    return false;
  }
}

function countLinks(text) {
  return (text.match(/\]\(https?:\/\//g) ?? []).length;
}

const verdicts = new Set(['recommended', 'conditional', 'not-recommended']);

function checkFrontmatter(text, label) {
  if (!/^---\s*\r?\n[\s\S]*?\bskill:\s*read-skill/m.test(text)) {
    errors.push(`${label}: frontmatter must set skill: read-skill.`);
  }
  if (!/^---\s*\r?\n[\s\S]*?\btier:\s*(card|full)/m.test(text)) {
    errors.push(`${label}: frontmatter must set tier to card or full.`);
  }
  const verdict = text.match(/^---\s*\r?\n[\s\S]*?\bverdict:\s*([a-z-]+)/m);
  if (!verdict) {
    errors.push(`${label}: frontmatter must set verdict.`);
  } else if (verdict[1] === 'pending') {
    errors.push(`${label}: verdict is still pending; record the real verdict before delivering.`);
  } else if (!verdicts.has(verdict[1])) {
    errors.push(`${label}: verdict "${verdict[1]}" must be recommended, conditional, or not-recommended.`);
  }
  if (!/^---\s*\r?\n[\s\S]*?\bresolved:/m.test(text)) {
    errors.push(`${label}: frontmatter must record the resolved source.`);
  }
  if (!/^---\s*\r?\n[\s\S]*?\baccessed:\s*\d{4}-\d{2}-\d{2}/m.test(text)) {
    errors.push(`${label}: frontmatter must record the access date.`);
  }
}

function checkCardFields(text, label) {
  const markers = [
    /what it does|它是做什么|它做什么/i,
    /when to use|什么时候用|何时使用/i,
    /when not to use|什么时候别用|不适用/i,
    /install/i,
    /minimal usage|最小用法/i,
    /what you get|你会得到|产出/i,
  ];
  const missing = markers.filter((pattern) => !pattern.test(text)).length;
  if (missing > 2) {
    errors.push(`${label}: the card fields look incomplete (${missing} of 6 missing).`);
  }
}

function checkUnverified(text, label) {
  if (!/unverified|未验证|仓库声称|claimed by the repository/i.test(text)) {
    errors.push(`${label}: no collected list of unverified or claimed items found.`);
  }
}

if (!dirs.includes('assets')) {
  errors.push('Missing assets/ directory.');
}

const isRepository = files.includes('README.md') && files.includes('appendix-sources.md');

if (!isRepository) {
  const materialFiles = markdownFiles.filter(
    (name) => !['README.md', 'appendix-sources.md'].includes(name),
  );

  if (materialFiles.length !== 1) {
    errors.push(`Single-file session must contain exactly one guide file, found ${materialFiles.length}.`);
  } else {
    const name = materialFiles[0];
    const text = await read(name);
    checkFrontmatter(text, name);
    checkCardFields(text, name);
    checkUnverified(text, name);

    const links = countLinks(text);
    if (links === 0) {
      errors.push(`${name}: no source links found.`);
    }
    notes.push(`${name}: ${links} source link(s)`);
  }
} else {
  for (const required of ['README.md', 'appendix-sources.md', 'assets']) {
    if (!(await exists(required))) {
      errors.push(`Missing ${required}.`);
    }
  }

  const readme = await read('README.md');
  checkFrontmatter(readme, 'README.md');
  checkUnverified(readme, 'README.md');

  const rows = [...readme.matchAll(/^\|\s*(\d{2})\s*\|([^\n]*)$/gm)].map((match) => {
    const cells = match[2].split('|').map((cell) => cell.trim());
    while (cells.length > 0 && cells[0] === '') cells.shift();
    while (cells.length > 0 && cells.at(-1) === '') cells.pop();
    return { number: match[1], skill: cells[0], file: cells[1], status: cells.at(-1) ?? '' };
  }).filter((row) => row.skill && row.file);

  if (rows.length === 0) {
    errors.push('README.md: no skill table rows found.');
  }

  const allowedStatuses = new Set(['pending', 'in-progress', 'done']);
  const planned = rows.map((row) => row.file);

  for (const row of rows) {
    if (!allowedStatuses.has(row.status)) {
      errors.push(`README.md: skill ${row.number} has an invalid status "${row.status}".`);
    }
    if (row.status !== 'pending' && !(await exists(row.file))) {
      errors.push(`README.md: skill ${row.number} is ${row.status}, but ${row.file} does not exist.`);
    }
  }

  const chapterFiles = markdownFiles.filter((name) => /^\d{2}-/.test(name));
  if (chapterFiles.length === 0) {
    errors.push('Repository session contains no chapter files.');
  }
  for (const name of chapterFiles) {
    if (!planned.includes(name)) {
      errors.push(`${name}: chapter file is missing from the skill table.`);
    }
    const text = await read(name);
    checkCardFields(text, name);
    const links = countLinks(text);
    if (links === 0) {
      errors.push(`${name}: no source links found.`);
    }
  }

  const appendix = await read('appendix-sources.md');
  const appendixLinks = (appendix.match(/https?:\/\//g) ?? []).length;
  if (appendixLinks === 0) {
    errors.push('appendix-sources.md: no source links found.');
  }
  checkUnverified(appendix, 'appendix-sources.md');

  notes.push(`${chapterFiles.length} chapter file(s), ${rows.length} table row(s), ${appendixLinks} source(s)`);
}

console.log(`Checked ${basename(sessionDir)}`);
for (const note of notes) console.log(`- ${note}`);

if (errors.length > 0) {
  console.error('Session check failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Session check passed.');
