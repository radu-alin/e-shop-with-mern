import * as actionTypes from '../actions/actionTypes';
import {
  cartAddItemUtil,
  cartModifyQuantityForItemUtil,
} from '../../utils/cartUtil';

import { localStorageGetItemUtil } from '../../utils/localStorageUtil';

const initialState = {
  cartItemsIdAndQuantity: localStorageGetItemUtil('cartItems'),
  cartItemsDetail: [],
  shippingAddress: localStorageGetItemUtil('shippingAddress'),
  paymentMethod: localStorageGetItemUtil('paymentMethod'),
  isHidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case actionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItemsIdAndQuantity: cartAddItemUtil(
          state.cartItemsIdAndQuantity,
          action.payload
        ),
      };
    case actionTypes.CART_MODIFY_QUANTITY_FOR_ITEM:
      return {
        ...state,
        cartItemsIdAndQuantity: cartModifyQuantityForItemUtil(
          state.cartItemsIdAndQuantity,
          action.payload.itemId,
          action.payload.quantity
        ),
      };
    case actionTypes.CART_CLEAR_ITEM:
      return {
        ...state,
        cartItemsIdAndQuantity: [
          ...state.cartItemsIdAndQuantity.filter(
            (cartItem) => cartItem.productId !== action.payload
          ),
        ],
      };
    case actionTypes.CART_ITEMS_DETAIL_FETCH_FAIL:
      return {
        ...state,
        isError: action.payload,
      };
    case actionTypes.CART_ITEMS_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        cartItemsDetail: action.payload,
      };
    default:
      return state;
  }
};
