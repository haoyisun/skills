# 输出目录和命名约定

所有产物默认写到当前工作区的 `.scholar/`：

```text
.scholar/
  projects/
    <YYYY-MM-DD>-<slug>/
      <slug>.md
      assets/
  deep/
    <YYYY-MM-DD>-<slug>/
      <slug>.md
      assets/
  quick/
    <YYYY-MM-DD>-<slug>/
      <slug>.md
      assets/
  study/
    <YYYY-MM-DD>-<slug>/
      <slug>.md            # 快读与通学会话
      README.md            # 精修会话
      plan.md
      NN-<slug>.md
      glossary.md
      appendix-sources.md
      assets/
  research/
    <YYYY-MM-DD>-<slug>/
      <slug>.md            # 简报与方案会话
      README.md            # 深研会话
      plan.md
      NN-<slug>.md
      glossary.md
      appendix-sources.md
      assets/
  skills/
    <YYYY-MM-DD>-<slug>/
      <slug>.md            # 卡片版与完整版会话
      README.md            # 超过 12 个 skill 的仓库
      NN-<skill>.md
      appendix-sources.md
      assets/
```

- `study/` 存放学者会话；材料里的学习目标卡决定它是单文件还是多文件手册。
- `research/` 存放调研会话；任务卡决定它是简报、方案还是多文件深研。
- `skills/` 存放技能导读会话；超过 12 个 skill 的仓库使用多文件形态。
- `YYYY-MM-DD` 是生成日期。
- 英文标题转成小写连字符 slug。
- 中文标题直接保留在文件名中，只删除非法字符。
- 同一日期重复生成时追加 `-2`、`-3`，不覆盖旧文件。
- 图片放在每个会话文件夹下的 `assets/`，在 Markdown 中用相对路径引用。
- `.reader/` 是改名前的根目录，已有产物不迁移；两个根目录都会被 Git 忽略。
