import React from "react";
import classes from "./css/NavbarCart.module.css";

const NavbarCart = () => {
  const numberOfItems = 3;

  return (
    <div className={classes.root}>
      <div className={classes.cartText}>🛒</div>
      <div className={classes.numOfItems}>{numberOfItems}</div>
    </div>
  );
};

export default NavbarCart;
