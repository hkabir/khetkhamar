import React from "react";
import { FaHome, FaAddressCard, FaProductHunt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
//import { GiBrickWall } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";

export const SideBar = () => {
  return (
    <div className="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
      <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
        <h6 className="d-none d-sm-block text-muted">Categories</h6>
        <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-truncate ">
              <FaHome />

              <span className="d-none d-sm-inline ml-3">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-truncate">
              <MdDashboard />

              <span className="d-none d-sm-inline ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-truncate">
              <FaAddressCard />
              <span className="d-none d-sm-inline ml-3">Orders</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-truncate">
              <FaProductHunt />
              <span className="d-none d-sm-inline ml-3">Products</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-truncate">
              <BsFillPeopleFill />
              <span className="d-none d-sm-inline ml-3">Customers</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
