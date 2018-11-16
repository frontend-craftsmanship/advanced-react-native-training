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

export type TransactionState = {
  transactionList: Array<Transaction>;
  isLoading: boolean;
};

export type Transaction = {
  id: string;
  type: 'EXPENSE' | 'INCOME';
  transactionDetail: string;
  amount: string | number;
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
    }
  | {
      type: 'UPDATE_TRANSACTIONS';
      payload: {
        transactionList: Array<Transaction>;
      };
    };

export type RootAction = CounterAction | TransactionAction;
export type RootState = {
  transaction: TransactionState;
};
