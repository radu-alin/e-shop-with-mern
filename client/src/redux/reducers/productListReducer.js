import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productsAll: [],
  isLoading: true,
  isError: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productsAll: [...action.payload],
        isLoading: false,
      };
    case actionTypes.FETCH_PRODUCT_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};
