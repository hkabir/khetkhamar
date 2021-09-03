import React from "react";

import { useGlobalContext } from "../../reducer/cartContext";
//import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const { category, caItem } = useGlobalContext();
  //const { children_categories } = category;
  // console.log("child", category.children_categories);

  return (
    <div className="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0  pb-sm-0 pb-3">
      <div className="bg-light border rounded-3 p-1 h-100 ">
        <h6 className="d-none d-sm-block text-muted">Categories</h6>
        <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
          {category.map((item) => {
            if(item.parent_id !== 0){
              // const { children_categories } = item;
              return (
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target="#submenu"
                  key={item.id}
                >
                  <a
                    className="nav-link px-2 text-truncate"
                    onClick={() => caItem(item.id, item.name)}
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
            }
          })}
        </ul>
      </div>
    </div>
  );
};
