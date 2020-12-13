import * as actionTypes from '../actions/actionTypes';

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
    default:
      return state;
  }
};
