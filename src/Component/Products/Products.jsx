import React from "react";
import { useGlobalContext } from "../../Context";
import { BiBasket } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";

export const Product = ({
  image,
  productname,
  productprice,
  id,
  productweight,
}) => {
  const { addToCart, handleCart, totalPrice, totalItem } = useGlobalContext();
  //console.log(products);

  return (
    <>
      <div className="col-lg-3 col-6 product-cart" key={id}>
        <img src={image} alt="" className="packshot" />
        <h3 className="product-title">{productname}</h3>
        <span className="product-weight">{productweight} pc(s)</span>
        <span className="product-price">${productprice}</span>
        <button
          type="button"
          className="btn-cart btn-card"
          value="Cart"
          onClick={() => addToCart(id)}
        >
          <i>
            <BiBasket className="fa-cart" />
          </i>
          Cart
        </button>
      </div>

      <div className="cart-bag" onClick={handleCart}>
        <span className="items">
          <FaShoppingBag className="c-box" />
          {totalItem} items
        </span>
        <span className="total">${totalPrice}</span>
      </div>
    </>
  );
};
