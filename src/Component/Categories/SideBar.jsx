import React from "react";

import { useGlobalContext } from "../../reducer/cartContext";
import { Link, useParams } from "react-router-dom";

export const SideBar = () => {
  const { category } = useGlobalContext();
  const { category_id } = useParams();
  // const {item,}
  return (
    <div class="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
      <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
        <h6 className="d-none d-sm-block text-muted">Categories</h6>
        <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
          {category.map((item) => {
            // const { banner_img } = item;
            return (
              <li className="nav-item" key={item.id}>
                <Link
                  to={`/productList/${category_id}`}
                  className="nav-link px-2 text-truncate"
                >
                  <img
                    src={item.banner_img}
                    alt={""}
                    className="category-icon"
                  />
                  <span className="d-none d-sm-inline category-link">
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
