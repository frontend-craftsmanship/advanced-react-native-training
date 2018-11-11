## Counter example to introduce react pattern

- We're going to learn about pattern that availabe on React

- Plain React with `React Class`
- Reducer Pattern
- HoC
- Context
- Render Props
- Render Props + Reducer Pattern
- Render Props + Context
- Render Props + HoC
- Render as Generator?
- compose hoc
- Combination between every pattern
- Hooks
- Tradeoff between those pattern

```js
// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '../../core-ui';

export default class Counter extends Component<*, *> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({counter: this.state.counter + 1});
          }}
        />
        <Text style={styles.counterText}>{this.state.counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({counter: this.state.counter - 1});
          }}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffc425',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
  },
  counterText: {
    fontSize: 130,
    color: 'white',
  },
});
```
