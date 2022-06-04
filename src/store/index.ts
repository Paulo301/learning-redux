import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import cart from './modules/cart/reducer';
import { ICartState } from './modules/cart/types';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer:  { cart },
  middleware: middlewares
});

sagaMiddleware.run(rootSaga);