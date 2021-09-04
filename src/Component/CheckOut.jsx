import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../reducer/cartContext";
//import axios from "axios";
import axiosInstance from "../helper/axios";
import { reactLocalStorage } from "reactjs-localstorage";

export const CheckOut = () => {
  const [editItem, setEditItem] = useState({});
  const [formData, setFormData] = useState();

  //const [successs, setSuccesss] = useState(false);
  const {
    cartItems, 
    totalAmount
    
  } = useGlobalContext();
  //console.log("token",gettoken)
  //const { user } = gettoken;

  const [shippinM] = useState({
    shipping_message: "shipping_message",
    shipping_cost: 30,
  });

  console.log("to", formData);
  const temTotal = totalAmount + shippinM.shipping_cost;
  // useEffect(() => {
  //   const tempToken = reactLocalStorage.getObject("token");
  //   console.log("token", tempToken);
  // }, [gettoken]);
  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = () => {
    axiosInstance
      .get(
        `/addresses/billing_address/${
          reactLocalStorage.getObject("token").user.id
        }`,
        {
          headers: {
            Authorization: `Bearer ${
              reactLocalStorage.getObject("token").token
            }`,
          },
        }
      )
      .then(
        ({
          data: {
            data: { data },
          },
        }) => {
          setFormData(data);
          //  console.log("get", data);
        }
      )
      .catch((error) => {
        console.log(error);
      });

    //  setFormData(data);
  };

  //*edit item*
  const updateAddress = (e) => {
    e.preventDefault();
    axiosInstance
      .post(
        "/address/update",
        {
          id: editItem.id,
          address_type: "billing_address",
          address: editItem.address,
          country: editItem.country,
          city: editItem.city,
          postal_code: editItem.postal_code,
          phone: editItem.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${
              reactLocalStorage.getObject("token").token
            }`,
          },
        }
      )
      .then((data) => {
        getAddress();
        setEditItem({});
      });
  };
  //*delete*
  const deleteAddress = (i) => {
    axiosInstance
      .delete(`/address/delete/${i.id}`, {
        headers: {
          Authorization: `Bearer ${reactLocalStorage.getObject("token").token}`,
        },
      })
      .then((data) => {
        getAddress();
      })
      .catch(() => {});
  };

  //*Order place*
  const placeOrder = () => {
    axiosInstance
      .post(
        "/place-order",
        {
          payment_type: "cash_on_delivery",
         grand_total: temTotal,
          shipping_cost: shippinM.shipping_cost,
          shipping_message: shippinM.shipping_message,
          address: "formData.address",
           city: "formData.city",
           postal_code: "formData.postal_code",
           country: "formData.country",
          cart: cartItems.map((item) => {
            return {
              seller_id: 10,
              product_id: item.id,
              price: item.unit_price,
              quantity: item.quantity,
            };
          }),
        },
        {
          headers: {
            Authorization: `Bearer ${
              reactLocalStorage.getObject("token").token
            }`,
          },
        }
      )
      .then(({ data: { data } }) => {
        // setSuccesss(true);
        //alert("order place");
        alert("Order placed");
      });
  };
  // const editAddress=(i)=>{
  // console.log("i",i);
  // }

  return (
    <>
     <div className="main--wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
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

            <div className="col-12 col-md-9 py-4">
              <h1 className="page-title m-0 mb-3">Checkout</h1>

              <div className="card">
                <div className="card-header">
                  <i className="fas fa-map-marker-alt mr-1" aria-hidden="true"></i> Shipping Address <small>(Please Select only one! shipping address)</small>
                </div>

                {
                 formData?formData.map((i)=>{
                   return( <div class="card-body d-flex align-items-center justify-content-between">
                   <div className="custom-control custom-radio shipping-address  pl-5">
                     <input type="radio" id="shippingAddress" name="shippingAddress" className="custom-control-input" />
                     <label className="custom-control-label" for="shippingAddress" key={i.id}>
                     {i ? i.address : ""}<br />
                     {i ? i.city : ""}<br />
                     {i ? i.country : ""}<br />
                     {i ? i.postal_code : ""}
                     </label>
 
                   </div>
 
                   <div className="edit--section px-3">
                     <button  onClick={()=>setEditItem(i)}><i className="far fa-edit mr-1" aria-hidden="true" ></i> Edit</button>
                     <button className="ml-2" onClick={()=>deleteAddress(i)}><i class="far fa-trash-alt mr-1" ></i> Delete</button>
                   </div>
                 </div>)
                 }):""
                }

                <div class="card-footer p-0">
                  <button className="add-new p-3 d-block w-100">+ Add New Address</button>
                </div>

              </div>

              <div className="card mt-4">
                <div className="card-header">
                  <i className="far fa-credit-card mr-1" aria-hidden="true"></i> Payment Method <small>(Please select only one! payment method)</small>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="payment--methods p-4 h-100 d-flex align-items-center">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="cashOnDelivery" name="paymentMethod" className="custom-control-input" />
                          <label className="custom-control-label" for="cashOnDelivery">Cash On delivery</label>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="payment--methods p-4 h-100 d-flex align-items-center">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="payOnCard" name="paymentMethod" className="custom-control-input" />
                          {/* <label class="custom-control-label" htmlFor="payOnCard"><img src={paymentImg} className="payment-img img-fluid" alt="Payment Methods" /></label> */}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <main>
        <div className="container">
          <div className="row justify-content-md-center row-space-top">
            <div className="checkout">
          

              
              {editItem.id && (
                <form onSubmit={updateAddress}>
                  <input
                    type="text"
                    defaultValue={editItem.address}
                    onChange={(e) =>
                      setEditItem({ ...editItem, address: e.target.value })
                    }
                    className="form-control"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    defaultValue={editItem.city}
                    onChange={(e) =>
                      setEditItem({ ...editItem, city: e.target.value })
                    }
                    className="form-control"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    defaultValue={editItem.country}
                    onChange={(e) =>
                      setEditItem({ ...editItem, country: e.target.value })
                    }
                    className="form-control"
                    placeholder="Country"
                  />
                  <input
                    type="number"
                    defaultValue={editItem.postal_code}
                    onChange={(e) =>
                      setEditItem({ ...editItem, postal_code: e.target.value })
                    }
                    className="form-control"
                    placeholder="Postal code"
                  />
                  <button className="btn btn-success">Update</button>
                </form>
              )}
            </div>
            <div className="justify-content-md-end row-space-top">
              
            </div>
          </div>
          <div className="plc_order btn-group mt-3">
            <button onClick={placeOrder} className="btn" type="submit">
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
