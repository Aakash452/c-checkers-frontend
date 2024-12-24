import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { PiRocketThin } from "react-icons/pi";
import vapes_image from "../images/vapes.jpg";
import mainPoster from "../images/Geekbar-poster.png"
import { MdOutlineMotionPhotosOn } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
      <div className="poster-content">
        {/* Main Heading */}
        <h1 className="main-heading">GEEK BAR PULSE</h1>
        <p className="sub-heading">MAY THE PULSE BE WITH YOU</p>

        {/* Buttons */}
        <div className="button-container">
          <button className="custom-button d-flex flex-direction-row">
            <div className="icon">
            <MdOutlineMotionPhotosOn size={40} />
            
            </div>
            <div className="typography-text">
            REGULAR MODE <br /> 15000 PUFFS
            </div>
            
          </button>
          <button className="custom-button">
            <div className="icon">
            <PiRocketThin size={40} />
            </div>
            PULSE MODE <br /> 7500 PUFFS
          </button>
        </div>
      </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Our Categories</h2>
        <div className="categories-container">
          <div className="categories-particular">
            <Link style={{textDecoration : "none"}} to="/products?category=vapes" className="category-card">
              <img src={vapes_image} alt="Vapes" />
              <p >Vapes</p>
            </Link>
          </div>
          <div className="categories-particular">
            <Link to="/products?category=drinks" className="category-card">
              <img src={vapes_image} alt="Vapes" />
              <p>Vapes</p>
            </Link>
          </div>
          <div className="categories-particular">
            <Link to="/products?category=cigarettes" className="category-card">
              <img src={vapes_image} alt="Vapes" />
              <p>Vapes</p>
            </Link>
          </div>
          <div className="categories-particular">
            <Link to="/products?category=cigarettes" className="category-card">
              <img src={vapes_image} alt="Vapes" />
              <p>Vapes</p>
            </Link>
          </div>
          <div className="categories-particular">
            <Link to="/products?category=cigarettes" className="category-card">
              <img src={vapes_image} alt="Vapes" />
              <p>Vapes</p>
            </Link>
          </div>
          <div className="categories-particular">
            <Link to="/products?category=cigarettes" className="category-card">
              <img src={vapes_image} alt="Vapes" />
              <p>Vapes</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions">
        <h2>Current Promotions</h2>
        <div className="promotions-container">
          <div className="promotion-card">
            <h3>Buy One Get One Free</h3>
            <p>On selected snacks. Limited time offer!</p>
            <Link to="/promotions" className="btn-secondary">
              View Deals
            </Link>
          </div>
          <div className="promotion-card">
            <h3>20% Off Drinks</h3>
            <p>Stay refreshed with our special discounts.</p>
            <Link to="/promotions" className="btn-secondary">
              View Deals
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Checkers! Our store has been serving the local community
          for years, providing top-quality snacks, beverages, and more. Visit us
          to experience convenience like never before.
        </p>
        <Link to="/about" className="btn-primary">
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
