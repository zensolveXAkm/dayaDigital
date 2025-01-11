import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Container className="my-5" id="services">
      <Row className="text-center">
        <Col md={12}>
          <h2 className="section-title">Our Services</h2>
        </Col>
      </Row>

      {/* E-commerce App Development */}
      <Row className="align-items-center my-4">
        <Col md={6}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="ecomm.png"
              alt="E-commerce Development"
              className="img-fluid rounded"
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3>E-commerce App Development</h3>
            <p>
              We build custom eCommerce apps to enhance your business growth and reach more customers with seamless
              user experiences.
            </p>
            <Button variant="primary">Learn More</Button>
          </motion.div>
        </Col>
      </Row>

      {/* Website Development */}
      <Row className="align-items-center my-4">
        <Col md={6} className="order-md-2">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="web-ecomm.png"
              alt="Website Development"
              className="img-fluid rounded"
            />
          </motion.div>
        </Col>
        <Col md={6} className="order-md-1">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Website Development</h3>
            <p>
              Professional, mobile-first websites that drive traffic and boost your business's online presence.
            </p>
            <Button variant="primary">Learn More</Button>
          </motion.div>
        </Col>
      </Row>

      {/* SEO & Digital Marketing */}
      <Row className="align-items-center my-4">
        <Col md={6}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="digi.png"
              alt="Digital Marketing"
              className="img-fluid rounded"
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3>SEO & Digital Marketing</h3>
            <p>
              Boost your business online with proven SEO strategies and digital marketing techniques to maximize
              visibility and revenue.
            </p>
            <Button variant="primary">Learn More</Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
