import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  DiHtml5,
  DiBootstrap,
  DiJavascript1,
  DiGit,
  DiCss3,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiFormstack, } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <DiHtml5 size={60} color="#E34F26" title="HTML5" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <DiCss3 size={60} color="#1572B6" title="CSS3" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <DiJavascript1 size={60} color="#F7DF1E" title="JavaScript" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <DiBootstrap size={60} color="#7952B3" title="Bootstrap" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <DiGit size={60} color="#F05032" title="Git" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <SiTailwindcss size={60} color="#38BDF8" title="Tailwind CSS" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <SiTypescript size={60} color="#3178C6" title="TypeScript" />
      </Col>

      <Col xs={4} md={2} className="tech-icons hover:scale-110 transition-transform duration-300">
        <SiFormstack size={60} color="#764ABC" title="Redux" />
      </Col>

    </Row>
  );
}

export default Techstack;
