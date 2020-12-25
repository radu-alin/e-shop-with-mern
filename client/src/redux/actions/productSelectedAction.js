import * as actionTypes from './actionTypes';
import axios from 'axios';

export const productSelectedFetchStart = () => ({
  type: actionTypes.PRODUCT_SELECTED_FETCH_START,
});
export const productSelectedFetchFail = (error) => ({
  type: actionTypes.PRODUCT_SELECTED_FETCH_FAIL,
  payload: error,
});
export const productSelectedFetchSuccess = (product) => ({
  type: actionTypes.PRODUCT_SELECTED_FETCH_SUCCESS,
  payload: product,
});
export const productSelectedFetch = (id) => async (dispatch) => {
  dispatch(productSelectedFetchStart());
  try {
    const { data } = await axios.get('/api/products/' + id);
    dispatch(productSelectedFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(productSelectedFetchFail(isError));
  }
};
