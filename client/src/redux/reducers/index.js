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

import { orderCreateReducer } from './orderReducer';

export const rootReducer = combineReducers({
  productList: productListReducer,
  productSelected: productSelectedReducer,
  cartItemsIdAndQuantity: cartItemsIdAndQuantityReducer,
  cartItemsDetail: cartItemsDetailReducer,
  cartCheckoutDetails: cartCheckoutDetailsReducer,
  cartDropdown: cartDropdownReducer,
  user: userAuthReducer,
  userProfile: userProfileFetchReducer,
  userProfileUpdate: userProfileUpdateReducer,
  orderCreate: orderCreateReducer,
});
