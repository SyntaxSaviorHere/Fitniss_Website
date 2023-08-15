import { createContext, useContext, useState } from "react";

const CartPriceContext = createContext();

export const CartPriceContextProvider = ({ children }) => {
  const [cartPrices, setCArtPrices] = useState([]);

  const addPrice = (price) => {
    setCArtPrices((prevCart) => [...prevCart, price]);
  };

  return (
    <CartPriceContext.Provider value={{ cartPrices, addPrice }}>
      {children}
    </CartPriceContext.Provider>
  );
};

export const usePrice = () => {
  return useContext(CartPriceContext);
};
