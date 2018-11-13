// @flow

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Dashboard from './navigations/pages/Dashboard';
import Transaction from './navigations/pages/Transaction';
import Chart from './navigations/pages/Chart';

type Props = {};
type State = {
  currentRoute: 'TRANSACTION' | 'DASHBOARD' | 'CHART';
};
class App extends React.Component<Props, State> {
  state = {
    currentRoute: 'TRANSACTION',
  };
  render() {
    switch (this.state.currentRoute) {
      case 'TRANSACTION': {
        return <Transaction navigateTo={this._navigateTo} />;
      }
      case 'CHART': {
        return <Chart navigateTo={this._navigateTo} />;
      }
      default: {
        return <Dashboard navigateTo={this._navigateTo} />;
      }
    }
  }

  _navigateTo = (route: 'TRANSACTION' | 'DASHBOARD' | 'CHART') => {
    this.setState({currentRoute: route});
  };
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
