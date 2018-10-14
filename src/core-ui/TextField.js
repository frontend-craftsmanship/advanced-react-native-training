// @flow

import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {Icon} from './';
import {
  WHITE,
  BORDER,
  MAIN_TEXT,
  LIGHT_BORDER,
  BORDER_ACTIVE,
} from '../constants/colors';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 4;

type Props = {
  style?: Object;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  multiline?: boolean;
  containerStyle?: Object;
  onBlur?: () => void;
  onFocus?: () => void;
};

type State = {
  isFocused: boolean;
};

class TextField extends React.Component<Props, State> {
  state = {
    isFocused: false,
  };
  render() {
    let {
      style,
      disabled,
      leftIcon,
      rightIcon,
      multiline,
      containerStyle,
      ...otherProps
    } = this.props;
    let {isFocused} = this.state;
    const combineContainerStyles = [
      styles.container,
      styles.bordered,
      containerStyle,
      isFocused && {borderColor: BORDER_ACTIVE, backgroundColor: WHITE},
      disabled && {backgroundColor: BORDER},
    ];
    const combineInputStyles = [styles.input, style, isFocused && {opacity: 1}];
    return (
      <View style={combineContainerStyles}>
        {leftIcon && (
          <Icon
            size={20}
            name={leftIcon}
            color={disabled ? 'grey' : isFocused ? BORDER_ACTIVE : BORDER}
            containerStyle={styles.icon}
          />
        )}
        <TextInput
          editable={!disabled}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          multiline={!!multiline}
          style={combineInputStyles}
          underlineColorAndroid="transparent"
          {...otherProps}
        />
        {rightIcon && (
          <Icon
            size={20}
            name={rightIcon}
            color={disabled ? 'grey' : isFocused ? BORDER_ACTIVE : BORDER}
            containerStyle={styles.icon}
          />
        )}
      </View>
    );
  }

  _onFocus = () => {
    this.setState({isFocused: true});
  };

  _onBlur = () => {
    this.setState({isFocused: false});
  };
}

export default TextField;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: LIGHT_BORDER,
  },
  bordered: {
    borderColor: BORDER,
    textAlignVertical: 'top',
    borderRadius: BORDER_RADIUS,
    borderWidth: StyleSheet.hairlineWidth,
  },
  input: {
    flex: 1,
    fontSize: 14,
    opacity: 0.7,
    color: MAIN_TEXT,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
  },
  icon: {
    marginHorizontal: 5,
  },
});
