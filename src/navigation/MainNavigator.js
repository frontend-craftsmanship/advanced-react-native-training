//@flow

import {
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import {
  AddTransaction,
  Authentication,
  BlankPage,
  Chart,
  Dashboard,
  Login,
} from '../screens';
import TabBar from '../components/TabBar';

// $FlowFixMe: Weird Flow Issue right here
let DashboardStack = createStackNavigator({
  dashboard: Dashboard,
});

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
