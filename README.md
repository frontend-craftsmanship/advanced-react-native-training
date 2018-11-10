### Code quality using Flow

since flow will help us to find mismatch type and also documenting our code. We can take more benefit by validating our codebase. For example, we need our codebase has minimum treshold let's say 80%. We can enable it by using `flow-coverage-report`.

to enable this, please install it as dev dependency

```shell
$ yarn add flow-coverage-report --dev
```

and create a file called `.flowcoverage` that match this config:

```json
{
  "globExcludePatterns": ["node_modules/**"],
  "globIncludePatterns": ["src/*.js"],
  "outputDir": "flow-coverage",
  "threshold": 80,
  "reportTypes": ["html", "json", "text"]
}
```

and don't forget to update your scripts, so validate will work with our current setup.

```json
{
  "start": "node node_modules/react-native/local-cli/cli.js start",
  "test": "jest",
  "lint": "eslint src --max-warnings 0",
  "prettier": "prettier \"**/*.+(js|jsx|json|md|yml|graphql)\"",
  "format": "yarn prettier --write",
  "typecheck": "flow",
  "flow-coverage": "flow-coverage-report --config ./.flowcoverage",
  "validate": "yarn lint && yarn flow-coverage && yarn prettier --list-different "
}
```

This will make sure that our code quality is consitent accross the codebase.
