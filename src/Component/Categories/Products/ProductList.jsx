import React, { useEffect, useState } from "react";
import { Product } from "./Products";
import axios from "axios";
//import { useGlobalContext } from "../../../reducer/cartContext";
//import { CartItem } from "../Cart/CartItem";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (id) => {
    axios
      .get("https://api.khetkhamar.org/api/react/products/category/122?page=1")
      .then(
        ({
          data: {
            data: { data },
          },
        }) => {
          setProducts(data);
        }
      )
      .catch((error) => {});
  };

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
