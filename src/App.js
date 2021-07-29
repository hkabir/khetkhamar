import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import React from "react";
//import { ProductList } from "./Component/Products/ProductList";
import { Banner } from "./Component/Banner";
import { Featured } from "./Component/Featured/Featured";
import { NavBar } from "./Component/NavBar.jsx";
import { CategoriesPRoduct } from "./Component/Categories/CategoriesPRoduct";
import { Product } from "./Component/Products/Products";

//import { HomePages } from "./pages/HomePages";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Featured />
      <Product />
      <CategoriesPRoduct />
    </>
  );
};

export default App;
