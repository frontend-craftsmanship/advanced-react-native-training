// @flow

import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {AsyncStorage} from 'react-native';

import {WHITE, BLUE_SEA} from '../../constants/colors';
import Logo from '../../images/logo.png';

export default class Authentication extends Component<*, *> {
  async componentDidMount() {
    let user = await AsyncStorage.getItem('@react-training:user');
    // TODO: verifyToken
    if (!user) {
      this.props.navigation.navigate('login');
    } else {
      this.props.navigation.navigate('dashboard');
    }
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: WHITE,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={Logo} style={{height: 150}} resizeMode="contain" />
        <ActivityIndicator size="large" color={BLUE_SEA} />
      </View>
    );
  }
}
