import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const DocsPage = () => {
  return (
    <div className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="mb-4">Documentation</h1>
            <p className="lead">
              Welcome to the UniBoo documentation page. Here you'll find all the
              information you need to get started with UniBoo.
            </p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row className="my-5">
          <Col md={4} className="mb-4">
            <h4 className="mb-4">Getting Started</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Installation Guide</a>
              </li>
              <li>
                <a href="#">Quick Start Guide</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h4 className="mb-4">API Reference</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">API Documentation</a>
              </li>
              <li>
                <a href="#">Code Examples</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h4 className="mb-4">Contributing</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">How to Contribute</a>
              </li>
              <li>
                <a href="#">Code of Conduct</a>
              </li>
              <li>
                <a href="#">Reporting Bugs</a>
              </li>
              <li>
                <a href="#">Feature Requests</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row className="my-5">
          <Col md={4} className="mb-4">
            <h4 className="mb-4">Installation</h4>
            <p>Follow these steps to install UniBoo:</p>
            <ol className="pl-3">
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success"
                />{" "}
                Clone the UniBoo repository
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success"
                />{" "}
                Install the necessary dependencies
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success"
                />{" "}
                Run UniBoo
              </li>
            </ol>
            <Button variant="primary" className="mt-4">
              Read Installation Guide
            </Button>
          </Col>
          <Col md={8}>
            <h4 className="mb-4">Code Examples</h4>
            <p>
              Here are some code examples to help you get started with UniBoo:
            </p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Example 1</a>
              </li>
              <li>
                <a href="#">Example 2</a>
              </li>
              <li>
                <a href="#">Example 3</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DocsPage;
