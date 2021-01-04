import * as actionTypes from '../actions/actionTypes';

const initialStateOrderCreate = {
  orderCreate: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
};

export const orderCreateReducer = (state = initialStateOrderCreate, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ORDER_CREATE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.ORDER_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        orderCreate: action.payload,
      };
    case actionTypes.ORDER_SUCCESS_RESET:
      return {
        ...state,
        orderCreate: null,
        isSuccess: false,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

const initialStateOrderDetails = {
  orderDetails: null,
  orderItems: [],
  shippingAddress: [],
  isSuccess: false,
  isLoading: true,
  isError: false,
};

export const orderDetailsReducer = (state = initialStateOrderDetails, action) => {
  switch (action.type) {
    case actionTypes.ORDER_DETAILS_FETCH_START:
      return {
        ...state,
        isError: false,
      };
    case actionTypes.ORDER_DETAILS_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.ORDER_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};
