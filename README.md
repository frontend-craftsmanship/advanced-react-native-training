## Automatic Validate the code using Husky

Adding validate scripts are awesome, but, what if your co-worker forget to run it before commiting the code?

### Husky for rescue

Husky is a collection of git hooks available to download on npm. So, we can use it per project basis.

Their description:

> Husky can prevent bad git commit, git push and more 🐶 woof!

## install husky

Install husky as dev depedency

```shell
$ yarn add husky --dev
```

and add this on your `package.json`

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn validate"
    }
  }
}
```

And this will run everytime you commit your code and prevent your co-worker forget to run it.
