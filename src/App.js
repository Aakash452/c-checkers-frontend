import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For navigation
import { Provider } from 'react-redux'; // Redux Provider
import store from './redux/store'; // Redux Store

// Import Components (Pages)
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage'; // Displays all products
import ProductDetailsPage from './pages/ProductDetailsPage'; // Detailed view of a single product
import CartPage from './pages/CartPage'; // User's shopping cart
import CheckoutPage from './pages/CheckoutPage'; // Final checkout process
import PromotionPage from './pages/PromotionPage'; // Current deals and promotions


// Import Components (Layout)
import Header from './Components/Header'; // Website header
import Footer from './Components/Footer'; // Website footer
import AboutUs from './pages/AboutUs';

// Main Application Component
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* Website Header */}
        <Header />

        {/* Main Content */}
        <main>
          <Routes>
            {/* Define all routes */}
            <Route path="/" element={<HomePage />} /> {/* Home Page */}
            <Route path="/products" element={<ProductPage />} /> {/* Products Page */}
            <Route path="/product/:id" element={<ProductDetailsPage />} /> {/* Single Product Details */}
            <Route path="/cart" element={<CartPage />} /> {/* Cart Page */}
            <Route path="/checkout" element={<CheckoutPage />} /> {/* Checkout Page */}
            <Route path="/about" element={<AboutUs />} /> {/* Checkout Page */}
            <Route path="/promotions" element={<PromotionPage />} /> {/* Promotions Page */}
          </Routes>
        </main>

        {/* Website Footer */}
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
