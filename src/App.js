// @flow

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};
//eslint-disable-next-line
function App(props: Props) {
  return (
    <View style={styles.wrapper}>
      <Text>Hello World</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
