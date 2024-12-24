import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import CSS for styling
import { IoMenu } from "react-icons/io5"; // Hamburger icon from react-icons
import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import {IconContext} from "react-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="offers-headline">Tue/Fri 2 Vapes for $25!!</div>

      <header className="header">
        <div className="header-container">
          {/* Hamburger Menu */}
          <div className="Hamberger-menu" onClick={toggleMenu}>
            <IoMenu />
          </div>

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <div className="d-flex">
                <h1>CHECKERS</h1>
                <div className="divider-space"></div>
              </div>
            </Link>
          </div>

          {/* Navigation Links (Hidden for Mobile) */}
          <div
            style={{ display: menuOpen ? "flex" : "none" }}
            className="open-navlinks"
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/promotions" onClick={() => setMenuOpen(false)}>
              Promotions
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>

          {/* For Desktop and Default size */}

          <nav className="nav-links">
            <nav className="nav-links">
              {/* Dropdown Section */}
              <div className="dropdown d-flex align-items-center">
                <span
                  className="dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Categories
                </span>

                {dropdownOpen && (
                  <div className="categories-dropdown">
                    <a href="/categories/vapes" className="categories-item">
                      Vapes
                    </a>
                    <a href="/categories/drinks" className="categories-item">
                      Drinks
                    </a>
                    <a href="/categories/cigars" className="categories-item">
                      Cigars
                    </a>
                    <a href="/categories/beers" className="categories-item">
                      Beers
                    </a>
                    <a href="/categories/wines" className="categories-item">
                      Wines
                    </a>
                  </div>
                )}
              </div>
            </nav>

            <Link to="/products">What's New</Link>
            <Link to="/promotions">Deals</Link>
          </nav>

          {/* Search and Cart */}
          <div className="header-actions d-flex">
            <div className="searchbar">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            
            <div className="header-icons d-flex align-items-center">
              <RxAvatar size={32} />
            </div>
            <div className="header-icons d-flex align-items-center">
              <CiShoppingCart size={32} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
