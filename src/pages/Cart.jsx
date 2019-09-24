import React, { useContext } from "react";
import CartTable from "../components/CartTable.jsx";
import classes from "./css/Cart.module.css";
import { CartContext } from "../context/CartContext.jsx";

const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Your cart</h1>
      {items.length === 0 ? (
        <div>You don't have any products in your cart.</div>
      ) : (
        <>
          <CartTable items={items} />
          <div className={classes.checkoutContainer}>
            <button className="button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
