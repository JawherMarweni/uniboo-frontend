import React, { useState } from "react";

const ManageFundsSection = () => {
  const [selectedToken, setSelectedToken] = useState("");
  const [fundsToAdd, setFundsToAdd] = useState(0);
  const [fundsToWithdraw, setFundsToWithdraw] = useState(0);

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  const handleAddFunds = () => {
    // Logic for adding funds
    console.log(`Adding ${fundsToAdd} ${selectedToken}`);
  };

  const handleWithdrawFunds = () => {
    // Logic for withdrawing funds
    console.log(`Withdrawing ${fundsToWithdraw} ${selectedToken}`);
  };

  const isTokenSelected = selectedToken !== "";

  return (
    <div className="card bg-dark text-light mb-4 manage-funds-section">
      <div className="card-body">
        <h2 className="card-title">Manage Funds</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="tokenSelect" className="form-label">
              Token:
            </label>
            <select
              id="tokenSelect"
              className="form-select"
              value={selectedToken}
              onChange={handleTokenChange}
            >
              <option value="">Select a token</option>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
              <option value="DAI">DAI</option>
              {/* Add more token options as needed */}
            </select>
            {isTokenSelected && <hr className="my-3" />}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="addFundsInput" className="form-label">
              Add Funds:
            </label>
            <div className="input-group">
              <input
                type="number"
                id="addFundsInput"
                className="form-control"
                value={fundsToAdd}
                onChange={(e) => setFundsToAdd(e.target.value)}
                disabled={!isTokenSelected}
              />
              <button
                className="btn btn-outline-light"
                onClick={handleAddFunds}
                type="button"
                disabled={!isTokenSelected}
              >
                Add
              </button>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="withdrawFundsInput" className="form-label">
              Withdraw Funds:
            </label>
            <div className="input-group">
              <input
                type="number"
                id="withdrawFundsInput"
                className="form-control"
                value={fundsToWithdraw}
                onChange={(e) => setFundsToWithdraw(e.target.value)}
                disabled={!isTokenSelected}
              />
              <button
                className="btn btn-outline-light"
                onClick={handleWithdrawFunds}
                type="button"
                disabled={!isTokenSelected}
              >
                Withdraw
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageFundsSection;
