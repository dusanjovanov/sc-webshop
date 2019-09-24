import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import classes from "./css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.root}>
      <NavLink to="/" className={classes.brand}>
        Some shop
      </NavLink>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <NavLink to="/" exact activeClassName={classes.active}>
            All products
          </NavLink>
        </li>
        <li className={`${classes.menuItem} ${classes.cart}`}>
          <NavLink to="/cart" activeClassName={classes.active}>
            🛒
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
