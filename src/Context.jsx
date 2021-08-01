import React, { useState, useContext, useEffect } from "react";
import ProductsData from "./ProductsData";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([...ProductsData]);
  const [openCart, setOpenCart] = useState(false);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const result = products.filter((product) =>
      product.productname.includes(keyword)
    );
    setProducts(result);
  }, [keyword]);

  const handleCart = () => {
    setOpenCart(true);
  };
  const cartOpen = () => {
    setOpenCart(true);
  };
  const cartClose = () => {
    setOpenCart(false);
  };
  const addToCart = () => {
    console.log(alert("addtocart"));
  };

  return (
    <AppContext.Provider
      value={{
        products: products,
        setKeyword: setKeyword,
        addToCart: addToCart,
        openCart: openCart,
        cartOpen: cartOpen,
        cartClose: cartClose,
        handleCart: handleCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
