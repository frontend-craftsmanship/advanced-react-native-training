// @flow

import * as React from 'react';
import {Provider} from 'react-redux';

import store from './store/createStore';
import NavigationReact from './navigation/NavigationReact';

type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <NavigationReact />
      </Provider>
    );
  }
}

export default App;
