import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import { FaShoppingBag } from "react-icons/fa";

export const Cart = () => {
  const { openCart, cartClose } = useGlobalContext();

  return (
    <CartWrapper show={openCart} onClick={cartClose}>
      <div className="cart-top">
        <span className="items">
          <FaShoppingBag className="c-box" />1 item
        </span>
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
  .cart-top {
    margin-top: 20px;
    margin-left: 30px;
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
`;
