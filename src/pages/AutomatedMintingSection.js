import React, { useState } from "react";
import { FaPlay, FaPause, FaCheck, FaTimes } from "react-icons/fa";

const AutomatedMintingSection = () => {
  const [activeTab, setActiveTab] = useState("command");
  const [isBotWorking, setIsBotWorking] = useState(false);
  const [isBotInRange, setIsBotInRange] = useState(false);
  const [selectedPair, setSelectedPair] = useState("");
  const [upperRange, setUpperRange] = useState("");
  const [lowerRange, setLowerRange] = useState("");
  const [upperRangeCapacity, setUpperRangeCapacity] = useState("");
  const [lowerRangeCapacity, setLowerRangeCapacity] = useState("");
  const [checkTime, setCheckTime] = useState("");
  const [automatedGasFeeEnabled, setAutomatedGasFeeEnabled] = useState(false);
  const [manualGasFee, setManualGasFee] = useState("");

  const handleStartBot = () => {
    setIsBotWorking(!isBotWorking);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePairChange = (e) => {
    setSelectedPair(e.target.value);
  };

  const handleSaveSettings = () => {
    // Perform actions to save settings
  };

  return (
    <div className="card bg-dark text-light mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Automated Minting</h2>
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "command" ? "active" : ""}`}
              onClick={() => handleTabChange("command")}
            >
              Command
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "control" ? "active" : ""}`}
              onClick={() => handleTabChange("control")}
            >
              Control
            </button>
          </li>
        </ul>
        {activeTab === "command" && (
          <div className="command-section">
            <h3 className="section-title">Command</h3>
            <div className="d-flex align-items-center mb-3">
              <button
                className={`btn btn-primary ${isBotWorking ? "active" : ""}`}
                onClick={handleStartBot}
              >
                {isBotWorking ? <FaPause /> : <FaPlay />}
                {isBotWorking ? "Pause Bot" : "Start Bot"}
              </button>
              <div className="ml-3">
                {isBotInRange ? (
                  <span className="in-range">
                    <FaCheck /> In Range
                  </span>
                ) : (
                  <span className="out-of-range">
                    <FaTimes /> Out of Range
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        {activeTab === "control" && (
          <div className="control-section">
            <h3 className="section-title">Control</h3>
            <div className="mb-3">
              <label htmlFor="pair" className="form-label">
                Pair:
              </label>
              <select
                id="pair"
                className="form-select"
                value={selectedPair}
                onChange={handlePairChange}
              >
                <option value="">Select Pair</option>
                <option value="ETH/USDT">ETH/USDT</option>
                <option value="BTC/USDT">BTC/USDT</option>
                <option value="BNB/USDT">BNB/USDT</option>
              </select>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="upperRange" className="form-label">
                  Upper Range:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="upperRange"
                  value={upperRange}
                  onChange={(e) => setUpperRange(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="lowerRange" className="form-label">
                  Lower Range:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lowerRange"
                  value={lowerRange}
                  onChange={(e) => setLowerRange(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="upperRangeCapacity" className="form-label">
                  Upper Range Capacity:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="upperRangeCapacity"
                  value={upperRangeCapacity}
                  onChange={(e) => setUpperRangeCapacity(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="lowerRangeCapacity" className="form-label">
                  Lower Range Capacity:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lowerRangeCapacity"
                  value={lowerRangeCapacity}
                  onChange={(e) => setLowerRangeCapacity(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="checkTime" className="form-label">
                Check Time:
              </label>
              <input
                type="text"
                className="form-control"
                id="checkTime"
                value={checkTime}
                onChange={(e) => setCheckTime(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="automatedGasFeeEnabled"
                checked={automatedGasFeeEnabled}
                onChange={(e) => setAutomatedGasFeeEnabled(e.target.checked)}
              />
              <label
                htmlFor="automatedGasFeeEnabled"
                className="form-check-label"
              >
                Automated Gas Fee
              </label>
            </div>
            {!automatedGasFeeEnabled && (
              <div className="mb-3">
                <label htmlFor="manualGasFee" className="form-label">
                  Manual Gas Fee:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="manualGasFee"
                  value={manualGasFee}
                  onChange={(e) => setManualGasFee(e.target.value)}
                />
              </div>
            )}
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={handleSaveSettings}
            >
              Save Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomatedMintingSection;
