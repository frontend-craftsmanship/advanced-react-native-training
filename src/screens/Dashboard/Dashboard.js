// @flow

import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {Query} from 'react-apollo';

import {Text, Icon} from '../../core-ui';
import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED, WHITE, BLACK} from '../../constants/colors';
import {GET_TRANSACTIONS} from '../../graphql/queries/dashboard';

import type {NavigationScreenProp, NavigationRoute} from 'react-navigation';
import type {Transaction} from './components/TransactionCard';

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
      <Query query={GET_TRANSACTIONS}>
        {({loading, data}) => {
          return (
            <View style={{backgroundColor: WHITE, flex: 1}}>
              <View style={{padding: 15, flexDirection: 'row'}}>
                <BalanceCard
                  title="Income"
                  amount={this._getAmount(data.transactions, 'INCOME')}
                  color={BLUE_SEA}
                />
                <BalanceCard
                  title="Expense"
                  amount={this._getAmount(data.transactions, 'EXPENSE')}
                  color={RED}
                />
              </View>
              <View style={{marginTop: 5, flex: 1}}>
                <Text
                  size="medium"
                  style={{marginBottom: 5, paddingHorizontal: 15}}
                >
                  History
                </Text>
                {loading ? (
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" />
                  </View>
                ) : (
                  <FlatList
                    data={data.transactions}
                    renderItem={({item}) => <TransactionCard {...item} />}
                    keyExtractor={({id}) => id}
                    style={{flex: 1}}
                  />
                )}
              </View>
            </View>
          );
        }}
      </Query>
    );
  }

  _getAmount(
    transactions: ?Array<Transaction>,
    type: 'INCOME' | 'EXPENSE'
  ): number {
    return transactions
      ? transactions
        .filter((transaction) => transaction.type === type)
        .reduce((total, {amount}) => total + amount, 0)
      : 0;
  }
}

export default Dashboard;
