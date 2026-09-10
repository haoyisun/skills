[English](./README.md) · [简体中文](./README.zh-CN.md)

# 读者 / Reader

[![skills.sh](https://skills.sh/b/haoyisun/skills)](https://skills.sh/haoyisun/skills)

**读者**是一组小型的、只能主动触发的 agent skill，用来帮助人们通过 AI 工具阅读、学习和理解技术资料。

它覆盖三种不同的阅读需求：

| Skill | 用法 | 适合什么时候 |
| --- | --- | --- |
| `read-project` | `/read-project <来源>` | 想从代码和文档入手，理解并上手一个软件项目。 |
| `read-standard` | `/read-standard <来源>` | 想深入学透一篇文章、博客、书、PDF、本地文件或粘贴文本。 |
| `read-fast` | `/read-fast <来源>` | 只想花 2–10 分钟快速看懂大意和关键概念。 |

三套 skill 都是显式触发，模型不会自动调用；用户用斜杠命令主动开始。

## 为什么需要这些 skill

很多读者会撞上同一类问题：

- 项目文档过时、不完整，或者充满没解释的术语；
- 技术文章混合了大量缩写、专业词和默认背景知识；
- 读者只有十分钟，但仍然需要一个正确的理解框架；
- 原文是一种语言，读者更习惯另一种语言。

这些 skill 会把材料整理成一份通俗 Markdown 指南，而不是替代原始来源。

## 每套 skill 都尽量做到

- 跟随当前对话语言；不确定时问一次。
- 面向最低可能的读者水平写作，让高水平读者也能快速浏览。
- 保持准确，把“来源支持的事实、推测、未验证内容”分开。
- 避免 AI 味，不堆砌空洞套话。
- 图片放在每次阅读会话自己的 `assets/` 目录。
- 产物统一写到 `.reader/`，不污染工作区。

## 安装

安装全部 skill：

```bash
npx skills@latest add haoyisun/skills
```

只安装一个 skill：

```bash
npx skills@latest add haoyisun/skills --skill read-project
```

然后在 AI 工具中使用：

```text
/read-project https://github.com/owner/repo
/read-standard https://example.com/deep-article
/read-fast ./notes/topic.md
```

在 Codex 里，这三套 skill 的调用写法是 `$read-project`、`$read-standard`、`$read-fast`。

## 输出目录

产物写到 `.reader/`：

```text
.reader/
  projects/   # /read-project
  deep/       # /read-standard
  quick/      # /read-fast
```

每次阅读使用一个带日期的文件夹：

```text
.reader/deep/2026-09-10-harness-engineering/
  harness-engineering.md
  assets/
    ace.png
```

如果当前目录是 Git 仓库，且 `.gitignore` 里没有 `.reader/`，skill 会自动追加。

## 文档

项目文档遵循 [Diátaxis](https://diataxis.fr/)：

- [English documentation](./docs/en/index.md)
- [简体中文文档](./docs/zh/index.md)

英文是 README 的规范语言，简体中文作为持续维护的镜像文档。

## 开发

```bash
npm run validate
npm run check:i18n
npm run scaffold:skill -- reading <skill-name>
```

`npm run validate` 会检查每个 `SKILL.md`，并确认 `docs/en/` 与 `docs/zh/` 的页面结构一致。

## 项目结构

```text
.
├── docs/                    # Diátaxis 文档：en/ 和 zh/
│   └── adr/                 # 架构决策记录
├── skills/
│   └── reading/
│       ├── read-project/
│       ├── read-standard/
│       └── read-fast/
├── scripts/                 # 校验与脚手架工具
├── CONTEXT.md               # 面向 agent 的共享词汇
└── package.json
```

## 许可证

[MIT](./LICENSE)
