// @flow

import * as React from 'react';
import {View} from 'react-native';
import Dashboard from './navigations/pages/Dashboard';
import Transaction from './navigations/pages/Transaction';
import Chart from './navigations/pages/Chart';
import NavBar from './navigations/components/NavBar';
type Props = {
  children: React$Node;
};
type State = {
  currentRoute: 'Transaction' | 'Dashboard' | 'Chart';
};
class Routes extends React.Component<Props, State> {
  state = {
    currentRoute: 'Chart',
  };
  render() {
    let children = React.Children.map(this.props.children, (child) => {
      if (child.type.displayName === this.state.currentRoute) {
        return React.cloneElement(child, {navigateTo: this._navigateTo});
      } else {
        return null;
      }
    });
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1}}>{children}</View>
        <NavBar
          navigateTo={this._navigateTo}
          activeRoute={this.state.currentRoute}
        />
      </View>
    );
    // switch (this.state.currentRoute) {
    //   case 'TRANSACTION': {
    //     return <Transaction navigateTo={this._navigateTo} />;
    //   }
    //   case 'CHART': {
    //     return <Chart navigateTo={this._navigateTo} />;
    //   }
    //   default: {
    //     return <Dashboard navigateTo={this._navigateTo} />;
    //   }
    // }
  }

  _navigateTo = (route: 'Transaction' | 'Dashboard' | 'Chart') => {
    this.setState({currentRoute: route});
  };
}

function App() {
  return (
    <Routes>
      <Transaction />
      <Chart />
      <Dashboard />
    </Routes>
  );
}

export default App;
