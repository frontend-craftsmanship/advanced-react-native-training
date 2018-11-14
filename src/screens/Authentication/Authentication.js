// @flow

import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {WHITE, BLUE_SEA} from '../../constants/colors';
import Logo from '../../images/logo.png';
import type {RootState} from '../../types';

type Props = {
  token: string;
  navigation: Object;
};

class Authentication extends Component<Props, *> {
  componentDidMount() {
    // TODO: navigate according to whether token exist
    setTimeout(() => {
      this.props.navigation.navigate('login');
    }, 1500);
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

const mapStateToProps = (state: RootState) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(Authentication);
