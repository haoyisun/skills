<h1 align="center">学者</h1>

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

学者是伞形项目，旗下有两个能力族。**读者** 把原始技术资料变成一份你可以照着读的 Markdown 指南；**学者** 能力族把目标或决策变成有来源的材料：`scholar` 产出学习材料，`investigate` 产出经过校验的设计方案或实施方案。两个能力族都会先读或先校验来源再动笔，而且都不会自行触发。

## Skill 一览

| Skill | 能力族 | 来源 | 产出 |
| --- | --- | --- | --- |
| `read-project` | 读者 | 一个代码库：本地路径、仓库地址、GitHub 链接或项目名 | 项目上手、架构与业务流指南 |
| `read-standard` | 读者 | 技术文章、博客、书籍、PDF、本地文件或粘贴文本 | 逐节覆盖的完整学习指南 |
| `read-fast` | 读者 | 同样的来源，但只有几分钟时间 | 2–10 分钟看完的快速理解 |
| `scholar` | 学者 | 一个主题或学习目标，可附带来源 | 快速概览、完整学习指南或多文件手册 |
| `investigate` | 学者 | 一个决策问题、一门技术、一个项目或一个概念 | 候选方案对比加设计方案与实施方案 |
| `scholarly-standards` | 共享 | 由 `scholar` 与 `investigate` 按名字引用 | 两者共用的信源、写作、图片、能力与提问协议 |
| `technical-diagrams` | 共享 | `scholar` 与阅读 skill 在“画图更清楚”时调用 | 嵌入 Markdown 的 Mermaid 与 C4 图 |

七套 skill 都是**只能主动触发**，在你调用之前不会进入模型的视野。

## 安装

```bash
npx skills@latest add haoyisun/skills
```

安装器会列出仓库里的 skill，然后询问要装哪几个、装到哪些 agent 上。`skills` 支持 75 个以上的 agent，包括 Claude Code、Codex、Cursor、GitHub Copilot、Gemini CLI 和 Windsurf，并会把每个 skill 写进对应 agent 自己会读取的目录。

`scholar`、`investigate` 和阅读 skill 都会按名字引用 `technical-diagrams` 与 `scholarly-standards`，所以请把它们一起安装。直接安装整个仓库（`npx skills@latest add haoyisun/skills`）就会一起装上；如果只装单个 skill，记得把这两套共享 skill 一并选上。

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
/scholar ADR
```

Claude Code、Cursor 这类支持斜杠命令的工具用 `/read-project`，Codex 用 `$read-project`。

## 设计原则

仓库里每套 skill 都遵循同一套规则。

- **读原始来源，不读二手总结。** `read-project` 会用代码和测试去验证结论，而不是只看 README；`read-standard` 逐节跟随原文，保留每一节的推理过程。
- **区分事实与推测。** 来源没有支持的内容会明确标成推测或未验证。
- **面向最低可能的读者写作。** 术语和缩写第一次出现时就解释，新手不用停下来搜索。
- **跟随对话语言。** 原文语言和阅读语言可以不同。
- **交还你拥有的产物。** 产出是 `.scholar/` 下的普通 Markdown，和被描述的项目放在一起。
- **每个论断都可追溯。** `scholar` 会把论断对应到实际抓取过的来源，把分歧标出来而不是藏起来，绝不把 AI 生成文本当作依据。
- **不替代原始来源。** 指南是原文的伴读材料。

## 输出目录

```text
.scholar/
  projects/   # read-project
  deep/       # read-standard
  quick/      # read-fast
  study/      # scholar 会话
```

每次阅读使用一个带日期的文件夹：

```text
.scholar/deep/2026-09-10-harness-engineering/
  harness-engineering.md
  assets/
    ace.png
```

如果当前目录是 Git 仓库，且 `.gitignore` 里没有 `.scholar/`，skill 会追加进去并明确告知。`.reader/` 是改名前的输出根目录：已有产物保持原位，两个根目录都会被 Git 忽略。

## 兼容性

学者遵循 [Agent Skills 规范](https://agentskills.io/specification)，这是同一个仓库能服务多种 agent 的原因。各 agent 特有的部分放在规范之外：

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
│   ├── reading/             # 读者能力族
│   │   ├── read-project/
│   │   ├── read-standard/
│   │   └── read-fast/
│   ├── learning/
│   │   └── scholar/         # 学者能力族
│   └── diagrams/
│       └── technical-diagrams/
├── scripts/                 # 校验与脚手架工具
├── CONTEXT.md               # 面向 agent 的共享词汇
└── package.json
```

## 许可证

[MIT](./LICENSE)
