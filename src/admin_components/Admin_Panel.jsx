import React, { useEffect, useState } from "react";
import "../styles/css/soft-ui-dashboard.css";
import "../styles/css/soft-ui-dashboard.css.map";
import "../styles/css/soft-ui-dashboard.min.css";
import "../styles/css/nucleo-icons.css";
import "../styles/css/nucleo-svg.css";
import "../styles/Dashboard.css"
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";



const Admin_Panel = () => {
    const [location, setLocation] = useState(window.location.hash.substring(1) || "dashboard");
  
    // Update location state when hash changes
    useEffect(() => {
      const handleHashChange = () => {
        setLocation(window.location.hash.substring(1) || "dashboard");
      };
  
      window.addEventListener("hashchange", handleHashChange);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, []);
  
    return (
      <div className="g-sidenav-show bg-gray-100">
        {/* Sidebar */}
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <a
              className="navbar-brand m-0"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ms-1 font-weight-bold">CCheckers</span>
            </a>
          </div>
          <hr className="horizontal dark mt-0" />
          <div
            className="collapse navbar-collapse w-auto"
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${location === "dashboard" ? "active" : ""}`}
                  href="#dashboard"
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${location === "inventoryManagement" ? "active" : ""}`}
                  href="#inventoryManagement"
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fas fa-table"></i>
                  </div>
                  <span className="nav-link-text ms-1">Inventory Management</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${location === "billing" ? "active" : ""}`}
                  href="#billing"
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fas fa-credit-card"></i>
                  </div>
                  <span className="nav-link-text ms-1">Billing</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
  
        {/* Main Content */}
        <div className="main-content">
          {location === "dashboard" && <Dashboard />}
          {location === "inventoryManagement" && <Inventory />}
          
        </div>
      </div>
    );
  };

export default Admin_Panel;
