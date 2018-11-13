// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Dashboard extends React.Component<*, *> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
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
