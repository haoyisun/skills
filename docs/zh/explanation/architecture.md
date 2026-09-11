# 项目架构

## 顶层结构

```text
docs/      按 Diátaxis 组织的文档，分为 zh/ 和 en/
skills/    可安装的 agent skills
scripts/   校验与脚手架脚本
CONTEXT.md 项目共享词汇
```

## 三套 skill 的分工

- `read-project` 服务于“要读一个软件项目”的场景；
- `read-standard` 服务于“要认真学透一篇内容”的场景；
- `read-fast` 服务于“只想快速看懂”的场景。

三套 skill 都是主动触发，使用 `/read-project`、`/read-standard`、`/read-fast`。

## 一个共用的画图 skill

`technical-diagrams` 是阅读 skills 共用的基础能力，当阅读 skill 认为“画图比文字更清楚”时，会按名字引用它。它集中提供 Mermaid 语法和 C4 架构画法，并在 Skill Pack 里和阅读 skills 一起分发，保证始终可用。它不是阅读专用，后续的非阅读 skill 也可以依赖它。

## 为什么 skill 之间按名字引用

skills CLI 安装时会按 skill 名字各自放到独立目录，而不是保留源码里的分类路径。skill 之间的相对路径在安装后会失效，所以一个 skill 需要另一个 skill 时，按名字引用，并在同一个 pack 里一起分发。

## 为什么用 `skills/<category>/<name>`

分类目录只用于组织浏览。`skills.sh` 会深入一层或两层找到 `SKILL.md`，因此不影响安装。

## 为什么所有产物写到 `.reader/`

把阅读产物与用户项目源码分开，避免污染仓库。`.reader/` 下按类型再分 `projects/`、`deep/`、`quick/`，方便查找、清理和避免命名冲突。

## i18n 约定

`docs/zh/` 和 `docs/en/` 必须保持相同的相对路径。运行 `npm run check:i18n` 可以检查是否缺页。
