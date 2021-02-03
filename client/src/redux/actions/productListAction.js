import * as actionTypes from './actionTypes';
import { axiosInstance } from '../../axios';

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
    const { data } = await axiosInstance.get('/api/products');
    dispatch(productListFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productListFetchFail(isError));
  }
};
export const productListDeletePosition = (productId) => ({
  type: actionTypes.PRODUCT_LIST_DELETE_POSITION,
  payload: productId,
});
export const productListClear = () => ({
  type: actionTypes.PRODUCT_LIST_CLEAR,
});
