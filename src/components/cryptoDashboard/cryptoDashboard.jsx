import React from "react";
import "./cryptoDashboard.css";
import { TradingViewChart } from "../tradingviewChart/tradingviewChart";

const CryptoDashboard = () => {
  return (
    <div className="crypto-dashboard">
      <div className="crypto-dashboard__widgets">
        <ul className="crypto-dashboard__widgets-list">
          <li>
            <i className="bx bx-align-left"></i>
          </li>
          <li>
            <i className="bx bx-message-square"></i>
          </li>
          <li>
            <i className="bx bx-notepad"></i>
          </li>
        </ul>
        <ul className="crypto-dashboard__widgets-list">
          <li className="lupita">
            <input
              className="input-search"
              type="search"
              placeholder="Search"
            />
            <i class="bx bx-search-alt-2"></i>
          </li>
          <li>
            <i className="bx bx-bell"></i>
          </li>
          <li>
            <i class="bx bx-user"></i>
          </li>
          <li>
            <i className="bx bx-brightness"></i>
          </li>
          <li>
            <i className="bx bx-cog"></i>
          </li>
        </ul>
      </div>

      <div className="crypto-dashboard__content">
        <div className="crypto-dashboard__balance">
          <ul>
            <h2>$56,456.11</h2>
            <span>-150.15%</span>
            <i class="bx bxs-down-arrow"></i>
          </ul>
          <ul>
            <p>Bicoin USD(BTC-USD)</p>
          </ul>
        </div>
        <div className="crypto-dashboard__graph">
          <TradingViewChart />
        </div>
      </div>
    </div>
  );
};

export { CryptoDashboard };
