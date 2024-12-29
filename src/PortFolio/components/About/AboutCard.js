import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daya Chaudhary </span>
            from <span className="purple"> India.</span>
            <br />
            I am currently the Founder & CEO of Digital Line, a leading digital marketing agency with 5 years of experience in the industry.
            <br />
            My expertise lies in <span className="purple">Google Play Console, app development for eCommerce, and digital marketing strategies.</span>
            <br />
            <br />
            Apart from my work, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching digital marketing trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating on innovative business ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I strive to create products that make a real impact and drive growth!"{" "}
          </p>
          <footer className="blockquote-footer">Daya Chaudhary</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
