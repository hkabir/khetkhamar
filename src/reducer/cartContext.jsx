import React, { useState, useContext, useReducer, useEffect } from "react";
//import ProductsData from "../ProductsData";
import axios from "axios";
import { cartReducer } from "./cartReducer";

const AppContext = React.createContext();

const initialState = {
  totalAmount: 0,
  quantity: 1,
  cartItems: [],
};

export const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(" https://api.khetkhamar.org/api/react/categories?page=1")
      .then(
        ({
          data: {
            data: { data },
          },
        }) => {
          //console.log("category", data);
          setCategory(data);
        }
      )
      .catch((error) => {});
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartItems]);

  const handleCart = () => {
    setOpenCart(true);
  };
  const cartOpen = () => {
    setOpenCart(true);
  };
  const cartClose = () => {
    setOpenCart(false);
  };
  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const incrementItem = (id) => {
    return dispatch({
      type: "INCREMENTITEM",
      payload: id,
    });
  };

  const decrementItem = (id) => {
    return dispatch({
      type: "DECREMENTITEM",
      payload: id,
    });
  };
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  return (
    <AppContext.Provider
      value={{
        category,

        ...state,
        removeItem,
        decrementItem,
        incrementItem,
        addToCart,
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
