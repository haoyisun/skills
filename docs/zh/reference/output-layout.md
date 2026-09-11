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
```

- `YYYY-MM-DD` 是生成日期。
- 英文标题转成小写连字符 slug。
- 中文标题直接保留在文件名中，只删除非法字符。
- 同一日期重复生成时追加 `-2`、`-3`，不覆盖旧文件。
- 图片放在每个会话文件夹下的 `assets/`，在 Markdown 中用相对路径引用。
- `.reader/` 是改名前的根目录，已有产物不迁移；两个根目录都会被 Git 忽略。
