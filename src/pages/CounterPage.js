// @flow

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

class CounterPage extends React.Component<*, *> {
  state = {
    counter: 0,
  };
  render() {
    return <View style={styles.container}>{this._renderCounter()}</View>;
  }

  _renderCounter() {
    return (
      <View style={styles.container}>
        <Text style={styles.number}>{this.state.counter}</Text>
        <View style={{flexDirection: 'row'}}>
          {this._renderButton('Plus Number', this._addNumber)}
          {this._renderButton('Min Number', this._minNumber)}
        </View>
      </View>
    );
  }

  _renderButton(text: string, fn: Function) {
    return (
      <TouchableOpacity onPress={fn} style={styles.button}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }

  _addNumber = () => {
    this.setState({counter: this.state.counter + 1});
  };

  _minNumber = () => {
    this.setState({counter: this.state.counter - 1});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 80,
    color: '#02E',
    padding: 10,
  },
  button: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#DEF',
  },
});

export default CounterPage;
