// @flow

import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {Icon} from '../core-ui';
import {WHITE, BLUE_SEA, ICON_COLOR} from '../constants/colors';
import categoryToIconName from '../generals/utils/categoryToIconName';

import type {
  NavigationScreenProp,
  NavigationState,
  TabScene,
  NavigationRoute,
} from 'react-navigation';

import type {Category} from '../types';

type Props = {
  navigation: NavigationScreenProp<NavigationState>;
  getLabelText: (scene: TabScene) => ?Category;
};

export default class CustomTabBar extends Component<Props, *> {
  render() {
    let {navigation} = this.props;
    let tabBarButtons = navigation.state.routes.map(this.renderTabBarButton);
    return <View style={styles.root}>{tabBarButtons}</View>;
  }

  renderTabBarButton = (route: NavigationRoute, index: number) => {
    let {navigation, getLabelText} = this.props;
    let currentIndex = navigation.state.index;
    let label = getLabelText({
      route,
      focused: currentIndex === index,
      index: index,
    });
    let isActive = currentIndex === index;
    let isAddTransaction = index === 1;
    let size = isAddTransaction ? 56 : 'medium';
    let color = isAddTransaction ? BLUE_SEA : ICON_COLOR;
    return (
      <TouchableOpacity
        style={[
          isActive && {
            borderTopColor: BLUE_SEA,
            borderTopWidth: 2,
            borderRadius: 3,
          },
          styles.eachTabWrapper,
        ]}
        onPress={() => {
          navigation.navigate(route.routeName);
        }}
        key={route.routeName}
      >
        <Icon size={size} name={categoryToIconName(label)} color={color} />
      </TouchableOpacity>
    );
  };
}

let styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: WHITE,
  },
  eachTabWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
