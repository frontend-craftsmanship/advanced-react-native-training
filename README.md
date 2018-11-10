## Add Validation Script

Sometimes, our co-worker does not have the same config like we do. In this case, we need to make sure that we protect those from happening. For example, when your co-worker disable `format-on-save` in his/her editor.

It's very helpful to provide handy scripts to our `package.json` file to execute those.

Let's rewrite this

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src",
    "format": "prettier --write \"**/*.+(js|jsx|json|md|yml|graphql)\""
  }
}
```

to this:

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src",
    "prettier": "prettier \"**/*.+(js|jsx|json|md|yml|graphql)\"",
    "format": "yarn prettier --write",
    "validate": "yarn lint && yarn list-different" // this will check whether or not our co-worker has prettier enable or not and list the difference
  }
}
```
