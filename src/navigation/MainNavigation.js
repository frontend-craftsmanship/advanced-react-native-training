// @flow
import React from 'react';

import Navigator from './components/Navigator';
import {
  Chart,
  Login,
  Authentication,
  AddTransaction,
  Dashboard,
} from '../screens';

const MainNavigation = () => {
  return (
    <Navigator>
      <Authentication />
      <Chart />
      <AddTransaction />
      <Dashboard />
      <Login />
    </Navigator>
  );
};

export default MainNavigation;
