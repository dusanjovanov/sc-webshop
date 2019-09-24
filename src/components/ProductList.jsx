import React from "react";
import ProductListItem from "./ProductListItem";
import data from "../data.json";
import classes from "./css/ProductList.module.css";
const products = data.arrayOfProducts;

const ProductList = () => {
  return (
    <div className={classes.root}>
      {products.map((product, idx) => (
        <ProductListItem key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
