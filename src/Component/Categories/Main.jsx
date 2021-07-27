import React from "react";
import ProductsData from "../../ProductsData";

export const Main = () => {
  return (
    <main class="container-fluid pb-3 flex-grow-1 d-flex flex-column flex-sm-row overflow-auto mt-5">
      <div className="col overflow-auto h-100">
        <div className="bg-light border rounded-3 p-3">
          <div className="row justify-content-md-center">
            {ProductsData.map((item) => {
              const { image } = item;
              return (
                <div className="col-lg-3 col-6">
                  <img src={image} alt="" className="packshot" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
