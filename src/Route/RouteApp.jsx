import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePages } from "../pages/HomePages.jsx";
import { ProductList } from "../Component/Categories/Products/ProductList.jsx";

export const RouteApp = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Route path="/productList/:category_id" component={ProductList} />
      </Switch>
    </>
  );
};
