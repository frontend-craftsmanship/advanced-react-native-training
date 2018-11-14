// @flow

export type Category =
  | 'food'
  | 'clothes'
  | 'communications'
  | 'entertainment'
  | 'transportation'
  | 'bills'
  | 'salary'
  | 'savings'
  | 'deposits';

export type LoginState = {
  email: string;
  password: string;
  token: string;
};

export type Transaction = {
  id: string;
  type: 'EXPENSE' | 'INCOME';
  transactionDetail: string;
  amount: string;
  category: Category;
  date: string;
};

export type CounterAction =
  | {
      type: 'PLUS_NUMBER';
    }
  | {
      type: 'MIN_NUMBER';
    };

export type LoginAction = {
  type: 'LOGIN_USER';
  payload: {
    data: {
      email: string;
      password: string;
    };
  };
};

export type TransactionAction =
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

export type RootAction = CounterAction | LoginAction | TransactionAction;
export type RootState = {
  transaction: Array<Transaction>;
  login: LoginState;
};
