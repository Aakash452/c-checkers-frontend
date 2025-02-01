import React, { useState } from "react";
import { Link } from "react-router-dom";
import beerImg from "../images/Beer(poster).jpg";
import "../styles/ProductPage.css"
import img1 from "../img/menu/menu-item-1.png"
import img2 from "../img/menu/menu-item-2.png"
import img3 from "../img/menu/menu-item-3.png"
import img4 from "../img/menu/menu-item-4.png"
import img5 from "../img/menu/menu-item-5.png"
import img6 from "../img/menu/menu-item-6.png"

function ProductPage() {
  const [sortOption, setSortOption] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");

  const products = [
    { id: 1, name: "Beer A", price: 5.99, category: "beer", img: img2 },
    { id: 2, name: "Beer B", price: 7.99, category: "beer", img: img3 },
    { id: 3, name: "Cigar A", price: 10.49, category: "cigar", img: img4 },
    { id: 4, name: "Soda A", price: 2.99, category: "soda", img: img5 },
    { id: 5, name: "Snack A", price: 3.49, category: "snack", img: img6 },
  ];

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((product) => product.category === filterCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    return 0;
  });


  return (
    <div>
      <div className="poster-container">
        <div className="poster-image-wrapper">
          <img src={beerImg} alt="beerImg" className="poster-image" />
          <h3 className="poster-text">Beer</h3>
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
        {sortedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} className="product-image" />
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
