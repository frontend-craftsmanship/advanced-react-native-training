// @flow

import * as React from 'react';
import {Text as TextComp, StyleSheet} from 'react-native';

import {FONT_SIZE, FONT_WEIGHT} from '../constants/textPresets';
import {BLUE_SEA, MAIN_TEXT} from '../constants/colors';

type Props = {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  weight?: string;
  italic?: boolean;
  primary?: boolean;
  color?: string;
  style?: Object;
  children: React.Node | string;
};

function Text(props: Props) {
  let {primary, weight, style, color, size, children, ...otherProps} = props;
  let fontSize = FONT_SIZE[(size && size.toUpperCase()) || 'MEDIUM'];
  let fontWeight = FONT_WEIGHT[(weight && weight.toUpperCase()) || 'LIGHT'];
  let fontStyle = [
    styles.default,
    {fontSize},
    {color},
    {fontWeight},
    primary && styles.primary,
    style && style,
  ];
  return (
    <TextComp style={fontStyle} {...otherProps}>
      {children}
    </TextComp>
  );
}

export default Text;

const styles = StyleSheet.create({
  default: {
    fontSize: FONT_SIZE['MEDIUM'],
    fontWeight: FONT_WEIGHT['REG'],
    color: MAIN_TEXT,
  },
  primary: {
    color: BLUE_SEA,
  },
});
