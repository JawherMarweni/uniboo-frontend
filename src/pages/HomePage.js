// import React, { useState } from "react";
// import axios from "axios";
// import "./HomePage.css";
// import NavBar from "./navBar";

// function HomePage() {
//   const [message, setMessage] = useState("");
//   const [isMonitoring, setIsMonitoring] = useState(false);

//   const monitoringState = async function () {
//     try {
//       axios
//         .get("http://localhost:5000/monitoringState")
//         .then((response) => {
//           setIsMonitoring(response.data.isMonitoring);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const startMonitor = async function () {
//     try {
//       axios.get("http://localhost:5000/startMonitoring").then((rep) => {
//         if (rep.data.statue == "sucess") {
//           setIsMonitoring(true);
//         }
//       });
//     } catch {}
//   };
//   const stopMonitor = async function () {
//     try {
//       axios.get("http://localhost:5000/stoptMonitoring").then((rep) => {
//         if (rep.data.statue == "sucess") {
//           setIsMonitoring(false);
//         }
//       });
//     } catch {}
//   };
//   // const setTest = async function () {
//   //   axios
//   //     .post("http://localhost:5000/setBotParam", { message: "you" })
//   //     .then((response) => {
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };
//   monitoringState();
//   return (
//     <div className="HomePage">
//       <NavBar></NavBar>
//       {isMonitoring && (
//         <button onClick={stopMonitor} class="btn btn-danger">
//           Stop
//         </button>
//       )}
//       {!isMonitoring && (
//         <button onClick={startMonitor} class="btn btn-success">
//           Start
//         </button>
//       )}
//     </div>
//   );
// }

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
            </Button>{" "}
            {/* Use an outline button with a light border and text */}
          </Col>
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
