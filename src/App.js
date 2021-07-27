import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { ProductList } from "./Component/Products/ProductList";
import { Banner } from "./Component/Banner";
import { Featured } from "./Component/Featured/Featured";
import { NavBar } from "./Component/NavBar.jsx";
import ProductsData from "./ProductsData";
import { CategoriesPRoduct } from "./Component/Categories/CategoriesPRoduct";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Featured />
      <ProductList products={ProductsData} />
      <CategoriesPRoduct />
    </>
  );
}

export default App;
