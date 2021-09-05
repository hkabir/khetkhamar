import React from "react";

import { useGlobalContext } from "../../reducer/cartContext";
//import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const { category, filterCategory} = useGlobalContext();
  const params = new URLSearchParams(window.location.search).toString()
  return (
    <div className="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0  pb-sm-0 pb-3">
      <div className="bg-light border rounded-3 p-1 h-100 ">
        <h6 className="d-none d-sm-block text-muted">Categories</h6>
        <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
          {category.map((item) => {
            console.log('Rendered')
            if(item.parent_id === 0){
              return (
                <li className="nav-item" key={item.id} data-toggle="collapse" data-target={`#submenu${item.id}`}>
                  <a
                    className="nav-link px-2 text-truncate"
                    onClick={() => filterCategory(item.id)}
                  >
                    <img
                      src={`https://khetkhamar.org/public/${
                        item.banner_img ? item.banner_img.file_name : ""
                      }`}
                      className="category-icon"
                    />
                    <span className="d-none d-sm-inline category-link">
                      {item.name}
                    </span>
                  </a>
                  { (item.children_categories.length > 0) &&
                    <ul id={`submenu${item.id}`} className={`collapse ${params.split('=')[1] === item.id ? 'show' : ''}`}>
                      {
                        item.children_categories.map(item => (
                          <li className="nav-item" key={item.id}>
                            <a 
                              className="nav-link px-2 text-truncate"
                              onClick={() => filterCategory(item.id)}
                            >{item.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  }
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  );
};