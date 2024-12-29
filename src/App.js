import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import CheckoutPage from "./pages/CheckoutPage";
import APCProductList from "./components/APCProductList";
import APCCheckout from "./components/APCCheckout";
import Confirmation from "./components/Confirmation";
import ProductDetails from "./components/ProductDetails";
import AddProductForm from "./components/AddProductForm";
import LoginPage from "./Auth/Login";
import SignupPage from "./Auth/Signup";
import PrivateRoute from "./PrivateRoute";
import ProductList from "./Seller/SellerProductList";
import BecomeSeller from "./components/BecomeSeller";
import SellerForm from "./components/SellerForm";
import Product from "./components/Products";
import ScrollToTop from "./PortFolio/components/ScrollToTop";
import "./PortFolio/style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./PortFolio/components/Home/Home";
import About from "./PortFolio/components/About/About";
import Navbar from "./components/Navbar";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" App font-dosis min-h-screen text-gray-800" id={load ? "no-scroll" : "scroll"}>
      <Router>
      <ScrollToTop />
<Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* portfolio */}
          <Route path="/about" element={<Home />} />
          <Route path="/about2" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/seller-form" element={<SellerForm />} />
          <Route path="/products" element={<Product />} />
          {/* Private Routes */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/apc-products"
            element={
              <PrivateRoute>
                <APCProductList />
              </PrivateRoute>
            }
          />
          <Route
            path="/apc-checkout"
            element={
              <PrivateRoute>
                <APCCheckout />
              </PrivateRoute>
            }
          />
          <Route
            path="/product-details"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <PrivateRoute>
                <AddProductForm />
              </PrivateRoute>
            }
          />
          {/* Public Routes */}
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/apc-confirmation" element={<Confirmation />} />
          <Route path="/1" element={<ProductList />} />
          <Route path="*" element={<div>404 page not found/Page under development</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
