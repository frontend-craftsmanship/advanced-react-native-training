// @flow

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
