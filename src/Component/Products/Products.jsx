import React from "react";

export const Product = ({
  id,
  image,
  product,
  productweight,
  productprice,
}) => {
  return (
    <div className="  col-lg-3 col-6" key={id}>
      <img src={image} alt="" className="packshot" />
      <h3 className="product-title">{product}</h3>
      <span className="product-weight">{productweight} pc(s)</span>
      <span className="product-price">${productprice}</span>
      <button type="button" class="btn-cart" value="Cart">
        Cart
      </button>
    </div>
  );
};
