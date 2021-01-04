import axios from 'axios';

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
    dispatch(orderCreateSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(orderCreateFail(isError));
  }
};

export const orderSuccessReset = () => ({
  type: actionTypes.ORDER_SUCCESS_RESET,
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
