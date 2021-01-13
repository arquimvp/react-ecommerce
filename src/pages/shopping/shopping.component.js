import React, { Component } from "react";

import { connect } from "react-redux";

import Collection from "../../components/collection/collection.component";

import { getProducts } from "../../redux/products/products.actions";
import { increasePage } from "../../redux/products/products.actions";

class ShoppingPage extends Component {
  componentDidMount = () => {
    document
      .querySelector(".collection__products")
      .addEventListener("scroll", this.infiniteScroll);
    this.props.getProducts(null, this.props.page);
  };

  infiniteScroll = () => {
    const v1 =
      document.querySelector(".collection__products").scrollHeight -
      document.querySelector(".collection__products").offsetHeight;
    const v2 = document.querySelector(".collection__products").scrollTop;

    if (v2 === v1) {
      this.props.increasePage();
      this.props.getProducts(null, this.props.page);
    }
  };

  render() {
    const collections = this.props.products;
    return <div className="shop">{<Collection products={collections} />}</div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
    page: state.products.page,
  };
}

export default connect(mapStateToProps, { getProducts, increasePage })(
  ShoppingPage
);
