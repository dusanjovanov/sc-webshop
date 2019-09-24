import React, { useContext } from "react";
import classes from "./css/NavbarCart.module.css";
import { CartContext } from "../context/CartContext";

const NavbarCart = () => {
  const { items } = useContext(CartContext);

  const numOfItems = items.length;

  return (
    <div className={classes.root}>
      <div className={classes.numOfItems}>{numOfItems}</div>
    </div>
  );
};

export default NavbarCart;
