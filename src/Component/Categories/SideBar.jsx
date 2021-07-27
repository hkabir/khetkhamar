import React from "react";

export const SideBar = () => {
  return (
    <div className="row flex-grow-sm-1 flex-grow-0">
      <div className="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
        <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
          <h6 className="d-none d-sm-block text-muted">Categories</h6>
          <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-truncate">
                <i className="bi bi-house fs-4"></i>
                <span className="d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-truncate">
                <i className="bi bi-speedometer fs-4"></i>
                <span className="d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-truncate">
                <i className="bi bi-card-text fs-4"></i>
                <span className="d-none d-sm-inline">Orders</span>{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-truncate">
                <i className="bi bi-bricks fs-4"></i>
                <span className="d-none d-sm-inline">Products</span>{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-truncate">
                <i className="bi bi-people fs-4"></i>
                <span className="d-none d-sm-inline">Customers</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
