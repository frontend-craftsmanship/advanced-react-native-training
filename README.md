## Introduction to modern JS Ecoystem

In this session, we're going to learn about the tooling that I think will make JS Development breeze. We're going to cover:

- ESLint
- Prettier
- Husky
- Lint Staged
- Flow type

## Project Structure

After running your project using `react-native init <project_name>` you might notice that we only have this in our package.json:

```json
{
  "name": "lectures",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "react": "16.6.0-alpha.8af6728",
    "react-native": "0.57.4"
  },
  "devDependencies": {
    "babel-jest": "23.6.0",
    "jest": "23.6.0",
    "metro-react-native-babel-preset": "0.49.0",
    "react-test-renderer": "16.6.0-alpha.8af6728"
  },
  "jest": {
    "preset": "react-native"
  }
}
```

And our project directory will look like this:

```shell
.
├── App.js
├── node_modules
├── ios
├── android
├── README.md
├── app.json
├── index.js
├── package.json
└── yarn.lock
```

And we're going to refactor this code a bit. So, everybody will have the same mental model how to find the root path of the project.

```shell
.
├── node_modules
├── ios
├── android
├── App.js
├── README.md
├── app.json
├── index.js
├── package.json
├── src
│   └── App.js
└── yarn.lock
```

So, we're placing the root of our app inside the src folder

```js
import * as React from "react";

function Greeting(props) {
  let { name } = props;
  if (typeof name === "sting") {
    return <Text>{"hello${name}"}</Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App(props) {
  return (
    <View>
      <Greeting name={"Juang"} />
    </View>
  );
}

export default App;
```

anybody notice the issue? does our tools catch this bugs before we push it into Github?

Let's comment this out

```js
import * as React from "react";
// first we never really importing View or Text so,

function Greeting(props) {
  let { name } = props;
  // this there's a typo because I named it sting instead of string
  if (typeof name === "sting") {
    // here's I suppose to use backtick instead of string literls
    return <Text>{"hello${name}"}</Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App(props) {
  return (
    <View>
      <Greeting name={"Juang"} />
    </View>
  );
}

export default App;
```

### ESLint for the rescue

## Do install this packages

```shell
$ yarn eslint babel-eslint eslint-plugin-react eslint-plugin-babel --dev
```

## Eslint config

- Add `.eslintrc` to the project with this minimum config

```json
{
  "parser": "babel-eslint", // we define the parser, so we're going to use babel eslint for this case
  "extends": ["plugin:react/recommended"],
  "plugins": ["babel", "react"],
  "rules": {
    // There are bunch of rules https://eslint.org/docs/rules/
    "valid-typeof": "error" // there's another option like warn or off
  }
}
```

## check if eslint works correctly

```shell
npx eslint src
```

- npx will execute our project bin even when we're not add it into our scripts

```shell
> npx eslint src

/Users/broerjuang/Documents/trainings/btpn/lectures/src/App.js
   5:23  error  Invalid typeof comparison value  valid-typeof
   6:13  error  'Text' is not defined            react/jsx-no-undef
   8:13  error  'Text' is not defined            react/jsx-no-undef
  14:6   error  'View' is not defined            react/jsx-no-undef

✖ 4 problems (4 errors, 0 warnings)
```

And it will give us the following warnings. Even, when you have eslint plugin that available on many editors, you will notice that the highligting is really save us time.

