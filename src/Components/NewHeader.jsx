import React, { useEffect, useState } from "react";
import "../styles/All.css";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import "bootstrap-icons/font/bootstrap-icons.css";

const NewHeader = () => {
  // State for mobile nav active class
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  // State for scroll top button visibility
  const [isScrolled, setScrolled] = useState(false);

  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    console.log(index)
  };

  // Function to toggle mobile navigation
  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  // Function to close mobile nav on link click
  const handleLinkClick = () => {
    if (isMobileNavActive) {
      toggleMobileNav();
    }
  };

  // Scroll event listener for adding .scrolled class
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  console.log(dropdownStates)
  return (
    <body className={`index-page ${isMobileNavActive && "mobile-nav-active"}`}>
      <header
        id="header"
        className={`header d-flex align-items-center sticky-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="text-decoration-none logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 className="sitename">CHECKERS</h1>
          </a>

          <nav id="navmenu" className={`navmenu ${isMobileNavActive && "mobile-nav-active"} `}>
            <ul>
              <li>
                <Link to="/" className="active" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="dropdown" onClick={(e)=>{ e.preventDefault();  toggleDropdown(0)}}>
                <a href="#">
                  <span>Categories</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className={dropdownStates[0] && "dropdown-active"} >
                  <li>
                    <a href="#">Snacks</a>
                  </li>
                  <li className="dropdown" onClick={(e)=>{ e.preventDefault(); e.stopPropagation();  toggleDropdown(1)}}>
                    <a href="/#">
                      <span>Drinks</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul className={dropdownStates[1] && "dropdown-active"}>
                      <Link to="/Products?Categories=Beer">
                        Beer
                      </Link>
                      <Link to="/Products?Categories=Wine">
                        Wine
                      </Link>
                      <Link to="/Products?Categories=Soda">
                        Soda
                      </Link>
                      <Link to="/Products?Categories=energyDrinks">
                        Energy Drinks
                      </Link>
                      <Link to="/Products?Categories=Water">
                        Water
                      </Link>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Vapes</a>
                  </li>
                  <li>
                    <a href="#">Cigarettes</a>
                  </li>
                  <li>
                    <a href="#">Tobacco</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/What'sNew" onClick={handleLinkClick}>
                  What's New
                </Link>
              </li>
              <li>
                <Link to="/Deals" onClick={handleLinkClick}>
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/#events" onClick={handleLinkClick}>
                  Events
                </Link>
              </li>
              
              <li>
                <Link to="/#gallery" onClick={handleLinkClick}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/#contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
            <i
              onClick={() => setMobileNavActive(!isMobileNavActive)}
              className={`mobile-nav-toggle d-xl-none bi ${!isMobileNavActive ? "bi-list" : "bi-x"}`}
            ></i>
          </nav>

          <a className="btn-getstarted" href="index.html#book-a-table">
            <RxAvatar size={32} color="white" />
          </a>
        </div>
      </header>
    </body>
  );
};

export default NewHeader;
