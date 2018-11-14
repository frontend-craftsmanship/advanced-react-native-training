// @flow

import * as React from 'react';
import {Provider} from 'react-redux';

import store from './store/createStore';
import Dashboard from './screens/Dashboard/Dashboard';
type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
