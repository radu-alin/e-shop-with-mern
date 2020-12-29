export const cartAddProductUtil = (cartProducts, productToAdd) => {
  console.log('cartAddProductUtil - render()');
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

export const cartModifyQuantityProductUtil = (
  cartProducts,
  productToDecrease,
  quantitySelected
) => {
  const cartProductsUpdated = cartProducts.map((cartProduct) =>
    cartProduct._id === productToDecrease._id
      ? {
          _id: cartProduct._id,
          quantity: quantitySelected,
          cartProductDetails: {
            ...productToDecrease,
            quantity: quantitySelected,
          },
        }
      : cartProduct
  );

  return cartProductsUpdated.filter((cartProduct) => cartProduct.quantity > 0);
};
