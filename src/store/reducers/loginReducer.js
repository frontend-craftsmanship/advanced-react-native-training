// @flow

import {LOGIN_STATE} from '../fixture';
import type {LoginState, LoginAction} from '../../types';

function loginReducer(state: LoginState = LOGIN_STATE, action: LoginAction) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return state;
  }
}

export default loginReducer;
