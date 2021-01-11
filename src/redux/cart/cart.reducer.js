import CartActionTypes from "./cart.types";
import { addProductToCart, removeProductFromCart } from "./cart.functions";

const INITIAL_STATE = {
  cartProducts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: addProductToCart(state.cartProducts, action.payload),
      };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: removeProductFromCart(state.cartProducts, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
