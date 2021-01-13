import API from "../http-provider";

import ProductsActionTypes from "./products.types";

const myApi = new API({
  url: "https://node-red-nxdup.mybluemix.net/productos",
});

export const getProducts = (categoria, page) => {
  return (dispatch) => {
    myApi.createEntity({ name: "camisa" });
    myApi.endpoints.camisa.getOne({ id: page }).then((response) => {
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS,
        payload: response.data.data.products,
      });
    });
  };
};

export const increasePage = () => ({
  type: ProductsActionTypes.INCREASE_PAGE,
});

export const removeProductFromProducts = (product) => ({
  type: ProductsActionTypes.REMOVE_PRODUCT_FROM_PRODUCTS,
  payload: product,
});
