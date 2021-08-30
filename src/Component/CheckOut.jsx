import React from "react";
import { useGlobalContext } from "../reducer/cartContext";

export const CheckOut = () => {
  const { cartItems, formData, totalAmount } = useGlobalContext();
  console.log("carti", cartItems);

  return (
    <>
      <main>
        <div className="container">
          <div className="row justify-content-md-center row-space-top">
            <div className="checkout">
              <h1>checkout</h1>

              <div className="address ">
                <h1>address</h1>
                <div className="sel-address">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Select a delivery Address</span>
                </div>
                <div className="ex-addres">
                  <h1>billing address</h1>
                  <i class="fas fa-check-circle"></i>
                  <p>
                    {formData ? formData.address : ""},
                    {formData ? formData.country : "bangladesh"},
                    {formData ? formData.city : "dhaka"},
                    {formData ? formData.postal_code : "1234"}
                  </p>
                  <span>edit</span>
                </div>
                <div className="ex-addres">
                  <h1>shipping address</h1>
                  <i className="fas fa-check-circle"></i>
                  <p>partex guli rayer bazar, dhaka</p>
                  <span>edit</span>
                </div>
              </div>
            </div>
            <div className="justify-content-md-end row-space-top">
              <div className="order">
                <h1>Your order</h1>
                {cartItems.map((item) => {
                  return (
                    <div className="p-price" key={item.id}>
                      <div className="cart-pname">
                        <span>{item.name}</span>
                      </div>

                      <div className="cart-pprice">
                        <span>{item.unit_price}</span>
                      </div>

                      <span>{item.quantity}</span>
                      <span>{}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="plc_order">
            <button>Proceed</button>
            <button>{totalAmount}</button>
          </div>
        </div>
      </main>
    </>
  );
};
