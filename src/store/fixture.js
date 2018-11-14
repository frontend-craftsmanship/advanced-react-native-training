// @flow

export const LOGIN_STATE = {
  email: 'user@mail.com',
  password: 'password',
  token: '',
};

export const TRANSACTION_LIST = [
  {
    id: 'isuyfsd876',
    type: 'EXPENSE',
    transactionDetail: 'Fine Dining at Jakarta',
    amount: '$30.00',
    category: 'food',
    date: new Date().toISOString(),
  },
  {
    id: '8sd9fsfasd',
    type: 'EXPENSE',
    transactionDetail: 'Bape Exclusive Cloth',
    amount: '$530.00',
    category: 'clothes',
    date: new Date().toISOString(),
  },
  {
    id: '89asdy98ah',
    type: 'INCOME',
    transactionDetail: 'Salary Month 1',
    amount: '$3000.00',
    category: 'salary',
    date: new Date().toISOString(),
  },
  {
    id: '18271h1nf',
    type: 'EXPENSE',
    transactionDetail: 'Uber from Fatmawati to Gading Serpong',
    amount: '$23.00',
    category: 'transportation',
    date: new Date().toISOString(),
  },
];
