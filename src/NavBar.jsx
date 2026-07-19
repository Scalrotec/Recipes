import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <img
          style={{ width: "100px", height: "50px" }}
          src="/recipe-logo.png"
          alt="Recipe"
        />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <h3>Explore More</h3>
      </nav>
    </div>
  );
};

export default NavBar;
