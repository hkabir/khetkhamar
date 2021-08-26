import React, { useEffect, useState } from "react";
import { Product } from "./Products";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { useGlobalContext } from "../../../reducer/cartContext";
//import { CartItem } from "../Cart/CartItem";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category_id } = useParams();
  // console.log("id", category_id);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(
        `https://api.khetkhamar.org/api/react/products/category/?${category_id}?page=1`
      )
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
