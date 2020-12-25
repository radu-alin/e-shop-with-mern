import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productSelectedDetails: null,
  productReviews: [],
  isLoading: true,
  isError: null,
};

export const productSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_SELECTED_FETCH_START:
      return {
        ...state,
        isError: null,
      };
    case actionTypes.PRODUCT_SELECTED_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_SELECTED_FETCH_SUCCESS:
      return {
        ...state,
        productSelectedDetails: { ...action.payload },
        isLoading: false,
      };

    default:
      return state;
  }
};
