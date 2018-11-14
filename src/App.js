// @flow

import React from 'react';
import {Provider} from 'react-redux';

import MainNavigator from './navigation/MainNavigator';
import store from './store/createStore';

class App extends React.Component<*, *> {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
