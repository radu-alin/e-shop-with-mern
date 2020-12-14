export const cartAddProductUtils = (cartProducts, productToAdd) => {
  const cartContainProductToAdd = cartProducts.find(
    (cartProduct) => cartProduct._id === productToAdd._id
  );

  if (cartContainProductToAdd) {
    return cartProducts.map((cartProduct) =>
      cartProduct._id === productToAdd._id
        ? {
            _id: cartProduct._id,
            quantity: cartProduct.quantity + 1,
            cartProductDetails: { ...productToAdd },
          }
        : cartProduct
    );
  }

  return [
    ...cartProducts,
    { _id: productToAdd._id, quantity: 1, cartProductDetails: { ...productToAdd } },
  ];
};