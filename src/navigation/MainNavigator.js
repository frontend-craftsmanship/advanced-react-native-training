// @flow

import React from 'react';
import Navigator from './components/Navigator';
import Authentication from '../screens/Authentication/Authentication';
import Login from '../screens/Login/Login';
import Chart from '../screens/Chart';
import AddTransaction from '../screens/AddTransaction/AddTransaction';
import Dashboard from '../screens/Dashboard/Dashboard';
import BlankPage from '../screens/BlankPage';

export default function MainNavigation() {
  return (
    <Navigator>
      <Login />
      <AddTransaction />
      <Dashboard />
      <Authentication />
      <Chart />
      <BlankPage />
    </Navigator>
  );
}
