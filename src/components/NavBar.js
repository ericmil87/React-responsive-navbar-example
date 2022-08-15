import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // This is the CSS Style file for the NavBar

// EDIT HERE YOUR LINKS
export const NavBarLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Your Logo
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {NavBarLinks.map((navlink) => (
              <li className="nav-item">
                <NavLink
                  exact
                  to={navlink.href}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {navlink.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
