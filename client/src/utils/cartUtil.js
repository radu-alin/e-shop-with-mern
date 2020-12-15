export const cartAddProductUtil = (cartProducts, productToAdd) => {
  const cartContainProductToAdd = cartProducts.find(
    (cartProduct) => cartProduct._id === productToAdd._id
  );

  if (cartContainProductToAdd) {
    return cartProducts.map((cartProduct) =>
      cartProduct._id === productToAdd._id
        ? {
            _id: cartProduct._id,
            quantity: cartProduct.quantity + 1,
            cartProductDetails: {
              ...productToAdd,
              quantity: cartProduct.quantity + 1,
            },
          }
        : cartProduct
    );
  }

  return [
    ...cartProducts,
    {
      _id: productToAdd._id,
      quantity: 1,
      cartProductDetails: { ...productToAdd, quantity: 1 },
    },
  ];
};

export const cartDecreaseProductUtil = (cartProducts, productToDecrease) => {
  const cartProductsUpdated = cartProducts.map((cartProduct) =>
    cartProduct._id === productToDecrease._id
      ? {
          _id: cartProduct._id,
          quantity: cartProduct.quantity - 1,
          cartProductDetails: {
            ...productToDecrease,
            quantity: cartProduct.quantity - 1,
          },
        }
      : cartProduct
  );

  return cartProductsUpdated.filter((cartProduct) => cartProduct.quantity > 0);
};

export const cartUpdateLocalStorageUtil = (cartProducts) =>
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

export const cartProductsFromLocalStorageUtil = (cartProducts) =>
  localStorage.getItem(cartProducts)
    ? JSON.parse(localStorage.getItem(cartProducts))
    : [];
