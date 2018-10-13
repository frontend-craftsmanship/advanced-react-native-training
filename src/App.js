// @flow

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button} from './core-ui';

type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello BTPN</Text>
        <Button text="Button" onPress={() => {}} />
        <Button
          iconLeft="apple"
          text="Button With Icons"
          iconRight="archive"
          onPress={() => {}}
        />
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
