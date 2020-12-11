import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchProductListResetSpinner = () => ({
  type: actionTypes.FETCH_PRODUCT_LIST_SPINNER_RESET,
});

export const fetchProductListStart = () => ({
  type: actionTypes.FETCH_PRODUCT_LIST_START,
});

export const fetchProductListSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCT_LIST_SUCCESS,
  payload: products,
});

export const fetchProductListFail = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_LIST_FAIL,
  payload: error,
});

export const fetchProductList = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/products');
    dispatch(fetchProductListSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(fetchProductListFail(isError));
  }
};
