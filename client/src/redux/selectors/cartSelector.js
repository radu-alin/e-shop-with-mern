import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartProductsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartProducts
);

export const cartProductsCountSelector = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce(
      (accumalatedQuantity, cartProduct) =>
        accumalatedQuantity + cartProduct.quantity,
      0
    )
);

export const cartTotalValueSelector = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce(
      (accumulattedValue, cartProduct) =>
        accumulattedValue +
        cartProduct.quantity * cartProduct.cartProductDetails.price,
      0
    )
);

export const cartShippingCostSelector = createSelector(
  [cartTotalValueSelector],
  (cartTotalValueSelector) => (cartTotalValueSelector > 2000 ? 0 : 100)
);
