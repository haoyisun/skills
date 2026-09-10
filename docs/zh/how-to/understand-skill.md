# 如何理解一个 agent skill

1. 安装 `skill-explainer` skill。
2. 调用 `$skill-explainer`。
3. 给出 skill 名称、`SKILL.md` 路径或一段描述。
4. 让 skill 先完整阅读 `SKILL.md`，再按需阅读 `references/` 和 `scripts/`。
5. 请它说明使用场景、输入输出、风险和最小调用方式。

只读 frontmatter 很容易误判。这个 skill 的职责是读完入口文件，而不是猜。
