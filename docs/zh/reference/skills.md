# 可用 skills

| Skill | 目录 | 能力族 | 用途 |
| --- | --- | --- | --- |
| `read-project` | `skills/reading/read-project` | 读者 | 读代码和文档，产出项目上手与架构指南 |
| `read-standard` | `skills/reading/read-standard` | 读者 | 完整、深入地学习技术文章、博客、书籍或 PDF |
| `read-fast` | `skills/reading/read-fast` | 读者 | 产出 2–10 分钟可读完的快速理解 |
| `scholar` | `skills/learning/scholar` | 学者 | 按学习目标生产有来源、有图解的深入学习材料：快速概览、完整学习指南或多文件手册 |
| `investigate` | `skills/learning/investigate` | 学者 | 调研一个决策问题，产出经过校验的设计方案与实施方案 |
| `scholarly-standards` | `skills/standards/scholarly-standards` | 共享 | 学者能力族共用的信源、写作、图片、能力与提问协议 |
| `technical-diagrams` | `skills/diagrams/technical-diagrams` | 共享 | 阅读 skills 共用的 Mermaid 与 C4 画图指南 |

每个 skill 的入口文件都是 `SKILL.md`，其中 `name` 必须与所在目录名一致。七套 skill 都带有 `disable-model-invocation: true`，只能主动触发。`scholar`、`investigate` 和阅读 skills 都会按名字引用 `technical-diagrams` 与 `scholarly-standards`。
