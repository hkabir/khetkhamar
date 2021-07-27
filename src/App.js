import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import React, { usestate, useEffect } from "react";
import "./App.scss";
import { ProductList } from "./Component/Products/ProductList";
import { Banner } from "./Component/Banner";
import { Featured } from "./Component/Featured/Featured";
import { NavBar } from "./Component/NavBar.jsx";
import ProductsData from "./ProductsData";
import { CategoriesPRoduct } from "./Component/Categories/CategoriesPRoduct";

const App = () => {
  //const [products, setProducts] = usestate([...ProductsData]);
  // const [keyword, setKeyword] = usestate("");

  // useEffect(() => {
  //  const result = ProductsData.filter((product) =>
  //  product.productname.includes(keyword)
  // );
  // setProducts(result);
  //}, [keyword, setProducts]);

  return (
    <>
      <NavBar />
      <Banner />
      <Featured />
      <ProductList products={ProductsData} />
      <CategoriesPRoduct />
    </>
  );
};

export default App;
