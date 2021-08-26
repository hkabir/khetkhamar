import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./new.scss";
import React from "react";
import { RouteApp } from "./Route/RouteApp";
//import { ProductList } from "./Component/Products/ProductList";
import { BrowserRouter } from "react-router-dom";
//import { HomePages } from "./pages/HomePages";

const App = () => {
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  );
};

export default App;
