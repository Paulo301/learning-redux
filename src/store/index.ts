import { configureStore } from '@reduxjs/toolkit';

import cart from './modules/cart/reducer';

export const store = configureStore({
  reducer:  { cart }
});