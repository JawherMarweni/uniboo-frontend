import React, { useState } from "react";
import { Button, Input, Form, message, Card, Row, Col, Typography } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import "./FeaturesPage.css";

const FeaturesPage = () => {
  const { Title, Paragraph } = Typography;
  return (
    <div className="feature_backcround text-light py-5 space">
      <div className="container">
        <h2 className="mb-5">
          <BulbOutlined style={{ marginRight: "10px" }} />
          Uniswap v3 Bot Features
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Automated liquidity provision</h5>
                <p className="card-text">
                  The bot will automatically provide liquidity to your chosen
                  token pair using a strategy optimized for maximizing your
                  returns.
                </p>
                <p className="card-text">
                  You can specify the range of prices you want to target, as
                  well as the fee tier you want to provide liquidity for.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Price range optimization</h5>
                <p className="card-text">
                  The bot will continuously monitor the price range of your
                  chosen token pair and adjust your liquidity position
                  accordingly.
                </p>
                <p className="card-text">
                  This ensures that you always have the optimal amount of
                  liquidity in the right price range, maximizing your returns.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Dynamic fee adjustments</h5>
                <p className="card-text">
                  The bot will adjust your liquidity position based on the
                  current fee tier of the Uniswap pool you're providing
                  liquidity to.
                </p>
                <p className="card-text">
                  This ensures that you always have the optimal amount of
                  liquidity at the right fee tier, maximizing your returns.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">24/7 monitoring and maintenance</h5>
                <p className="card-text">
                  Our bot is constantly monitoring your liquidity position and
                  making adjustments to maximize your returns.
                </p>
                <p className="card-text">
                  We also provide maintenance and support to ensure that your
                  bot is always up and running smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Risk management</h5>
                <p className="card-text">
                  Our bot employs advanced risk management strategies to
                  minimize your exposure to market fluctuations.
                </p>
                <p className="card-text">
                  We also provide tools to help you monitor your portfolio and
                  adjust your risk profile as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesPage;
