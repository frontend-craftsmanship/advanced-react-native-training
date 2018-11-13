// @flow

import * as React from 'react';
// import {View} from 'react-native';
import Counter from './screens/Counter/Counter';
import withCounter from './screens/Counter/withCounter';
import withLoginState from './screens/Login/withLogin';
import LoginScreen from './screens/Login/Login';
import LoginComponent from './screens/Login/LoginComponent';
import LoginRenderProps from './screens/Login/LoginRenderProps';
import type {Props as LoginComponentProps} from './screens/Login/LoginComponent';
// import CounterComponent from './screens/Counter/CounterComponent';

/*
    <LoginScreen
        onSubmit={(email, password) =>
          console.log(`email: ${email}, password: ${password}`)
        }
      />

*/

/*
      <LoginRenderProps>
        {(values) => {
          return (
            <LoginComponent
              activeTextInput={values.activeTextInput}
              setActiveTextInput={values.setActiveTextInput}
              email={values.email}
              password={values.password}
              onChangeEmail={values.onChangeEmail}
              onChangePassword={values.onChangePassword}
              onSubmit={console.log}
            />
          );
        }}
      </LoginRenderProps>

*/

/*
hoc
// type Props = {
//   loginState: LoginComponentProps,
// };

<LoginComponent
        activeTextInput={loginState.activeTextInput}
        setActiveTextInput={loginState.setActiveTextInput}
        email={loginState.email}
        password={loginState.password}
        onChangeEmail={loginState.onChangeEmail}
        onChangePassword={loginState.onChangePassword}
        onSubmit={console.log}
      />

*/

type Props = {};

function App(props) {
  return (
    <LoginRenderProps>
      {(values) => {
        return (
          <LoginComponent
            activeTextInput={values.activeTextInput}
            setActiveTextInput={values.setActiveTextInput}
            email={values.email}
            password={values.password}
            onChangeEmail={values.onChangeEmail}
            onChangePassword={values.onChangePassword}
            onSubmit={console.log}
          />
        );
      }}
    </LoginRenderProps>
  );
}

export default withLoginState(App);
