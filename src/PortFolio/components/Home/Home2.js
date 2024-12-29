import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Daya Chaudhary, the founder and CEO of Digital Line, with 5 years of experience in digital marketing and app development. I specialize in Google Play Console, app development for eCommerce, and building innovative digital marketing strategies.
              <br />
              <br />
              I am fluent in technologies like 
              <i>
                <b className="purple"> C++, Javascript, and Go. </b>
              </i>
              <br />
              <br />
              My primary interest lies in building new
              <i>
                <b className="purple"> Web Technologies and Products </b>
              </i> and exploring fields related to
              <i>
                <b className="purple"> Blockchain. </b>
              </i>
              <br />
              <br />
              I focus on creating high-quality products using <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>.
              <br />
              <br />
              As the CEO of Digital Line, I lead a talented team focused on developing eCommerce apps and providing cutting-edge digital marketing services to help clients grow their businesses.
              <br />
              <br />
              My experience includes:
              <ul>
                <li>Leading Digital Line, a successful digital marketing and app development firm.</li>
                <li>Developing and launching multiple eCommerce apps, boosting client revenue and engagement.</li>
                <li>Providing Google Play Console expertise, optimizing apps for visibility and performance.</li>
                <li>Designing and executing data-driven marketing strategies to improve ROI for clients.</li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
