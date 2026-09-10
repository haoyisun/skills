# Reader documentation

This directory contains the user-facing documentation for Reader.

- [English documentation](./en/index.md)
- [简体中文文档](./zh/index.md)

## Structure

The documentation follows [Diátaxis](https://diataxis.fr/) and is split into four modes:

```text
docs/
├── en/
│   ├── tutorials/
│   ├── how-to/
│   ├── reference/
│   └── explanation/
├── zh/
│   ├── tutorials/
│   ├── how-to/
│   ├── reference/
│   └── explanation/
└── adr/
```

## Language conventions

- `README.md` is the English root README.
- `README.zh-CN.md` is the Simplified Chinese mirror.
- English and Chinese documentation pages live under `docs/en/` and `docs/zh/` with identical relative paths.
- Links inside English pages stay in `docs/en/`; links inside Chinese pages stay in `docs/zh/`, except for intentional language switches.

Run `npm run check:i18n` to verify that both documentation trees have the same page structure.

