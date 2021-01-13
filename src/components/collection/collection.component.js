import React from "react";

import { connect } from "react-redux";

import Product from "../product/product.component";
import { addProduct } from "../../redux/cart/cart.actions";
import { removeProductFromProducts } from "../../redux/products/products.actions";

import "./collection.styles.css";

const onDragStart = (ev, product) => {
  ev.dataTransfer.setData("product", JSON.stringify(product));
};

const onDrop = (ev, addProduct, removeProductFromProducts) => {
  const product = JSON.parse(ev.dataTransfer.getData("product"));
  addProduct(product);
  removeProductFromProducts(product);
};

const onDragOver = (ev) => {
  ev.preventDefault();
};

const Collection = ({ products, addProduct, removeProductFromProducts }) => (
  <div className="collection">
    <div
      className="collection__bucket"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, addProduct, removeProductFromProducts)}
    >
      <h2 className="collection__bucket--dnd">Arrastra aquí tus productos</h2>
      <img
        src="../../assets/cart.svg"
        alt="product"
        className="collection__bucket--image"
      />
    </div>
    <div className="collection__products">
      {products.map((product) => (
        <div
          key={product.ID}
          draggable="true"
          onDragStart={(e) => onDragStart(e, product)}
        >
          <Product key={product.ID} product={product} />
        </div>
      ))}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProductFromProducts: (product) =>
    dispatch(removeProductFromProducts(product)),
});

export default connect(null, mapDispatchToProps)(Collection);
