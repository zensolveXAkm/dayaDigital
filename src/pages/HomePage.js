import React, { useState } from "react";
import ProductList from "../components/ProductList";
import APCProductList from "../components/APCProductList";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"; // Import Navbar
import { FaGooglePlay, FaApple } from "react-icons/fa"; // Import React Icons
import SellerProductList from "../Seller/SellerProductList";
import List from "../Seller/List";

function HomePage() {
  const [products] = useState([]);

  return (

    <div
      className="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('banner.png')`,
        backgroundPosition: "top center, top center, top center", // Ensures all images are aligned at the top
        backgroundSize: "100% auto", // Ensures full width scaling for each image, height adjusted automatically
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundAttachment: "fixed", // To make the background scroll with the page content
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <div className="relative z-10 container mx-auto py-12">
        {/* Available Consoles Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Explore Our Latest Digital Line Products
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Browse our wide range of consoles and choose the best one for your app needs.
          </p>
        </div>

        {/* Featured Product List: Google Play Console */}
        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center">
            <FaGooglePlay className="mr-2 text-green-400" /> Google Play Console
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Get premium google play console accounts from us.
          </p>
          <ProductList products={products} />
        </div>

        {/* Additional Product List: Apple Developer Console */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center">
            <FaApple className="mr-2 text-gray-300" /> Apple Developer Console
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Streamline your app development and distribution for iOS devices.
          </p>
          <APCProductList products={products} />
          <SellerProductList />
        </div>

        {/* Profiles Section - Display Profiles List */}
        <List />
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} consoleStore. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="Facebook.com"
              className="text-gray-400 hover:text-yellow-400 transition-all"
            >
              Facebook
            </a>
            <a
              href="x.com"
              className="text-gray-400 hover:text-yellow-400 transition-all"
            >
              Twitter
            </a>
            <a
              href="instagram.com"
              className="text-gray-400 hover:text-yellow-400 transition-all"
            >
              Instagram
            </a>
          </div>
          <div className="mt-6 text-center text-hackers">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              By Daya Choudhary
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
