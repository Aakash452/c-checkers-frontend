import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const sampleProducts = [
  {
    title: "Geekbar Pulse",
    subtitle: "Sour Apple Ice",
    price: 19.99,
    img: "https://henrysvape.com/cdn/shop/files/d200d57419cf2f505e0d6e1e88ea6c00.png?v=1741729558",
  },
  {
    title: "Geekbar Pulse",
    subtitle: "Sour Apple Blow Pop",
    price: 19.99,
    img: "https://stallionmkt.com/cdn/shop/files/Sour-Apple-Blow-Pop-Geek-Bar-Pulse-15000-1280x1280-JPG.webp?v=1731222458&width=1946",
  },
  {
    title: "Geekbar X",
    subtitle: "California Cherry",
    price: 19.99,
    img: "https://cdn11.bigcommerce.com/s-nlylv/images/stencil/1280x1280/products/2490/8525/geek-bar-geek-bar-pulse-15000__56138.1713328477.jpg?c=2?imbypass=on",
  },
  {
    title: "Geekbar Pulse X",
    subtitle: "Watermelon Ice",
    price: 22.99,
    img: "https://virginiavapes.com/cdn/shop/files/geekbar-pulse-x-25k-5-disposable-707176.jpg?v=1739315590",
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  return (
    <div className="container-fluid p-4">
      {/* Search Bar */}
      <form className="mb-4 d-flex align-items-center gap-3">
        <FaSearch />
        <input
          type="search"
          className="form-control border-0 shadow-none"
          placeholder="Search results"
        />
      </form>

      <h4 className="fw-bold mb-4">Search Results for "{query}"</h4>
      

      <div className="row">
        {/* Filters */}
        <div className="col-md-3">
          <h6 className="fw-bold">Product type</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="vape" />
            <label htmlFor="vape" className="form-check-label">Vape (10,448)</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="eliquid" />
            <label htmlFor="eliquid" className="form-check-label">E-Liquid (4,208)</label>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="podcast" />
            <label htmlFor="podcast" className="form-check-label">Podcast (901)</label>
          </div>

          <h6 className="fw-bold">Show only</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="new" />
            <label htmlFor="new" className="form-check-label">New arrivals</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="discounts" />
            <label htmlFor="discounts" className="form-check-label">Discounts</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="preorder" />
            <label htmlFor="preorder" className="form-check-label">Pre-order</label>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="available" />
            <label htmlFor="available" className="form-check-label">Available Now</label>
          </div>

          <h6 className="fw-bold">Craft Beer Tasting Guide</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="pairing" />
            <label htmlFor="pairing" className="form-check-label">Beer Pairing Tips</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="mods" />
            <label htmlFor="mods" className="form-check-label">Vape Mods</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="tanks" />
            <label htmlFor="tanks" className="form-check-label">Vape Tanks</label>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="accessories" />
            <label htmlFor="accessories" className="form-check-label">Beer Accessories</label>
          </div>

          <h6 className="fw-bold">Vape Flavor Guide</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="recipes" />
            <label htmlFor="recipes" className="form-check-label">Beer Recipes</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="easy" />
            <label htmlFor="easy" className="form-check-label">Easy-to-Carry Vapes</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="digital" />
            <label htmlFor="digital" className="form-check-label">Digital Vape Reads</label>
          </div>

          <button className="btn btn-danger btn-sm mt-3">Filter Options</button>
        </div>

        {/* Product Section */}
        <div className="col-md-9">
          {/* Tabs */}
          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-outline-dark fw-bold">Top rated</button>
            <button className="btn btn-outline-dark fw-bold">Bestsellers</button>
            <button className="btn btn-outline-dark fw-bold">New arrivals</button>
            <button className="btn btn-outline-dark fw-bold">Discounts</button>
          </div>

          {/* Product Cards */}
          <div className="row g-4">
            {sampleProducts.map((product, idx) => (
              <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    {product.badge && (
                      <span className="badge bg-danger position-absolute top-0 end-0 m-2 rounded-pill">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="card-body text-start">
                    <h6 className="card-title fw-bold mb-0">{product.title}</h6>
                    <p className="text-muted mb-1">{product.subtitle}</p>
                    <div className="fw-bold mb-2">${product.price.toFixed(2)}</div>
                    <button className="btn btn-outline-danger btn-sm">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4 gap-2">
            <button className="btn btn-outline-dark btn-sm">1</button>
            <button className="btn btn-outline-dark btn-sm">2</button>
            <button className="btn btn-outline-dark btn-sm">3</button>
            <button className="btn btn-outline-dark btn-sm">4</button>
          </div>

          {/* Load More */}
          <div className="text-center mt-4">
            <button className="btn btn-danger rounded-pill px-4">
              Load more Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
