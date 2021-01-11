import React, { Component } from "react";

import { connect } from "react-redux";

import Collection from "../../components/collection/collection.component";

import { getProducts } from "../../redux/products/products.actions";

class ShoppingPage extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const collections = this.props.products;

    return <div className="shop">{<Collection products={collections} />}</div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
  };
}

export default connect(mapStateToProps, { getProducts })(ShoppingPage);
