// @flow

import * as React from 'react';
import {Provider, coduct} from './reduct/react-reduct';
import {createStore, combineReducers} from './reduct/reduct';
import counterReducer from './screens/Counter/counterReducer';
import Counter from './screens/Counter/CounterComponent';

type Props = {};

let rootReducer = combineReducers({counter: counterReducer});
let store = createStore(rootReducer);

// eslint-disable-next-line
function App(props: Props) {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
