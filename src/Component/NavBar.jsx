import React from "react";
import logo from "../asset/images/logo2.png";
import { Link } from "react-router-dom";

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
            <a
              className="nav-link dropdown-toggle"
              href="cat"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {category.map((item) => {
                return (
                  <a
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => caItem(item.id)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="ta"
              tabindex="-1"
              aria-disabled="true"
            >
              Express
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cat">
              Jumma Fiesta{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cat">
              Ezelo
            </a>
          </li>
        </ul>
      </div>
      <div>
        <i className="fas fa-sync-alt"></i>
        Compare
        <i className="far fa-heart la-2x"></i> Wishlist
      </div>
    </nav>
  );
};
