// @flow

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {WHITE} from '../../../constants/colors';

type BalanceCardProps = {
  title: string;
  amount: number;
  color: string;
};

export default function BalanceCard(props: BalanceCardProps) {
  let {title, amount, color} = props;
  return (
    <View
      style={[
        balanceCardStyles.card,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={{fontSize: 16, color: WHITE}}>{title}</Text>
      <Text style={{fontSize: 22, color: WHITE}}>{amountToDollar(amount)}</Text>
    </View>
  );
}

function amountToDollar(amount: number) {
  return `$${amount}.00`;
}

let balanceCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
});
