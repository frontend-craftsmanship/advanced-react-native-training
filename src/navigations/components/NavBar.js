// @flow
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {};
type State = {
  activeBar: number;
};

const NAVS = ['HomePage', 'Transaction', 'Chart'];
class NavBar extends React.Component<Props, State> {
  state = {
    activeBar: 1,
  };
  render() {
    let {activeBar} = this.state;
    return (
      <View style={styles.container}>
        {NAVS.map((nav, index) => (
          <TabBar
            key={index}
            isActive={index === activeBar}
            title={nav}
            onPress={() => this.setState({activeBar: index})}
          />
        ))}
      </View>
    );
  }
}

type ButtonProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

function TabBar(props: ButtonProps) {
  let {title, isActive, onPress} = props;
  let style = [styles.tab, isActive && styles.activeTab];
  return (
    <TouchableOpacity onPress={() => onPress()} style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#DEF',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDF',
    borderTopWidth: 4,
  },
  activeTab: {
    backgroundColor: '#DFF',
    borderTopColor: '#AFD',
  },
});

export default NavBar;
