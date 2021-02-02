import { combineReducers } from 'redux';

import { productListFetchReducer } from './productListReducer';
import {
  productCreateReducer,
  productEditReducer,
  productFetchReducer,
  productDeleteReducer,
  productReviewCreateReducer,
} from './productReducer';
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
  userListFetchReducer,
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
  userList: userListFetchReducer,
  userDelete: userDeleteReducer,
  userUpdateToAdmin: userUpdateToAdminReducer,
  product: productFetchReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productDelete: productDeleteReducer,
  productList: productListFetchReducer,
  productReview: productReviewCreateReducer,
  cartItemsDetail: cartItemsDetailFetchReducer,
  cartItemsIdAndQuantity: cartItemsIdAndQuantityReducer,
  cartCheckoutDetails: cartCheckoutDetailsReducer,
  cartDropdown: cartDropdownReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsFetchReducer,
  ordersList: ordersListFetchReducer,
  orderPay: orderPayReducer,
});
