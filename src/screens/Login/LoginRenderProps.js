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

export type Action =
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

type Props = {
  children: ({
    email: string,
    password: string,
    onChangeEmail: (string) => void,
    onChangePassword: (string) => void,
    activeTextInput: 'EMAIL' | 'PASSWORD' | null,
    setActiveTextInput: ('EMAIL' | 'PASSWORD') => void,
  }) => React$Node,
};

type State = {
  email: string,
  password: string,
  activeTextInput: 'EMAIL' | 'PASSWORD' | null,
};

class Login extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    activeTextInput: null,
  };

  render() {
    let {email, password, activeTextInput} = this.state;
    let {children} = this.props;
    return children({
      email,
      password,
      activeTextInput,
      setActiveTextInput: (activeTextInput) =>
        this.dispatch({type: 'SetActiveTextInput', activeTextInput}),
      onChangeEmail: (email) => this.dispatch({type: 'ChangeEmail', email}),
      onChangePassword: (password) =>
        this.dispatch({type: 'ChangePassword', password}),
    });
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
