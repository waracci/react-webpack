import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="row row-wide">
  <div className="banner">
            <a href="/" className="logo">store-manager</a>
            <nav>
                <ul className="nav">
                    <li><NavLink to="/" id="link">home</NavLink></li>
                    <li><NavLink className="button-green" to="/login" id="link">login</NavLink></li>
                    <li><NavLink className="button-blue" to="/register" id="link">register</NavLink></li>
                </ul>
            </nav>
        </div>
  </div>
);

export default Navbar;
