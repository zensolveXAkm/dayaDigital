import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaProductHunt,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] max-w-3xl z-20 bg-white rounded-full shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between py-3 px-4">
          {/* Logo Section */}
          <div className="text-3xl font-bold text-gray-800 flex items-center space-x-1">
            <span className="text-yellow-400">Digital</span>
            <span className="text-indigo-500">.Line</span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex justify-between items-center space-x-4 text-sm font-medium text-gray-600">
            <li className="hover:text-yellow-400 transition-all flex flex-col items-center">
              <Link to="/" className="flex flex-col items-center">
                <FaHome className="text-xl mb-1" />
                <span>Home</span>
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition-all flex flex-col items-center">
              <Link to="/products" className="flex flex-col items-center">
                <FaProductHunt className="text-xl mb-1" />
                <span>Products</span>
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition-all flex flex-col items-center">
              <Link to="/about" className="flex flex-col items-center">
                <FaInfoCircle className="text-xl mb-1" />
                <span>About</span>
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition-all flex flex-col items-center">
              <Link to="/contact" className="flex flex-col items-center">
                <FaEnvelope className="text-xl mb-1" />
                <span>Contact</span>
              </Link>
            </li>
            {/* Login and Signup Buttons */}
            <li className="flex space-x-3">
              <Link to="/login" className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-medium hover:bg-indigo-600 transition-all">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-yellow-400 text-white rounded-full text-sm font-medium hover:bg-yellow-500 transition-all">
                Signup
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-600 text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-indigo-500 text-white">
          <h2 className="text-lg font-bold">Navigation</h2>
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="mt-4 space-y-6 px-4 text-gray-700 font-medium">
          <li className="flex items-center space-x-3 hover:text-yellow-400 transition-all">
            <FaHome />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 transition-all">
            <FaProductHunt />
            <Link to="/products">Products</Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 transition-all">
            <FaInfoCircle />
            <Link to="/about">About</Link>
          </li>
          <li className="flex items-center space-x-3 hover:text-yellow-400 transition-all">
            <FaEnvelope />
            <Link to="/contact">Contact</Link>
          </li>
          {/* Login and Signup Links */}
          <li className="flex flex-col space-y-3 mt-6">
            <Link to="/login" className="block px-4 py-2 bg-indigo-500 text-white rounded-full text-center text-sm font-medium hover:bg-indigo-600 transition-all">
              Login
            </Link>
            <Link to="/signup" className="block px-4 py-2 bg-yellow-400 text-white rounded-full text-center text-sm font-medium hover:bg-yellow-500 transition-all">
              Signup
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
