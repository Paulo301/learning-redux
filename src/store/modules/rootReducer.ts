import { combineReducers } from "redux";

import cart from './cart/reducer';
//Não é mais necessário na versão mais nova utilizando o redux-toolkit
export default combineReducers({
  cart
});