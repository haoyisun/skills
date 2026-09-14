import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const skillRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assetsRoot = join(skillRoot, 'assets');
const tiers = new Set(['brief', 'plan', 'dossier']);
const groundings = new Set(['project', 'standalone', 'concept']);

function usage() {
  console.error(`Usage: node scripts/scaffold-session.mjs --slug <slug> --tier <brief|plan|dossier> [options]

Options:
  --question <text>     Decision question (default: the title)
  --title <title>       Material title (default: the slug)
  --grounding <kind>    project | standalone | concept (default: standalone)
  --language <lang>     Output language (default: unknown)
  --root <dir>          Output root (default: <cwd>/.scholar/research)
  --date <YYYY-MM-DD>   Session date (default: today)
  --help                Show this message`);
}

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const next = () => {
      const value = argv[i + 1];
      if (value === undefined || value.startsWith('--')) {
        console.error(`Missing value for ${key}`);
        usage();
        process.exit(1);
      }
      i += 1;
      return value;
    };

    switch (key) {
      case '--slug':
        args.slug = next();
        break;
      case '--tier':
        args.tier = next();
        break;
      case '--question':
        args.question = next();
        break;
      case '--title':
        args.title = next();
        break;
      case '--grounding':
        args.grounding = next();
        break;
      case '--language':
        args.language = next();
        break;
      case '--root':
        args.root = next();
        break;
      case '--date':
        args.date = next();
        break;
      case '--help':
        usage();
        process.exit(0);
        break;
      default:
        console.error(`Unknown option: ${key}`);
        usage();
        process.exit(1);
    }
  }

  if (!args.slug || !args.tier) {
    usage();
    process.exit(1);
  }
  if (!tiers.has(args.tier)) {
    console.error(`Tier must be one of: ${[...tiers].join(', ')}`);
    process.exit(1);
  }
  if (args.grounding && !groundings.has(args.grounding)) {
    console.error(`Grounding must be one of: ${[...groundings].join(', ')}`);
    process.exit(1);
  }
  if (args.date && !/^\d{4}-\d{2}-\d{2}$/.test(args.date)) {
    console.error('Date must use YYYY-MM-DD.');
    process.exit(1);
  }

  return args;
}

function slugify(value) {
  const cleaned = value
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  return cleaned || 'session';
}

function today() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function uniqueSessionDir(root, base) {
  let candidate = join(root, base);
  let counter = 1;

  while (await exists(candidate)) {
    counter += 1;
    candidate = join(root, `${base}-${counter}`);
  }

  return candidate;
}

async function render(templateName, values) {
  let text = await readFile(join(assetsRoot, templateName), 'utf8');

  for (const [key, value] of Object.entries(values)) {
    text = text.replaceAll(`{{${key}}}`, value);
  }

  return text;
}

const args = parseArgs(process.argv.slice(2));
const slug = slugify(args.slug);
const title = args.title ?? args.slug;
const question = args.question ?? title;
const grounding = args.grounding ?? 'standalone';
const language = args.language ?? 'unknown';
const date = args.date ?? today();
const root = resolve(args.root ?? join(process.cwd(), '.scholar', 'research'));
const sessionDir = await uniqueSessionDir(root, `${date}-${slug}`);

const values = {
  TITLE: title,
  QUESTION: question,
  TIER: args.tier,
  GROUNDING: grounding,
  LANGUAGE: language,
  DATE: date,
};

await mkdir(join(sessionDir, 'assets'), { recursive: true });

const created = [];

async function writeFromTemplate(templateName, targetPath) {
  await writeFile(targetPath, await render(templateName, values), 'utf8');
  created.push(targetPath);
}

if (args.tier === 'brief' || args.tier === 'plan') {
  await writeFromTemplate('single-file.template.md', join(sessionDir, `${slug}.md`));
} else {
  await writeFromTemplate('dossier-readme.template.md', join(sessionDir, 'README.md'));
  await writeFromTemplate('dossier-plan.template.md', join(sessionDir, 'plan.md'));
  await writeFromTemplate('glossary.template.md', join(sessionDir, 'glossary.md'));
  await writeFromTemplate('appendix-sources.template.md', join(sessionDir, 'appendix-sources.md'));
  await writeFromTemplate('assets-sources.template.md', join(sessionDir, 'assets', 'SOURCES.md'));
}

console.log(`Created ${args.tier} session: ${sessionDir}`);
for (const path of created) console.log(`- ${path}`);
