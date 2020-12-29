import * as actionTypes from './actionTypes';

export const cartToggleHidden = () => ({
  type: actionTypes.CART_TOGGLE_HIDDEN,
});

export const cartSaveShippingAddress = (shippingData) => ({
  type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
  payload: shippingData,
});

export const cartAddProduct = (product) => ({
  type: actionTypes.CART_ADD_PRODUCT,
  payload: product,
});

export const cartModifyQuantityProduct = (product, selectedQuantity) => ({
  type: actionTypes.CART_MODIFY_QUANTITY_PRODUCT,
  payload: { product, selectedQuantity },
});

export const cartClearProduct = (productId) => ({
  type: actionTypes.CART_CLEAR_PRODUCT,
  payload: productId,
});
