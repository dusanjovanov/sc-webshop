import React from "react";
import { arrayOfProducts as products } from "../data.json";
import classes from "./css/Product.module.css";

const Product = ({ match }) => {
  const productName = match.params.name.replace(/-/g, " ");
  const product = products.find(p => p.name === productName);

  return (
    <div className={classes.root}>
      <div className={classes.productRoot}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={product.imgUrl}
            alt={product.name}
          />
        </div>
        <div className={classes.right}>
          <h1 className={classes.name}>{product.name}</h1>
          <div className={classes.description}>{product.description}</div>
          <div className={classes.priceAddToCart}>
            <button className={classes.addToCartButton}><span role="img" aria-label="cart">🛒</span> Add to cart</button>
            <div className={classes.price}>€{product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
