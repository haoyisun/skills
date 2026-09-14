import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const skillRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assetsRoot = join(skillRoot, 'assets');
const tiers = new Set(['card', 'full']);
const sourceForms = new Set(['repository', 'name', 'path', 'installed']);

function usage() {
  console.error(`Usage: node scripts/scaffold-session.mjs --slug <slug> --tier <card|full> [options]

Options:
  --subject <text>        What is being read (default: the slug)
  --source <text>         Resolved source, e.g. owner/repo
  --source-form <kind>    repository | name | path | installed (default: repository)
  --version <text>        Version or commit (default: unknown)
  --installed-copy        Mark the source as a locally installed copy
  --multi                 Repository form: README.md + chapters + appendix
  --chapter <name>        Chapter skill name; repeatable, required with --multi
  --title <title>         Document title (default: the subject)
  --root <dir>            Output root (default: <cwd>/.scholar/skills)
  --date <YYYY-MM-DD>     Session date (default: today)
  --help                  Show this message`);
}

function parseArgs(argv) {
  const args = { chapters: [], installedCopy: false };

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
      case '--subject':
        args.subject = next();
        break;
      case '--source':
        args.source = next();
        break;
      case '--source-form':
        args.sourceForm = next();
        break;
      case '--version':
        args.version = next();
        break;
      case '--title':
        args.title = next();
        break;
      case '--root':
        args.root = next();
        break;
      case '--date':
        args.date = next();
        break;
      case '--chapter':
        args.chapters.push(next());
        break;
      case '--installed-copy':
        args.installedCopy = true;
        break;
      case '--multi':
        args.multi = true;
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
  if (args.sourceForm && !sourceForms.has(args.sourceForm)) {
    console.error(`Source form must be one of: ${[...sourceForms].join(', ')}`);
    process.exit(1);
  }
  if (args.multi && args.chapters.length === 0) {
    console.error('--multi requires at least one --chapter.');
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
const subject = args.subject ?? args.slug;
const title = args.title ?? subject;
const source = args.source ?? subject;
const sourceForm = args.sourceForm ?? 'repository';
const version = args.version ?? 'unknown';
const date = args.date ?? today();
const root = resolve(args.root ?? join(process.cwd(), '.scholar', 'skills'));
const sessionDir = await uniqueSessionDir(root, `${date}-${slug}`);

const values = {
  TITLE: title,
  SUBJECT: subject,
  SOURCE: source,
  SOURCE_FORM: sourceForm,
  VERSION: version,
  DATE: date,
  INSTALLED_COPY: String(args.installedCopy),
};

await mkdir(join(sessionDir, 'assets'), { recursive: true });

const created = [];

async function writeFromTemplate(templateName, targetPath, extra = {}) {
  await writeFile(targetPath, await render(templateName, { ...values, ...extra }), 'utf8');
  created.push(targetPath);
}

if (!args.multi) {
  const template = args.tier === 'card' ? 'card.template.md' : 'full.template.md';
  await writeFromTemplate(template, join(sessionDir, `${slug}.md`));
} else {
  const rows = args.chapters.map((name, index) => {
    const number = String(index + 1).padStart(2, '0');
    return `| ${number} | ${name} | ${number}-${slugify(name)}.md | | | | pending |`;
  });

  await writeFromTemplate('repo-readme.template.md', join(sessionDir, 'README.md'), {
    SKILL_TABLE: rows.join('\n'),
  });
  await writeFromTemplate('appendix-sources.template.md', join(sessionDir, 'appendix-sources.md'));

  for (const [index, name] of args.chapters.entries()) {
    const number = String(index + 1).padStart(2, '0');
    await writeFromTemplate(
      'skill-chapter.template.md',
      join(sessionDir, `${number}-${slugify(name)}.md`),
      { NUMBER: number, TITLE: name },
    );
  }
}

console.log(`Created ${args.tier}${args.multi ? ' (repository)' : ''} session: ${sessionDir}`);
for (const path of created) console.log(`- ${path}`);
