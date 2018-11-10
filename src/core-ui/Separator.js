// @flow

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {LIGHT_GREY} from '../constants/colors';

type Props = {
  width?: number,
  color?: string,
  style?: Object,
};

export default function Separator(props: Props) {
  let {width, color, style} = props;
  let customStyles = [
    styles.separator,
    width && {height: width},
    color && {backgroundColor: color},
  ];
  return <View style={[...customStyles, style]} />;
}

let styles = StyleSheet.create({
  separator: {
    backgroundColor: LIGHT_GREY,
    height: StyleSheet.hairlineWidth,
  },
});
