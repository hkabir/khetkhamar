import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../reducer/cartContext";
//import axios from "axios";
import axiosInstance from "../helper/axios";

export const CheckOut = () => {
  //const [successs, setSuccesss] = useState(false);
  const { cartItems, formData, totalAmount, getToken, openModal, setFormData } =
    useGlobalContext();

  const [shippinM] = useState({
    shipping_message: "shipping_message",
    shipping_cost: 30,
  });

  console.log("to", formData);
  const temTotal = totalAmount + shippinM.shipping_cost;

  // URL : https://api.khetkhamar.org/api/react/addresses/{shipping_address || billing_address}/{userId}
  // const getData = async () => {
  //   await axiosInstance
  //     .get(`/addresses/billing_address/3445`, {
  //       headers: {
  //         Authorization: `Bearer ${getToken.token}`,
  //       },
  //     })
  //     .then(
  //       ({
  //         data: {
  //           data: { data },
  //         },
  //       }) => {
  //         setFormData(data);
  //         //console.log("get", data);
  //       }
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   //setFormData(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  //const AddressEdit = (id) => {};

  //*Order place*
  // const placeOrder = () => {
  //   axiosInstance
  //     .post(
  //       "/place-order",
  //       {
  //         payment_type: "cash_on_delivery",
  //         grand_total: temTotal,
  //         shipping_cost: shippinM.shipping_cost,
  //         shipping_message: shippinM.shipping_message,
  //         address: formData.address,
  //         city: formData.city,
  //         postal_code: formData.postal_code,
  //         country: formData.country,
  //         cart: cartItems.map((item) => {
  //           return {
  //             seller_id: 10,
  //             product_id: item.id,
  //             price: item.unit_price,
  //             quantity: item.quantity,
  //           };
  //         }),
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${getToken.token}`,
  //         },
  //       }
  //     )
  //     .then(({ data: { data } }) => {
  //       setSuccesss(true);
  //       //alert("order place");
  //     });
  // };

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
                  <i className="fas fa-check-circle"></i>
                  <p>
                     {formData.map((i) => {
                      return (
                        <>
                          {i ? i.address: ""}
                          {i ? i.city : ""}
                          {i ? i.country: ""}
                          {i ? i.postal_code : ""}
                          
                        </>
                      );
                    })} 
                  </p>
                  <button>edit</button>
                </div>
              </div>
            </div>
            <div className="justify-content-md-end row-space-top">
              <div className="order">
                <h1>Your order</h1>
                {cartItems.map((item) => {
                  const price = item.unit_price * item.quantity;
                  return (
                    <div className="check-cart" key={item.id}>
                      <div className="cart-pname">{item.name}</div>

                      <div className="cart-pprice">
                        {item.unit_price}X {item.quantity}
                      </div>
                      <div className="cart-pprice">{price}৳</div>
                    </div>
                  );
                })}
                <div className="delivery">
                  <div className="cart-pname">delivery cost</div>
                  <div className="cart-pprice">{shippinM.shipping_cost}৳</div>
                </div>
                <div className="check-total">{temTotal}৳</div>
              </div>
            </div>
          </div>
          <div className="plc_order btn-group mt-3">
            <button className="btn" type="submit">
              Place Order
            </button>
            <button id="placeBtn" className="btn">
              TOTAL:{temTotal}৳
            </button>
          </div>
          <div>
            {/* {successs ? (
              <button className="btn  mt-3">order place thank you..</button>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </main>
    </>
  );
};
