import { combineReducers } from 'redux';

import { productListFetchReducer } from './productListReducer';
import { productSelectedFetchReducer } from './productSelectedReducer';
import {
  cartItemsIdAndQuantityReducer,
  cartItemsDetailFetchReducer,
  cartCheckoutDetailsReducer,
  cartDropdownReducer,
} from './cartReducer';
import {
  userAuthReducer,
  userProfileFetchReducer,
  userProfileUpdateReducer,
  usersListFetchReducer,
  userDeleteReducer,
  userUpdateToAdminReducer,
} from './userReducer';

import {
  orderCreateReducer,
  orderDetailsFetchReducer,
  ordersListFetchReducer,
  orderPayReducer,
} from './orderReducer';

export const rootReducer = combineReducers({
  user: userAuthReducer,
  userProfile: userProfileFetchReducer,
  userProfileUpdate: userProfileUpdateReducer,
  usersList: usersListFetchReducer,
  userDelete: userDeleteReducer,
  userUpdateToAdmin: userUpdateToAdminReducer,
  productList: productListFetchReducer,
  productSelected: productSelectedFetchReducer,
  cartItemsIdAndQuantity: cartItemsIdAndQuantityReducer,
  cartItemsDetail: cartItemsDetailFetchReducer,
  cartCheckoutDetails: cartCheckoutDetailsReducer,
  cartDropdown: cartDropdownReducer,
  orderCreate: orderCreateReducer,
  ordersList: ordersListFetchReducer,
  orderDetails: orderDetailsFetchReducer,
  orderPay: orderPayReducer,
});
