import React, { useState } from "react";

const SettingsPage = () => {
  const [rpcUrl, setRpcUrl] = useState("https://rpc.uniboo.com");
  const [contractAddress, setContractAddress] = useState(
    "0x123456789ABCDEF..."
  );
  const [supportedPairs, setSupportedPairs] = useState([
    "ETH/USDT",
    "BTC/USDT",
    "BNB/USDT",
  ]);
  const [newPair, setNewPair] = useState("");
  const [checkTimeInterval, setCheckTimeInterval] = useState(60);

  const handleRpcUrlCopy = () => {
    // Logic to copy RPC URL to clipboard
    // Implement your own logic here
    console.log("RPC URL copied");
  };

  const handleContractAddressCopy = () => {
    // Logic to copy contract address to clipboard
    // Implement your own logic here
    console.log("Contract address copied");
  };

  const handleAddPair = () => {
    if (newPair.trim() !== "") {
      setSupportedPairs([...supportedPairs, newPair]);
      setNewPair("");
    }
  };

  const handleRemovePair = (pair) => {
    const updatedPairs = supportedPairs.filter((p) => p !== pair);
    setSupportedPairs(updatedPairs);
  };

  return (
    <div className="container bg-dark text-light py-5">
      <h2 className="text-light">Settings</h2>
      <div className="section">
        <h3 className="text-light">RPC URL</h3>
        <div className="form-group">
          <label htmlFor="rpcUrl" className="text-light">
            RPC URL:
          </label>
          <div className="input-group">
            <input
              type="text"
              id="rpcUrl"
              className="form-control"
              value={rpcUrl}
              onChange={(e) => setRpcUrl(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-light"
                onClick={handleRpcUrlCopy}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="efficiency text-light">Efficiency: 90%</div>
        </div>
      </div>
      <div className="section">
        <h3 className="text-light">Smart Contract Address</h3>
        <div className="form-group">
          <label htmlFor="contractAddress" className="text-light">
            Contract Address:
          </label>
          <div className="input-group">
            <input
              type="text"
              id="contractAddress"
              className="form-control"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
            />
            <div className="input-group-append">
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h3 className="text-light">Add Pair</h3>
        <div className="form-group">
          <label htmlFor="pairInput" className="text-light">
            Pair Address:
          </label>
          <div className="d-flex align-items-center">
            <input
              type="text"
              id="pairInput"
              className="form-control mr-2"
              value={newPair}
              onChange={(e) => setNewPair(e.target.value)}
            />
            <button className="btn btn-outline-light" onClick={handleAddPair}>
              Add Pair
            </button>
          </div>
        </div>
        <div className="text-light">Supported Pairs:</div>
        <ul className="list-group">
          {supportedPairs.map((pair, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              {pair}
              <button
                className="btn btn-outline-light"
                onClick={() => handleRemovePair(pair)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3 className="text-light">Check Time Interval</h3>
        <div className="form-group">
          <label htmlFor="checkTimeInterval" className="text-light">
            Interval (seconds):
          </label>
          <input
            type="number"
            id="checkTimeInterval"
            className="form-control"
            value={checkTimeInterval}
            onChange={(e) => setCheckTimeInterval(e.target.value)}
          />
        </div>
      </div>
      <div className="section">
        <h3 className="text-light">Bot Address Balance</h3>
        <div className="text-light">Balance: 100 ETH</div>
      </div>
      <div className="section">
        <button className="btn btn-outline-light">Save Settings</button>
      </div>
    </div>
  );
};

export default SettingsPage;
