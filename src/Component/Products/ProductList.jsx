import React from "react";
import { Product } from "./Products";
import { useGlobalContext } from "../../Context";

export const ProductList = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-md-center row-space-top">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
