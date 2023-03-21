### Motivation
In case of making library which uses Google Apps Script specific features like `UrlFetchApp` it is not able to run locally, so to test as well. In this directory a procudure to create temporary project for testing is introduced.

### Procedure

1. Login and create standalone project.

```bash
$ make login
$ make create
```

2. Write code and push to project.

```bash
$ make push
```

3. Open project and run test.

```bash
$ make open
```

4. If done be sure to delete project manually and push codes to repository. In order to use codes add submodule to git setting then sparse checkout `src/`.
