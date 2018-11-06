// @flow

import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DARK_GREY} from '../constants/colors';

const SMALL = 14;
const MEDIUM = 24;
const LARGE = 48;

type Props = {
  name: string;
  color?: string;
  style?: Object;
  containerStyle?: Object;
  onPress?: (params?: any) => void;
  size?: 'small' | 'medium' | 'large' | number;
};

export default function CustomIcon(props: Props) {
  let {name, color, containerStyle, style, size, onPress, ...otherProp} = props;
  let iconColor = color || DARK_GREY;
  let iconSize;
  if (size && typeof size === 'number') {
    iconSize = size;
  } else if (size === 'medium') {
    iconSize = MEDIUM;
  } else if (size === 'large') {
    iconSize = LARGE;
  } else {
    iconSize = SMALL;
  }
  let disabled = onPress ? false : true;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={containerStyle}
    >
      <Icon
        name={name}
        color={iconColor}
        size={iconSize}
        iconStyle={style}
        {...otherProp}
      />
    </TouchableOpacity>
  );
}
