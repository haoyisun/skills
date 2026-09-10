# 读者 / Reader

**读者**是一组面向 AI 工具的 skill，用来帮助人们阅读、学习和理解技术资料。

它可以陪你阅读：

- 技术文章与文档
- 开源项目
- 其他 agent skill

## 安装

```bash
npx skills add haoyisun/skills
```

只安装某个 skill：

```bash
npx skills add haoyisun/skills --skill reader
```

安装后，在你的 AI 工具中调用 `$reader`，然后告诉它你想阅读什么。

## 当前 skills

| Skill | 用途 |
| --- | --- |
| `reader` | 阅读技术文章、文档或密集文字材料 |
| `open-source-explorer` | 理解开源项目的架构、入口和数据流 |
| `skill-explainer` | 理解一个 agent skill 的用途、触发条件和风险 |

## 文档

文档采用 [Diátaxis](https://diataxis.fr/) 架构，支持中英文：

- [简体中文](docs/zh/index.md)
- [English](docs/en/index.md)

## 开发

```bash
npm run validate
npm run check:i18n
npm run scaffold:skill -- reading <skill-name>
```

## 发布

项目已配置 `package.json`。提交前运行 `npm run validate`，发布 npm 时 `prepublishOnly` 会自动再次校验。
