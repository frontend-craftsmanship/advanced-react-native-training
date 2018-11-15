// @flow

export type Category =
  | 'FOOD'
  | 'CLOTHES'
  | 'COMMUNICATIONS'
  | 'ENTERTAINMENT'
  | 'TRANSPORTATION'
  | 'BILLS'
  | 'SALARY'
  | 'SAVINGS'
  | 'DEPOSITS';

export type RootState = {
  userState: {
    __typename: string;
    id: string;
    name: string;
    token: string;
  };
  toastState: {
    __typename: string;
    message: string;
    isOpen: boolean;
  };
};
