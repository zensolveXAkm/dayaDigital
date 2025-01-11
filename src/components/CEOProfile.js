import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CEOProfile = () => {
  return (
    <div className="ceo-profile py-5">
      <Container>
        <h2 className="text-center mb-4">Meet Daya Chaudhary</h2>
        <Row>
          <Col md={4} className="mx-auto">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Founder & CEO of Digital Line</Card.Title>
                <Card.Text>
                  With over 5 years of experience, Daya specializes in creating cutting-edge eCommerce solutions and guiding businesses through their digital journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CEOProfile;
