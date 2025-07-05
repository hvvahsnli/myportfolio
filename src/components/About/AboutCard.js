import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <b className="purple">Hevva</b> from Baku, Azerbaijan.
            I am currently working as a frontend developer, passionate about building interactive, user-friendly web interfaces.
            I have experience with modern technologies like React.js, JavaScript (ES6+), HTML5, and CSS3.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
