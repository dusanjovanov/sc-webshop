import React from "react";
import classes from "./css/Quantity.module.css";

const Quantity = ({ quantity, increment, decrement }) => {
  return (
    <div className={classes.root}>
      <button className={classes.button} onClick={decrement}>
        -
      </button>
      <div className={classes.quantity}>{quantity}</div>
      <button className={classes.button} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Quantity;
