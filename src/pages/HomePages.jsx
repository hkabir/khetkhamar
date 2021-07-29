import { Banner } from "../Component/Banner";
import { Featured } from "../Component/Featured/Featured";
import { NavBar } from "../Component/NavBar.jsx";
import { CategoriesPRoduct } from "../Component/Categories/CategoriesPRoduct";
import { Product } from "../Component/Products/Products";

export const HomePages = () => {
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
