// @flow

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import {Mutation, graphql} from 'react-apollo';

import {SAVE_USER_LOCAL, LOGIN} from '../../graphql/queries/authentication';
import {Button, Text} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY, RED} from '../../constants/colors';
import Logo from '../../images/logo.png';

import type {NavigationScreenProp, NavigationState} from 'react-navigation';

type State = {
  email: string;
  password: string;
  activeTextInput: 'EMAIL' | 'PASSWORD' | null;
};

type Props = {
  saveUser: (data: Object) => void;
  navigation: NavigationScreenProp<NavigationState>;
};

class Login extends Component<Props, State> {
  state = {
    email: 'admin@admin.com',
    password: '1234',
    activeTextInput: null,
  };

  render() {
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
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this._setActiveTextInput('PASSWORD')}
              style={[
                styles.textInput,
                activeTextInput === 'PASSWORD' && styles.activeTextInput,
              ]}
            />
          </View>
          <Mutation
            mutation={LOGIN}
            update={async(cache, {data}) => {
              let {navigation, saveUser} = this.props;
              let {id, name, token, email} = data.login;
              let userData = {
                id,
                name,
                email,
                token,
              };
              await Promise.all([
                AsyncStorage.setItem(
                  '@react-training:user',
                  JSON.stringify(userData)
                ),
                saveUser({
                  variables: userData,
                }),
              ]);
              navigation.navigate('dashboard');
            }}
          >
            {(login, {loading, error}) => {
              return (
                <View>
                  {!loading ? (
                    <Button
                      text="SIGN IN"
                      onPress={() => {
                        let {email, password} = this.state;
                        login({
                          variables: {
                            email,
                            password,
                          },
                        });
                      }}
                    />
                  ) : (
                    <ActivityIndicator size="large" color={BLUE_SEA} />
                  )}
                  {error && !loading && (
                    <Text style={styles.error}>
                      Wrong username or password!
                    </Text>
                  )}
                </View>
              );
            }}
          </Mutation>
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
  error: {
    alignSelf: 'center',
    color: RED,
    marginTop: 10,
  },
});

export default graphql(SAVE_USER_LOCAL, {
  name: 'saveUser',
})(Login);
