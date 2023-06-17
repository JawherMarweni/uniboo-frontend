import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "17:00", usd: 750, pv: 1000, amt: 1000 },
  { name: "19:00", usd: 780, pv: 1000, amt: 1000 },
  { name: "21:00", usd: 783, pv: 1000, amt: 1000 },
  { name: "21:00", usd: 1782, pv: 1000, amt: 1000 },
  { name: "21:00", usd: 781, pv: 1000, amt: 1000 },
  { name: "21:00", usd: 1760, pv: 1000, amt: 1000 },
];

const GraphPrice = () => {
  return (
    <div className="card bg-dark text-light mb-4">
      <div className="card-body">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="usd" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphPrice;
