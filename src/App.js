// @flow

import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, Card, Icon, Separator, Text, TextField} from './core-ui';
import {ICON_COLOR, MAIN_TEXT, WHITE} from './constants/colors';
type Props = {};
type State = {
  text: string;
};
const PADDING_APP = 5;
class App extends React.Component<Props, State> {
  state = {
    text: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text size="xsmall" color="#def" weight="bold" primary>
          this field can not be empty
        </Text>
        <Text size="small" weight="reg" color="black">
          Expense Name
        </Text>
        <Text size="medium">Income Name</Text>
        <Text size="large" color="navy" weight="reg">
          Top 10 Cities
        </Text>
        <Text size="xlarge" color="salmon" weight="light">
          1,108
        </Text>
        <TextField
          leftIcon="search"
          placeholder="Search category"
          onChangeText={(text) => this.setState({text})}
        />
        <TextField
          disabled
          rightIcon="ban"
          placeholder="Input disabled"
          onChangeText={(text) => this.setState({text})}
        />
        <Card>
          <TempItemList iconName="building" itemName="House" separator />
          <TempItemList iconName="graduation-cap" itemName="School" separator />
          <TempItemList iconName="car" itemName="Car" />
        </Card>
        <Button text="Button" onPress={() => {}} />
        <Button
          iconLeft="apple"
          text="Button With Icons"
          iconRight="archive"
          onPress={() => {}}
        />
      </View>
    );
  }
}

function TempItemList(props: {
  iconName: string;
  itemName: string;
  separator?: boolean;
}) {
  let {iconName, itemName, separator} = props;
  return (
    <View style={{margin: 8, justifyContent: 'center'}}>
      <View style={styles.itemList}>
        <Icon
          name={iconName}
          color={ICON_COLOR}
          size={20}
          containerStyle={{width: 40}}
        />
        <Text style={styles.text}>{itemName}</Text>
        <Icon name="angle-right" color={ICON_COLOR} size={15} />
      </View>
      {separator && <Separator style={{marginTop: 5}} />}
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'center',
    paddingHorizontal: PADDING_APP,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: MAIN_TEXT,
    fontFamily: 'Roboto-Regular',
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
