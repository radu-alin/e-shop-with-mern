import * as actionTypes from '../actions/actionTypes';
import {
  cartAddProductUtil,
  cartModifyQuantityProductUtil,
} from '../../utils/cartUtil';

import { localStorageGetItemUtil } from '../../utils/localStorageUtil';

const initialState = {
  cartProducts: localStorageGetItemUtil('cartProducts'),
  shippingAddress: localStorageGetItemUtil('shippingAddress'),
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
    case actionTypes.CART_ADD_PRODUCT:
      return {
        ...state,
        cartProducts: cartAddProductUtil(state.cartProducts, action.payload),
      };

    case actionTypes.CART_MODIFY_QUANTITY_PRODUCT:
      return {
        ...state,
        cartProducts: cartModifyQuantityProductUtil(
          state.cartProducts,
          action.payload.product,
          action.payload.selectedQuantity
        ),
      };

    case actionTypes.CART_CLEAR_PRODUCT:
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter(
            (cartProduct) => cartProduct._id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};
