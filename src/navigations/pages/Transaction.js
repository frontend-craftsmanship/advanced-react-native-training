// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import NavBar from '../components/NavBar';

export default class HomePage extends React.Component<*, *> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Transaction</Text>
        </View>
        <NavBar />
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
