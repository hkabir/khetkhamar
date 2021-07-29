import React from "react";
import { useGlobalContext } from "../../Context";

export const Product = () => {
  const { products } = useGlobalContext();
  return (
    <div className="  col-lg-3 col-6" key={products.id}>
      <img src={products.image} alt="" className="packshot" />
      <h3 className="product-title">{products.productname}</h3>
      <span className="product-weight">{products.productweight} pc(s)</span>
      <span className="product-price">${products.productprice}</span>
      <button type="button" class="btn-cart" value="Cart">
        Cart
      </button>
    </div>
  );
};
