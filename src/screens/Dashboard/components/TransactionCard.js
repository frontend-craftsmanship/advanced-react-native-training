// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Card, Icon} from '../../../core-ui';
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
    <Card>
      <View style={styles.root}>
        <View style={styles.iconWrapper}>
          <Icon size="medium" name={categoryToIconName(category)} />
        </View>
        <View style={styles.transactionDetailWrapper}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            {transactionDetail}
          </Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.amountWrapper}>
          <Text
            style={{
              fontSize: 14,
              color: isIncome ? BLUE_SEA : RED,
            }}
          >
            {`${isIncome ? '+' : '-'}${amount}`}
          </Text>
        </View>
      </View>
    </Card>
  );
}

let styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    minHeight: 50,
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
