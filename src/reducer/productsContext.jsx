import React, { useState, useContext, useReducer } from "react";
import ProductsData from "../ProductsData";

const productsContext = React.createContext();
export const AppProviderP = ({ Children }) => {
  const [products] = useState([...ProductsData]);
  return (
    <productsContext.Provider value={{ products }}>
      {Children}
    </productsContext.Provider>
  );
};
export const useGlobalContextP = () => {
  return useContext(productsContext);
};
