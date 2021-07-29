import React, { useState, useContext, useEffect } from "react";
import ProductsData from "./ProductsData";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([...ProductsData]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const result = products.filter((product) =>
      product.productname.includes(keyword)
    );
    setProducts(result);
  }, [keyword]);

  // const addToCart=()=>{}

  return (
    <AppContext.Provider value={{ products, setKeyword: setKeyword }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
