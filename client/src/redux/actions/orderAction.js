import axios from 'axios';

import { localStorageSetItemUtil } from '../../utils/localStorageUtil';

import * as actionTypes from '../actions/actionTypes';

//orderCreate
export const orderCreateStart = () => ({
  type: actionTypes.ORDER_CREATE_START,
});
export const orderCreateFail = (error) => ({
  type: actionTypes.ORDER_CREATE_FAIL,
  payload: error,
});
export const orderCreateSuccess = (orderData) => ({
  type: actionTypes.ORDER_CREATE_SUCCESS,
  payload: orderData,
});
export const orderCreate = (token, orderData) => async (dispatch) => {
  dispatch(orderCreateStart());
  const url = '/api/orders';
  const body = { ...orderData };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(url, body, config);
    orderData.paymentMethod === 'CashOnDelivery' &&
      localStorageSetItemUtil('cartItems', []);
    dispatch(orderCreateSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(orderCreateFail(isError));
  }
};
export const orderCreateReset = () => ({
  type: actionTypes.ORDER_CREATE_RESET,
});

//ordersListFetch
export const ordersListFetchStart = () => ({
  type: actionTypes.ORDERS_LIST_FETCH_START,
});
export const ordersListFetchFail = (error) => ({
  type: actionTypes.ORDERS_LIST_FETCH_FAIL,
  payload: error,
});
export const ordersListFetchSuccess = (orderDetails) => ({
  type: actionTypes.ORDERS_LIST_FETCH_SUCCESS,
  payload: orderDetails,
});
export const ordersListFetch = (token) => async (dispatch) => {
  dispatch(ordersListFetchStart());
  const url = `/api/orders/my-orders`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.get(url, config);
    dispatch(ordersListFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(ordersListFetchFail(isError));
  }
};
export const ordersListFetchReset = () => ({
  type: actionTypes.ORDERS_LIST_FETCH_RESET,
});

//orderDetailsFetch
export const orderDetailsFetchStart = () => ({
  type: actionTypes.ORDER_DETAILS_FETCH_START,
});
export const orderDetailsFetchFail = (error) => ({
  type: actionTypes.ORDER_DETAILS_FETCH_FAIL,
  payload: error,
});
export const orderDetailsFetchSuccess = (orderDetails) => ({
  type: actionTypes.ORDER_DETAILS_FETCH_SUCCESS,
  payload: orderDetails,
});
export const orderDetailsFetch = (token, orderId) => async (dispatch) => {
  dispatch(orderDetailsFetchStart());
  const url = `/api/orders/${orderId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.get(url, config);
    dispatch(orderDetailsFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(orderDetailsFetchFail(isError));
  }
};

//orderPay
export const orderPayStart = () => ({
  type: actionTypes.ORDER_PAY_START,
});
export const orderPayFail = (error) => ({
  type: actionTypes.ORDER_PAY_FAIL,
  payload: error,
});
export const orderPaySuccess = (data) => ({
  type: actionTypes.ORDER_PAY_SUCCESS,
  payload: data,
});
export const orderPay = (token, orderId, paymentResult) => async (dispatch) => {
  dispatch(orderPayStart());
  const url = `/api/orders/${orderId}/pay`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.put(url, paymentResult, config);
    localStorageSetItemUtil('cartItems', []);
    dispatch(orderPaySuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(orderPayFail(isError));
  }
};
export const orderPayReset = () => ({
  type: actionTypes.ORDER_PAY_RESET,
});
