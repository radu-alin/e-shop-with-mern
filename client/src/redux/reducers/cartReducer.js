import * as actionTypes from '../actions/actionTypes';
import { addProductToCart } from '../../utils/cartUtils';

const initialState = {
  cartProducts: [],
  isHidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: addProductToCart(state.cartProducts, action.payload),
      };
    default:
      return state;
  }
};
