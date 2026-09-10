# 安装第一个 skill

## 前置条件

- 已安装 Node.js 18 或更高版本
- 拥有一个可以调用 agent skill 的 AI 工具

## 安装整个项目

```bash
npx skills add haoyisun/skills
```

安装器会列出可用的 skill。你可以选择全部安装，也可以只安装需要的 skill。

## 只安装某个 skill

```bash
npx skills add haoyisun/skills --skill read-project
```

安装后，在 AI 工具中使用 `/read-project`、`/read-standard` 或 `/read-fast`。

