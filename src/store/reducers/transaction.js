// @flow

import {TRANSACTION_STATE} from '../fixture';
import type {
  TransactionState,
  Transaction,
  TransactionAction,
} from '../../types';

function transactionReducer(
  state: TransactionState = TRANSACTION_STATE,
  action: TransactionAction
) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return addTransaction(state, action.payload.data);
    case 'EDIT_TRANSACTION':
      return editTransaction(state, action.payload.data);
    case 'DELETE_TRANSACTION':
      return deleteTransaction(state, action.payload.id);
    case 'UPDATE_TRANSACTIONS': {
      return {
        ...state,
        transactionList: [
          ...state.transactionList,
          ...action.payload.transactionList,
        ],
      };
    }
    default:
      return state;
  }
}

function addTransaction(state: TransactionState, data: Transaction) {
  const newTransactionList = [...state.transactionList, data];
  return newTransactionList;
}

function editTransaction(state: TransactionState, data: Transaction) {
  let newTransactionList = state.transactionList.map((transaction) => {
    if (transaction.id === data.id) {
      return data;
    } else {
      return transaction;
    }
  });
  return [...newTransactionList];
}

function deleteTransaction(state: TransactionState, id: string) {
  let newTransactionList = state.transactionList.filter(
    (transaction) => transaction.id !== id
  );
  return [...newTransactionList];
}

export default transactionReducer;
