// @flow

import type {RootState} from '../types';

const defaultState: RootState = {
  userState: {
    __typename: 'userState',
    userID: '1',
    username: 'username',
    email: 'username@kodefox.com',
    token: 'sometoken',
  },
  toastState: {
    __typename: 'toastState',
    message: '',
    isOpen: false,
  },
};

export default defaultState;
