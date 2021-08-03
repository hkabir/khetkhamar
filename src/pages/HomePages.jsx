import { Banner } from "../Component/Banner";
import { Featured } from "../Component/Featured/Featured";
import { NavBar } from "../Component/NavBar.jsx";
import { CategoriesPRoduct } from "../Component/Categories/CategoriesPRoduct";
//import { Product } from "../Component/Products/Products";
import { Cart } from "../Component/Cart/Cart";
import { ProductList } from "../Component/Products/ProductList";

export const HomePages = () => {
  return (
    <>
      <NavBar />
      <Cart />
      <Banner />
      <Featured />
      <ProductList />
      <CategoriesPRoduct />
    </>
  );
};
