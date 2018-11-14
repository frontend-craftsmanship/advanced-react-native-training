// @flow
import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class Transaction extends React.Component<*, *> {
  render() {
    let {goBack} = this.props;
    console.log('props : ', this.props)
    return (
      <View style={styles.container}>
        <Text>Transaction</Text>
        <Button title="Go Back" onPress={() => goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
