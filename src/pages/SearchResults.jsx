import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";



const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const query = searchParams.get("query");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const secretKey = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(`${secretKey}/products/search?query=${query}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Search failed:", err);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      // Replace the URL query with new search
      navigate(`?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  return (
    <div className="container-fluid p-4">
      {/* Search Bar */}
      <form className="mb-4 d-flex align-items-center gap-3" onSubmit={handleSubmit}>
      <FaSearch />
      <input
        type="search"
        className="form-control border-0 shadow-none"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>

      <h4 className="fw-bold mb-4">Search Results for "{query}"</h4>

      <div className="row">
        {/* Filters */}
        <div className="col-md-3">
          <h6 className="fw-bold">Product type</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="vape" />
            <label htmlFor="vape" className="form-check-label">
              Vape (10,448)
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="eliquid" />
            <label htmlFor="eliquid" className="form-check-label">
              E-Liquid (4,208)
            </label>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="podcast" />
            <label htmlFor="podcast" className="form-check-label">
              Podcast (901)
            </label>
          </div>

          <h6 className="fw-bold">Show only</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="new" />
            <label htmlFor="new" className="form-check-label">
              New arrivals
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="discounts"
            />
            <label htmlFor="discounts" className="form-check-label">
              Discounts
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="preorder" />
            <label htmlFor="preorder" className="form-check-label">
              Pre-order
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="available"
            />
            <label htmlFor="available" className="form-check-label">
              Available Now
            </label>
          </div>

          <h6 className="fw-bold">Craft Beer Tasting Guide</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="pairing" />
            <label htmlFor="pairing" className="form-check-label">
              Beer Pairing Tips
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="mods" />
            <label htmlFor="mods" className="form-check-label">
              Vape Mods
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="tanks" />
            <label htmlFor="tanks" className="form-check-label">
              Vape Tanks
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="accessories"
            />
            <label htmlFor="accessories" className="form-check-label">
              Beer Accessories
            </label>
          </div>

          <h6 className="fw-bold">Vape Flavor Guide</h6>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="recipes" />
            <label htmlFor="recipes" className="form-check-label">
              Beer Recipes
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="easy" />
            <label htmlFor="easy" className="form-check-label">
              Easy-to-Carry Vapes
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="digital" />
            <label htmlFor="digital" className="form-check-label">
              Digital Vape Reads
            </label>
          </div>

          <button className="btn btn-danger btn-sm mt-3">Filter Options</button>
        </div>

        {/* Product Section */}
        <div className="col-md-9">
          {/* Tabs */}
          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-outline-dark fw-bold">Top rated</button>
            <button className="btn btn-outline-dark fw-bold">
              Bestsellers
            </button>
            <button className="btn btn-outline-dark fw-bold">
              New arrivals
            </button>
            <button className="btn btn-outline-dark fw-bold">Discounts</button>
          </div>

          {/* Product Cards */}
          <div className="row g-4">
            {products.map((product, idx) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3"
                key={product._id || idx}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div
                    className="position-relative"
                    style={{ aspectRatio: "4 / 3", overflow: "hidden" }}
                  >
                    <img
                      src={`${secretKey}/products/image/${product.category}/${product.Image}`}
                      className="card-img-top w-100 h-100"
                      alt={product.name}
                      style={{
                        objectFit: "contain", // ensures full image fits
                        backgroundColor: "#fff",
                        padding: "10px", // gives breathing room inside the card
                      }}
                    />
                    {product.badge && (
                      <span className="badge bg-danger position-absolute top-0 end-0 m-2 rounded-pill">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="card-body text-start">
                    <h6 className="card-title fw-bold mb-0">{product.name}</h6>
                    <p className="text-muted mb-1">{product.brand}</p>
                    <div className="fw-bold mb-2">
                      ${product.price.toFixed(2)}
                    </div>
                    <button className="btn btn-outline-danger btn-sm">
                      Add to Cart
                    </button>
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
