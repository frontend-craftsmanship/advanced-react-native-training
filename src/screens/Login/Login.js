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

type InputType = 'EMAIL' | 'PASSWORD';

type Action =
  | {type: 'ChangeEmail', email: string}
  | {type: 'ChangePassword', password: string}
  | {type: 'SetActiveTextInput', activeTextInput: InputType};

const INITIAL_STATE = {
  email: '',
  password: '',
  activeTextInput: null,
};

let reducer = (action: Action) => (state = INITIAL_STATE) => {
  switch (action.type) {
    case 'ChangeEmail': {
      return {
        ...state,
        email: action.email,
      };
    }
    case 'ChangePassword': {
      return {
        ...state,
        password: action.password,
      };
    }
    case 'SetActiveTextInput': {
      return {
        ...state,
        activeTextInput: action.activeTextInput,
      };
    }
  }
};

type State = {
  email: string,
  password: string,
  activeTextInput: 'EMAIL' | 'PASSWORD' | null,
};

class Login extends React.Component<{}, State> {
  state = {
    email: '',
    password: '',
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
              onChangeText={(email) =>
                this.dispatch({type: 'ChangeEmail', email})
              }
              onFocus={() =>
                this.dispatch({
                  type: 'SetActiveTextInput',
                  activeTextInput: 'EMAIL',
                })
              }
              style={[
                styles.textInput,
                activeTextInput === 'EMAIL' && styles.activeTextInput,
              ]}
            />
            <Text>Password</Text>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(password) =>
                this.dispatch({type: 'ChangePassword', password})
              }
              onFocus={() =>
                this.dispatch({
                  type: 'SetActiveTextInput',
                  activeTextInput: 'PASSWORD',
                })
              }
              style={[
                styles.textInput,
                activeTextInput === 'PASSWORD' && styles.activeTextInput,
              ]}
            />
          </View>
          <Button text="SIGN IN" onPress={() => {}} />
        </KeyboardAvoidingView>
      </View>
    );
  }

  dispatch = (action: Action) => {
    this.setState(reducer(action));
  };
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
