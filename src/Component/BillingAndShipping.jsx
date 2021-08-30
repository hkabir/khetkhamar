import React from "react";
import { useGlobalContext } from "../reducer/cartContext";

export const BillingAndShipping = () => {
  const { cartItems, openModal } = useGlobalContext();
  return (
    <div>
      <main>
        <div className="container">
          <div className="row justify-content-md-center row-space-top">
            <div className="checkout">
              <h1>checkout</h1>

              <div className="address ">
                <h1>Billing address</h1>
                <div className="sel-address">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Select a delivery Address</span>
                </div>
                <div className="ex-addres">
                  <i class="fas fa-check-circle"></i>
                  <p>{""}</p>
                  <span>edit</span>
                </div>
                <div className="new-address">
                  <i class="fas fa-plus" onClick={openModal}></i>
                  <p>New Address</p>
                </div>
              </div>

              <div className="address ">
                <h1>shipping address</h1>
                <div className="sel-address">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Select a delivery Address</span>
                </div>
                <div className="ex-addres">
                  <i class="fas fa-check-circle"></i>
                  <p>{""}</p>
                  <span>edit</span>
                </div>
                <div className="new-address">
                  <i class="fas fa-plus" onClick={openModal}></i>
                  <p>New Address</p>
                </div>
              </div>
            </div>
            <div className="justify-content-md-end row-space-top">
              <div className="order">
                <h1>Your order</h1>
                {cartItems.map((item) => {
                  return (
                    <div className="p-price" key={item.id}>
                      <span className="cart-pname">{item.name}</span>
                      <span className="cart-pprice">{item.unit_price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
