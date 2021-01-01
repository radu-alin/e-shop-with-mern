import axios from 'axios';
import * as actionTypes from './actionTypes';

export const cartToggleHidden = () => ({
  type: actionTypes.CART_TOGGLE_HIDDEN,
});

export const cartSaveShippingAddress = (shippingData) => ({
  type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
  payload: shippingData,
});
export const cartSavePaymentMethod = (paymentMethod) => ({
  type: actionTypes.CART_SAVE_PAYMENT_METHOD,
  payload: paymentMethod,
});

export const cartAddItem = (item) => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: item,
});

export const cartModifyQuantityForItem = (itemId, quantity) => ({
  type: actionTypes.CART_MODIFY_QUANTITY_FOR_ITEM,
  payload: { itemId, quantity },
});

export const cartClearItem = (itemId) => ({
  type: actionTypes.CART_CLEAR_ITEM,
  payload: itemId,
});

//cartProductListFetch
export const cartItemsDetailFetchStart = () => ({
  type: actionTypes.CART_ITEMS_DETAIL_FETCH_START,
});
export const cartItemsDetailFetchFail = (error) => ({
  type: actionTypes.CART_ITEMS_DETAIL_FETCH_FAIL,
  payload: error,
});
export const cartItemsDetailFetchSuccess = (itemsDetail) => ({
  type: actionTypes.CART_ITEMS_DETAIL_FETCH_SUCCESS,
  payload: itemsDetail,
});

export const cartItemsDetailFetch = (cartItemsId) => async (dispatch) => {
  dispatch(cartItemsDetailFetchStart());

  const fetchItem = async (id) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return { ...data };
  };

  const fetchAllItems = async (ids) => {
    const requests = ids.map((id) => fetchItem(id));
    return Promise.all(requests);
  };

  fetchAllItems(cartItemsId)
    .then((data) => dispatch(cartItemsDetailFetchSuccess(data)))
    .catch((err) => {
      const isError =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      dispatch(cartItemsDetailFetchFail(isError));
    });
};
