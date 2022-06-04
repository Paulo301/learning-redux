import { 
  createSlice, 
  PayloadAction
} from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces/product';
import { ICartState } from './types';

const initialState: ICartState = {
  items: [],
  failedStockCheck: []
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCartRequest: (state, action: PayloadAction<IProduct>) => {},
    addProductToCartSuccess: (state, action: PayloadAction<IProduct>) => {
      const productInCartIndex = state.items.findIndex(item => 
        item.product.id === action.payload.id
      );

      if(productInCartIndex >= 0){
        state.items[productInCartIndex].quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1
        });
      }
    },
    addProductToCartFailure: (state, action: PayloadAction<number>) => {
      state.failedStockCheck.push(action.payload);
    }
  }
})

export const { 
  addProductToCartRequest, 
  addProductToCartSuccess, 
  addProductToCartFailure 
} = cart.actions

export default cart.reducer