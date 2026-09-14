# How to read a third-party skill with read-skill

1. Install `read-skill`, together with `scholarly-standards` and `technical-diagrams`.
2. Invoke `/read-skill <repo URL, owner/repo, skill name, or local path>`.
3. When you name a skill that is installed locally, it reads that copy and says so. A bare name that matches several candidates produces one question instead of a guess.
4. The guide opens with a one-page card: what it does, when to use it, when not to, how to install it, the smallest example, what you get, and the pitfalls.
5. The rest of the guide adds scenarios in detail, installation details, usage variants, effects, composition, risk, and a verdict.

`full` is the default tier; ask for `card` when you only want the one-page version. A repository with more than twelve skills is written as a repository guide plus one chapter per detailed skill. Effect claims are tagged as tested, claimed by the repository, or unverified.
