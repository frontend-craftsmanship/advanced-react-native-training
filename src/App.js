// @flow

import * as React from 'react';
import {View} from 'react-native';
import Counter from './screens/Counter/Counter';
import withCounter from './screens/Counter/withCounter';
import CounterComponent from './screens/Counter/CounterComponent';

type Props = {};
function App(props: Props) {
  return <Counter />;
}

export default withCounter(App);
