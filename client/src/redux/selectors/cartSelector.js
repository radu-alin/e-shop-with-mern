import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartItemsIdAndQuantitySelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItemsIdAndQuantity
);

export const cartItemsIdSelector = createSelector(
  [cartItemsIdAndQuantitySelector],
  (cartItems) => cartItems.map((cartItem) => cartItem.productId)
);

export const cartItemsCountSelector = createSelector(
  [cartItemsIdAndQuantitySelector],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const cartItemsDetailSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItemsDetail
);

export const cartItemsDetailAndCartQuantitySelector = createSelector(
  [cartItemsDetailSelector, cartItemsIdAndQuantitySelector],
  (cartItemsDetail, cartItemsQuantity) => {
    const newItemsArray = cartItemsQuantity.map((cartItemQuantity) => {
      const a = cartItemsDetail.find(
        (cartItemDetail) => cartItemDetail._id === cartItemQuantity.productId
      );
      return { ...a, cartQuantity: cartItemQuantity.quantity };
    });
    return newItemsArray;
  }
);

export const cartProductsTotalValueSelector = createSelector(
  [cartItemsDetailAndCartQuantitySelector],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.cartQuantity * cartItem.price,
      0
    )
);

export const cartShippingCostSelector = createSelector(
  [cartProductsTotalValueSelector],
  (cartTotalValueSelector) => (cartTotalValueSelector > 2000 ? 0 : 100)
);

export const cartCheckoutTotalValueSelector = createSelector(
  [cartProductsTotalValueSelector, cartShippingCostSelector],
  (cartProductsTotalValueSelector, cartShippingCostSelector) =>
    cartProductsTotalValueSelector + cartShippingCostSelector
);
