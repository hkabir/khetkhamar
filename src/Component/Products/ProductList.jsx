import React, { useEffect, useState } from "react";
import { Product } from "./Products";
//import axios from "axios";
import axiosInstance from "../../helper/axios";
//import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../reducer/cartContext";
//import { CartItem } from "../Cart/CartItem";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { item, category } = useGlobalContext();

  useEffect(() => {
    getProducts();
  }, [item]);

  const getProducts = () => {
    axiosInstance
      .get(`/products/category/${item ? item : 122}?page=1`)
      .then(
        ({
          data: {
            data: { data },
          },
        }) => {
          setProducts(data);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center row-space-top">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
