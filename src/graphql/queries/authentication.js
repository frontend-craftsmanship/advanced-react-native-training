// @flow

import gql from 'graphql-tag';

const GET_USER_ROLE = gql`
  query {
    userState @client {
      userID
      username
      email
      token
    }
  }
`;

export {GET_USER_ROLE};
