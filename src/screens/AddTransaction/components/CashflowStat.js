// @flow

import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import {BLUE_SEA, WHITE, LIGHT_GREY} from '../../../constants/colors';

type Props = {
  selectedTransactionType: 'INCOME' | 'EXPENSE';
  transactionAmount: number;
  onAmountChange: (amount: string) => void;
  onSelectTransactionType: (transactionType: 'INCOME' | 'EXPENSE') => void;
};

export default class CashflowStat extends Component<Props, {}> {
  render() {
    let {transactionAmount, onAmountChange} = this.props;
    return (
      <View style={styles.root}>
        <View style={{flexDirection: 'row'}}>
          {this._renderButton('INCOME')}
          {this._renderButton('EXPENSE')}
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={String(transactionAmount)}
            keyboardType="numeric"
            onChangeText={onAmountChange}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }

  _renderButton(transactionType: 'INCOME' | 'EXPENSE') {
    let {selectedTransactionType, onSelectTransactionType} = this.props;
    return (
      <TouchableOpacity
        style={styles[`${transactionType.toLowerCase()}Button`]}
      >
        <Text
          style={{
            fontSize: 16,
            color:
              selectedTransactionType === transactionType ? WHITE : LIGHT_GREY,
          }}
          onPress={() => onSelectTransactionType(transactionType)}
        >
          {transactionType}
        </Text>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    borderRadius: 5,
    backgroundColor: BLUE_SEA,
    padding: 20,
  },
  incomeButton: {
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    borderColor: WHITE,
  },
  expenseButton: {
    flex: 1,
    alignItems: 'center',
  },
  textInputWrapper: {
    alignItems: 'center',
    paddingTop: 15,
  },
  textInput: {
    color: WHITE,
    fontSize: 36,
  },
});
