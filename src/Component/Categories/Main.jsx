import React from "react";
import ProductsData from "../../ProductsData";

export const Main = () => {
  return (
    <div className="col overflow-auto h-100">
      <div className="bg-light border rounded-3 p-3">
        <div className="row justify-content-md-center">
          {ProductsData.map((item) => {
            const { image, id } = item;
            return (
              <div className="col-lg-3 col-6" key={id}>
                <img src={image} alt="" className="packshot" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
