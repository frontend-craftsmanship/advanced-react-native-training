// @flow

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};

// eslint-disable-next-line
function LoginScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Text> create your own Login Screen</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
