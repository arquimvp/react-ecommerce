import React from "react";

import Product from "../product/product.component";

import "./collection.styles.css";

const Collection = ({ products }) => (
  <div className="collection">
    <h1 className="title">Algo</h1>
    <div className="preview">
      {products
        .map((product) => (
          <Product key={product.ID} product={product} />
        ))}
    </div>
  </div>
);

export default Collection;