import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import React from "react";
//import { ProductList } from "./Component/Products/ProductList";

import { HomePages } from "./pages/HomePages";

const App = () => {
  return (
    <>
      <HomePages />
    </>
  );
};

export default App;
