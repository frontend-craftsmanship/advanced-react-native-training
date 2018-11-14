// @flow

import * as React from 'react';

import Navigator from './navigations/Navigator';
import Dashboard from './navigations/pages/Dashboard';
import Transaction from './navigations/pages/Transaction';
import Chart from './navigations/pages/Chart';

function App() {
  return (
    <Navigator>
      <Transaction />
      <Chart />
      <Dashboard />
    </Navigator>
  );
}

export default App;
