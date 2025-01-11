// HeroSection.js
import React from 'react';
import { FaMobileAlt, FaShoppingCart, FaRobot, FaDatabase, FaPaintBrush } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="hero-section bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-white py-20 px-8 mb-16"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 md:mb-0 w-full md:w-1/3">
          <img
            src="/logo.png"
            alt="Digital Line Logo"
            className="w-32 h-32 object-contain shadow-lg rounded-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-gradient leading-tight">
            Empowering Your Digital Journey
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-opacity-80">
            Transforming Ideas into Reality with Cutting-Edge Solutions
          </h2>
          <p className="text-xl mb-6 opacity-80">
            Experience innovation, scalability, and world-class expertise that drive success. Let's bring your ideas to life.
          </p>
          <div className="flex justify-center md:justify-start mb-8 space-x-6">
            <FaMobileAlt size={50} className="text-orange-500 hover:text-orange-400 transition-colors" />
            <FaShoppingCart size={50} className="text-teal-500 hover:text-teal-400 transition-colors" />
            <FaRobot size={50} className="text-yellow-500 hover:text-yellow-400 transition-colors" />
            <FaDatabase size={50} className="text-red-500 hover:text-red-400 transition-colors" />
            <FaPaintBrush size={50} className="text-purple-500 hover:text-purple-400 transition-colors" />
          </div>
          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-lg transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
