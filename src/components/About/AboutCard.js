import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <b className="purple">Hevva</b> from Baku, Azerbaijan.
            As a frontend developer, I primarily work with React.js, JavaScript (ES6+), HTML5, and CSS3.
            Additionally, I work with Formik for form management, Redux Toolkit for efficient state management, React Router for routing, Tailwind CSS for fast and functional designs, TypeScript for writing type-safe code, and Next.js for building high-performance React applications.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
