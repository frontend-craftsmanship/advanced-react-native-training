// @flow

import type {RootState} from '../types';

const defaultState: RootState = {
  userState: {
    __typename: 'userState',
    id: '1',
    name: 'username',
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