![eslint-error](https://user-images.githubusercontent.com/7804066/48298632-03fe8d80-e4f3-11e8-9380-dbc26930ac5f.png)

## So the fix will look like following

```js
import * as React from "react";
import { View, Text } from "react-native";

function Greeting(props) {
  let { name } = props;
  if (typeof name === "string") {
    return <Text>{"hello${name}"}</Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App(props) {
  return (
    <View>
      <Greeting name={"Juang"} />
    </View>
  );
}

export default App;
```

Since we're using eslint extensively in our project. We're going to put `lint` script into our `package.json`.

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src"
  }
}
```

By doing this we can trigger `eslint` just by typing `yarn lint`.

## Complete ESLint Config

In this training, we'll use my preference that I found useful for developing application in JS. This is very opiniated configs.

```json
{
  "parser": "babel-eslint", // we define the parser, so we're going to use babel eslint for this case
  "extends": ["plugin:react/recommended"],
  "plugins": ["babel", "react"],
  "settings": {
    "react": {
      "version": "16.6.0-alpha.8af6728"
    }
  },
  "env": {
    "es6": true,
    "node": true
  },
  "globals": {
    "fetch": false,
    "FormData": false,
    "afterAll": false,
    "afterEach": false,
    "beforeAll": false,
    "beforeEach": false,
    "describe": false,
    "expect": false,
    "it": false,
    "jest": false,
    "test": false
  },
  "rules": {
    "no-cond-assign": 1,
    "no-console": 1,
    "no-constant-condition": 1,
    "comma-dangle": [1, "always-multiline"],
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-dupe-keys": 1,
    "no-dupe-args": 1,
    "no-duplicate-case": 1,
    "no-empty": 0,
    "no-empty-character-class": 1,
    "no-ex-assign": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-semi": 1,
    "no-func-assign": 1,
    "no-inner-declarations": 0,
    "no-invalid-regexp": 1,
    "no-negated-in-lhs": 1,
    "no-obj-calls": 1,
    "no-regex-spaces": 1,
    "no-reserved-keys": 0,
    "no-sparse-arrays": 1,
    "no-unreachable": 1,
    "use-isnan": 1,
    "valid-jsdoc": 0,
    "valid-typeof": 1,
    "block-scoped-var": 0,
    "complexity": 0,
    "consistent-return": 0,
    "curly": 1,
    "default-case": 0,
    "dot-notation": 0,
    "eqeqeq": [1, "allow-null"],
    "guard-for-in": 1,
    "no-alert": 1,
    "no-caller": 1,
    "no-div-regex": 1,
    "no-else-return": 0,
    "no-eq-null": 0,
    "no-eval": 1,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-fallthrough": 1,
    "no-floating-decimal": 1,
    "no-implied-eval": 1,
    "no-labels": 1,
    "no-iterator": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 0,
    "no-multi-str": 0,
    "no-native-reassign": 0,
    "no-new": 1,
    "no-new-func": 1,
    "no-new-wrappers": 1,
    "no-octal": 1,
    "no-octal-escape": 1,
    "no-proto": 1,
    "no-redeclare": 1,
    "no-return-assign": 1,
    "no-script-url": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-unused-expressions": 0,
    "no-void": 1,
    "no-warning-comments": 0,
    "no-with": 1,
    "radix": 1,
    "vars-on-top": 0,
    "wrap-iife": 0,
    "yoda": 1,
    "strict": 0,

    "no-catch-shadow": 1,
    "no-delete-var": 1,
    "no-label-var": 1,
    "no-shadow": 0,
    "no-shadow-restricted-names": 1,
    "no-undef": 1,
    "no-undefined": 0,
    "no-undef-init": 0,
    "no-unused-vars": 1,
    "no-use-before-define": 0,

    "handle-callback-err": 1,
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    "no-process-exit": 0,
    "no-restricted-modules": 1,
    "no-sync": 0,

    "jsx-quotes": [1, "prefer-double"],
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 2,

    "key-spacing": 1,
    "comma-spacing": 1,
    "no-multi-spaces": 1,
    "brace-style": [
      1,
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "camelcase": [
      1,
      {
        "properties": "never"
      }
    ],
    "consistent-this": [1, "self"],
    "eol-last": 1,
    "func-names": 0,
    "func-style": 0,
    "new-cap": 0,
    "new-parens": 1,
    "no-nested-ternary": 0,
    "no-array-constructor": 1,
    "no-lonely-if": 0,
    "no-new-object": 1,
    "no-spaced-func": 1,
    "semi-spacing": 1,
    "no-ternary": 0,
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0,
    "no-extra-parens": [1, "functions"],
    "no-mixed-spaces-and-tabs": 1,
    "indent": [
      1,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      1,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "quote-props": [1, "as-needed"],
    "semi": 1,
    "sort-vars": 0,
    "keyword-spacing": 1,
    "space-before-blocks": 1,
    "space-before-function-paren": [1, "never"],
    "babel/object-curly-spacing": [1, "never"],
    "array-bracket-spacing": [1, "never"],
    "space-in-parens": 1,
    "space-infix-ops": 1,
    "space-unary-ops": 1,
    "max-nested-callbacks": 0,
    "one-var": [1, "never"],
    "wrap-regex": 0,
    "arrow-parens": 1,
    "arrow-spacing": 1,
    "constructor-super": 1,
    "generator-star-spacing": 0,
    "no-class-assign": 1,
    "no-const-assign": 1,
    "no-dupe-class-members": 1,
    "no-this-before-super": 1,
    "no-var": 0,
    "object-shorthand": 0,
    "prefer-arrow-callback": 1,
    "prefer-const": 0,
    "prefer-reflect": 0,
    "prefer-spread": 0,
    "prefer-template": 0,
    "require-yield": 0,
    "max-depth": 0,
    "max-params": 0,
    "max-statements": 0,
    "no-bitwise": 0,
    "no-plusplus": 0
  }
}
```

and when we run `yarn lint`, we'll get this following warnings:

```
   1:24  warning  Strings must use singlequote         quotes
   2:8   warning  There should be no space after '{'   babel/object-curly-spacing
   2:21  warning  There should be no space before '}'  babel/object-curly-spacing
   2:28  warning  Strings must use singlequote         quotes
   5:7   warning  There should be no space after '{'   babel/object-curly-spacing
   5:14  warning  There should be no space before '}'  babel/object-curly-spacing
   6:23  warning  Strings must use singlequote         quotes
   7:19  warning  Strings must use singlequote         quotes
  13:14  warning  'props' is defined but never used    no-unused-vars
  16:23  warning  Strings must use singlequote         quotes

✖ 10 problems (0 errors, 10 warnings)
  0 errors and 9 warnings potentially fixable with the `--fix` option.
```

Later, when we are learning about `lint-staged` well fix this automatically before push the code. Now, just try to do,

```shell
$ eslint src --fix

/Users/broerjuang/Documents/trainings/btpn/lectures/src/App.js
  13:14  warning  'props' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

✨  Done in 1.55s.
> yarn lint
yarn run v1.9.4
$ eslint src

/Users/broerjuang/Documents/trainings/btpn/lectures/src/App.js
  13:14  warning  'props' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

✨  Done in 0.82s.
```

But, everything that change the semantics of our program will never be changed from `eslint`. So, we still need to do it manually.
