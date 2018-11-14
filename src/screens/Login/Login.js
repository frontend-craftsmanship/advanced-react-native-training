// @flow

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';

import {Button, Text} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY} from '../../constants/colors';
import Logo from '../../images/logo.png';
import type {LoginState, RootState, RootAction} from '../../types';

type State = {
  email: string;
  password: string;
  activeTextInput: 'EMAIL' | 'PASSWORD' | null;
};

type UserData = {
  email: string;
  password: string;
};

type Props = {
  login: LoginState;
  loginUser: (data: UserData) => void;
  navigation: Object;
};

class Login extends Component<Props, State> {
  state = {
    email: '',
    password: '',
    activeTextInput: null,
  };

  render() {
    let {login, loginUser} = this.props;
    let {email, password, activeTextInput} = this.state;
    return (
      <View style={styles.root}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.header}>
            <Image source={Logo} style={{height: 200}} resizeMode="contain" />
          </View>
          <View>
            <Text>Username or Email</Text>
            <TextInput
              value={email}
              placeholder={login.email}
              onChangeText={(email) => this.setState({email})}
              onFocus={() => this._setActiveTextInput('EMAIL')}
              style={[
                styles.textInput,
                activeTextInput === 'EMAIL' && styles.activeTextInput,
              ]}
            />
            <Text>Password</Text>
            <TextInput
              secureTextEntry
              value={password}
              placeholder={login.password}
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this._setActiveTextInput('PASSWORD')}
              style={[
                styles.textInput,
                activeTextInput === 'PASSWORD' && styles.activeTextInput,
              ]}
            />
          </View>
          <Button
            text="SIGN IN"
            onPress={() => {
              let data = {
                email: this.state.email,
                password: this.state.password,
              };
              loginUser(data);
              this.props.navigation.navigate('dashboard');
            }}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }

  _setActiveTextInput(activeTextInput: 'EMAIL' | 'PASSWORD' | null) {
    this.setState({
      activeTextInput,
    });
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 40,
    backgroundColor: WHITE,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  activeTextInput: {
    borderBottomColor: BLUE_SEA,
  },
  textInput: {
    height: 40,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 2,
    marginBottom: 50,
  },
});

const mapStateToProps = (state: RootState) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch: (action: RootAction) => void) => {
  return {
    loginUser: (data: UserData) =>
      dispatch({type: 'LOGIN_USER', payload: {data}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
