import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import beerImg from "../images/Beer(poster).jpg";
import vapeImg from "../images/Vapes_poster.jpg";
import wineImg from "../images/wine_poster.jpg";
import cigaImg from "../images/cigarettes_poster.jpeg";
import kratomImg from "../images/kratom_poster.jpg";
import sodaImg from "../images/soda_poster.jpg";
import energydrinkImg from '../images/energydrink_poster.jpg'

import "../styles/ProductPage.css";
import img1 from "../img/menu/menu-item-1.png";
import img2 from "../img/menu/menu-item-2.png";
import img3 from "../img/menu/menu-item-3.png";
import img4 from "../img/menu/menu-item-4.png";
import img5 from "../img/menu/menu-item-5.png";
import img6 from "../img/menu/menu-item-6.png";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const [sortOption, setSortOption] = useState("default");
  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const category = queryParams.get("Categories");
  const secretKey = process.env.REACT_APP_BACKEND_URL;
  const [filterCategory, setFilterCategory] = useState("all");
  const [products, setProducts] = useState([]);

  const lowerCategory = category?.toLowerCase();

  

  const useImg =
    lowerCategory === "beer"
      ? beerImg
      : lowerCategory === "wine"
      ? wineImg
      : lowerCategory === "vapes"
      ? vapeImg
      : lowerCategory === "cigarettes"
      ? cigaImg
      : lowerCategory === "kratom"
      ? kratomImg
      : lowerCategory === "soda"
      ? sodaImg
      : lowerCategory === "energydrinks"
      ? energydrinkImg
      : null;
  

      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const res = await fetch(`${secretKey}/products/category/${category}`);
            const data = await res.json();
      
            if (res.ok && Array.isArray(data) && data.length > 0) {
              setProducts(data);
            } else {
              console.warn("No products found for this category.");
              setProducts([]); // or leave it unchanged
            }
          } catch (err) {
            console.error("Error fetching products:", err);
          }
        };
      
        fetchProducts();
      }, [category, secretKey]);
      

  // const filteredProducts =
  //   filterCategory === "all"
  //     ? products
  //     : products.filter((product) => product.category === filterCategory);

  // const sortedProducts = [...filteredProducts].sort((a, b) => {
  //   if (sortOption === "priceAsc") return a.price - b.price;
  //   if (sortOption === "priceDesc") return b.price - a.price;
  //   return 0;
  // });

  return (
    <div>
      <div className="poster-container">
        <div className="poster-image-wrapper">
          <img src={useImg} alt="beerImg" className="poster-image" />
          <h3 className="poster-text">{category}</h3>
        </div>
      </div>
      <div className="products-page">
        {/* Sorting and Filtering */}
        <div className="filter-sort-section">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All Categories</option>
            <option value="beer">Beer</option>
            <option value="cigar">Cigars</option>
            <option value="soda">Sodas</option>
            <option value="snack">Snacks</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-dropdown"
          >
            <option value="default">Default</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Display */}
        <div className="products-grid">
          {products.length!==0 && products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/products/image/${category}/${product.Image}`}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
