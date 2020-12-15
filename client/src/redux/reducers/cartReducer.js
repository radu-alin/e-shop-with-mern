import * as actionTypes from '../actions/actionTypes';
import {
  cartAddProductUtil,
  cartDecreaseProductUtil,
  cartProductsFromLocalStorageUtil,
} from '../../utils/cartUtil';

const initialState = {
  cartProducts: cartProductsFromLocalStorageUtil('cartProducts'),
  isHidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case actionTypes.CART_ADD_PRODUCT:
      return {
        ...state,
        cartProducts: cartAddProductUtil(state.cartProducts, action.payload),
      };
    case actionTypes.CART_DECREASE_PRODUCT:
      return {
        ...state,
        cartProducts: cartDecreaseProductUtil(state.cartProducts, action.payload),
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
