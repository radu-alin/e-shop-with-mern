import * as actionTypes from './actionTypes';
import axios from 'axios';

//productCreate
export const productCreateStart = () => ({
  type: actionTypes.PRODUCT_CREATE_START,
});
export const productCreateFail = (error) => ({
  type: actionTypes.PRODUCT_CREATE_FAIL,
  payload: error,
});
export const productCreateSuccess = (data) => ({
  type: actionTypes.PRODUCT_CREATE_SUCCESS,
  payload: data,
});
export const productCreate = (token, productData) => async (dispatch) => {
  dispatch(productCreateStart());
  const url = '/api/products';
  const body = { ...productData };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(url, body, config);
    dispatch(productCreateSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productCreateFail(isError));
  }
};
export const productCreateReset = () => ({
  type: actionTypes.PRODUCT_CREATE_RESET,
});

//productEdit
export const productEditStart = () => ({
  type: actionTypes.PRODUCT_EDIT_START,
});
export const productEditFail = (error) => ({
  type: actionTypes.PRODUCT_EDIT_FAIL,
  payload: error,
});
export const productEditSuccess = (data) => ({
  type: actionTypes.PRODUCT_EDIT_SUCCESS,
  payload: data,
});
export const productEdit = (token, productId, productData) => async (dispatch) => {
  dispatch(productEditStart());
  const url = `/api/products/${productId}`;
  const body = { ...productData };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.put(url, body, config);
    dispatch(productEditSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productEditFail(isError));
  }
};
export const productEditReset = () => ({
  type: actionTypes.PRODUCT_EDIT_RESET,
});

//productFetch
export const productFetchStart = () => ({
  type: actionTypes.PRODUCT_FETCH_START,
});
export const productFetchFail = (error) => ({
  type: actionTypes.PRODUCT_FETCH_FAIL,
  payload: error,
});
export const productFetchSuccess = (product) => ({
  type: actionTypes.PRODUCT_FETCH_SUCCESS,
  payload: product,
});
export const productFetch = (id) => async (dispatch) => {
  dispatch(productFetchStart());
  try {
    const { data } = await axios.get('/api/products/' + id);
    dispatch(productFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productFetchFail(isError));
  }
};
export const productFetchClear = () => ({
  type: actionTypes.PRODUCT_FETCH_CLEAR,
});
// productDelete
export const productDeleteStart = (productId) => ({
  type: actionTypes.PRODUCT_DELETE_START,
  payload: productId,
});
export const productDeleteFail = (error) => ({
  type: actionTypes.PRODUCT_DELETE_FAIL,
  payload: error,
});
export const productDeleteSuccess = (product) => ({
  type: actionTypes.PRODUCT_DELETE_SUCCESS,
  payload: product,
});
export const productDelete = (token, productId) => async (dispatch) => {
  dispatch(productDeleteStart(productId));
  const url = `/api/products/${productId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.delete(url, config);
    dispatch(productDeleteSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productDeleteFail(isError));
  }
};
export const productDeleteReset = () => ({
  type: actionTypes.PRODUCT_DELETE_RESET,
});
