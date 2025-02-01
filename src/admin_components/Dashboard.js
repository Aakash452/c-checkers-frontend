import React from "react";
import "../styles/css/soft-ui-dashboard.css";
import "../styles/css/soft-ui-dashboard.css.map";
import "../styles/css/soft-ui-dashboard.min.css";
import "../styles/css/nucleo-icons.css";
import "../styles/css/nucleo-svg.css";
import "../styles/Dashboard.css"

const Dashboard = () => {
  return (

  
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <h6 className="font-weight-bolder mb-0">Dashboard</h6>
          </div>
        </nav>

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="card">
                <div className="card-body">
                  <h5>Card 1</h5>
                  <p>This is an example card</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card">
                <div className="card-body">
                  <h5>Card 2</h5>
                  <p>This is another example card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
   
  );
};

export default Dashboard;
