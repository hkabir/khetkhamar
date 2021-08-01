import React, { useState, useContext, useEffect } from "react";
import ProductsData from "./ProductsData";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([...ProductsData]);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
  const addToCart = (id) => {
    const item = products.find((product) => product.id === id);
    setCartItems((items) => [...items, item]);
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
        cartItems: cartItems,
        // eslint-disable-next-line no-dupe-keys
        addToCart: addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
