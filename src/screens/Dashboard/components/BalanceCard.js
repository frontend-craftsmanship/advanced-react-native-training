// @flow

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {WHITE} from '../../../constants/colors';

type BalanceCardProps = {
  title: string;
  amount: string;
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
      <Text style={{fontSize: 22, color: WHITE}}>{amount}</Text>
    </View>
  );
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
