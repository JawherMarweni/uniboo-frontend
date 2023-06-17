import React from "react";

const PositionSection = () => {
  const positions = [
    {
      tokenPair: "ETH/USDT",
      currentPrice: 3500,
      positionRange: "3000 - 4000",
      profitLoss: 500,
      volume: 1000,
      marketCap: 2000,
    },
    {
      tokenPair: "BTC/USDT",
      currentPrice: 40000,
      positionRange: "35000 - 45000",
      profitLoss: -1000,
      volume: 500,
      marketCap: 3000,
    },
    // Add more position data as needed
  ];

  return (
    <div className="mb-4">
      <h4 className="card-title">Position</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Token Pair</th>
            <th>Current Price</th>
            <th>Position Range</th>
            <th>Profit/Loss</th>
            <th>Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={index}>
              <td>{position.tokenPair}</td>
              <td>${position.currentPrice}</td>
              <td>{position.positionRange}</td>
              <td>${position.profitLoss}</td>
              <td>{position.volume}</td>
              <td>{position.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PositionSection;
