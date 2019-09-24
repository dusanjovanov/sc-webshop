import React, { useContext } from "react";
import classes from "./css/CartTableRow.module.css";
import Quantity from "./Quantity";
import { CartContext } from "../context/CartContext";
import { arrayOfProducts as products } from "../data.json";

const CartTableRow = ({ item, rowNumber }) => {
  const { removeItem, updateQuantity } = useContext(CartContext);
  const product = products.find(p => p.name === item.name);

  const onClickDelete = () => removeItem(product.name);
  const increaseQuantity = () => updateQuantity(item.name, item.quantity + 1);
  const decreaseQuantity = () =>
    updateQuantity(item.name, item.quantity - 1 < 1 ? 1 : item.quantity - 1);

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
          quantity={item.quantity}
          increment={increaseQuantity}
          decrement={decreaseQuantity}
        />
      </td>
      <td className={classes.times}>x</td>
      <td className={classes.price}>
        &euro;{Number(product.price).toFixed(2)}
      </td>
      <td className={classes.equals}>=</td>
      <td className={classes.total}>
        &euro;{(item.quantity * product.price).toFixed(2)}
      </td>
      <td>
        <button
          className={classes.deleteButton}
          title="Delete item"
          onClick={onClickDelete}
        >
          <span role="img" aria-label="x-mark">
            ❌
          </span>
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
