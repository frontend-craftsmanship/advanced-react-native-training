//@flow

import React, {Component} from 'react';
import {View, AsyncStorage, StyleSheet} from 'react-native';

import {Button} from '../core-ui';

export default class Logout extends Component<*, *> {
  render() {
    return (
      <View style={styles.root}>
        <Button
          text="logout"
          style={[{backgroundColor: 'red'}]}
          onPress={async() => {
            await AsyncStorage.clear();
            this.props.navigation.navigate('login');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
