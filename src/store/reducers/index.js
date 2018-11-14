// @flow

import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
  login: loginReducer,
  transaction: transactionReducer,
});
