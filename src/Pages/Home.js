import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimoinals";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* About Section */}
      <Container className="my-5" id="about">
        <Row>
          <Col md={6}>
            <motion.img
              src="Logo.png"
              alt="Company"
              className="img-fluid rounded-circle"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2>About Digital Line</h2>
              <p>
                Digital Line is led by Daya Chaudhary, a digital expert with 5+ years in eCommerce app and website
                development. We specialize in transforming your business ideas into cutting-edge digital solutions.
              </p>
              <Button variant="outline-primary" href="#services" className="cta-button">
                Explore Our Services <FaArrowRight />
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />
</div>
  );
};

export default Home;
