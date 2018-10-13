// @flow

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button, Card, Icon, Separator} from './core-ui';
import {GREY} from './constants/colors';
type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
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
          color={GREY}
          size={20}
          containerStyle={{width: 40}}
        />
        <Text style={styles.text}>{itemName}</Text>
        <Icon name="angle-right" color={GREY} size={15} />
      </View>
      {separator && <Separator style={{marginTop: 5}} />}
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
