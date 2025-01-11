import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './css/LoadingSpinner.css'; // Import custom CSS

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <FaSpinner className="spinner-icon" />
      <p>Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
