import React from "react";
import { Product } from "./Products";
import { useGlobalContext } from "../../../reducer/cartContext";
//import { CartItem } from "../Cart/CartItem";

export const ProductList = () => {
  const { products } = useGlobalContext();

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center row-space-top">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
};
