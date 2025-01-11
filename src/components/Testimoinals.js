import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import your Firebase configuration

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", feedback: "" });

  // Fetch testimonials from Firestore
  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialCollection = collection(db, "testimonials");
      const testimonialSnapshot = await getDocs(testimonialCollection);
      const testimonialList = testimonialSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestimonials(testimonialList);
    };
    fetchTestimonials();
  }, []);

  // Handle form submission
  const handleAddReview = async () => {
    if (newReview.name && newReview.feedback) {
      const docRef = await addDoc(collection(db, "testimonials"), newReview);
      setTestimonials([...testimonials, { id: docRef.id, ...newReview }]);
      setShowModal(false);
      setNewReview({ name: "", feedback: "" });
    }
  };

  return (
    <Container className="my-5" id="testimonials">
      <Row className="mb-4">
        <Col md={12} className="text-center">
          <h3 className="section-title">What Our Clients Say</h3>
        </Col>
      </Row>
      <Row>
        <Button variant="success" className="mb-3" onClick={() => setShowModal(true)}>
          + Add a Review
        </Button>
      </Row>
      <Row>
        {testimonials.map((testimonial) => (
          <Col md={4} key={testimonial.id}>
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <Card.Body>
                  <Card.Text>"{testimonial.feedback}"</Card.Text>
                  <Card.Footer className="text-muted">{testimonial.name}</Card.Footer>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Add Review Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFeedback">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your feedback"
                value={newReview.feedback}
                onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddReview}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Testimonials;
