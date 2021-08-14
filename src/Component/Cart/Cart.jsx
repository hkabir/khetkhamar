import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../reducer/cartContext";
import { FaShoppingBag, FaWindowClose } from "react-icons/fa";
import { CartItem } from "./CartItem";
//import { Scrollbars } from "react-custom-scrollbars-2";

export const Cart = () => {
  const { openCart, cartClose, cartItems, totalAmount } = useGlobalContext();

  return (
    <CartWrapper show={openCart}>
      <div className="cart-top">
        <span className="items">
          <FaShoppingBag className="c-box" />
          {cartItems.length} Items
        </span>
        <i className="close" onClick={cartClose}>
          <FaWindowClose />
        </i>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 && (
          <div className="emp-cart">
            <div className="info">
              <div className="emp-bag">
                <FaShoppingBag />
              </div>
              <div>
                <span>cart is empty</span>
              </div>
            </div>
          </div>
        )}
        {cartItems.length !== 0 &&
          cartItems.map((item) => (
            <CartItem
              {...item}
              price={item.productprice * item.quantity}
              key={item.id}
            />
          ))}
      </div>

      <div className="cart-checkout">
        <span className="c-text">checkout</span>
        <span className="c-total">${totalAmount}</span>
      </div>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 25%;
  height: 100%;
  background: #ffff;
  z-index: 2;
  border-left: 3px solid #ffff;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease-in-out;
  @media (max-width: 1376px) {
    width: 38%;
  }
  @media (max-width: 990px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 557px) {
    width: 80%;
  }

  .cart-top {
    margin-top: 20px;
    margin-left: 30px;
    border-bottom: 2px solid grey;
  }

  .items {
    color: #308c3f;
    font-size: 30px;
    padding: 8px;
    text-transform: capitalize;
  }
  .c-box {
    color: #308c3f;
    margin-bottom: 8px;
    margin-right: 10px;
  }
  .close {
    font-size: 32px;
    color: black;
  }
  .cart-checkout {
    display: flex;
    flex-direction: row;
    background-color: #308c3f;
    width: 80%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin-left: 50px;
    margin-top: 20px;
  }
  .c-text {
    color: #ffff;
    font-size: 20px;
    text-align: center;
    margin-left: 25px;
    text-transform: capitalize;
  }
  .c-total {
    background: #ffff;
    color: black;
    width: 70px;
    margin-right: 7px;
    font-size: 23px;
    padding: 5px;
    border-radius: 10px;
    height: 40px;
    text-align: center;
  }
  .emp-cart {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span {
      font-size: 30px;
      text-transform: capitalize;
    }
  }
  .emp-bag {
    font-size: 200px;
    @media (max-width: 576px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 100px;
    }
  }
`;
