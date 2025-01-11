// ContactPage.js
import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase'; // Import Firestore methods

const ContactPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !mobile || !email || !message) {
      setError('All fields are required');
      return;
    }
    try {
      // eslint-disable-next-line
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        mobile,
        email,
        message,
        timestamp: new Date(),
      });

      // Success
      setSuccess(true);
      setName('');
      setMobile('');
      setEmail('');
      setMessage('');
      setError('');
    } catch (error) {
      // Error handling
      setError('Error submitting message: ' + error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="contact-page py-16 px-6 bg-gray-50">
      {/* Contact Form */}
      <section className="contact-form-container text-center max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-lg">{error}</p>}
          {success && <p className="text-green-500 text-lg">Message sent successfully!</p>}

          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Your Mobile"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-lg transition-all hover:scale-105"
          >
            Submit Message
          </button>
        </form>
      </section>

      {/* Company Contact Information */}
      <section className="company-info text-center mt-16 bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Contact Information</h3>
        <p className="text-lg mb-2">Address: Near Bus Stand, Chhatarpur, Madhya Pradesh, India</p>
        <p className="text-lg mb-2">Phone: +91 77480 70846, +91 80853 94618</p>
        <p className="text-lg mb-4">Email: info@digitallineindia.com</p>

        <div className="social-links space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook text-2xl text-blue-600"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter text-2xl text-blue-400"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-2xl text-blue-700"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram text-2xl text-pink-500"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;