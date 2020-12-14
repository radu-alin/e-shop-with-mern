import * as actionTypes from '../actions/actionTypes';
import { cartAddProductUtils } from '../../utils/cartUtils';

const initialState = {
  cartProducts: [],
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
        cartProducts: cartAddProductUtils(state.cartProducts, action.payload),
      };
    default:
      return state;
  }
};
