import { readdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = join(root, 'docs');
const locales = ['zh', 'en'];

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

const trees = {};
for (const locale of locales) {
  const base = join(docsRoot, locale);
  const files = await listFiles(base);
  trees[locale] = new Set(files.map((file) => relative(base, file).split('\\').join('/')));
}

const allPaths = new Set([...trees.zh, ...trees.en]);
const errors = [];

for (const path of [...allPaths].sort()) {
  const missing = locales.filter((locale) => !trees[locale].has(path));
  if (missing.length > 0) {
    errors.push(`docs/${path} is missing in: ${missing.join(', ')}`);
  }
}

if (errors.length > 0) {
  console.error('i18n parity check failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`i18n parity ok: ${allPaths.size} shared doc path(s).`);
