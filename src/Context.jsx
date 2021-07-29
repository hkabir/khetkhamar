import React, { useState, useContext } from "react";
import ProductsData from "./ProductsData";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductsData);

  // const [keyword, setKeyword] = usestate("");

  // useEffect(() => {
  //  const result = ProductsData.filter((product) =>
  //  product.productname.includes(keyword)
  // );
  // setProducts(result);
  //}, [keyword, setProducts]);

  // const addToCart=()=>{}

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
