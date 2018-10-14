//@flow

import * as React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

import {Icon} from './';
import {BLUE_SEA, LIGHT_GREY, LIGHT_PURPLE, WHITE} from '../constants/colors';

type Props = {
  text: string;
  iconLeft?: string;
  iconRight?: string;
  style?: Object; //TODO: Need to set a global type for StyleSheet on flow-typed
  onPress: () => void;
};

function Button(props: Props) {
  let {text, style, iconLeft, iconRight, onPress} = props;
  let buttonStyles = [styles.button, styles.buttonBorder, style && style];
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={buttonStyles}
        underlayColor={LIGHT_PURPLE}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
  }
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(LIGHT_PURPLE)}
    >
      <View style={buttonStyles}>
        {iconLeft && <Icon name={iconLeft} color={WHITE} size="medium" />}
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>{text}</Text>
        </View>
        {iconRight && <Icon name={iconRight} color={WHITE} size="medium" />}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLUE_SEA,
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  buttonBorder: Platform.select({
    ios: {borderRadius: 4},
    android: {
      borderRadius: 1,
      elevation: 4,
    },
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: LIGHT_GREY,
    },
  }),
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    },
  }),
  text: {
    color: WHITE,
    fontSize: 15,
  },
});
export default Button;
