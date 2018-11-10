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
