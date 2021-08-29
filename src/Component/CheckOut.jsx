import React from "react";
import { useGlobalContext } from "../reducer/cartContext";
//import { AddressForm } from "./AddressForm";
//mport { Cart } from "../Component/Cart/Cart";
export const CheckOut = () => {
  const { openModal } = useGlobalContext();
  return (
    <>
      <main>
        <div className="container">
          <div className="row justify-content-lg-start row-space-top">
            <div className="checkout">
              <h1>checkout</h1>

              <div className="address ">
                <div className="sel-address">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Select a delivery Address</span>
                </div>

                <div className="new-address">
                  <i class="fas fa-plus" onClick={openModal}></i>
                  <span>Add Address</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
