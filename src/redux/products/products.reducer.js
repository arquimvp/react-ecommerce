import ProductsActionTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
};

export function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return { 
        ...state, 
        products: state.products.concat(action.payload)
      };
    default:
      return state;
  }
}
