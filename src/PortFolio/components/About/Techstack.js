import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGoogle, FaAndroid } from "react-icons/fa"; // Placeholder for Google Console and Play Console

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* Google Console Icon */}
        <FaGoogle size={50} />
        <p>Google Console</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Play Console Icon */}
        <FaAndroid size={50} />
        <p>Play Console</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* App Console Icon (Placeholder icon for now) */}
        <FaGoogle size={50} />
        <p>App Console</p>
      </Col>
    </Row>
  );
}

export default Techstack;
