import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  DiHtml5,
  DiReact,
  DiBootstrap,
  DiJavascript1,
  DiPython,
  DiGit,
  DiCss3,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 size={60} color="#E34F26" title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 size={60} color="#1572B6" title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={60} color="#F7DF1E" title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={60} color="#61DAFB" title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap size={60} color="#7952B3" title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size={60} color="#F05032" title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={60} color="#306998" title="Python" />
      </Col>
    </Row>
  );
}

export default Techstack;
