import * as actionTypes from '../actions/actionTypes';

// productSeletctedFetch
const initialStateProductFetch = {
  productDetails: null,
  productReviews: [],
  isLoading: true,
  isError: null,
};

export const productFetchReducer = (state = initialStateProductFetch, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_FETCH_START:
      return {
        ...state,
        isError: null,
      };
    case actionTypes.PRODUCT_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        productDetails: { ...action.payload },
        isLoading: false,
      };

    default:
      return state;
  }
};

// productCreate
const initialStateProductCreate = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const productCreateReducer = (state = initialStateProductCreate, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
        isLoading: false,
      };
    case actionTypes.PRODUCT_CREATE_RESET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };

    default:
      return state;
  }
};

// productDelete
const initialStateProductDelete = {
  productId: null,
  isLoading: true,
  isError: null,
  isSuccess: false,
};

export const productDeleteReducer = (state = initialStateProductDelete, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DELETE_START:
      return {
        ...state,
        productId: action.payload,
        isError: null,
      };
    case actionTypes.PRODUCT_DELETE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: action.payload.message,
        productId: action.payload.productId,
      };
    case actionTypes.PRODUCT_DELETE_RESET:
      return {
        ...state,
        productId: null,
        isLoading: true,
        isError: null,
        isSuccess: false,
      };

    default:
      return state;
  }
};
