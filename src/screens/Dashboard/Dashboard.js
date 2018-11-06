// @flow

import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

import {Text, Icon} from '../../core-ui';
import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED, WHITE, BLACK} from '../../constants/colors';

import type {NavigationScreenProp, NavigationRoute} from 'react-navigation';

const TRANSACTIONS_DATA = [
  {
    id: 'isuyfsd876',
    type: 'EXPENSE',
    transactionDetail: 'Fine Dining at Jakarta',
    amount: '$30.00',
    category: 'food',
    date: new Date().toISOString(),
  },
  {
    id: '8sd9fsfasd',
    type: 'EXPENSE',
    transactionDetail: 'Bape Exclusive Cloth',
    amount: '$530.00',
    category: 'clothes',
    date: new Date().toISOString(),
  },
  {
    id: '89asdy98ah',
    type: 'INCOME',
    transactionDetail: 'Salary Month 1',
    amount: '$3000.00',
    category: 'salary',
    date: new Date().toISOString(),
  },
  {
    id: '18271h1nf',
    type: 'EXPENSE',
    transactionDetail: 'Uber from Fatmawati to Gading Serpong',
    amount: '$23.00',
    category: 'transportation',
    date: new Date().toISOString(),
  },
];

class Dashboard extends Component<*, *> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<NavigationRoute>;
  }) => {
    return {
      headerTitle: 'Dashboard',
      headerLeft: (
        <View style={{paddingHorizontal: 20}}>
          <Icon
            name="bars"
            size={18}
            color={BLACK}
            onPress={() => {
              navigation.toggleDrawer && navigation.toggleDrawer();
            }}
          />
        </View>
      ),
    };
  };

  render() {
    return (
      <View style={{backgroundColor: WHITE, flex: 1}}>
        <View style={{padding: 15, flexDirection: 'row'}}>
          <BalanceCard title="Income" amount="$13,500.00" color={BLUE_SEA} />
          <BalanceCard title="Expense" amount="$49,000.00" color={RED} />
        </View>
        <View style={{marginTop: 5, flex: 1}}>
          <Text size="medium" style={{marginBottom: 5, paddingHorizontal: 15}}>
            History
          </Text>
          <FlatList
            data={TRANSACTIONS_DATA}
            renderItem={({item}) => <TransactionCard {...item} />}
            keyExtractor={({id}) => id}
            style={{flex: 1}}
          />
        </View>
      </View>
    );
  }
}

export default Dashboard;
