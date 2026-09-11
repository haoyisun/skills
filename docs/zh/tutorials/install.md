# 安装第一个 skill

## 前置条件

- 已安装 Node.js 18 或更高版本
- 拥有一个可以调用 agent skill 的 AI 工具

## 安装整个项目

```bash
npx skills@latest add haoyisun/skills
```

安装器会列出可用的 skill。你可以选择全部安装，也可以只安装需要的 skill。

`read-project`、`read-standard`、`read-fast` 画图时依赖 `technical-diagrams`。请把它和阅读 skills 一起安装，或使用 Skill Pack 一次装好。

## 只安装某个 skill

```bash
npx skills@latest add haoyisun/skills --skill read-project
```

安装后按名字调用 skill。Claude Code、Cursor 这类支持斜杠命令的工具用 `/read-project`、`/read-standard`、`/read-fast`；Codex 用 `$read-project`、`$read-standard`、`$read-fast`。
