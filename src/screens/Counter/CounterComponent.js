// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '../../core-ui';

type Props = {
  counter: number,
  onIncrement: () => void,
  onDecrement: () => void,
};

function Counter(props: Props) {
  let {counter, onIncrement, onDecrement} = props;
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={onIncrement} />
      <Text style={styles.counterText}>{counter}</Text>
      <TouchableOpacity style={styles.button} onPress={onDecrement} />
    </View>
  );
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

export default Counter;
