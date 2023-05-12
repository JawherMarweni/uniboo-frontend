import React, { useState, useEffect } from "react";
//import { getcurrentPrice, getUpperPrice, getLowerPrice, getCurrentPosition, getHistory, getCollectedFee, getCurrentBalance } from './your-uniswap-bot';
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [pair, setPair] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [upperPrice, setUpperPrice] = useState(0);
  const [lowerPrice, setLowerPrice] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [history, setHistory] = useState([]);
  const [collectedFee, setCollectedFee] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  //   useEffect(() => {
  //     // Call functions to get data from Uniswap API
  //     const price = getcurrentPrice(pair);
  //     setCurrentPrice(price);
  //     const upper = getUpperPrice();
  //     setUpperPrice(upper);
  //     const lower = getLowerPrice();
  //     setLowerPrice(lower);
  //     const position = getCurrentPosition();
  //     setCurrentPosition(position);
  //     const tradingHistory = getHistory();
  //     setHistory(tradingHistory);
  //     const fee = getCollectedFee();
  //     setCollectedFee(fee);
  //     const balance = getCurrentBalance();
  //     setCurrentBalance(balance);
  //   }, [pair]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // // Call function to set selected pair
    // setPair(e.target.value);
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Price",
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: false,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    // responsive: true,
    // maintainAspectRatio: false,
    // legend: {
    //   display: false,
    // },
    // scales: {
    //   xAxes: [
    //     {
    //       gridLines: {
    //         display: false,
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       gridLines: {
    //         color: "#3b3f5c",
    //         zeroLineColor: "#3b3f5c",
    //         borderDash: [5],
    //       },
    //       ticks: {
    //         fontColor: "#fff",
    //       },
    //     },
    //   ],
    // },
  };
  return (
    <div className="dashboard bg-dark text-light space">
      <form className="dashboard__form mt-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pair">Select Pair:</label>
          <select id="pair" name="pair" className="form-control">
            <option value="pair-1">USDC-MATIC</option>
            <option value="pair-2">USDT-MATIC</option>
            <option value="pair-3">USDC-ETH</option>
            <option value="pair-3">USDT-ETH</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      <div className="dashboard__metrics row mt-5">
        <div className="col-md-3">
          <div className="dashboard__metric card bg-secondary text-light">
            <div className="card-body">
              <h5 className="card-title">Current Price:</h5>
              <p className="card-text">{currentPrice}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard__metric card bg-secondary text-light">
            <div className="card-body">
              <h5 className="card-title">Upper Price:</h5>
              <p className="card-text">{upperPrice}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard__metric card bg-secondary text-light">
            <div className="card-body">
              <h5 className="card-title">Lower Price:</h5>
              <p className="card-text">{lowerPrice}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard__metric card bg-secondary text-light">
            <div className="card-body">
              <h5 className="card-title">Current Position:</h5>
              <p className="card-text">{currentPosition}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__chart mt-5">
        {/* <Line data={data} options={options} /> */}
      </div>
      <div className="dashboard__history mt-5">
        <h3>History</h3>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>Pair</th>
              <th>Position</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.pair}</td>
                <td>{item.position}</td>
                <td>{item.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dashboard__balance mt-5">
        <h3>Current Balance: {currentBalance}</h3>
        <h4>Collected Fee: {collectedFee}</h4>
      </div>
    </div>
  );
};

export default Dashboard;
