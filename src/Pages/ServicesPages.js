import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import './css/ServicesPage.css';
import HeroSection from '../components/HeroSection2'; // Import HeroSection
import { FaMobileAlt, FaShoppingCart, FaRobot, FaDatabase, FaPaintBrush, FaCheckCircle, FaGooglePlay } from 'react-icons/fa';
import { Bounce } from 'react-awesome-reveal';

const services = [
  {
    icon: <FaMobileAlt size={60} className="text-orange-500" />,
    title: 'Mobile App Development',
    description: 'Delivering native and cross-platform mobile solutions that boost user engagement and drive conversions.',
    imgSrc: 'ecomm.png',
  },
  {
    icon: <FaShoppingCart size={60} className="text-teal-500" />,
    title: 'Ecommerce Solutions',
    description: 'Custom ecommerce apps and websites that enhance customer experiences and simplify shopping journeys.',
    imgSrc: 'web-ecomm.png',
  },
  {
    icon: <FaRobot size={60} className="text-yellow-500" />,
    title: 'AI & Automation',
    description: 'Innovative automation tools and AI-driven solutions for streamlined processes and smart insights.',
    imgSrc: '/AI.png',
  },
  {
    icon: <FaDatabase size={60} className="text-red-500" />,
    title: 'Database Management',
    description: 'Robust database management systems ensuring secure, scalable, and efficient data handling.',
    imgSrc: 'dbs.png',
  },
  {
    icon: <FaPaintBrush size={60} className="text-purple-500" />,
    title: 'UI/UX Design',
    description: 'Vivid, intuitive designs that blend creativity and functionality to enhance user experiences.',
    imgSrc: 'uiux.png',
  },
  {
    icon: <FaGooglePlay size={60} className="text-green-500" />,
    title: 'Google Play Console',
    description: 'Buying and managing unused Google Play Consoles from individuals and software houses at competitive prices, backed by a 50 Lakh investment strategy.',
    imgSrc: 'google-play-console.png',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page text-gray-100">
      {/* Hero Section */}
      <HeroSection /> {/* Use HeroSection here */}

      {/* Services Section */}
      <header className="text-center mb-20">
        <Fade cascade>
          <h2 className="text-5xl font-bold text-gradient">Our Expertise</h2>
          <p className="mt-6 text-lg">
            Explore cutting-edge solutions tailored to meet your business needs.
          </p>
        </Fade>
      </header>
      {services.map((service, index) => (
        <div key={index} className={`service-section flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-16`}>
          <div className="md:w-1/2 p-6 flex justify-center items-center">
            <Slide direction={index % 2 === 0 ? 'left' : 'right'}>
              <img
                src={service.imgSrc}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </Slide>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <Fade>
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-4 text-3xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-lg mb-4">{service.description}</p>
              <ul className="text-sm text-gray-300">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Scalable and performance-optimized
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  User-centric design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Secure and data-driven solutions
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      ))}

      <section className="text-center mt-20">
        <Bounce>
          <h2 className="text-4xl font-extrabold text-orange-400">Why Choose Us?</h2>
          <p className="mt-4 text-lg">
            5+ years of proven expertise delivering reliable, secure, and scalable digital solutions.
          </p>
        </Bounce>
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-lg transition-all">
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
