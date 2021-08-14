import React from "react";
import img1 from "../../asset/images/icon/carrot.svg";
import img2 from "../../asset/images/icon/bogo.svg";
import img3 from "../../asset/images/icon/night.svg";
import img4 from "../../asset/images/icon/express-delivery.svg";
import img5 from "../../asset/images/icon/daily.svg";

export const SideBar = () => {
  return (
    <div class="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
      <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
        <h6 className="d-none d-sm-block text-muted">Categories</h6>
        <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-truncate">
              <img
                src={img1}
                alt="Organic & Natural<"
                className="category-icon"
              />
              <span className="d-none d-sm-inline category-link">
                Organic & Natural
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-truncate">
              <img
                src={img2}
                alt="Organic & Natural<"
                className="category-icon"
              />
              <span className="d-none d-sm-inline category-link">BOGO</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-truncate">
              <img
                src={img5}
                alt="Organic & Natural<"
                className="category-icon"
              />
              <span className="d-none d-sm-inline category-link">
                Midnight Express
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-truncate">
              <img
                src={img3}
                alt="Organic & Natural<"
                className="category-icon"
              />
              <span className="d-none d-sm-inline category-link">
                Morning Express - Uttara
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-truncate">
              <img
                src={img4}
                alt="Organic & Natural"
                className="category-icon"
              />
              <span className="d-none d-sm-inline category-link">
                Morning Express - Daily
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
