import React, { useContext } from "react";
import { arrayOfProducts as products } from "../data.json";
import classes from "./css/Product.module.css";
import { CartContext } from "../context/CartContext";

const Product = ({ match }) => {
  const { addItem } = useContext(CartContext);

  const productName = match.params.name.replace(/-/g, " ");
  const product = products.find(p => p.name === productName);

  const onClickAddToCart = () => addItem(product);

  return (
    <div className="page">
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
              onClick={onClickAddToCart}
              <span role="img" aria-label="cart">
                🛒
              </span>{" "}
              Add to cart
            </button>
            <div className={classes.price}>
              &euro;{Number(product.price).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
