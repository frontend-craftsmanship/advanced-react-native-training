// @flow

import * as React from 'react';
import {Provider} from 'react-redux';

import CounterPage from './pages/CounterPage';
import store from './store/createStore';
type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <CounterPage />
      </Provider>
    );
  }
}

export default App;
