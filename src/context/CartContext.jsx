import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(); // You only need to import `createContext` once

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
