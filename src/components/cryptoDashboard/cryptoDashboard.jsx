import React from "react";
import "./cryptoDashboard.css";
import { TradingViewChart } from "../tradingviewChart/tradingviewChart";
import { useEffect, useState } from "react";
import { CryptoDoughnutChart } from "../CryptoDoughnutChart/cryptoDoughnutChart";
import FearAndGreed from "../fearAndGreed/fearAndGreed";
import { BitcoinDominance } from "../btcDominance/btcDominance";
import { EthereumDominance } from "../ethDominance/ethDominance";
import { OrdersCrypto } from "../ordersCrypto/ordersCrypto";

const CryptoDashboard = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Llamada a API de criptomonedas
  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ALGO,USDT,HBAR,ORDI,SUI,THETA&tsyms=USDT",
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos de criptomonedas");
        }
        const data = await response.json();
        setCryptoData(data.RAW);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoPrice();
  }, []);

  if (loading) {
    return <div className="bento-item">Cargando...</div>;
  }

  if (error) {
    return <div className="bento-item">Error: {error}</div>;
  }

  if (!cryptoData) {
    return <div className="bento-item">No se han obtenido los datos</div>;
  }

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
      <div className="crypto-dashboard__slider">
        <div className="crypto-dashboard__slider-item">
          <ul>
            <i class="bx bx-wallet"></i>
            <p>Estimated Balance</p>
          </ul>
          <span>$123,987.65</span>
          <ul>
            <p className="profit">Monthly Profit</p>
            <p className="daily-change">+$2560.78</p>
            <p className="pct-change ">+14.67%</p>
          </ul>
        </div>

        <div className="crypto-dashboard__slider-item">
          <BitcoinDominance />
          <EthereumDominance />
        </div>

        <div className="crypto-dashboard__slider-item">
          <FearAndGreed />
        </div>

        <div className="crypto-dashboard__slider-item">
          <ul>
            <img src="/cryptocurrency-icons/svg/icon/theta.svg" alt="" />
            <p>THETAUSDT</p>
          </ul>
          <span>${cryptoData?.THETA?.USDT?.PRICE.toLocaleString()}</span>
          <ul>
            <p className="profit">PNL Daily</p>
            <p
              className={`daily-change ${cryptoData?.THETA?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.THETA?.USDT?.CHANGE24HOUR.toLocaleString()}
            </p>
            <p
              className={`pct-change ${cryptoData?.THETA?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.THETA?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%{" "}
            </p>
          </ul>
        </div>
        <div className="crypto-dashboard__slider-item">
          <ul>
            <img src="/cryptocurrency-icons/svg/icon/eth.svg" alt="" />
            <p>ETHUSDT</p>
          </ul>
          <span>${cryptoData?.ETH?.USDT?.PRICE.toLocaleString()}</span>
          <ul>
            <p className="profit">PNL Daily</p>
            <p
              className={`daily-change ${cryptoData?.ETH?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.ETH?.USDT?.CHANGE24HOUR.toLocaleString()}
            </p>
            <p
              className={`pct-change ${cryptoData?.ETH?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.ETH?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%{" "}
            </p>
          </ul>
        </div>
      </div>
      <div className="crypto-dashboard__content">
        <div className="crypto-dashboard__graph">
          <TradingViewChart />
        </div>

        <div className="crypto-dashboard__info">
          <div className="convert">
            <h2>Convert</h2>
            <div className="convert-input">
              <input type="number" placeholder="0.00" />
              <select name="" id="">
                <option value="USDT">USDT</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="ALGO">ALGO</option>
                <option value="THETA">THETA</option>
                <option value="HBAR">HBAR</option>
                <option value="ORDI">ORDI</option>
                <option value="SUI">SUI</option>
              </select>
            </div>
            <div className="convert-input">
              <input type="number" placeholder="0.00" />
              <select name="" id="">
                <option value="USDT">USDT</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="ALGO">ALGO</option>
                <option value="THETA">THETA</option>
                <option value="HBAR">HBAR</option>
                <option value="ORDI">ORDI</option>
                <option value="SUI">SUI</option>
              </select>
            </div>
            <button className="convert-button">Convert</button>
          </div>

          <div className="assets">
            <CryptoDoughnutChart />
          </div>
        </div>
      </div>
      <OrdersCrypto />
    </div>
  );
};

export { CryptoDashboard };
