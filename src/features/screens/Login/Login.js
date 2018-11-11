// @flow

import * as React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Logo from '../../../images/logo.png';
import {Button, Text} from '../../../core-ui';
import {WHITE, RED, LIGHT_GREY} from '../../../constants/colors';
import MiniForm from '../../components/MiniForm';

function Login() {
  return (
    <MiniForm
      initialValues={{email: '', password: ''}}
      validation={{email: () => false, password: () => false}}
    >
      {({values, setValue, errors}) => {
        return (
          <View style={styles.root}>
            <KeyboardAvoidingView behavior="padding">
              <View style={styles.header}>
                <Image
                  source={Logo}
                  style={{height: 200}}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text>Username or Email</Text>
                <TextInput
                  value={values.email}
                  onChangeText={(email) => setValue('email', email)}
                  style={[
                    styles.textInput,
                    errors && errors.email && styles.errorTextInput,
                  ]}
                />
                <Text>Password</Text>
                <TextInput
                  secureTextEntry
                  value={values.password}
                  onChangeText={(password) => setValue('password', password)}
                  style={[
                    styles.textInput,
                    errors && errors.password && styles.errorTextInput,
                  ]}
                />
              </View>
              <Button text="SIGN IN" onPress={() => {}} />
            </KeyboardAvoidingView>
          </View>
        );
      }}
    </MiniForm>
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
  errorTextInput: {
    borderBottomColor: RED,
  },
  textInput: {
    height: 40,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 2,
    marginBottom: 50,
  },
});

export default Login;
