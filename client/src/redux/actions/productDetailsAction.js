import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchProductDetailsStart = () => ({
  type: actionTypes.FETCH_PRODUCT_DETAILS_START,
});

export const fetchProductDetailsSuccess = (product) => ({
  type: actionTypes.FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

export const fetchProductDetailsFail = (error) => ({
  type: actionTypes.FETCH_PRODUCT_DETAILS_FAIL,
  payload: error,
});

export const fetchProductDetails = (id) => async (dispatch) => {
  dispatch(fetchProductDetailsStart());
  try {
    const { data } = await axios.get('/api/products/' + id);
    dispatch(fetchProductDetailsSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(fetchProductDetailsFail(isError));
  }
};
