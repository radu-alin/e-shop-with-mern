export const userUpdateLocalStorageUtil = (user) =>
  localStorage.setItem('cartProducts', JSON.stringify(user));

export const cartProductsFromLocalStorageUtil = (user) =>
  localStorage.getItem(user) ? JSON.parse(localStorage.getItem(user)) : null;
