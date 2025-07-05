import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              I am a frontend developer skilled in building dynamic and responsive web interfaces using modern technologies like <b className="purple"> React, JavaScript (ES6+), HTML5, </b> and <b className="purple">CSS3</b>.
              I focus on writing clean, reusable components, effectively managing application state (using <b className="purple">Redux</b> or <b className="purple">Context API</b>), and optimizing performance to deliver a smooth user experience.

              <br />
              <br />I enjoy transforming complex UI/UX designs into functional and easy-to-understand code. The applications I develop work flawlessly across various devices and browsers. I follow best practices to create user-friendly and accessible interfaces.
              <br />
              <br />Additionally, I have experience with version control systems like <b className="purple">Git/GitHub,</b> integrating <b className="purple">RESTful APIs,</b>, and using design tools such as <b className="purple">Figma</b> to convert mockups into interactive web pages. I have also worked with responsive frameworks like <b className="purple"> Bootstrap.</b>

              I continuously stay updated with the latest developments and strive to improve my skills and knowledge.


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={process.env.PUBLIC_URL + "/about-me.jpg"} className="img-fluid" alt="avatar" style={{ borderRadius: "50%", width: "230px", height: "230px", objectFit: "cover" }} />
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
                  href="https://github.com/hvvahsnli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hvvahsnli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hhsnlii/"
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
