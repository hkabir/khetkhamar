import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../../reducer/cartContext";

export const CartItem = ({
  productname,
  productprice,
  image,
  id,
  price,
  quantity,
}) => {
  const { removeItem, incrementItem, decrementItem } = useGlobalContext();
  return (
    <div className="cart-item">
      <div className="quantity">
        <FaPlus onClick={() => incrementItem(id)} />
        <span>{quantity}</span>
        <FaMinus onClick={() => decrementItem(id)} />
      </div>
      <img src={image} alt="img" className="cart-img" />
      <div className="p-price">
        <span className="cart-pname">{productname}</span>
        <span className="cart-pprice">
          ${productprice} x {quantity}
        </span>
      </div>
      <span className="cart-pprice">${price}</span>
      <i>
        <AiFillDelete onClick={() => removeItem(id)} />
      </i>
    </div>
  );
};
