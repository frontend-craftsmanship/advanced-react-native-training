// @flow

import * as React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';

import {Icon} from './';
import {BLUE_SEA, LIGHT_BORDER, MAIN_TEXT, WHITE} from '../constants/colors';

type Props = {
  visible?: boolean;
  selectedOption: ?string;
  options: Array<{label: string; value: string}>;
  onPress: (data: string) => void;
};

type ItemProps = {
  selected: boolean;
  data: {
    label: string;
    value: string;
  };
  onItemPressed: (data: string) => void;
};

export default function DropDown(props: Props) {
  let {visible, options, selectedOption, onPress} = props;
  return visible ? (
    <ScrollView
      style={{
        position: 'absolute',
        top: 35,
        right: 1,
        zIndex: 1,
        width: '100%',
        backgroundColor: WHITE,
      }}
    >
      {options.map((item, index) => (
        <ListItem
          key={index}
          data={item}
          onItemPressed={onPress}
          selected={item.value === selectedOption}
        />
      ))}
    </ScrollView>
  ) : null;
}

function ListItem(props: ItemProps) {
  let {onItemPressed, selected, data} = props;
  return (
    <TouchableOpacity
      onPress={() => onItemPressed(data.value)}
      style={{
        height: 40,
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: MAIN_TEXT,
        justifyContent: 'center',
        backgroundColor: LIGHT_BORDER,
      }}
    >
      <Text style={{flex: 1, paddingHorizontal: 10}}>{data.label}</Text>
      {selected && (
        <Icon
          name="check-circle"
          color={BLUE_SEA}
          size="medium"
          containerStyle={{paddingRight: 20}}
        />
      )}
    </TouchableOpacity>
  );
}
