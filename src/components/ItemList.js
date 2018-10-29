// @flow

import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {Icon, Separator} from '../core-ui';
import {GREY, MAIN_TEXT} from '../constants/colors';

type ItemListProps = {
  iconName: string;
  itemName: string;
  separator?: boolean;
  onPress: () => void;
};

export default function ItemList(props: ItemListProps) {
  let {iconName, itemName, separator, onPress} = props;
  return (
    <TouchableOpacity
      style={{margin: 8, justifyContent: 'center'}}
      onPress={onPress}
    >
      <View style={styles.itemList}>
        <Icon
          name={iconName}
          color={GREY}
          size={20}
          containerStyle={{width: 40}}
        />
        <Text style={styles.itemListText}>{itemName}</Text>
        <Icon name="angle-right" color={GREY} size={18} />
      </View>
      {separator && <Separator style={{marginTop: 15}} />}
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create({
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemListText: {
    flex: 1,
    marginRight: 20,
    fontSize: 14,
    color: MAIN_TEXT,
    fontFamily: 'Roboto-Regular',
  },
});
