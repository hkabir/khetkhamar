import React from "react";
import { Banner } from "../Banner";
//import { Featured } from "../Featured/Featured";
import { ProductList } from "../Products/ProductList";

export const SubMain = () => {
  return (
    <>
      <div className="col overflow-auto h-100">
        <div className="bg-light border rounded-3 p-3">
          <Banner />
          <ProductList />
        </div>
      </div>
    </>
  );
};
