import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    // Wrap your code inside a DOMContentLoaded event listener
    document.addEventListener("DOMContentLoaded", function () {
      // Get DOM elements after the component has rendered
      const menu = document.querySelector("#menu-icon");
      const navbar = document.querySelector(".navbar__menu");

      // Add a click event listener to the menu
      menu.onclick = () => {
        menu.classList.toggle("active");
        navbar.classList.toggle("right-open");
      };
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      const menu = document.querySelector("#menu-icon");
      if (menu) {
        // menu.removeEventListener("click", handleMenuClick);
      }
    };
  }, []);

  // Conditionally render the navigation bar based on the current route
  const shouldShowNav = location.pathname !== "/dashboard";

  return shouldShowNav ? (
    <header>
      <nav className="navbar container">
        <NavLink>ideal media productions</NavLink>
        <div className="navbar__menu">
          <ul className="navbar__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink exact to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
          <div className="navbar__buttons">
            <NavLink to="/login" className="navbar__buttons-login">Login</NavLink>
            <button className="navbar__buttons-register">
             <NavLink to="/register"> Register</NavLink>
            </button>
          </div>
        </div>
        <div className="demo">
          <div id="menu-icon" className="menu">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
        </div>
      </nav>
    </header>
  ) : null;
};

export default Nav;
