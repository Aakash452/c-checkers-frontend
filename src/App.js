import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // For navigation
import { Provider } from 'react-redux'; // Redux Provider
import store from './redux/store'; // Redux Store
import NewHeader from './Components/NewHeader'
import NewHomePage from './pages/NewHomePage';
import Footer from './Components/Footer';
import ProductPage from './pages/ProductPage'; // Displays all products
import Admin_Login from './admin_components/Admin_Login';
import Admin_Panel from './admin_components/Admin_Panel';
import Dashboard from './admin_components/Dashboard';



// Import Components (Pages)
// import HomePage from './pages/HomePage';
// import ProductDetailsPage from './pages/ProductDetailsPage'; // Detailed view of a single product
// import CartPage from './pages/CartPage'; // User's shopping cart
// import CheckoutPage from './pages/CheckoutPage'; // Final checkout process
// import PromotionPage from './pages/PromotionPage'; // Current deals and promotions


// // Import Components (Layout)
// import Header from './Components/Header'; // Website header
// import Footer from './Components/Footer'; // Website footer
// import AboutUs from './pages/AboutUs';


const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
    const expiry = payload.exp * 1000; // Convert expiry to milliseconds
    return Date.now() < expiry; // Check if the token is still valid
  } catch (error) {
    return false; // Invalid token format
  }
};

// Wrapper for admin routes
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  
  if (!isTokenValid(token)) {
    // Redirect to admin login if token is invalid
    console.log("Invalid token")
    return <Navigate to="/admin/admin-access" />;
  }

  // If token is valid, render the children
  return children;
};

// Main Application Component
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* Only show header/footer on non-admin pages */}
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <NewHeader />
                <NewHomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/Products"
            element={
              <>
                <NewHeader />
                <ProductPage />
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/admin-access" element={<Admin_Login />} />
          <Route
            path="/admin/Dashboard"
            element={
              <PrivateRoute>
                <Admin_Panel/> {/* Replace with your admin dashboard component */}
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;





{/* Main Content */}
{/* <main>
  <Routes>
  
    <Route path="/" element={<HomePage />} /> 
    <Route path="/products" element={<ProductPage />} /> 
    <Route path="/product/:id" element={<ProductDetailsPage />} />
    <Route path="/cart" element={<CartPage />} /> 
    <Route path="/checkout" element={<CheckoutPage />} /> 
    <Route path="/about" element={<AboutUs />} /> 
    <Route path="/promotions" element={<PromotionPage />} /> 
  </Routes>
</main> */}

{/* Website Footer */}
{/* <Footer /> */}