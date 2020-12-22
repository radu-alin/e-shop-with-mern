import * as actionTypes from './actionTypes';

export const cartToggleHidden = () => ({
  type: actionTypes.CART_TOGGLE_HIDDEN,
});

export const cartAddProduct = (product) => ({
  type: actionTypes.CART_ADD_PRODUCT,
  payload: product,
});

export const cartDecreaseProduct = (product) => ({
  type: actionTypes.CART_DECREASE_PRODUCT,
  payload: product,
});

export const cartClearProduct = (productId) => ({
  type: actionTypes.CART_CLEAR_PRODUCT,
  payload: productId,
});
