import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./popup.css";
import metamaskLogo from "./metamask.svg";

function Popup({ handelConnect }) {
  const connectToMetaMask = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      handelConnect();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>Welcome to UniBoo</Card.Title>
            <Card.Text>
              We are glad that you are here. Please feel free to explore our
              products and services.
            </Card.Text>
            <Button onClick={connectToMetaMask} variant="outline-dark">
              <img
                src={metamaskLogo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />
              <span> Connect to MetaMask</span>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Popup;
