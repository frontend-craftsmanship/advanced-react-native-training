// @flow
import React from 'react';

import Navigator from './components/Navigator';
import {Chart, Login, AddTransaction, Dashboard} from '../screens';

const MainNavigation = () => {
  return (
    <Navigator>
      <Chart />
      <AddTransaction />
      <Dashboard />
      <Login />
    </Navigator>
  );
};

export default MainNavigation;
