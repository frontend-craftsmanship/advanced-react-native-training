// @flow

import {fork} from 'redux-saga/effects';
import transactionSagaWatcher from './transactionSagaWatcher';

export default function*(): Generator<*, *, *> {
  yield fork(transactionSagaWatcher);
}
