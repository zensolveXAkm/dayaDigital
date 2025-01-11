import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Footer.css'; // Optional, if you want to use custom styles

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 footer-section">
      <Container>
        <Row>
          {/* About Digital Line Section */}
          <Col md={3} sm={6} className="footer-col">
            <h5 className="footer-title">About Digital Line</h5>
            <p className="footer-text">
              Digital Line specializes in digital marketing, app development, and Google Play Console services, empowering businesses to thrive in the digital landscape.
            </p>
          </Col>

          {/* Services Section */}
          <Col md={3} sm={6} className="footer-col">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-list">
              <li><a href="#digital-marketing" className="footer-link">Digital Marketing</a></li>
              <li><a href="#app-development" className="footer-link">App Development</a></li>
              <li><a href="#seo-services" className="footer-link">SEO Services</a></li>
              <li><a href="#google-play-console" className="footer-link">Google Play Console</a></li>
              <li><a href="#social-media-marketing" className="footer-link">Social Media Marketing</a></li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col md={3} sm={6} className="footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><a href="#about-us" className="footer-link">About Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#privacy-policy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={3} sm={6} className="footer-col">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              Near Bus Stand, Chhatarpur, Madhya Pradesh, India
            </p>
            <p className="footer-text">
              Email: <a href="mailto:digitalline8085@gmail.com" className="footer-link">info@digitallineindia.com</a>
            </p>
            <p className="footer-text">
              Phone: +91 77480 70846, +91 80853 94618
            </p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-bottom-text">
              © 2024 Digital Line. All Rights Reserved. | <a href="#contact" className="footer-link">Contact Us</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
