import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import light from "../../assests/images/light.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <Container fluid className="footer-container m-0 p-0">
      <Row className="footer-row-one d-flex flex-column col-12 w-100 m-0">
        <Col className="logo-wrapper w-100">
          <Col lg={2} className="footer-logo">
            <img src={light} alt="logo" width={"100%"} height={"100%"} />
          </Col>
        </Col>

        <Col className="footer-text">
          * josaahelp.in is an independent website and tool not affiliated with
          the official JOSAA website. Our services are private and tailored to
          assist users with their college admission preferences.
        </Col>
      </Row>

      <Row className="footer-row-two">
        <Col className="cc-text">© 2024 JoSSAHelp.in, All rights reserved</Col>
      </Row>
    </Container>
  );
};

export default Footer;
