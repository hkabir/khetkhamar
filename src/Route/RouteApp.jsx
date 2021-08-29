import React from "react";
import { Route, Switch } from "react-router-dom";
import { CheckoutPage } from "../pages/CheckoutPage.jsx";
import { HomePages } from "../pages/HomePages.jsx";
//import { ProductList } from "../Component/Categories/Products/ProductList.jsx";

export const RouteApp = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Route path="/checkoutpage" component={CheckoutPage} />
      </Switch>
    </>
  );
};
