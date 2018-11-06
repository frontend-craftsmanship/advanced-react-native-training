// @flow

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Card, Icon, Text} from '../../../core-ui';
import {categoryToIconName} from '../../../generals/utils';
import {BLUE_SEA, RED} from '../../../constants/colors';

import type {Category} from '../../../types';

type TransactionCardProps = {
  type: 'EXPENSE' | 'INCOME';
  transactionDetail: string;
  amount: string;
  category: Category;
  date: string;
};

export default function TransactionCard(props: TransactionCardProps) {
  let {type, transactionDetail, amount, category, date} = props;
  let isIncome = type === 'INCOME';
  return (
    <Card style={{marginHorizontal: 15}}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.root}>
          <View style={styles.iconWrapper}>
            <Icon size={20} name={categoryToIconName(category)} />
          </View>
          <View style={styles.transactionDetailWrapper}>
            <Text weight="bold">{transactionDetail}</Text>
            <Text style={{marginTop: 5, fontSize: 10}}>
              {new Date(date).toDateString()}
            </Text>
          </View>
          <View style={styles.amountWrapper}>
            <Text size="small" style={{color: isIncome ? BLUE_SEA : RED}}>
              {`${isIncome ? '+' : '-'}${amount}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

let styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    minHeight: 40,
    alignItems: 'center',
  },
  iconWrapper: {
    marginHorizontal: 10,
  },
  transactionDetailWrapper: {
    flex: 3,
    marginLeft: 10,
  },
  amountWrapper: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
  },
});
