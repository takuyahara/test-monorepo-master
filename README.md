TEST-MONOREPO-MASTER

### Usage
See [test-monorepo-client](https://github.com/takuyahara/test-monorepo-client).

### How to develop

1. Run following commands to clone subdirectory only.
```bash
$ git clone --filter=blob:none --sparse git@github.com:takuyahara/test-monorepo-master.git
$ git -C test-monorepo-master sparse-checkout set <directory_name>
```

2. Open `<directory_name>` instead of root directory (`test-monorepo-master`) with VSCode and reopen in container. Although `.git/` doesn't exist there root's Git commands are available.

### Rules

- When codes are done use tag to identify library's version like `greeter@0.0.3`.
- NEVER mix different libraries' addition, modification or deletion in same commit.

### Why devcontainer on root?

On root directory devcontainer is set to use Git command in case of addition, modification or deletion on root files or directories.