// @flow

import gql from 'graphql-tag';

let GET_TRANSACTIONS = gql`
  query {
    transactions {
      id
      type
      transactionDetail
      amount
      category
    }
  }
`;

export {GET_TRANSACTIONS};
