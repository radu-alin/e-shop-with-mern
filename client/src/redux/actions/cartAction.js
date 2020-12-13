import * as actionTypes from './actionTypes';

export const toogleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
});

export const addProductToCart = (product) => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});
