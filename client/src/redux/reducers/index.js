import { combineReducers } from 'redux';

import { productListReducer } from './productListReducer';
import { productSelectedReducer } from './productSelectedReducer';
import { cartReducer } from './cartReducer';
import { userAuthReducer, userProfileReducer } from './userReducer';

export const rootReducer = combineReducers({
  productList: productListReducer,
  productSelected: productSelectedReducer,
  cart: cartReducer,
  user: userAuthReducer,
  userProfile: userProfileReducer,
});
