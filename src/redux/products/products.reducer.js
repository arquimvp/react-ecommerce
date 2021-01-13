import ProductsActionTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
};

export function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case ProductsActionTypes.REMOVE_PRODUCT_FROM_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.ID !== action.payload.ID
        ),
      };
    default:
      return state;
  }
}
