// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '../../core-ui';

type Props = {};
type State = {
  counter: number,
};
export default class Counter extends Component<Props, State> {
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
