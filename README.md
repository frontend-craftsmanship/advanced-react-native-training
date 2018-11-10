## Introduction to Prettier

If you're working with sophisticated language like Go or Reason, you might be familiar with code formatter already. In JS, we just currently addopting this. So, we can focus more on semantics rather than stylistic issue with your co-workers.

### Enable Pretiier

We're going to install `prettier` as `dev dependency` to our project.

```shell
$ yarn add prettier --dev
```

For instance, let's mess up with our code a bit:

```js
import * as React from "react";
import { View, Text } from "react-native";

function Greeting(props) {
  let { name } = props;
  if (typeof name === "string") {
    return <Text>{"hello${name}"} </Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App() {
  return (
    <View>
      <Greeting name={"Juang"} />
    </View>
  );
}

export default App;
```

By running

```shell
$ npx prettier src/App.js

import * as React from "react";
import { View, Text } from "react-native";

function Greeting(props) {
  let { name } = props;
  if (typeof name === "string") {
    return <Text>{"hello${name}"} </Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App() {
  return (
    <View>
      <Greeting name={"Juang"} />
    </View>
  );
}

export default App;
```

Then we can copy paste the code into our `App,js`, duh? sounds complicated right?

Let's hook this into our script

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src",
    "format": "prettier --write src/App.js"
  }
}
```

But this does not scale, right? why do I need to just format `App.js` while other files also need to be formatted?

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src",
    // "format": "prettier --write src/App.js"
    "format": "prettier --write \"**/*.+(js|jsx|json|md|yml|graphql)\""
  }
}
```

by those config, we have formatted all submodules that has those following globs. Btw, Your text editor will have prettier plugin enable, by installing it and change on save to true. It will hook directly into your tools! amzing right?


But, even the prettier formatted the code for us, there're some rules that differs between `eslint` and `prettier`. 



