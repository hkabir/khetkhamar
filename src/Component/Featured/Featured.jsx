import React from "react";
import fData from "./FeaturedData";

export const Featured = () => {
  return (
    <section>
      <div className="row justify-content-md-center row-space-top">
        {fData.map((item) => {
          const { image } = item;
          return (
            <div className="col-lg-4">
              <img src={image} alt="" class="featured-image"></img>
            </div>
          );
        })}
      </div>
    </section>
  );
};
