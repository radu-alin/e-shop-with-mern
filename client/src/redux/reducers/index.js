import { combineReducers } from 'redux';

import { productListReducer } from './productListReducer';
import { productSelectedReducer } from './productSelectedReducer';
import { cartReducer } from './cartReducer';
import {
  userAuthReducer,
  userProfileFetchReducer,
  userProfileUpdateReducer,
} from './userReducer';

import { orderCreateReducer } from './orderReducer';

export const rootReducer = combineReducers({
  productList: productListReducer,
  productSelected: productSelectedReducer,
  cart: cartReducer,
  user: userAuthReducer,
  userProfile: userProfileFetchReducer,
  userProfileUpdate: userProfileUpdateReducer,
  orderCreate: orderCreateReducer,
});
