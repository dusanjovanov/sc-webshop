import React from "react";
import classes from "./css/ProductListItem.module.css";
import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
  return (
    <Link
      to={`/product/${product.name.replace(/\s/g, "-")}`}
      className={classes.root}
    >
      <div>
        <img
          className={classes.image}
          src={product.imgUrl}
          alt={product.name}
        />
      </div>
      <div className={classes.title}>
        <div className={classes.name}>{product.name}</div>{" "}
        <div className={classes.price}>&euro;{Number(product.price).toFixed(2)}</div>
      </div>
    </Link>
  );
};

export default ProductListItem;
