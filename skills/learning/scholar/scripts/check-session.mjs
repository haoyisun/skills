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

if (!dirs.includes('assets')) {
  errors.push('Missing assets/ directory.');
}

const isMastery = files.includes('plan.md');

function checkGoalCard(text, label) {
  if (!/^---\s*\r?\n[\s\S]*?goal_card:/m.test(text)) {
    errors.push(`${label}: goal_card metadata is missing from the frontmatter.`);
  }
  if (!/goal card|学习目标卡|目标卡/i.test(text)) {
    errors.push(`${label}: no readable goal card found.`);
  }
}

function checkSources(text, label) {
  const links = text.match(/\]\(https?:\/\//g) ?? [];
  if (links.length === 0) {
    errors.push(`${label}: no source links found.`);
  }
  return links.length;
}

function countHttps(text) {
  return (text.match(/https?:\/\//g) ?? []).length;
}

if (!isMastery) {
  const materialFiles = markdownFiles.filter(
    (name) => !['plan.md', 'README.md', 'glossary.md', 'appendix-sources.md'].includes(name),
  );

  if (materialFiles.length !== 1) {
    errors.push(`Single-file session must contain exactly one material file, found ${materialFiles.length}.`);
  } else {
    const text = await read(materialFiles[0]);
    checkGoalCard(text, materialFiles[0]);
    const links = checkSources(text, materialFiles[0]);
    notes.push(`${materialFiles[0]}: ${links} source link(s)`);
  }

  if (files.includes('plan.md')) {
    errors.push('Single-file session must not contain plan.md.');
  }
} else {
  for (const required of ['README.md', 'plan.md', 'glossary.md', 'appendix-sources.md', 'assets/SOURCES.md']) {
    if (!(await exists(required))) {
      errors.push(`Missing ${required}.`);
    }
  }

  const plan = await read('plan.md');
  checkGoalCard(plan, 'plan.md');

  const tierMatch = plan.match(/tier:\s*(quick|guide|mastery)/);
  if (!tierMatch) {
    errors.push('plan.md: goal card tier is missing.');
  } else if (tierMatch[1] !== 'mastery') {
    notes.push(`plan.md: tier is ${tierMatch[1]}, but a multi-file session is present.`);
  }

  const rows = [...plan.matchAll(/^\|\s*(\d{2})\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*([a-z-]+)\s*\|/gm)];
  const allowedStatuses = new Set(['pending', 'in-progress', 'done']);
  const planned = [];

  for (const [, number, file, , status] of rows) {
    planned.push(file);
    if (!allowedStatuses.has(status)) {
      errors.push(`plan.md: chapter ${number} has an invalid status "${status}".`);
    }
    if (status !== 'pending' && !(await exists(file))) {
      errors.push(`plan.md: chapter ${number} is ${status}, but ${file} does not exist.`);
    }
  }

  if (planned.length === 0) {
    errors.push('plan.md: no chapter rows found.');
  }

  const chapterFiles = markdownFiles.filter((name) => /^\d{2}-/.test(name));
  for (const name of chapterFiles) {
    if (!planned.includes(name)) {
      errors.push(`${name}: chapter file is missing from the plan table.`);
    }
  }

  for (const name of chapterFiles) {
    const text = await read(name);
    const links = checkSources(text, name);
    const hasChapterSources = /sources for this chapter|本章来源/i.test(text);
    if (!hasChapterSources) {
      notes.push(`${name}: no chapter source heading in English or Chinese (${links} link(s) present).`);
    }
  }

  const glossary = await read('glossary.md');
  const glossaryRows = [...glossary.matchAll(/^\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/gm)]
    .filter(([, term]) => !/^term$/i.test(term.trim()) && !/^---/.test(term.trim()));

  if (glossaryRows.length === 0) {
    notes.push('glossary.md: no entries.');
  }

  const appendix = await read('appendix-sources.md');
  const appendixLinks = countHttps(appendix);
  if (appendixLinks === 0) {
    errors.push('appendix-sources.md: no source links found.');
  }
  if (!/open questions|未解问题|争议/i.test(appendix)) {
    errors.push('appendix-sources.md: missing an "Open questions and disagreements" section (English or Chinese).');
  }
  if (!/unverified|未证实|未验证/i.test(appendix)) {
    errors.push('appendix-sources.md: missing an "Unverified" section (English or Chinese).');
  }

  notes.push(`${chapterFiles.length} chapter file(s), ${glossaryRows.length} glossary term(s), ${appendixLinks} source(s)`);
}

console.log(`Checked ${basename(sessionDir)}`);
for (const note of notes) console.log(`- ${note}`);

if (errors.length > 0) {
  console.error('Session check failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Session check passed.');
