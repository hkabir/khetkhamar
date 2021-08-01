import React from "react";
import { useGlobalContext } from "../../Context";
import { BiBasket } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";

export const Product = () => {
  const { products, addToCart, handleCart } = useGlobalContext();
  //console.log(products);

  return (
    <>
      <section className="sec">
        <div className="container-fluid">
          <div className="row justify-content-md-center row-space-top">
            {products.map((item) => {
              return (
                <div className="col-lg-3 col-6 product-cart" key={item.id}>
                  <img src={item.image} alt="" className="packshot" />
                  <h3 className="product-title">{item.productname}</h3>
                  <span className="product-weight">
                    {item.productweight} pc(s)
                  </span>
                  <span className="product-price">${item.productprice}</span>
                  <button
                    type="button"
                    className="btn-cart btn-card"
                    value="Cart"
                  >
                    <i>
                      <BiBasket className="fa-cart" />
                    </i>
                    Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div className="cart-bag" onClick={handleCart}>
            <span className="items">
              <FaShoppingBag className="c-box" />1 item
            </span>
            <span className="total">$2.00</span>
          </div>
        </div>
      </section>
    </>
  );
};
