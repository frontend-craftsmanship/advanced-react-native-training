## Prettier Config

To be able to take advantage of code formatting. There's more about configuring prettier to our project.

To play around with the config. Please go to [Prettier-Playground](https://prettier.io/playground/)

Similar to `eslint`. We can configure `prettier` inside `prettierrc` file.

Please put this config

```json
{
  "bracketSpacing": false,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

Those configs, match exactly with our eslint.

```json
{
  "rules": {
    "array-bracket-spacing": [1, "never"],
    "comma-dangle": [1, "always-multiline"],
    "arrow-parens": 1,
    "quotes": [
      1,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ]
  }
}
```

So, `eslint` and `pretter` can work well together!

We can also make sure that `prettier` will not format the file by adding `.prettierignore`.

```yml
node_modules
ios
android
flowconfig
```
