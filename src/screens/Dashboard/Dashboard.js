// @flow

import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {Text, Icon} from '../../core-ui';
import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED, WHITE, BLACK} from '../../constants/colors';
import {formatNumberComma} from '../../helpers/formatNumberToCurrency';
import type {Transaction, TransactionState} from '../../types/index';
import type {NavigationScreenProp, NavigationRoute} from 'react-navigation';

type Props = {
  addTransaction: () => void;
  data: TransactionState;
  navigation: Object;
};

type State = {
  activeCard: 'INCOME' | 'EXPENSE' | null;
  tempTransactionList: Array<Transaction>;
};
class Dashboard extends Component<Props, State> {
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

  constructor() {
    super(...arguments);
    this.state = {
      activeCard: null,
      tempTransactionList: this.props.data.transactionList,
    };
  }
  render() {
    return (
      <View style={{backgroundColor: WHITE, flex: 1, padding: 15}}>
        <View style={{flexDirection: 'row'}}>
          <BalanceCard
            title="Income"
            color={BLUE_SEA}
            amount={this._handleAmount('INCOME')}
            onCardPressed={() => this._handleSelectCard('INCOME')}
          />
          <BalanceCard
            color={RED}
            title="Expense"
            amount={this._handleAmount('EXPENSE')}
            onCardPressed={() => this._handleSelectCard('EXPENSE')}
          />
        </View>
        <View style={{marginTop: 15, flex: 1}}>
          <Text style={{marginBottom: 5, fontSize: 16}}>History</Text>
          <FlatList
            data={this.state.tempTransactionList}
            renderItem={({item}) => <TransactionCard {...item} />}
            keyExtractor={({id}) => id}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  _handleAmount = (type: 'INCOME' | 'EXPENSE') => {
    let {data} = this.props;
    let getTransactionType = data.transactionList.filter(
      (transaction) => transaction.type === type
    );
    let amount = 0;
    getTransactionType.map((transaction) => {
      amount = amount + transaction.amount;
    });
    return '$'.concat(`${formatNumberComma(amount)},00`);
  };

  _handleSelectCard(type: 'INCOME' | 'EXPENSE') {
    let {activeCard} = this.state;
    let {data} = this.props;
    let selectedCard = activeCard === null || activeCard !== type ? type : null;
    let selectedHistories = data.transactionList.filter(
      (transaction) =>
        transaction.type === selectedCard || selectedCard === null
    );
    this.setState({
      activeCard: selectedCard,
      tempTransactionList: selectedHistories,
    });
  }
}

const mapStateToProps = (state: *) => {
  return {
    data: state.transaction,
  };
};

const DashboardContainer = connect(mapStateToProps)(Dashboard);
DashboardContainer.displayName = 'Dashboard';
export default DashboardContainer;
