import * as React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  let {name} = props;
  if (typeof name === 'string') {
    return <Text>{'hello${name}'}</Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App() {
  return (
    <View>
      <Greeting name={'Juang'} />
    </View>
  );
}

export default App;
