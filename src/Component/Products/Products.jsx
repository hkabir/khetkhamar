import React from "react";
import ProductsData from "./ProductsData";

export const Products = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-md-center row-space-top">
          {ProductsData.map((item) => {
            const { id, image, product, productweight, productprice } = item;
            return (
              <div className="col-lg-3 col-6" key={id}>
                <img src={image} alt="" className="packshot" />
                <h3 className="product-title">{product}</h3>
                <span className="product-weight">{productweight} pc(s)</span>
                <span className="product-price">${productprice}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
