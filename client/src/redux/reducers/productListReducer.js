import * as actionTypes from '../actions/actionTypes';

const initialStateProductListFetch = {
  productList: null,
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
        productList: action.payload,
        isLoading: false,
      };

    case actionTypes.PRODUCT_LIST_DELETE_POSITION:
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product._id !== action.payload
        ),
      };
    case actionTypes.PRODUCT_LIST_CLEAR:
      return {
        ...state,
        productList: null,
        isLoading: true,
        isError: null,
      };

    default:
      return state;
  }
};
