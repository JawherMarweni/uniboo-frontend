import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./FeaturesPage.css";

const ContactPage = () => {
  return (
    <div className="bg-dark text-light py-5 space">
      <Container>
        <Row>
          <Col md={6} className="mb-5">
            <h2 className="text-white">Contact Us</h2>
            <p className="text-muted mb-5">
              We'd love to hear from you! Whether you have a question, comment,
              or suggestion, feel free to get in touch with us using the contact
              form below. Our team will do our best to respond to your inquiry
              as soon as possible. Thank you for considering UniBoo as your
              go-to resource for all things tech.
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Type your message here"
                  rows={5}
                />
              </Form.Group>
              <div className="space"></div>
              <Button variant="outline-light" href="/signup space">
                submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2 className="text-white mb-4">Find Us</h2>
            <ul className="list-unstyled text-muted">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                support@uniboo.com
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} className="mr-3" />
                github.com/uniboo
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
                linkedin.com/company/uniboo
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
