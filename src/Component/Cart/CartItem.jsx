import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../../reducer/cartContext";

export const CartItem = ({
  name,
  unit_price,
  image,
  id,
  price,
  quantity,
  upload,
}) => {
  const { removeItem, incrementItem, decrementItem } = useGlobalContext();
  return (
    <div className="cart-item">
      <div className="quantity">
        <FaPlus onClick={() => incrementItem(id)} />
        <span>{quantity}</span>
        <FaMinus onClick={() => decrementItem(id)} />
      </div>
      <img
        src={`https://khetkhamar.org/public/${upload ? upload.file_name : ""}`}
        alt="img"
        className="cart-img"
      />
      <div className="p-price">
        <span className="cart-pname">{name}</span>
        <span className="cart-pprice">
          ${unit_price} x {quantity}
        </span>
      </div>
      <span className="cart-pprice">${price}</span>
      <i>
        <AiFillDelete onClick={() => removeItem(id)} />
      </i>
    </div>
  );
};
