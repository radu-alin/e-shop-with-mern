import { combineReducers } from 'redux';

import { productListReducer } from './productListReducer';
import { productSelectedReducer } from './productSelectedReducer';
import {
  cartItemsIdAndQuantityReducer,
  cartItemsDetailReducer,
  cartCheckoutDetailsReducer,
  cartDropdownReducer,
} from './cartReducer';
import {
  userAuthReducer,
  userProfileFetchReducer,
  userProfileUpdateReducer,
} from './userReducer';

import { orderCreateReducer, orderDetailsReducer } from './orderReducer';

export const rootReducer = combineReducers({
  user: userAuthReducer,
  userProfileUpdate: userProfileUpdateReducer,
  userProfile: userProfileFetchReducer,
  productList: productListReducer,
  productSelected: productSelectedReducer,
  cartItemsIdAndQuantity: cartItemsIdAndQuantityReducer,
  cartItemsDetail: cartItemsDetailReducer,
  cartCheckoutDetails: cartCheckoutDetailsReducer,
  cartDropdown: cartDropdownReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});
