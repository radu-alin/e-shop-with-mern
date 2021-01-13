import * as actionTypes from '../actions/actionTypes';

const initialStateProductListFetch = {
  productsAll: [],
  isLoading: true,
  isError: null,
};

export const productListFetchReducer = (
  state = initialStateProductListFetch,
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_FETCH_START:
      return {
        ...state,
        isError: null,
      };
    case actionTypes.PRODUCT_LIST_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        productsAll: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
