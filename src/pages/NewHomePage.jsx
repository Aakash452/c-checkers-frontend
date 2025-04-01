import React, { useState, useEffect } from "react";
import { PiRocketThin } from "react-icons/pi";
import vapes_image from "../images/vapes.jpg";
import mainPoster from "../images/Geekbar-poster.png";
import { MdOutlineMotionPhotosOn } from "react-icons/md";
import "../styles/HomePage.css";
import myImg from "../img/gallery/gallery-1.jpg";
import myImg2 from "../img/gallery/gallery-2.jpg";
import myImg3 from "../img/gallery/gallery-3.jpg";
import myImg4 from "../img/gallery/gallery-4.jpg";
import myImg5 from "../img/gallery/gallery-5.jpg";
import myImg6 from "../img/gallery/gallery-6.jpg";
import Gallery from "./Gallery";
import Contact from "./Contact";
import img1 from "../img/menu/menu-item-1.png";
import img2 from "../img/menu/menu-item-2.png";
import img3 from "../img/menu/menu-item-3.png";
import img4 from "../img/menu/menu-item-4.png";
import img5 from "../img/menu/menu-item-5.png";
import img6 from "../img/menu/menu-item-6.png";
import { useNavigate } from "react-router-dom";

function NewHomePage() {
  const [categoryTitle, setCategoryTitle] = useState("Vapes");
  const [products, setProducts] = useState([]);
  const galleryImages = [myImg, myImg2, myImg3, myImg4, myImg5, myImg6];
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query as a URL parameter
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/category/${categoryTitle}`
        );
        const data = await response.json();
        setProducts(data); // Store products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call API whenever categoryTitle changes
  }, [categoryTitle]); // ✅ Runs whenever categoryTitle updates

  console.log(products);

  const MenuTab = ({ id, title }) => {
    const itemId = `menu-${categoryTitle}`;
    return (
      <div
        className={`tab-pane fade ${id === itemId ? "active show" : ""}`}
        id={id}
      >
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>{title}</h3>
        </div>

        <div className="row gy-5">
          {products.map((item) => (
            <div className="col-lg-4 menu-item" key={item}>
              <a
                href={`http://localhost:5000/api/products/image/${item.category}/${item.Image}`}
                className="glightbox"
              >
                <img
                  src={`http://localhost:5000/api/products/image/${item.category}/${item.Image}`}
                  className="menu-img img-fluid"
                  alt=""
                />
              </a>
              <h4>{item.name}</h4>
              <p className="ingredients">{item.brand}</p>
              <p className="price">${item.price}</p>
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
              {/* <h1 className="main-heading" data-aos="fade-up">
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
               
              </div> */}

              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Discover the latest vape
                <br />
                products and accessories for a Satisfying experience
              </h1>
              <p
                style={{
                  color: "#666",
                  fontSize: "1.1rem",
                  marginBottom: "2rem",
                }}
              >
                Explore by type, brand or special promotions
              </p>
              <div className="row g-2 align-items-center">
                <div className="col-8 col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products..."
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "10px",
                      fontSize: "1rem",
                    }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="col-4 col-md-3">
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#f25022",
                      color: "white",
                      padding: "0.75rem 0.5rem",
                      marginBottom: "0px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
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
      {/* <section id="menu" className="menu section">
      
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Categories</h2>
          <p>
            <span>Check Our</span>{" "}
            <span className="description-title">Top Products</span>
          </p>
        </div>
     

        <div className="container">
          <ul
            className="nav nav-tabs d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li className="nav-item">
              <a
                className={`nav-link ${
                  categoryTitle === "Vapes" && "active show"
                }`}
                data-bs-toggle="tab"
                data-bs-target="#menu-Vapes"
                onClick={() => setCategoryTitle("Vapes")}
              >
                <h4>Vapes</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  categoryTitle === "Cigarette" && "active show"
                }`}
                data-bs-toggle="tab"
                data-bs-target="#menu-Cigarette"
                onClick={() => setCategoryTitle("Cigarette")}
              >
                <h4>Cigarette</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  categoryTitle === "Beer" && "active show"
                }`}
                data-bs-toggle="tab"
                data-bs-target="#menu-Beer"
                onClick={() => setCategoryTitle("Beer")}
              >
                <h4>Beer</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  categoryTitle === "Wine" && "active show"
                }`}
                data-bs-toggle="tab"
                data-bs-target="#menu-Wine"
                onClick={() => setCategoryTitle("Wine")}
              >
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
      </section> */}

      <section className="container py-5">
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span>View our</span>{" "}
            <span className="description-title">Top Catgories</span>
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {[
            {
              title: "Vapes",
              img: "https://assets.api.uizard.io/api/cdn/stream/c61959ce-d2b3-4df5-b4ed-c874150c044b.png",
            },
            {
              title: "Beers",
              img: "https://assets.api.uizard.io/api/cdn/stream/79571eef-9e27-4e4c-8952-c07b627dd86f.png",
            },
            {
              title: "Cigars",
              img: "https://assets.api.uizard.io/api/cdn/stream/de5269ba-b981-4de1-b7ac-3042a680ca0d.png",
            },
            {
              title: "Specials",
              img: "https://assets.api.uizard.io/api/cdn/stream/47c60a65-de24-46c3-8163-ea99d667d03d.png",
            },
            {
              title: "Trending",
              img: "https://assets.api.uizard.io/api/cdn/stream/d0e01454-17d1-4d36-9286-0cb0f58f4a1e.png",
            },
            {
              title: "New",
              img: "https://assets.api.uizard.io/api/cdn/stream/577c46a0-3193-40e7-9bfe-e89463525f64.png",
            },
          ].map((item, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div
                className="text-center p-3"
                style={{
                  backgroundColor: "#ffe4dc",
                  borderRadius: "25px",
                  cursor: "pointer",
                  height: "100%",
                }}
              >
                <h5 className="fw-bold">{item.title}</h5>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="container section-title" data-aos="fade-up">
          <p>
            
            <span>View our</span>{" "}
            <span className="description-title">Top Deals</span>
          </p>
        </div>
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-3">
            {/* Hot Deals */}
            <h5 className="fw-bold mb-3">
              <i className="bi bi-fire"></i> Hot Deals
            </h5>

            {/* Deal Card */}
            <div
              className="bg-light p-4 rounded-4 mb-4 text-center"
              style={{ backgroundColor: "#ffe4dc" }}
            >
              <h6 className="fw-bold">Vape Juices</h6>
              <small className="text-muted">Special Deal</small>
              <div className="position-relative my-3">
                <img
                  src="https://assets.api.uizard.io/api/cdn/stream/ae345e6c-8084-473c-932e-9da77a847d2c.png"
                  alt="Vape Juice"
                  className="img-fluid"
                />
                <span
                  className="position-absolute top-0 end-0 badge bg-danger rounded-circle p-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  20% OFF
                </span>
              </div>
              <button className="btn btn-danger rounded-pill px-4">
                Shop Now
              </button>
            </div>

            {/* New Arrivals */}
            <div
              className="bg-light p-4 rounded-4 mb-4 text-center"
              style={{ backgroundColor: "#ffe4dc" }}
            >
              <h6 className="fw-bold">New Arrivals</h6>
              <small className="text-muted">
                Introducing the latest products
              </small>
              <div className="position-relative my-3">
                <img
                  src="https://cdn11.bigcommerce.com/s-cqs1f8aicj/images/stencil/1280x1280/products/1382/5146/ASWDCFAWSSADFC17350677372762024-12-24-19-15-30zGboy__59864.1737418152.png?c=1"
                  alt="New Arrival"
                  className="img-fluid"
                />
                <span
                  className="position-absolute top-0 end-0 badge bg-danger rounded-circle p-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  20% OFF
                </span>
              </div>
              <button className="btn btn-danger rounded-pill px-4">
                Explore
              </button>
            </div>

            {/* Timer Box */}
           
          </div>

          {/* Right Column */}
          <div className="col-lg-9">
            {/* Featured Items */}
            <h5 className="fw-bold mb-3">
              <i className="bi bi-fire"></i> Featured Items
            </h5>
            <div className="row g-3">
              {[
                {
                  name: "Premium Vapes",
                  price: "$4.99",
                  img: "https://media.istockphoto.com/id/2150689227/photo/layout-of-colorful-disposable-electronic-cigarettes-on-a-blue-background-the-concept-of.jpg?s=612x612&w=0&k=20&c=U-6u-OU04etR-67hxQBOcTukXhGqMPgop2PZvWilR0U=",
                },
                {
                  name: "Kratom & Herbal",
                  price: "$4.99",
                  img: "https://assets.thehansindia.com/h-upload/2025/03/28/1537175-kronivextrader-64-evo-review-2025-scam-or-legit-crypto-trading-platform-quick-trades-3.webp",
                },
                {
                  name: "Nicotine Pouches",
                  price: "$4.99",
                  img: "https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/bf6bf508-945e-4957-86dc-c2778d769060",
                },
                {
                  name: "Alcoholic Beverages",
                  price: "$9.99",
                  img: "https://images.wsj.net/im-866372?width=1280&size=1",
                },
                {
                  name: "Smoking Accessories",
                  price: "$9.99",
                  img: "https://smartcdn.gprod.postmedia.digital/thegrowthop/wp-content/uploads/2019/11/1a_GettyImages-908314840-scaled-2560-e1573158116507.jpg?quality=90&strip=all&w=288&h=216&sig=ZvA_IEzAitARRnUIy3Cbcg",
                },
                {
                  name: "Snacks & Essentials",
                  price: "$0.99",
                  img: "https://snackezy.com.au/cdn/shop/collections/usa_treats_sep2024.png?v=1728514265",
                },
              ].map((item, i) => (
                <div className="col-6 col-md-4" key={i}>
                  <div className="card border-0 shadow-sm">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title small fw-bold">{item.name}</h6>
                      <p className="mb-1 text-muted">
                        {" "}
                        Starting at <b>{item.price || "--"}</b>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Collections */}
            <h5 className="fw-bold my-4">
              <i className="bi bi-hand-index-thumb"></i> Featured Collections
            </h5>
            {/* image: 'https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxDaWdhciUyQyUyMFdoaXNrZXl8ZW58MXx8fHwxNzQzMjA3MjYzfDA&ixlib=rb-4.0.3&q=80&w=1080', */}

            <div className="row g-3">
              {/* Roll Your Own */}
              <div className="col-md-6">
                <div className="position-relative overflow-hidden rounded-4">
                  {/* Background Image with Opacity */}
                  <img
                    src="https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxDaWdhciUyQyUyMFdoaXNrZXl8ZW58MXx8fHwxNzQzMjA3MjYzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                    className="img-fluid rounded-4"
                    alt="Roll Your Own"
                    style={{ opacity: 0.6 }}
                  />
                  {/* Overlay Content */}
                  <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h5 className="fw-bold text-dark mb-2">Roll Your Own</h5>
                    <p className="text-dark mb-2">
                      Papers, filters & fresh blends your way.
                    </p>
                    <button className="btn btn-danger btn-sm px-3 rounded-pill">
                      Discover
                    </button>
                  </div>
                </div>
              </div>

              {/* Fountain Sips */}
              <div className="col-md-6">
                <div className="position-relative overflow-hidden rounded-4">
                  <img
                    src="https://www.bernicks.com/hubfs/social-suggested-images%20%28OLD%29/fountain-1.jpg"
                    className="img-fluid rounded-4"
                    alt="Fountain Sips"
                    style={{ opacity: 0.6 }}
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h5 className="fw-bold text-dark mb-2">Fountain Sips</h5>
                    <p className="text-dark mb-2">
                      Chilled soda, Redbulls & 44oz cups.
                    </p>
                    <button className="btn btn-danger btn-sm px-3 rounded-pill">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}

      <Gallery galleryImages={galleryImages} />
      <Contact />
    </div>
  );
}

export default NewHomePage;
