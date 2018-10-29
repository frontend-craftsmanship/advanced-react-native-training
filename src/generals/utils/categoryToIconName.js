// @flow

import type {Category} from '../../types';

export default function categoryToIconName(category: Category): string {
  let categoryToIconName = {
    food: 'cutlery',
    clothes: 'suitcase',
    communications: 'phone',
    entertainment: 'beer',
    transportation: 'car',
    bills: 'credit-card',
    salary: 'money',
    savings: 'dollar',
    deposits: 'bank',
  };
  return categoryToIconName[category];
}
