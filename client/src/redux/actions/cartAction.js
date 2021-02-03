import { axiosInstance } from '../../axios';
import * as actionTypes from './actionTypes';

//cartItemsIdAndQuantity
export const cartAddItem = (item) => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: item,
});
export const cartModifyQuantityForItem = (itemId, quantitySelected) => ({
  type: actionTypes.CART_MODIFY_QUANTITY_FOR_ITEM,
  payload: { itemId, quantitySelected },
});
export const cartClearItem = (itemId) => ({
  type: actionTypes.CART_CLEAR_ITEM,
  payload: itemId,
});
export const cartReset = () => ({
  type: actionTypes.CART_RESET,
});

//cartItemsDetailFetch
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

  const fetchItem = (id) => axiosInstance.get(`/api/products/${id}`);
  const requests = cartItemsId.map((id) => fetchItem(id));
  try {
    const results = await Promise.all(requests);
    const arrayData = results.map((result) => ({ ...result.data }));
    dispatch(cartItemsDetailFetchSuccess(arrayData));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(cartItemsDetailFetchFail(isError));
  }
};

//cartCheckout
export const cartSaveShippingAddress = (shippingData) => ({
  type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
  payload: shippingData,
});
export const cartSavePaymentMethod = (paymentMethod) => ({
  type: actionTypes.CART_SAVE_PAYMENT_METHOD,
  payload: paymentMethod,
});

//cartDropdown
export const cartDropdownToggleHidden = () => ({
  type: actionTypes.CART_DROPDOWN_TOGGLE_HIDDEN,
});
