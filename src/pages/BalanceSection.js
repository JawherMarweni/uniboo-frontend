import React, { useState } from "react";

const BalanceSection = () => {
  const [accountBalance, setAccountBalance] = useState(1000);
  const [lockedBalance, setLockedBalance] = useState(500);

  return (
    <div className="mb-4">
      <h4 className="card-title">Balances</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Balance Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account Balance</td>
            <td>${accountBalance}</td>
          </tr>
          <tr>
            <td>Locked Balance</td>
            <td>${lockedBalance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSection;
