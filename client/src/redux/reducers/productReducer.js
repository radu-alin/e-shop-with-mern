import * as actionTypes from '../actions/actionTypes';

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

// productEdit
const initialStateProductEdit = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const productEditReducer = (state = initialStateProductEdit, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_EDIT_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.PRODUCT_EDIT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_EDIT_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
        isLoading: false,
      };
    case actionTypes.PRODUCT_EDIT_RESET:
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

// productFetch
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
        productReviews: [...action.payload.reviews],
        isLoading: false,
      };
    case actionTypes.PRODUCT_FETCH_UPDATE_REVIEWS:
      return {
        ...state,
        productDetails: action.payload.productDetails,
        productReviews: [...state.productReviews, action.payload.review],
      };
    case actionTypes.PRODUCT_FETCH_CLEAR:
      return {
        ...state,
        productDetails: null,
        productReviews: [],
        isLoading: true,
        isError: null,
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

// productReviewCreate
const initialStateProductReviewCreate = {
  isLoading: false,
  isError: null,
  isSuccess: false,
};

export const productReviewCreateReducer = (
  state = initialStateProductReviewCreate,
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REVIEW_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case actionTypes.PRODUCT_REVIEW_CREATE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.PRODUCT_REVIEW_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: action.payload,
      };
    case actionTypes.PRODUCT_REVIEW_CREATE_RESET:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: null,
      };

    default:
      return state;
  }
};
