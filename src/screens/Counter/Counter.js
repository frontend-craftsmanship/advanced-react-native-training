// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {coduct} from '../../reduct/react-reduct';

import {Text} from '../../core-ui';

type Props = {};
type State = {
  counter: number,
};

let reducer = (action) => (state) => {
  switch (action.type) {
    case 'Increment': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'Decrement': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};
class Counter extends Component<Props, State> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.dispatch({type: 'Increment'});
          }}
        />
        <Text style={styles.counterText}>{this.state.counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.dispatch({type: 'Decrement'});
          }}
        />
      </View>
    );
  }

  dispatch = (action: any) => {
    this.setState(reducer(action));
  };
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

export default coduct((state) => ({state}), (dispatch) => ({dispatch}))(
  Counter,
);
