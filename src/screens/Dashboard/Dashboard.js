// @flow

import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED} from '../../constants/colors';
import {formatNumberComma} from '../../helpers/formatNumberToCurrency';
import type {Transaction} from '../../types/index';

type Props = {
  addTransaction: () => void;
  transactionList: Array<Transaction>;
};

type State = {
  activeCard: 'INCOME' | 'EXPENSE' | null;
};
class Dashboard extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      activeCard: null,
    };
  }
  render() {
    return (
      <View style={{padding: 10, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <BalanceCard
            title="Income"
            color={BLUE_SEA}
            amount={this._handleAmount('INCOME')}
            // onCardPressed={() => this._handleSelectCard('INCOME')}
          />
          <BalanceCard
            color={RED}
            title="Expense"
            amount={this._handleAmount('EXPENSE')}
            // onCardPressed={() => this._handleSelectCard('INCOME')}
          />
        </View>
        <View style={{marginTop: 15, flex: 1}}>
          <Text style={{marginBottom: 5, fontSize: 16}}>History</Text>
          <FlatList
            data={this.props.transactionList}
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
    let {transactionList} = this.props;
    let getTransactionType = transactionList.filter(
      (transaction) => transaction.type === type
    );
    let amount = 0;
    getTransactionType.map((transaction) => {
      amount = amount + transaction.amount;
    });
    return '$'.concat(`${formatNumberComma(amount)},00`);
  };

  _handleSelectCard(type: 'INCOME' | 'EXPENSE') {
    this.setState({activeCard: this.state.activeCard === type ? null : type});
  }
}

const mapStateToProps = (state: *) => {
  return {
    transactionList: state.transaction,
  };
};

export default connect(mapStateToProps)(Dashboard);
