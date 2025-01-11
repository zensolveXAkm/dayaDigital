import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRocket, FaDesktop, FaMobileAlt, FaCogs, FaLightbulb, FaChartLine } from 'react-icons/fa';
import './css/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section text-white d-flex align-items-center">
      <div className="hero-background"></div>
      <Container>
        <Row className="align-items-center text-center text-md-left">
          {/* Left Column - Text */}
          <Col md={6} className="my-auto">
            <h1 className="neon-text display-4">
              Welcome to <span className="highlight">Digital Line</span>
            </h1>
            <p className="lead">
              Empowering businesses with cutting-edge technology and creative strategies. From app development to
              digital marketing, we drive your digital transformation.
            </p>
            <ul className="hero-list mt-3">
              <li><FaLightbulb className="list-icon" /> Innovative solutions tailored for your business</li>
              <li><FaChartLine className="list-icon" /> Proven strategies for scalable growth</li>
              <li><FaCogs className="list-icon" /> Expert support from idea to implementation</li>
            </ul>
            <div className="cta-buttons mt-4">
              <Button variant="primary" className="me-3 cta-btn">Start Your Journey</Button>
              <Button variant="outline-light" className="cta-btn">Explore Services</Button>
            </div>
          </Col>
          {/* Right Column - Icons and Image */}
          <Col md={6} className="my-auto">
            <div className="d-flex justify-content-around mb-4">
              <FaRocket className="icon text-primary fs-1" />
              <FaDesktop className="icon text-info fs-1" />
              <FaMobileAlt className="icon text-success fs-1" />
            </div>
            <img
              src="Logo.png"
              alt="Digital Solutions"
              className="img-fluid rounded-circle shadow-lg hero-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
