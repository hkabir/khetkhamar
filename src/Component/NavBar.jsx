import React from "react";
import logo from "../asset/images/logo2.png";
import { Link, NavLink } from "react-router-dom";

import { useGlobalContext } from "../reducer/cartContext";
export const NavBar = () => {
  const { category, caItem } = useGlobalContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light top-fixed">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="custom-search-input">
        <div className="input-group col-md-12">
          <input
            type="text"
            className="search-query form-control "
            placeholder="Search"
          />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="button">
              <i className="fas fa-search"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
              <span className="sr-only">Home</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {category.map((item) => {
                return (
                  <NavLink
                    to=""
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => caItem(item.id, item.name)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="" aria-disabled="true">
              Express
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" href="cat">
              Jumma Fiesta{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" href="cat">
              Ezelo
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <i className="fas fa-sync-alt ml-2"></i> Compare
        <i className="far fa-heart la-2x mr-1"></i> Wishlist
      </div>
    </nav>
  );
};
