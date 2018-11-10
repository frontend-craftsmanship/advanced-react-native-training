// @flow

import gql from 'graphql-tag';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: {email: $email, password: $password}) {
      id
      token
      name
      email
    }
  }
`;

const GET_USER_LOCAL = gql`
  query {
    userState @client {
      id
      name
      email
      token
    }
  }
`;

const SAVE_USER_LOCAL = gql`
  mutation SaveUser(
    $id: ID!
    $name: String!
    $email: String!
    $token: String!
  ) {
    saveUser(data: {id: $id, name: $name, email: $email, token: $token}) @client
  }
`;

export {LOGIN, GET_USER_LOCAL, SAVE_USER_LOCAL};
