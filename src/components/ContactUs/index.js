// ContactUs.js
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./ContactUs.scss";
import Button from "../../ResuableComponent/Button";
import { FaRegCopy } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

function ContactUs() {
  return (
    <Container className="contact-us">
      {/* <Row className="justify-content-center">
        <Col lg={12}>
          <div className="chat-box">
            <div className="user-message d-flex justify-content-between">
              <p className="user-font-style">
                <div>User</div>
                <div className="time-text">at 11:30 am</div>
              </p>
              <p className="user-desc">
                Hello, can you suggest me some colleges?
              </p>
            </div>
            <div className="ai-message d-flex justify-content-between">
              <p className="ai-font-style">
                <div>AI</div>
                <div className="time-text">at 11:30 am</div>
              </p>
              <p className="ai-desc">
                Hello!
                <br />
                I’d be happy to help you with that. According to my knowledge,
                here are the top 6 colleges for undecided majors:
                <br />
                <strong>University of Michigan:</strong> Known for its strong
                programs in various fields, the University of Michigan is an
                excellent choice for undecided students.
                <br />
                <strong>University of California, Berkeley:</strong> With over
                100 majors to choose from, UC Berkeley offers a wide range of
                options for students who are still exploring their academic
                interests.
                <br />
                <strong>University of Texas at Austin:</strong> This university
                has a strong reputation for supporting undecided students, with
                resources like the University Exploratory Advising Center.
                <br />
                <strong>
                  University of Illinois at Urbana-Champaign:
                </strong>{" "}
                UIUC offers a variety of majors and has a strong support system
                for undecided students, including the Undeclared Student
                Advising Office.
                <br />
                <strong>Purdue University:</strong> Purdue is known for its
                strong programs in STEM fields, but it also offers a range of
                other majors, making it a great choice for undecided students.
                <br />
                <strong>University of Washington:</strong> The University of
                Washington has a strong reputation for supporting undecided
                students, with resources like the Center for Undergraduate
                Advising and Academic Services.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} className="contact-btn-container">
          <Button
            startIcon={<FaRegCopy className="mr-2" />}
            label="Copy"
            className={"copy-btn"}
          />
        </Col>

        <div className="query-textarea position-relative">
            <textarea placeholder="Enter your query" />
            <span className="query-share-svg position-absolute"><RiSendPlaneFill /></span>
        </div>
      </Row> */}

      <Row className="contact-us-container">
        <div className="contect-us-text">Contact Us</div>
        <div className="query-text">For any queries, please email us at &nbsp;
          <a href="mailto:admin@josaahelp.in" className="email-link">
            admin@josaahelp.in
          </a>.</div>
      </Row>
    </Container>
  );
}

export default ContactUs;
