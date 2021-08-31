import React from "react";
import banner from "../../asset/images/home banner.jpg";
export const Banner = () => {
  return (
    <div className="row justify-content-md-center">
      <img src={banner} alt="" className="hero" />
    </div>
  );
};
