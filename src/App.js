// @flow

import * as React from 'react';
import {Provider} from 'react-redux';

import createStore from './store/createStore';
import NavigationReact from './navigation/NavigationReact';

type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={createStore()}>
        <NavigationReact />
      </Provider>
    );
  }
}

export default App;
