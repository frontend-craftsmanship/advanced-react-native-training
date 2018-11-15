// @flow

import type {Category} from '../../types';

export default function categoryToIconName(category: ?Category): string {
  let categoryToIconName = {
    FOOD: 'utensils',
    CLOTHES: 'tshirt',
    COMMUNICATIONS: 'phone',
    ENTERTAINMENT: 'beer',
    TRANSPORTATION: 'car',
    BILLS: 'file-invoice-dollar',
    SALARY: 'money-check',
    SAVINGS: 'piggy-bank',
    DEPOSITS: 'balance-scale',
    dashboard: 'tachometer-alt',
    chart: 'chart-line',
    addTransaction: 'plus-circle',
    loading: 'spinner',
  };
  return categoryToIconName[category || 'loading'];
}
