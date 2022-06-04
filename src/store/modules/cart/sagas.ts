import { AxiosResponse } from 'axios';
import { all, call, select, takeLatest, put } from 'redux-saga/effects';
import { IState } from '../..';
import { IStock } from '../../../interfaces/stock';
import { api } from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './reducer';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === payload.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<IStock> = yield call(api.get, `stock/${payload.id}`);

  if(availableStockResponse.data.quantity > currentQuantity){
    yield put(addProductToCartSuccess(payload));
  } else {
    yield put(addProductToCartFailure(payload.id));
  }
}

export default all([
  takeLatest('cart/addProductToCartRequest', checkProductStock)
]);