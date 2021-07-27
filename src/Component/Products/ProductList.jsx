import React from "react";
import { Product } from "./Products";

export const ProductList = ({ products }) => {
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
