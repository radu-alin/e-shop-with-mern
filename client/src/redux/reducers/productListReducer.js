import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productsAll: [],
  isLoading: true,
  isError: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_FETCH_START:
      return {
        ...state,
        isError: null,
      };
    case actionTypes.PRODUCT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        productsAll: action.payload,
        isLoading: false,
      };
    case actionTypes.PRODUCT_LIST_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};
