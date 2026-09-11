# 项目架构

## 顶层结构

```text
docs/      按 Diátaxis 组织的文档，分为 zh/ 和 en/
skills/    可安装的 agent skills
scripts/   校验与脚手架脚本
CONTEXT.md 项目共享词汇
```

## 学者与旗下能力族

学者（Scholar）是伞形项目。读者（Reader）是其中的阅读能力族：它负责读已经存在的材料，并把材料变成指南。

- `read-project` 服务于“要读一个软件项目”的场景；
- `read-standard` 服务于“要认真学透一篇内容”的场景；
- `read-fast` 服务于“只想快速看懂”的场景。

三套 skill 都是主动触发，使用 `/read-project`、`/read-standard`、`/read-fast`。

## 一套学者 skill，三个深度档位

`scholar` 的起点是学习目标而不是现成资料。它会先确认学习目标卡，再检索并校验信源，最后把学习材料写到 `.scholar/study/`。一个入口命令内部分流到三个档位：

- `quick` 快读：一篇概览，约 10 分钟读完。
- `guide` 通学：一份完整的单文件学习指南，1–3 小时读完，是默认档位。
- `mastery` 精修：多文件手册，适合数天到数周的学习，可以从 `plan.md` 续写。

协议细节放在 skill 的 `references/` 目录里：目标模型、提问协议、信源评估、写作契约、术语与知识补丁、图片策略、输出 schema、审校清单和能力降级。模板放在 `assets/`，两个 Node 脚本分别负责搭建会话骨架和检查完成的会话。

## 一个共用的画图 skill

`technical-diagrams` 是阅读 skills 共用的基础能力，当阅读 skill 认为“画图比文字更清楚”时，会按名字引用它。它集中提供 Mermaid 语法和 C4 架构画法，并从同一个仓库和阅读 skills 一起安装，保证始终可用。它不专属于读者能力族，学者旗下的其他 skill 也可以依赖它。

## 为什么 skill 之间按名字引用

skills CLI 安装时会按 skill 名字各自放到独立目录，而不是保留源码里的分类路径。skill 之间的相对路径在安装后会失效，所以一个 skill 需要另一个 skill 时，按名字引用，并从同一个仓库一起安装。

## 为什么用 `skills/<category>/<name>`

分类目录只用于组织浏览。`skills.sh` 会深入一层或两层找到 `SKILL.md`，因此不影响安装。

## 为什么所有产物写到 `.scholar/`

把产物与用户项目源码分开，避免污染仓库。`.scholar/` 下按类型再分 `projects/`、`deep/`、`quick/`，方便查找、清理和避免命名冲突。`.reader/` 是改名前的根目录，已有产物留在原位。

## i18n 约定

`docs/zh/` 和 `docs/en/` 必须保持相同的相对路径。运行 `npm run check:i18n` 可以检查是否缺页。
