import ProductsActionTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
  page: 1,
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
    case ProductsActionTypes.INCREASE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
}
