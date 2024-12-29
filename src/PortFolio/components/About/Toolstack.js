import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGooglePlay, FaGoogle, FaApple } from "react-icons/fa"; // More unique icons
import { SiAppstore } from "react-icons/si"; // Appstore-related icon

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* Google Console Icon */}
        <FaGoogle size={50} />
        <p>Google Console</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Play Console Icon */}
        <FaGooglePlay size={50} />
        <p>Play Console</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* App Console Icon (using AppStore-related icon for uniqueness) */}
        <SiAppstore size={50} />
        <p>App Console</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Apple Store Icon as a creative alternative */}
        <FaApple size={50} />
        <p>Apple Console</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
