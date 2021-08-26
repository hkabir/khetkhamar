//import { Banner } from "../Component/Banner";
//import { Featured } from "../Component/Categories/Featured/Featured";
import { NavBar } from "../Component/NavBar.jsx";
import { CategoriesPRoduct } from "../Component/Categories/CategoriesPRoduct";
//import { Product } from "../Component/Products/Products";
import { Cart } from "../Component/Cart/Cart";
//import { ProductList } from "../Component/Categories/Products/ProductList";

export const HomePages = () => {
  return (
    <>
      <NavBar />
      <Cart />
      <CategoriesPRoduct />
    </>
  );
};
