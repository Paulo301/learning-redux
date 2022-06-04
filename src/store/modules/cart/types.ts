import { IProduct } from "../../../interfaces/product";

//Talvez seja bom utilizar em projetos maiores mesmo com a nova forma de implementação do redux
export enum ActionTypes {
  addProductToCartRequest = 'cart/addProductToCartRequest'
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}