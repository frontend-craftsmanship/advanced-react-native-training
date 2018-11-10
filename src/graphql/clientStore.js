// @flow

import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {withClientState} from 'apollo-link-state';
import {InMemoryCache} from 'apollo-cache-inmemory';

import API_URI from '../constants/api';
import defaultState from './localState';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {},
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: API_URI,
    }),
  ]),
  cache,
});

export {cache, client, stateLink};
