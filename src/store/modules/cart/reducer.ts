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
  name: 'counter',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      state.items = [
        ...state.items.filter(item => item.product.id !== action.payload.id),
        {
          product: action.payload,
          quantity: 1
        }
      ]
    }
  }
})

export const { addProductToCart } = cart.actions

export default cart.reducer