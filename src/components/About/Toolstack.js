import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiReact,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <style>{`
        .tech-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          font-size: 36px;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .tech-icons:hover {
          transform: scale(1.2);
         
        }
      `}</style>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode title="VS Code" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman title="Postman" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub title="GitHub" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact title="React" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel title="Vercel" />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
