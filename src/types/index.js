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

export type RootState = {
  userState: {
    __typename: string;
    userID: string;
    username: string;
    token: string;
  };
  toastState: {
    __typename: string;
    message: string;
    isOpen: boolean;
  };
};
