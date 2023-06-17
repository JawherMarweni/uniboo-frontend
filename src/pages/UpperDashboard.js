import React, { useState } from "react";
import BalanceSection from "./BalanceSection";
import PositionSection from "./PositionSection";
import ManageFundsSection from "./ManageFundsSection";
import AutomatedMintingSection from "./AutomatedMintingSection";
import HistorySection from "./HistorySection";

const NavBar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              className={`nav-link btn ${
                activeSection === "balance" ? "active" : ""
              }`}
              onClick={() => setActiveSection("balance")}
            >
              Balance
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${
                activeSection === "position" ? "active" : ""
              }`}
              onClick={() => setActiveSection("position")}
            >
              Position
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${
                activeSection === "manageFunds" ? "active" : ""
              }`}
              onClick={() => setActiveSection("manageFunds")}
            >
              Manage Funds
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${
                activeSection === "automatedMinting" ? "active" : ""
              }`}
              onClick={() => setActiveSection("automatedMinting")}
            >
              Automated Minting
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${
                activeSection === "history" ? "active" : ""
              }`}
              onClick={() => setActiveSection("history")}
            >
              History
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const UpperDashboard = () => {
  const [activeSection, setActiveSection] = useState("balance");

  return (
    <div className="container mt-4">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="card bg-dark text-light mt-4">
        <div className="card-body">
          {activeSection === "balance" && <BalanceSection />}
          {activeSection === "position" && <PositionSection />}
          {activeSection === "manageFunds" && <ManageFundsSection />}
          {activeSection === "automatedMinting" && <AutomatedMintingSection />}
          {activeSection === "history" && <HistorySection />}
        </div>
      </div>
    </div>
  );
};

export default UpperDashboard;
