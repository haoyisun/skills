# 项目架构

## 顶层结构

```text
docs/      按 Diátaxis 组织的文档，分为 zh/ 和 en/
skills/    可安装的 agent skills
scripts/   校验与脚手架脚本
```

## 为什么用 Diátaxis

教程、操作指南、参考和解释解决四类不同问题。把它们分开后，用户可以快速找到“现在该怎么做”，而不是在一篇长文里反复搜索。

## 为什么用 `skills/<category>/<name>`

分类目录只用于组织浏览。`skills.sh` 会深入一层或两层找到 `SKILL.md`，因此不影响安装。

## i18n 约定

`docs/zh/` 和 `docs/en/` 必须保持相同的相对路径。运行 `npm run check:i18n` 可以检查是否缺页。
