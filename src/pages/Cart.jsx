import React from "react";
import CartTable from "../components/CartTable.jsx";
import classes from "./css/Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Your cart</h1>
      <CartTable />
    </div>
  );
};

export default Cart;
