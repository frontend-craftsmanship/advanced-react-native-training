// @flow

import {call, put, takeLatest} from 'redux-saga/effects';
import fetchTransactions from '../../utils/fetch/fetchTransaction';

export default function* transactionSagaWatcher(): Generator<*, *, *> {
  yield takeLatest('FETCH_TRANSACTION_LIST', fetchTranasction);
}

export function* fetchTranasction(action: *): Generator<*, *, *> {
  if (action.type !== 'FETCH_TRANSACTION_LIST') {
    return;
  }

  try {
    let {data} = yield call(fetchTransactions);
    if (data) {
      yield put({
        type: 'UPDATE_TRANSACTIONS',
        payload: {transactionList: data},
      });
    }
  } catch (error) {}
}
