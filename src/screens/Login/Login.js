// @flow

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {graphql} from 'react-apollo';

import {GET_USER_ROLE} from '../../graphql/queries/authentication';
import {Button, Text} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY} from '../../constants/colors';
import Logo from '../../images/logo.png';

type State = {
  email: string;
  password: string;
  activeTextInput: 'EMAIL' | 'PASSWORD' | null;
};

class Login extends Component<*, State> {
  state = {
    email: '',
    password: '',
    activeTextInput: null,
  };

  render() {
    let {queryResult} = this.props;
    let {email, password, activeTextInput} = this.state;
    let testEmail = !queryResult.loading ? queryResult.userState.email : email;
    let tessPassword = !queryResult.loading
      ? queryResult.userState.token
      : password;
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
              placeholder={testEmail}
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
              placeholder={tessPassword}
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

export default graphql(GET_USER_ROLE, {
  props: ({data}) => {
    return {
      queryResult: data,
    };
  },
})(Login);
