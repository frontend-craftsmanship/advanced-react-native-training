// @flow

import * as React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Logo from '../../images/logo.png';
import {Button, Text} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY} from '../../constants/colors';

export type Props = {
  email: string,
  password: string,
  onSubmit: (email: string, password: string) => void,
  onChangeEmail: (email: string) => void,
  onChangePassword: (password: string) => void,
  activeTextInput: 'EMAIL' | 'PASSWORD' | null,
  setActiveTextInput: (type: 'EMAIL' | 'PASSWORD') => void,
};

function LoginComponent(props: Props) {
  let {
    email,
    password,
    onSubmit,
    activeTextInput,
    onChangeEmail,
    onChangePassword,
    setActiveTextInput,
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
        <Button text="SIGN IN" onPress={() => onSubmit(email, password)} />
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

export default LoginComponent;
