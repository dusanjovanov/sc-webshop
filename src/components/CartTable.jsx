import React from "react";
import CartTableRow from "./CartTableRow";
import classes from "./css/CartTable.module.css";
import { arrayOfProducts as products } from "../data.json";

const CartTable = ({ items }) => {
  const totalPrice = items.reduce((total, item) => {
    return (
      total + item.quantity * products.find(p => p.name === item.name).price
    );
  }, 0);

  return (
    <table style={{ width: "100%", borderSpacing: 0 }}>
      <tbody>
        {items.map((item, idx) => (
          <CartTableRow key={idx} item={item} rowNumber={idx + 1} />
        ))}
        <tr className={classes.totalRow}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className={classes.totalText}>TOTAL:</td>
          <td></td>
          <td className={classes.totalPrice}>
            &euro;{Number(totalPrice).toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
