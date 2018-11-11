## Reducer Pattern

Redux and Elm are successfully introduce the concept of `reducer` pattern, where given deterministic action, there will be some state returned.

We're going to refactor `LoginScreen` to `reducer pattern` to see, how `redux` is actually subset of more general reducer `concept`.

First, we're going to write reducer based on the state inside LoginScreen

```js
type InputType = 'EMAIL' | 'PASSWORD';

type Action =
  | {type: 'ChangeEmail', email: string}
  | {type: 'ChangePassword', password: string}
  | {type: 'SetActiveTextInput', activeTextInput: InputType};

const INITIAL_STATE = {
  email: '',
  password: '',
  activeTextInput: null,
};

let reducer = (action: Action) => (state = INITIAL_STATE) => {
  switch (action.type) {
    case 'ChangeEmail': {
      return {
        ...state,
        email: action.email,
      };
    }
    case 'ChangePassword': {
      return {
        ...state,
        password: action.password,
      };
    }
    case 'SetActiveTextInput': {
      return {
        ...state,
        activeTextInput: action.activeTextInput,
      };
    }
  }
};
```

Inside the component we'll create a method called `dispatch` that works like `redux dispatcher`, except it only works on local state.

```js
dispatch = (action: Action) => {
  this.setState(reducer(action));
};
```

Then, change the setState to:

```js
<View>
  <Text>Username or Email</Text>
  <TextInput
    value={email}
    onChangeText={(email) => this.dispatch({type: 'ChangeEmail', email})}
    onFocus={() =>
      this.dispatch({
        type: 'SetActiveTextInput',
        activeTextInput: 'EMAIL',
      })
    }
    style={[
      styles.textInput,
      activeTextInput === 'EMAIL' && styles.activeTextInput,
    ]}
  />
</View>
```

Looks familiar?
