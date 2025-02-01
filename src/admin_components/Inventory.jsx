import React, { useState , useEffect } from "react";
import "../styles/css/soft-ui-dashboard.css";
import "../styles/css/soft-ui-dashboard.css.map";
import "../styles/css/soft-ui-dashboard.min.css";
import "../styles/css/nucleo-icons.css";
import "../styles/css/nucleo-svg.css";
import "../styles/Dashboard.css";
import { CiBellOn } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
// Core CSS
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

function Inventory() {

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name" },
    { field: "price" },
    { field: "brand" },
    { field: "stock" },
    { field: "category" },
    { field: "subCategory" },
    { field: "sku" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    subCategory: "",
  });
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products"); // API call
      const data = await response.json();
      setProducts(data); // Store data in state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

   // Fetch products from the backend
   useEffect(() => {
    

    fetchProducts(); // Call the function when component mounts
  }, []);
  
  console.log(products)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        setShowModal(false);
        fetchProducts(); // Close modal after successful submission
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  


  const [showModal, setShowModal] = useState(false);
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px 20px",
            marginBottom: "20px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <div className="inventory-heading d-flex align-items-center justify-content-between w-100">
            {/* Left Section - Title and Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h6 className="font-weight-bolder mb-0" style={{ margin: 0 }}>
                Inventory
              </h6>
            </div>

            {/* Right Section - Buttons and Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CiBellOn size={"60px"} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "white",
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Search Input */}
                {/* <div className="filter_searchbar" style={{ flex: 1 }}>
                  <input
                    type="search"
                    placeholder="Search task..."
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  />
                </div> */}

                {/* Filter Icon */}
                <div
                  className="filter_function"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <IoFilter size={"23px"} style={{ color: "#666" }} />
                </div>
                <span>Filter</span>
              </div>

              <button
                style={{
                  backgroundColor: "#28a745", // Green color for 'Add' action
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "5px 17px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  transition: "background-color 0.3s ease",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Slight shadow for depth
                }}
                onClick={() => setShowModal(true)}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#218838")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#28a745")
                }
              >
                Add Product
              </button>

              {/* Modal */}
              {showModal && (
                <div
                  className="modal fade show"
                  tabIndex="-1"
                  role="dialog"
                  style={{
                    display: "block",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1050,
                  }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header justify-content-between">
                        <h5 className="modal-title">Add New Product</h5>
                        <button
                          type="button"
                          className="close-button"
                          onClick={() => setShowModal(false)}
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <form className="modal-body">
                        {/* Product Name & Price */}
                        <div className="row">
                          <div className="col-md-6">
                            <label>Product Name</label>
                            <input
                              type="text"
                              style={{ padding: "6px 10px" }}
                              className="form-control m-0"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter product name"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label>Product Price ($)</label>
                            <input
                              type="number"
                              className="form-control"
                              name="price"
                              value={formData.price}
                              onChange={handleChange}
                              placeholder="Enter price"
                              required
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <div className="form-group">
                          <label>Product Description</label>
                          <textarea
                            className="form-control"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter product details"
                            rows="3"
                            required
                          ></textarea>
                        </div>

                        {/* Category & Brand */}
                        <div className="row">
                          <div className="col-md-6">
                            <label>Product Category</label>
                            <select
                              className="form-select"
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Choose...</option>
                              <option value="Beer">Beer</option>
                              <option value="Vapes">Vapes</option>
                              <option value="Cigars">Cigars</option>
                              <option value="Soda">Soda</option>
                              <option value="Snacks">Snacks</option>
                              <option value="Tobacco">Tobacco</option>
                              <option value="Newspaper">Newspaper</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label>Brand</label>
                            <input
                              type="text"
                              className="form-control m-0"
                              style={{ padding: "6px 10px" }}
                              name="brand"
                              value={formData.brand}
                              onChange={handleChange}
                              placeholder="Enter brand name"
                              required
                            />
                          </div>
                        </div>

                        {/* Sub-Category (Optional) */}
                        <div className="form-group">
                          <label>Sub-Category (Optional)</label>
                          <input
                            type="text"
                            className="form-control"
                            name="subCategory"
                            value={formData.subCategory}
                            onChange={handleChange}
                            placeholder="Enter sub-category (if applicable)"
                          />
                        </div>
                      </form>
                      {/* FORM END */}
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                          Save Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 15px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Export
              </button>
            </div>
          </div>

          {/* Main Table */}

          <div
            // define a height because the Data Grid will fill the size of the parent container
            style={{ height: 500 }}
          >
            <AgGridReact rowData={products} columnDefs={colDefs} />
          </div>

          {/* <div className="inventory-functions">
            <div className="function-filter d-flex align-items-center justify-content-between">
                <div className="function-option">
                    Filter By :
                </div>
               
                    <select className="form-select" name="Select Tyoe" id="Filter_type">
                        <option value="Beer">Beer</option>
                        <option value="Beer">Beer</option>
                        <option value="Beer">Beer</option>
                        <option value="Beer">Beer</option>
                        <option value="Beer">Beer</option>
                        <option value="Beer">Beer</option>
                    </select>
              
            </div>
          </div> */}
        </div>
      </nav>

      <div className="container-fluid py-4"></div>
    </main>
  );
}

export default Inventory;
