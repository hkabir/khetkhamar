import React from "react";
import { AddressForm } from "../Component/AddressForm.jsx";
//import { BillingAndShipping } from "../Component/BillingAndShipping.jsx";
//import { AddressForm } from "../Component/AddressForm.jsx";
import { CheckOut } from "../Component/CheckOut.jsx";
import { NavBar } from "../Component/NavBar.jsx";
//import { Cart } from "../Component/Cart/Cart";
export const CheckoutPage = () => {
  return (
    <div>
      <NavBar />

      <CheckOut />
    </div>
  );
};
