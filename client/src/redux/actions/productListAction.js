import * as actionTypes from './actionTypes';
import axios from 'axios';

//productListFetch
export const productListFetchStart = () => ({
  type: actionTypes.PRODUCT_LIST_FETCH_START,
});

export const productListFetchSuccess = (products) => ({
  type: actionTypes.PRODUCT_LIST_FETCH_SUCCESS,
  payload: products,
});

export const productListFetchFail = (error) => ({
  type: actionTypes.PRODUCT_LIST_FETCH_FAIL,
  payload: error,
});
export const productListFetch = () => async (dispatch) => {
  dispatch(productListFetchStart());
  try {
    const { data } = await axios.get('/api/products');
    dispatch(productListFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productListFetchFail(isError));
  }
};
export const productListClear = () => ({
  type: actionTypes.PRODUCT_LIST_CLEAR,
});
