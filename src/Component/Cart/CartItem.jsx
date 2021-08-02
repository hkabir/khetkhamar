import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../../Context";

export const CartItem = ({
  productname,
  productprice,
  image,
  quantity,
  id,
}) => {
  const { removeItem } = useGlobalContext();
  return (
    <div className="cart-item">
      <div className="quantity">
        <FaPlus />
        <span>{quantity}</span>
        <FaMinus />
      </div>
      <img src={image} alt="img" className="cart-img" />
      <span className="cart-pname">{productname}</span>
      <span className="cart-pprice">${productprice}</span>
      <i>
        <AiFillDelete onClick={() => removeItem(id)} />
      </i>
    </div>
  );
};
