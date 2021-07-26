import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Banner } from "./Component/Banner";
import { Featured } from "./Component/Featured/Featured";
import { NavBar } from "./Component/NavBar.jsx";
import { Products } from "./Component/Products/Products";
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Featured />
      <Products />
    </>
  );
}

export default App;
