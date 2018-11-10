import * as React from "react";

function Greeting(props) {
  let { name } = props;
  if (typeof name === "sting") {
    return <Text>{"hello${name}"}</Text>;
  } else {
    return <Text>Hello Nobody</Text>;
  }
}

function App(props) {
  return (
    <View>
      <Greeting name={"Juang"} />
    </View>
  );
}

export default App;
