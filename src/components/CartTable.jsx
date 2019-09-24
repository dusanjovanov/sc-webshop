import React from "react";
import CartTableRow from "./CartTableRow";
import { arrayOfProducts as products } from "../data.json";
import classes from "./css/CartTable.module.css";

const CartTable = () => {
  return (
    <table style={{ width: "100%", borderSpacing: 0 }}>
      <tbody>
        {products.map((product, idx) => (
          <CartTableRow key={idx} product={product} rowNumber={idx + 1} />
        ))}
        <tr className={classes.totalRow}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className={classes.totalText}>TOTAL:</td>
          <td></td>
          <td className={classes.totalPrice}>&euro;10000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
