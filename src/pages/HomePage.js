// export default HomePage;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
//import './styles.css'; // Import the CSS file for the custom styles

function HomePage() {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h1 className="display-4 mb-4">Uniboo</h1>
            <p className="lead mb-4">
              Automate your Uniswap V3 staking and position removal with ease.
            </p>
            <Button
              variant="outline-light"
              size="lg"
              className="bg-secondary px-4 py-3"
            >
              Get Started
            </Button>
          </Col>
          <span>&nbsp; </span>
        </Row>
      </Container>

      <div className="bg-secondary py-5">
        {" "}
        {/* Use the 'bg-secondary' class for the content background color */}
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className="text-center">
              <h2 className="mb-4">Why Choose Uniboo?</h2>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="text-center">
              <h3>Automated Platform</h3>
              <p>
                Our platform automates the Uniswap V3 staking and position
                removal process, making it easy for you to manage your
                investments.
              </p>
            </Col>

            <Col md={4} className="text-center">
              <h3>Real-time Tracking</h3>
              <p>
                Our platform provides real-time tracking of your positions, so
                you can stay up-to-date with your investments.
              </p>
            </Col>

            <Col md={4} className="text-center">
              <h3>Historical Data</h3>
              <p>
                Our platform allows you to view historical data and performance
                metrics for your positions, so you can make informed investment
                decisions.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
