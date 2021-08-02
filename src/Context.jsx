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
    setCartItems((items) => {
      const itemIndex = items.findIndex((currItem) => currItem.id === id);
      if (itemIndex === -1) {
        return [
          ...items,
          {
            ...item,
            quantity: 1,
          },
        ];
      } else {
        return items.map((currItem) =>
          currItem.id === id
            ? {
                ...item,
                quantity: parseInt(currItem.quantity) + 1,
              }
            : currItem
        );
      }
    });
  };

  const totalPrice = cartItems.reduce(
    (sum, cur) => sum + cur.productprice * cur.quantity,
    0
  );

  const totalItem = cartItems.reduce((sum, cur) => sum + cur.quantity, 0);

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
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
        totalPrice: totalPrice,
        // eslint-disable-next-line no-dupe-keys
        addToCart: addToCart,
        totalItem: totalItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
