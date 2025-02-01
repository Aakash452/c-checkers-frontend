import React, { useState } from "react";
import { PiRocketThin } from "react-icons/pi";
import vapes_image from "../images/vapes.jpg";
import mainPoster from "../images/Geekbar-poster.png";
import { MdOutlineMotionPhotosOn } from "react-icons/md";
import "../styles/HomePage.css";
import myImg from '../img/gallery/gallery-1.jpg'
import myImg2 from '../img/gallery/gallery-2.jpg'
import myImg3 from '../img/gallery/gallery-3.jpg'
import myImg4 from '../img/gallery/gallery-4.jpg'
import myImg5 from '../img/gallery/gallery-5.jpg'
import myImg6 from '../img/gallery/gallery-6.jpg'
import Gallery from "./Gallery";
import Contact from "./Contact";
import img1 from "../img/menu/menu-item-1.png"
import img2 from "../img/menu/menu-item-2.png"
import img3 from "../img/menu/menu-item-3.png"
import img4 from "../img/menu/menu-item-4.png"
import img5 from "../img/menu/menu-item-5.png"
import img6 from "../img/menu/menu-item-6.png"


function NewHomePage() {

const [categoryTitle, setCategoryTitle] = useState('Vapes');



const galleryImages = [
  myImg, myImg2, myImg3 , myImg4, myImg5, myImg6
];

  const MenuTab = ({ id, title }) => {
    const itemId = `menu-${categoryTitle}`
  return (
    <div className={`tab-pane fade ${id === itemId  ? 'active show' : ''}`} id={id}>
      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>{title}</h3>
      </div>

      <div className="row gy-5">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div className="col-lg-4 menu-item" key={item}>
            <a href={img1} className="glightbox">
              <img src={img1} className="menu-img img-fluid" alt="" />
            </a>
            <h4>Item {item}</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">${(Math.random() * 10 + 5).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
  return (
    <div className="main">
      {/* Hero Section */}

      <section id="hero" className="hero section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="main-heading" data-aos="fade-up">
                GEEKBAR PULSE <br /> <span>MAY THE PULSE BE WITH YOU</span>{" "}
              </h1>

              <div
                className="d-flex mt-2 justify-content-around"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button className="custom-button d-flex flex-direction-row">
                  <div className="icon">
                    <MdOutlineMotionPhotosOn size={40} />
                  </div>
                  <div className="typography-text">
                    REGULAR MODE <br /> 15000 PUFFS
                  </div>
                </button>
                <button className="custom-button d-flex flex-direction-row">
                  <div className="icon">
                  <PiRocketThin size={40} />
                  </div>
                  <div className="typography-text">
                  PULSE MODE <br /> 7500 PUFFS
                  </div>
                </button>
               
              </div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img src={mainPoster} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="menu" className="menu section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Categories</h2>
        <p><span>Check Our</span> <span className="description-title">Top Products</span></p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className={`nav-link ${categoryTitle === "Vapes" && "active show"}`}data-bs-toggle="tab" data-bs-target="#menu-Vapes" onClick={()=>setCategoryTitle("Vapes")}>
              <h4>Vapes</h4>
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${categoryTitle === "Cigarette" && "active show"}`} data-bs-toggle="tab" data-bs-target="#menu-Cigarette" onClick={()=>setCategoryTitle("Cigarette")}>
              <h4>Cigarette</h4>
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${categoryTitle === "Beer" && "active show"}`} data-bs-toggle="tab" data-bs-target="#menu-Beer" onClick={()=>setCategoryTitle("Beer")}>
              <h4>Beer</h4>
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${categoryTitle === "Wine" && "active show"}`} data-bs-toggle="tab" data-bs-target="#menu-Wine" onClick={()=>setCategoryTitle("Wine")}>
              <h4>Wine</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          <MenuTab id="menu-Vapes" title="Vapes" />
          <MenuTab id="menu-Cigarette" title="Cigarette" />
          <MenuTab id="menu-Beer" title="Beer" />
          <MenuTab id="menu-Wine" title="Wine" />
        </div>
      </div>
    </section>

    {/* Gallery Section */}

    <Gallery galleryImages={galleryImages} />
    <Contact/>
    
    </div>
  );
}

export default NewHomePage;
