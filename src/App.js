// @flow

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';

import MainNavigator from './navigation/MainNavigator';
import {client} from './graphql/clientStore';

class App extends React.Component<*, *> {
  render() {
    return (
      <ApolloProvider client={client}>
        <MainNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
