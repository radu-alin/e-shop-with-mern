import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

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
