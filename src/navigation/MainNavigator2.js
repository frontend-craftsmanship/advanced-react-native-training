// @flow

import {
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Authentication from '../screens/Authentication/Authentication';
import Login from '../screens/Login/Login';
import Chart from '../screens/Chart';
import AddTransaction from '../screens/AddTransaction/AddTransaction';
import Dashboard from '../screens/Dashboard/Dashboard';
import TabBar from '../components/TabBar';
import BlankPage from '../screens/BlankPage';

let DashboardStack = createStackNavigator({
  dashboard: Dashboard,
});

// $FlowFixMe: Weird Flow Issue right here
let TransactionStack = createStackNavigator({
  addTransaction: AddTransaction,
});

let ChartStack = createStackNavigator({
  chart: Chart,
});

let BottomNavigator = createBottomTabNavigator(
  {
    dashboard: DashboardStack,
    addTransaction: TransactionStack,
    chart: ChartStack,
  },
  {
    lazy: false,
    tabBarComponent: TabBar,
  }
);

let DrawerNavigator = createDrawerNavigator({
  dashboard: BottomNavigator,
  about: BlankPage,
});

let MainNavigator = createSwitchNavigator({
  authentication: Authentication,
  login: Login,
  dashboard: DrawerNavigator,
});

export default MainNavigator;
