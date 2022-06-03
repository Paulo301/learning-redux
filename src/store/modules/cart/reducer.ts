import { 
  createSlice, 
  PayloadAction
} from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces/product';
import { ICartState } from './types';

const initialState: ICartState = {
  items: []
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
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
    }
  }
})

export const { addProductToCart } = cart.actions

export default cart.reducer