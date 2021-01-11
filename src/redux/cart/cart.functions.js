export const addProductToCart = (cartProducts, cartProductToAdd) => {
  return [...cartProducts, { ...cartProductToAdd, quantity: 1 }];
};

export const removeProductFromCart = (cartProducts, cartProductToRemove) => {
  return [...cartProducts, { ...cartProductToAdd, quantity: -1 }];
};
