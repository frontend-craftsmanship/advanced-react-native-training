// @flow

import {TRANSACTION_LIST} from '../fixture';

type Transaction = {
  id: string;
  type: 'EXPENSE' | 'INCOME';
  transactionDetail: string;
  amount: string;
  category: string;
  date: string;
};

type Action =
  | {
      type: 'ADD_TRANSACTION';
      payload: {
        data: Transaction;
      };
    }
  | {
      type: 'DELETE_TRANSACTION';
      payload: {
        id: string;
      };
    }
  | {
      type: 'EDIT_TRANSACTION';
      payload: {
        data: Transaction;
      };
    };

type InitialState = Array<Transaction>;

function transactionReducer(
  state: InitialState = TRANSACTION_LIST,
  action: Action
) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return addTransaction(state, action.payload.data);
    case 'EDIT_TRANSACTION':
      return editTransaction(state, action.payload.data);
    case 'DELETE_TRANSACTION':
      return deleteTransaction(state, action.payload.id);
    default:
      return state;
  }
}

function addTransaction(
  transactionList: Array<Transaction>,
  data: Transaction
) {
  const newTransactionList = [...transactionList, data];
  return newTransactionList;
}

function editTransaction(
  transactionList: Array<Transaction>,
  data: Transaction
) {
  const updatedTransaction = transactionList.filter(
    (transaction) => transaction.id === data.id
  )[0];
  return [...transactionList, updatedTransaction];
}

function deleteTransaction(transactionList: Array<Transaction>, id: string) {
  let newTransactionList = transactionList.filter(
    (transaction) => transaction.id !== id
  );
  return [...newTransactionList];
}

export default transactionReducer;
