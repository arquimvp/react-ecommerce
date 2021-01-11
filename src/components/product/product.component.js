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
    <Card className="collection-item">
      <CardContent>
        <img className="image" src={product.IMAGE} alt="product" style={{ width: "50%" }} />
      </CardContent>
      <CardContent className="collection-footer">
        <Typography variant="body2" color="textSecondary" >
          Descripcion: {product.DESCRIPTION}
        </Typography>
        <Typography variant="body2" color="textSecondary" >
          Precio: {product.PRICE}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShoppingCart fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
