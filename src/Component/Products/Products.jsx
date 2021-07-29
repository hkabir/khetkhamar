import React from "react";
import { useGlobalContext } from "../../Context";

export const Product = () => {
  const { products } = useGlobalContext();
  //console.log(products);

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row justify-content-md-center row-space-top ml-5">
            {products.map((item) => {
              return (
                <div className="col-lg-3 col-6 product-cart" key={item.id}>
                  <img src={item.image} alt="" className="packshot" />
                  <h3 className="product-title">{item.productname}</h3>
                  <span className="product-weight">
                    {item.productweight} pc(s)
                  </span>
                  <span className="product-price">${item.productprice}</span>
                  <button type="button" class="btn-cart" value="Cart">
                    Add To Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
