import React from "react";
import classes from "./css/CartTableRow.module.css";
import Quantity from "./Quantity";
import { useState } from "react";

const CartTableRow = ({ product, rowNumber }) => {
  const [quantity, setQuantity] = useState(Math.ceil(Math.random() * 10));
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQUantity = () =>
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);

  return (
    <tr className={classes.root}>
      <td className={classes.rowNumber}>{rowNumber}</td>
      <td>
        <img
          className={classes.image}
          src={product.imgUrl}
          alt={product.name}
        />
      </td>
      <td className={classes.name}>{product.name}</td>
      <td className={classes.quantity}>
        <Quantity
          quantity={quantity}
          increment={incrementQuantity}
          decrement={decrementQUantity}
        />
      </td>
      <td className={classes.times}>x</td>
      <td className={classes.price}>
        &euro;{Number(product.price).toFixed(2)}
      </td>
      <td className={classes.equals}>=</td>
      <td className={classes.total}>
        &euro;{(quantity * product.price).toFixed(2)}
      </td>
      <td>
        <button className={classes.deleteButton} title="Delete item">
          ❌
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
