import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartProductsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartProducts
);

export const productsCartCountSelector = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce((accumalatedQuantity, cartProduct) => {
      console.log('cartProducts - reduce - render');
      return accumalatedQuantity + cartProduct.quantity;
    }, 0)
);
