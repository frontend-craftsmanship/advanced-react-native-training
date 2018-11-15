// @flow

import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {WHITE} from '../../../constants/colors';

type BalanceCardProps = {
  title: string;
  amount: string;
  color: string;
  onCardPressed?: () => void;
};

export default function BalanceCard(props: BalanceCardProps) {
  let {title, amount, color, onCardPressed} = props;
  return (
    <TouchableOpacity onPress={onCardPressed} style={{flex: 1}}>
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
    </TouchableOpacity>
  );
}

let balanceCardStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
});
