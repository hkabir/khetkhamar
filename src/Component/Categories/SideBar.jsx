import React from "react";

import { useGlobalContext } from "../../reducer/cartContext";
//import { Link } from "react-router-dom";

export const SideBar = () => {
  const { category, caItem } = useGlobalContext();

  // const { category_id } = useParams();
  // const {item,}
  return (
    <div class="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
      <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
        <h6 className="d-none d-sm-block text-muted">Categories</h6>
        <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
          {category.map((item) => {
            //const { category_id } = item;
            // const {
            //  banner_img: { file_name },
            // } = item;
            return (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link px-2 text-truncate"
                  onClick={() => caItem(item.id)}
                >
                  <img
                    src={`https://khetkhamar.org/public/${
                      item.banner_img ? item.banner_img.file_name : ""
                    }`}
                    alt=""
                    className="category-icon"
                  />
                  <span className="d-none d-sm-inline category-link">
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
