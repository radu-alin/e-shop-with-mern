import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productDetails: null,
  productReviews: [],
  isLoading: true,
  isError: null,
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_DETAILS_SPINNER_RESET:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCT_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: { ...action.payload },
        isLoading: false,
      };
    case actionTypes.FETCH_PRODUCTS_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};
