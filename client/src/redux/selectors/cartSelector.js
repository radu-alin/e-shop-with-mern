import { createSelector } from 'reselect';

const cartItemsIdAndQuantity = (state) =>
  state.cartItemsIdAndQuantity.cartItemsIdAndQuantity;

export const cartItemsIdSelector = createSelector(
  [cartItemsIdAndQuantity],
  (cartItems) => cartItems.map((cartItem) => cartItem.productId)
);

export const cartItemsCountSelector = createSelector(
  [cartItemsIdAndQuantity],
  (cartItems) =>
    cartItems && cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

const cartItemsDetail = (state) => state.cartItemsDetail.cartItemsDetail;

export const cartItemsDetailAndCartQuantitySelector = createSelector(
  [cartItemsDetail, cartItemsIdAndQuantity],
  (cartItemsDetail, cartItemsQuantity) => {
    const newItemsArray = cartItemsQuantity.map((cartItemQuantity) => {
      const a = cartItemsDetail.find(
        (cartItemDetail) => cartItemDetail._id === cartItemQuantity.productId
      );
      return {
        ...a,
        countInStock: a && a.countInStock,
        countReserved: a && cartItemQuantity.quantity,
      };
    });
    return newItemsArray;
  }
);

const selectedItemDetails = (state) => state.productSelected.productSelectedDetails;

export const productSelectedDetailsAndQuantityAvailableSelector = createSelector(
  [cartItemsIdAndQuantity, selectedItemDetails],
  (cartItems, selectedItem) => {
    if (selectedItem) {
      const selectedItemExistInCart = cartItems.find(
        (cartItem) => cartItem.productId === selectedItem._id
      );
      if (selectedItemExistInCart) {
        return {
          ...selectedItem,
          countInStock: selectedItem.countInStock - selectedItemExistInCart.quantity,
          countReserved: selectedItemExistInCart.quantity,
        };
      }
    }
    return selectedItem;
  }
);

export const cartItemsIdsNotChangedSelector = createSelector(
  [cartItemsIdSelector, cartItemsDetail],
  (cartItemsIds, cartItemsDetail) => {
    const cartItemsDetailIds = cartItemsDetail.map(
      (cartItemDetail) => cartItemDetail._id
    );

    const cartDetailsIncludeIds = (array1, array2) =>
      array1.every((el) => array2.includes(el));

    const idsArrayNotChanged = (array1, array2) => {
      if (array1.length === 0) return true;
      if (array2.length === 0) return false;
      if (array1.length === 0 && array2.length === 0) return true;
      return cartDetailsIncludeIds(array1, array2);
    };

    return idsArrayNotChanged(cartItemsIds, cartItemsDetailIds);
  }
);

export const cartProductsTotalValueSelector = createSelector(
  [cartItemsDetailAndCartQuantitySelector],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.countReserved * cartItem.price,
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
