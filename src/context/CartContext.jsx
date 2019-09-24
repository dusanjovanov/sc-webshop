import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(cartItems);

  const addItem = product => {
    const existsInCart = items.find(i => i.name === product.name);
    if (existsInCart) return;

    const newItems = items.concat({ name: product.name, quantity: 1 });
    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const removeItem = name => {
    const itemIndex = items.findIndex(i => i.name === name);

    const newItems = [
      ...items.slice(0, itemIndex),
      ...items.slice(itemIndex + 1)
    ];
    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const updateQuantity = (name, quantity) => {
    const newItems = items.map(item => {
      if (item.name === name) return { ...item, quantity };
      else return item;
    });

    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const contextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
