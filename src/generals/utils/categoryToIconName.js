// @flow

import type {Category} from '../../types';

export default function categoryToIconName(category: ?Category): string {
  let categoryToIconName = {
    food: 'utensils',
    clothes: 'tshirt',
    communications: 'phone',
    entertainment: 'beer',
    transportation: 'car',
    bills: 'file-invoice-dollar',
    salary: 'money-check',
    savings: 'piggy-bank',
    deposits: 'balance-scale',
    dashboard: 'tachometer-alt',
    chart: 'chart-line',
    addTransaction: 'plus-circle',
    loading: 'spinner',
  };
  return categoryToIconName[category || 'loading'];
}
