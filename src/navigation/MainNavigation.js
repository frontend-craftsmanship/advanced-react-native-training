// @flow
import React from 'react';

import Navigator from './components/Navigator';
import {Chart, Login, AddTransaction, Dashboard} from '../screens';

export default () => {
  <Navigator>
    <Chart />
    <AddTransaction />
    <Dashboard />
    <Login />
  </Navigator>;
};
