import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import "./product.styles.css";

export default function Product({ product }) {
  return (
    <Card className="collection-card">
      <img
        src={product.IMAGE}
        alt="product"
        className="collection-card__image"
      />
      <CardContent className="collection-card__footer">
        <Typography variant="body2" color="textSecondary">
          Descripcion: {product.DESCRIPTION}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Precio: {product.PRICE}
        </Typography>
      </CardContent>
    </Card>
  );
}
