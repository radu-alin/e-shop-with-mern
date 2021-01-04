export const cartAddItemUtil = (cartItems, item) => {
  const existItemInCart = cartItems.find((cartItem) => {
    return cartItem.productId === item._id;
  });

  if (existItemInCart) {
    return cartItems.map((cartItem) =>
      cartItem.productId === item._id
        ? {
            productId: item._id,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [
    ...cartItems,
    {
      productId: item._id,
      quantity: 1,
    },
  ];
};

export const cartModifyQuantityForItemUtil = (
  cartItems,
  cartItemSelectedId,
  quantitySelected
) => {
  console.log('cartItemsUtils - ', cartItems);
  console.log('cartItemSelectedUtils - ', cartItemSelectedId);
  console.log('quantityUtils - ', quantitySelected);
  const cartItemsUpdated = cartItems.map((cartItem) =>
    cartItem.productId === cartItemSelectedId
      ? {
          productId: cartItem.productId,
          quantity: quantitySelected,
        }
      : cartItem
  );

  return [
    ...cartItemsUpdated.filter((cartItemUpdated) => cartItemUpdated.quantity > 0),
  ];
};
