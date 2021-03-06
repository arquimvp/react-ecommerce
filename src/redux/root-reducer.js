import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import { productsReducer } from "./products/products.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
