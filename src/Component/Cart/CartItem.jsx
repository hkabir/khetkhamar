import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export const CartItem = ({ productname, productprice, image }) => {
  return (
    <div className="cart-item">
      <div className="quantity">
        <FaPlus />
        <span>1</span>
        <FaMinus />
      </div>
      <img src={image} alt="img" className="cart-img" />
      <span className="cart-pname">{productname}</span>
      <span className="cart-pprice">{productprice}</span>
      <i>
        <AiFillDelete />
      </i>
    </div>
  );
};
