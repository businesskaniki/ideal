import React, { useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  useEffect(() => {
    // Get DOM elements after the component has rendered
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar__menu");

    // Add a click event listener to the menu
    menu.onclick = () => {
      menu.classList.toggle("active");
      navbar.classList.toggle("right-open");
    };

    // Clean up the event listeners when the component unmount
  }, []);

  return (
    <header>
      <nav class="navbar container">
        <NavLink>ideal media productions</NavLink>
        <div class="navbar__menu">
          <ul class="navbar__list">
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
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
          <div class="navbar__buttons">
            <NavLink class="navbar__buttons-login">Login</NavLink>
            <button class="navbar__buttons-register" href="#">
              Register
            </button>
          </div>
        </div>
        <div class="demo">
          <div id="menu-icon" class="menu">
            <span class="bar1"></span>
            <span class="bar2"></span>
            <span class="bar3"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
