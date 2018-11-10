## Intro to Flow type

Flow will enable us to catch bugs early in development time. It's being develop with Facebook to make sure their quality of their JS Code.

### Install Flow to project

```shell
$ yarn add flow-bin --dev
```

Then, don't forget to add `flow` to our `script`

```json
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src",
    "prettier": "prettier \"**/*.+(js|jsx|json|md|yml|graphql)\"",
    "format": "yarn prettier --write",
    // Add this to run flow binary
    "typecheck": "flow",
    "validate": "yarn lint && yarn prettier --list-different"
  }
}
```

and dont't forget to initialize it with `yarn typecheck init`, if it already presents in your project, please make sure your version inside are the same.

## Understanding FLow Config

Please read [Documentation](https://flow.org/en/docs/config/) to understand more about this.

```yml
[ignore]

[include]

[libs]

[options]

[version]
^0.86.0

```

## Ignore

The [ignore] section in a .flowconfig file tells Flow to ignore files matching the specified regular expressions when type checking your code. By default, nothing is ignored.

Things to keep in mind:

- These are OCaml regular expressions.
- These regular expressions match against absolute paths. They probably should start with .\*
- Ignores are processed AFTER includes. If you both include and ignore a file it will be ignored.

## Libs

The [libs] section in a .flowconfig file tells Flow to include the specified library definitions when type checking your code

### Running Flow

add `//@flow` directives in top of your module to make sure flow check it.
For example,

```js
//@flow

import * as React from 'react';
import {View, Text} from 'react-native';

<!-- This will tell flow that our props contained object that has name property that is string -->
type Props = {
  name: string,
};

<!-- Here, we add the props so it will trying to figure out what props is -->
function App(props: Props) {
  return (
    <View>
      <Text>{props.value}</Text>
    </View>
  );
}
```
