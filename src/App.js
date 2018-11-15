// @flow

import * as React from 'react';
import {Provider} from 'react-redux';

import store from './store/createStore';
import Dashboard from './screens/Dashboard/Dashboard';
import AddTransaction from './screens/AddTransaction/AddTransaction';
import Login from './screens/Login/Login';
import Chart from './screens/Chart/Chart';
type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Chart />
      </Provider>
    );
  }
}

export default App;
