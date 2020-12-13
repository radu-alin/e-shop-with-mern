import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchProductSelectedStart = () => ({
  type: actionTypes.FETCH_PRODUCT_SELECTED_START,
});

export const fetchProductSelectedSuccess = (product) => ({
  type: actionTypes.FETCH_PRODUCT_SELECTED_SUCCESS,
  payload: product,
});

export const fetchProductSelectedFail = (error) => ({
  type: actionTypes.FETCH_PRODUCT_SELECTED_FAIL,
  payload: error,
});

export const fetchProductSelected = (id) => async (dispatch) => {
  dispatch(fetchProductSelectedStart());
  try {
    const { data } = await axios.get('/api/products/' + id);
    dispatch(fetchProductSelectedSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(fetchProductSelectedFail(isError));
  }
};
