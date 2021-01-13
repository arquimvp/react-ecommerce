import API from "../http-provider";

import ProductsActionTypes from "./products.types";

const myApi = new API({
  url: "https://node-red-nxdup.mybluemix.net/productos",
});

export const getProducts = () => {
  return (dispatch) => {
    myApi.createEntity({ name: "camisa" });
    myApi.endpoints.camisa.getOne({id:1}).then((response) => {
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS,
        payload: response.data.data.products,
      });
    });
  };
};

export const removeProductFromProducts = (product) => ({
  type: ProductsActionTypes.REMOVE_PRODUCT_FROM_PRODUCTS,
  payload: product,
});