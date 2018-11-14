// @flow

import {combineReducers} from 'redux';

import counterReducer from './counter';
import transactionReducer from './transaction';

export default combineReducers({
  counter: counterReducer,
  transaction: transactionReducer,
});
