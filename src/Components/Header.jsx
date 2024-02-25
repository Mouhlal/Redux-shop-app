import React from "react";
import { Link } from "react-router-dom";
import "../Components/Header.css";

export default function Header({ cart }) {
  return (
    <div className="headernav">
      <div className="nav-all">
        <nav className="navbar">
          <h3 className="title">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Akram Shoop
            </Link>{" "}
          </h3>
          <ul className="nav-links">
            <li>
              {" "}
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <h3>Home</h3>
              </Link>{" "}
            </li>
            <ul>
              <h3>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/cart"
                >
                  <i className="bi bi-cart-plus-fill">({cart.length})</i>
                </Link>{" "}
              </h3>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}
