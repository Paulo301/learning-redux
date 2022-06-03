import { configureStore } from '@reduxjs/toolkit';

import cart from './modules/cart/reducer';
import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

export const store = configureStore({
  reducer:  { cart }
});