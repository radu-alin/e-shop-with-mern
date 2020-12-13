import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productSelectedDetails: null,
  productReviews: [],
  isLoading: true,
  isError: null,
};

export const productSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_SELECTED_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCT_SELECTED_SUCCESS:
      return {
        ...state,
        productSelectedDetails: { ...action.payload },
        isLoading: false,
      };
    case actionTypes.FETCH_PRODUCT_SELECTED_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};
