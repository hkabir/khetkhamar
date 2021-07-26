import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Banner } from "./Component/Banner";
import { Featured } from "./Component/Featured/Featured";
import { NavBar } from "./Component/NavBar.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Featured />
    </>
  );
}

export default App;
