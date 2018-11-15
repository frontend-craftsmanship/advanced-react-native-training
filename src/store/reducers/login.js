// @flow

type LoginState = {
  email: string;
  password: string;
  token: string;
};

type LoginAction =
  | {
      type: 'LOGIN_USER';
      payload: {
        email: string;
        password: string;
      };
    }
  | {
      type: ':LOGOUT_USER';
    };

const INITIAL_STATE: LoginState = {
  email: 'email@email.com',
  password: 'password',
  token: '',
};

export default function loginReducer(
  state: LoginState = INITIAL_STATE,
  action: LoginAction
) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
}
