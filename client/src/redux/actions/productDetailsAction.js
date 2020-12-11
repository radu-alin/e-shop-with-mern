import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchProductDetailsResetSpinner = () => ({
  type: actionTypes.FETCH_PRODUCT_DETAILS_SPINNER_RESET,
});

export const fetchProductDetailsStart = () => ({
  type: actionTypes.FETCH_PRODUCT_DETAILS_START,
});

export const fetchProductDetailsSuccess = (product) => ({
  type: actionTypes.FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

export const fetchProductDetailsFail = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_DETAILS_FAIL,
  payload: error,
});

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/products/' + id);
    console.log('data - ', data);
    dispatch(fetchProductDetailsSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(fetchProductDetailsFail(isError));
  }
};
