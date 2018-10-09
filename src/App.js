// @flow

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello BTPN</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
