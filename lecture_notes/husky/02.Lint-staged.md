## Lint-Staged

Having git hooks are awesome, but what if we want to add more capabilities. For example, we just want to linting the file changes? here's linting staged description:

> Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

Awesome right?

## Add lint staged

install linted staged into dev dependecies

```shell
$ yarn add lint-staged --dev
```

## configure your scripts inside package.json

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "typecheck": "flow",
    "flow-coverage": "flow-coverage-report --config ./.flowcoverage",
    "precommit": "lint-staged && yarn flow-coverage"
  }
}
```

Remove this

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn validate"
    }
  }
}
```

and add this

```json
{
  "linters": {
    "*.js": ["eslint src --max-warnings 0"],
    "**/*.+(js|jsx|json|md|yml|graphql)": ["prettier --write", "git add"]
  }
}
```

So, it will add the file if those requirements are met. And happy coding!
