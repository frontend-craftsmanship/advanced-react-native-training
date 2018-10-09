// @flow

import {compose} from '../';

test('compose composes from right to left', () => {
  let double = (x) => x * 2;
  let square = (x) => x * x;
  let result = compose(square)(5);
  let resultTwo = compose(
    square,
    double
  )(5);
  let resultThree = compose(
    double,
    square,
    double
  )(5);
  expect(result).toBe(25);
  expect(resultTwo).toBe(100);
  expect(resultThree).toBe(200);
});

test('compose can be seeded with multiple arguments', () => {
  let square = (x) => x * x;
  let add = (x, y) => x + y;

  expect(
    compose(
      square,
      add
      //   I tried to remove flow here because flow catch the error becuase arg can only be unary
      //   So, flow is smart here, no issus with flow
      // $FlowFixMe
    )(1, 2)
  ).toBe(9);
});

test('compose returns the identity function if given no arguments', () => {
  // $FlowFixMe
  expect(compose()(1, 2)).toBe(1);
  expect(compose()(3)).toBe(3);
  expect(compose()()).toBe(undefined);
});

test('compose returns the first function if given only one', () => {
  let fn = (x) => x * x;
  expect(compose(fn)(3)).toBe(fn(3));
});
