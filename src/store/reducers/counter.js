// @flow

export type InitialState = {
  counter: number;
};

export type Action =
  | {
      type: 'PLUS_NUMBER';
    }
  | {
      type: 'MIN_NUMBER';
    };

const INTIAL_STATE: InitialState = {
  counter: 0,
};

export default function counterReducer(
  state: InitialState = INTIAL_STATE,
  action: Action
) {
  switch (action.type) {
    case 'MIN_NUMBER':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'PLUS_NUMBER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
