// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Chart extends React.Component<*, *> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chart</Text>
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
