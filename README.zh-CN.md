<h1 align="center">读者 Reader</h1>

<p align="center"><strong>只能主动触发的 agent skill，用来阅读、学习和理解技术资料。</strong></p>

<p align="center">
  <a href="./README.md"><img alt="English" src="https://img.shields.io/badge/English-DFE0E5"></a>
  <a href="./README.zh-CN.md"><img alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-DBEDFA"></a>
</p>

<p align="center">
  <a href="https://skills.sh/haoyisun/skills"><img alt="skills.sh 安装量" src="https://skills.sh/b/haoyisun/skills"></a>
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue"></a>
  <a href="https://agentskills.io/specification"><img alt="Agent Skills 规范" src="https://img.shields.io/badge/Agent%20Skills-specification-4e6b99"></a>
</p>

读者包含三套 agent skill，把原始技术资料变成一份你可以照着读的 Markdown 指南。每套 skill 都会先读原始来源再动笔，而且都不会自行触发。

## Skill 一览

| Skill | 来源 | 产出 |
| --- | --- | --- |
| `read-project` | 一个代码库：本地路径、仓库地址、GitHub 链接或项目名 | 项目上手、架构与业务流指南 |
| `read-standard` | 技术文章、博客、书籍、PDF、本地文件或粘贴文本 | 逐节覆盖的完整学习指南 |
| `read-fast` | 同样的来源，但只有几分钟时间 | 2–10 分钟看完的快速理解 |

三套 skill 都是**只能主动触发**，在你调用之前不会进入模型的视野。

## 安装

```bash
npx skills@latest add haoyisun/skills
```

安装器会列出仓库里的 skill，然后询问要装哪几个、装到哪些 agent 上。`skills` 支持 75 个以上的 agent，包括 Claude Code、Codex、Cursor、GitHub Copilot、Gemini CLI 和 Windsurf，并会把每个 skill 写进对应 agent 自己会读取的目录。

```bash
# 只装一个 skill
npx skills@latest add haoyisun/skills --skill read-project

# 只看不装
npx skills@latest add haoyisun/skills --list

# 装到用户级，而不是当前项目
npx skills@latest add haoyisun/skills -g
```

然后在 AI 工具里调用：

```text
/read-project https://github.com/owner/repo
/read-standard https://example.com/deep-article
/read-fast ./notes/topic.md
```

Claude Code、Cursor 这类支持斜杠命令的工具用 `/read-project`，Codex 用 `$read-project`。

## 设计原则

仓库里每套 skill 都遵循同一套规则。

- **读原始来源，不读二手总结。** `read-project` 会用代码和测试去验证结论，而不是只看 README；`read-standard` 逐节跟随原文，保留每一节的推理过程。
- **区分事实与推测。** 来源没有支持的内容会明确标成推测或未验证。
- **面向最低可能的读者写作。** 术语和缩写第一次出现时就解释，新手不用停下来搜索。
- **跟随对话语言。** 原文语言和阅读语言可以不同。
- **交还你拥有的产物。** 产出是 `.reader/` 下的普通 Markdown，和被描述的项目放在一起。
- **不替代原始来源。** 指南是原文的伴读材料。

## 输出目录

```text
.reader/
  projects/   # read-project
  deep/       # read-standard
  quick/      # read-fast
```

每次阅读使用一个带日期的文件夹：

```text
.reader/deep/2026-09-10-harness-engineering/
  harness-engineering.md
  assets/
    ace.png
```

如果当前目录是 Git 仓库，且 `.gitignore` 里没有 `.reader/`，skill 会追加进去并明确告知。

## 兼容性

读者遵循 [Agent Skills 规范](https://agentskills.io/specification)，这是同一个仓库能服务多种 agent 的原因。各 agent 特有的部分放在规范之外：

| 层 | 位置 | 作用 |
| --- | --- | --- |
| 通用 | `SKILL.md` 的 frontmatter 与正文 | `name`、`description` 和具体指令，所有兼容 skills 的 agent 都会读。 |
| Claude Code | frontmatter 里的 `disable-model-invocation: true` | 让模型无法自行触发这套 skill。 |
| Codex | `agents/openai.yaml` | 选择器里的显示信息和 `allow_implicit_invocation: false`。 |

## 文档

项目文档遵循 [Diátaxis](https://diataxis.fr/)：

- [English documentation](./docs/en/index.md)
- [简体中文文档](./docs/zh/index.md)

英文是 README 的规范语言，简体中文作为持续维护的镜像。

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
