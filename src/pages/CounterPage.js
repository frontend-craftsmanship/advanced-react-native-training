// @flow

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class CounterPage extends React.Component<*, *> {
  render() {
    return <View style={styles.container}>{this._renderCounter()}</View>;
  }

  _renderCounter() {
    let {counter, addNumber} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.number}>{counter.counter}</Text>
        <View style={{flexDirection: 'row'}}>
          {this._renderButton('Plus Number', addNumber)}
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
