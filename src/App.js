// @flow

import * as React from 'react';
import {View, Text} from 'react-native';

type GreetingProps = {
  name: string,
};

function Greeting(props: GreetingProps) {
  return <Text>{props.name}</Text>;
}

function App() {
  return (
    <View>
      <Greeting name={'Juang'} />
    </View>
  );
}

export default App;
