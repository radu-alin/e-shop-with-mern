import * as actionTypes from '../actions/actionTypes';

const initialStateOrderCreate = {
  orderCreated: null,
  isLoading: false,
  isError: false,
};

//orderCreate
export const orderCreateReducer = (state = initialStateOrderCreate, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
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
        orderCreated: action.payload,
      };
    case actionTypes.ORDER_CREATE_RESET:
      return {
        ...state,
        orderCreated: null,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

//ordersListFetch
const initialStateOrdersListFetch = {
  ordersList: null,
  isLoading: false,
  isError: false,
};

export const ordersListFetchReducer = (
  state = initialStateOrdersListFetch,
  action
) => {
  switch (action.type) {
    case actionTypes.ORDERS_LIST_FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.ORDERS_LIST_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.ORDERS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ordersList: action.payload,
      };
    case actionTypes.ORDERS_LIST_CLEAR:
      return {
        ...state,
        ordersList: null,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

//orderDetailsFetch
const initialStateOrderDetailsFetch = {
  orderDetails: null,
  isLoading: false,
  isError: false,
};

export const orderDetailsFetchReducer = (
  state = initialStateOrderDetailsFetch,
  action
) => {
  switch (action.type) {
    case actionTypes.ORDER_DETAILS_FETCH_START:
      return {
        ...state,
        isLoading: true,
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
    case actionTypes.ORDER_DETAILS_CLEAR:
      return {
        ...state,
        orderDetails: null,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

//orderPay
const initialStateOrderPay = {
  isSuccess: false,
  isLoading: false,
  isError: false,
};

export const orderPayReducer = (state = initialStateOrderPay, action) => {
  switch (action.type) {
    case actionTypes.ORDER_PAY_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.ORDER_PAY_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.ORDER_PAY_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case actionTypes.ORDER_PAY_RESET:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
      };
    default:
      return state;
  }
};
