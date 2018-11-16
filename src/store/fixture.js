//@flow

const TRANSACTION_STATE = {
  isLoading: false,
  transactionList: [
    {
      id: 'isuyfsd876',
      type: 'EXPENSE',
      transactionDetail: 'Fine Dining at Jakarta',
      amount: 30,
      category: 'food',
      date: new Date().toISOString(),
    },
    {
      id: '8sd9fsfasd',
      type: 'EXPENSE',
      transactionDetail: 'Bape Exclusive Cloth',
      amount: 530,
      category: 'clothes',
      date: new Date().toISOString(),
    },
    {
      id: '89asdy98ah',
      type: 'INCOME',
      transactionDetail: 'Salary Month 1',
      amount: 3000,
      category: 'salary',
      date: new Date().toISOString(),
    },
    {
      id: '18271h1nf',
      type: 'EXPENSE',
      transactionDetail: 'Uber from Fatmawati to Gading Serpong',
      amount: 23,
      category: 'transportation',
      date: new Date().toISOString(),
    },
  ],
};

const ANUAL_FINANCE_STATEMENTS: {[key: string | number]: Object} = {
  [2016]: {
    income: [
      {x: 'Jul', y: 250},
      {x: 'Aug', y: 205},
      {x: 'Sep', y: 400},
      {x: 'Oct', y: 150},
      {x: 'Nov', y: 200},
      {x: 'Dec', y: 350},
    ],
    expense: [
      {x: 'Jul', y: 250},
      {x: 'Aug', y: 105},
      {x: 'Sep', y: 200},
      {x: 'Oct', y: 150},
      {x: 'Nov', y: 200},
      {x: 'Dec', y: 250},
    ],
  },
  [2017]: {
    income: [
      {x: 'Jul', y: 530},
      {x: 'Aug', y: 305},
      {x: 'Sep', y: 400},
      {x: 'Oct', y: 150},
      {x: 'Nov', y: 200},
      {x: 'Dec', y: 250},
    ],
    expense: [
      {x: 'Jul', y: 250},
      {x: 'Aug', y: 105},
      {x: 'Sep', y: 200},
      {x: 'Oct', y: 450},
      {x: 'Nov', y: 200},
      {x: 'Dec', y: 150},
    ],
  },
  [2018]: {
    income: [
      {x: 'Jul', y: 350},
      {x: 'Aug', y: 205},
      {x: 'Sep', y: 300},
      {x: 'Oct', y: 250},
      {x: 'Nov', y: 300},
      {x: 'Dec', y: 150},
    ],
    expense: [
      {x: 'Jul', y: 450},
      {x: 'Aug', y: 305},
      {x: 'Sep', y: 400},
      {x: 'Oct', y: 350},
      {x: 'Nov', y: 400},
      {x: 'Dec', y: 350},
    ],
  },
  [2019]: {
    income: [
      {x: 'Jul', y: 250},
      {x: 'Aug', y: 105},
      {x: 'Sep', y: 500},
      {x: 'Oct', y: 350},
      {x: 'Nov', y: 200},
      {x: 'Dec', y: 350},
    ],
    expense: [
      {x: 'Jul', y: 250},
      {x: 'Aug', y: 305},
      {x: 'Sep', y: 300},
      {x: 'Oct', y: 150},
      {x: 'Nov', y: 400},
      {x: 'Dec', y: 350},
    ],
  },
  [2020]: {
    income: [
      {x: 'Jul', y: 150},
      {x: 'Aug', y: 205},
      {x: 'Sep', y: 400},
      {x: 'Oct', y: 350},
      {x: 'Nov', y: 500},
      {x: 'Dec', y: 250},
    ],
    expense: [
      {x: 'Jul', y: 350},
      {x: 'Aug', y: 105},
      {x: 'Sep', y: 200},
      {x: 'Oct', y: 350},
      {x: 'Nov', y: 300},
      {x: 'Dec', y: 150},
    ],
  },
};

export {ANUAL_FINANCE_STATEMENTS, TRANSACTION_STATE};
