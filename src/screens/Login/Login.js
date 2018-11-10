// @flow

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {Button, Text} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY} from '../../constants/colors';
import Logo from '../../images/logo.png';

type InputType = 'EMAIL' | 'PASSWORD';

type Props = {|
  email?: string,
  onChangeEmail: (string) => void,
  password?: string,
  onChangePassword: (string) => void,
  setActiveTextInput: (InputType) => void,
  activeTextInput?: ?InputType,
  onSubmit: () => void,
|};

function Login(props: Props) {
  let {
    email,
    password,
    activeTextInput,
    setActiveTextInput,
    onSubmit,
    onChangeEmail,
    onChangePassword,
  } = props;
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
            onChangeText={onChangeEmail}
            onFocus={() => setActiveTextInput('EMAIL')}
            style={[
              styles.textInput,
              activeTextInput === 'EMAIL' && styles.activeTextInput,
            ]}
          />
          <Text>Password</Text>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={onChangePassword}
            onFocus={() => setActiveTextInput('PASSWORD')}
            style={[
              styles.textInput,
              activeTextInput === 'PASSWORD' && styles.activeTextInput,
            ]}
          />
        </View>
        <Button text="SIGN IN" onPress={onSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
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

export default Login;
