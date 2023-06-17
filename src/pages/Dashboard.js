import React from "react";
import ActionsSection from "./ActionsSection";
import GraphProfit from "./GraphProfit";
import GraphPrice from "./GraphPrice";
import UpperDashboard from "./UpperDashboard";

const Dashboard = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-9">
          <UpperDashboard />

          <div className="my-4"></div>

          <ActionsSection />

          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="card bg-dark text-light mb-4">
                <div className="card-body">
                  <h5 className="card-title">Graph Profit</h5>
                  <GraphProfit />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card bg-dark text-light mb-4">
                <div className="card-body">
                  <h5 className="card-title">Graph Price</h5>
                  <GraphPrice />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
