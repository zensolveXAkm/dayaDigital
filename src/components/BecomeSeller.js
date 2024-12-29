import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaMoneyBillWave, FaStore, FaArrowRight } from "react-icons/fa";

const BecomeSeller = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/seller-form");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('_Blue And Black Modern Gaming Blog Banner.png')",
      }}
    >
      <div className="flex flex-wrap max-w-6xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {/* Left Side: Content Section */}
        <div className="w-full md:w-1/2 p-6">
          {/* Floating Profile Icon */}
          <div className="flex justify-center mb-6">
            <FaUserCircle className="text-8xl text-indigo-500" />
          </div>

          {/* Header Section */}
          <h2 className="text-3xl font-bold text-gray-800 text-center">Become a Seller</h2>
          <p className="mt-4 text-gray-600 text-center">
            Join our platform and start selling your products or services today!
            Pay just <span className="font-semibold text-indigo-600">₹29/month</span> 
            and complete the form to list your profile.
          </p>

          {/* Features Section */}
          <div className="mt-6 space-y-5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center shadow-md">
                <FaStore className="text-xl" />
              </div>
              <p className="text-gray-700">
                Create your personal <span className="font-semibold text-blue-500">seller profile</span>.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center shadow-md">
                <FaMoneyBillWave className="text-xl" />
              </div>
              <p className="text-gray-700">
                Sell through your console and <span className="font-semibold text-purple-500">earn effortlessly</span>.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center shadow-md">
                <FaArrowRight className="text-xl" />
              </div>
              <p className="text-gray-700">
                Gain access to <span className="font-semibold text-pink-500">targeted customers</span>.
              </p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleProceed}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
            >
              Proceed to Form
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Have questions?{" "}
              <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
                Contact Us
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="674-6747908_virtual-number-hd-png-download-removebg-preview.png"
            alt="Seller illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
