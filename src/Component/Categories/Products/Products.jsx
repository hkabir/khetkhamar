import React from "react";
import { useGlobalContext } from "../../../reducer/cartContext";
import { BiBasket } from "react-icons/bi";
import { FaShoppingBag, FaPlus, FaMinus } from "react-icons/fa";

export const Product = (props) => {
  const { productname, productprice, productweight, id, image } = props;
  const product = {
    productname,
    productprice,
    productweight,
    id,
    image,
  };
  const {
    addToCart,
    handleCart,
    totalAmount,

    cartItems,
    quantity,
    decrementItem,
    incrementItem,
  } = useGlobalContext();

  //console.log(products);
  const isInCart = (id) => {
    return !!cartItems.find((item) => item.id === id);
  };
  return (
    <>
      <div className="col-lg-3 col-6 product-cart" key={id}>
        <img src={image} alt="" className="packshot" />
        <h3 className="product-title">{productname}</h3>
        <span className="product-weight">{productweight} pc(s)</span>
        <span className="product-price">${productprice}</span>
        {isInCart(id) && (
          <div className="product-plus-minus">
            <FaPlus
              onClick={() => incrementItem(id)}
              className="btn-cart-plus"
            />
            <span>{quantity}</span>
            <FaMinus
              onClick={() => decrementItem(id)}
              className="btn-cart-plus-minus"
            />
            <span>{}</span>
          </div>
        )}

        {!isInCart(id) && (
          <button
            type="button"
            className="btn-cart btn-card"
            value="Cart"
            onClick={() => addToCart(product)}
          >
            <i>
              <BiBasket className="fa-cart" />
            </i>
            Cart
          </button>
        )}
      </div>

      <div className="cart-bag" onClick={handleCart}>
        <span className="items">
          <FaShoppingBag className="c-box" />
          {cartItems.length} items
        </span>
        <span className="total">${totalAmount}</span>
      </div>
    </>
  );
};
