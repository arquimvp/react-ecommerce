import CartActionTypes from "./cart.types";

export const addProduct = (product) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload: product,
});
