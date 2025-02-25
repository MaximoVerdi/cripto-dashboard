import React from "react";
import "./cryptoDashboard.css";
import { TradingViewChart } from "../tradingviewChart/tradingviewChart";
import { useEffect, useState } from "react";

const CryptoDashboard = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Llamada a la API de criptomonedas
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

  // Renderizado condicional
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
          <ul>
            <img
              src="../node_modules/cryptocurrency-icons/svg/icon/btc.svg"
              alt=""
            />
            <p>BTCUSDT</p>
          </ul>
          <span>${cryptoData?.BTC?.USDT?.PRICE.toLocaleString()}</span>
          <ul>
            <p className="profit">PNL Daily</p>
            <p
              className={`daily-change ${cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.BTC?.USDT?.CHANGE24HOUR.toLocaleString()}
            </p>
            <p
              className={`pct-change ${cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%{" "}
            </p>
          </ul>
        </div>

        <div className="crypto-dashboard__slider-item">
          <ul>
            <img
              src="../node_modules/cryptocurrency-icons/svg/icon/algo.svg"
              alt=""
            />
            <p>ALGOUSDT</p>
          </ul>
          <span>${cryptoData?.ALGO?.USDT?.PRICE.toLocaleString()}</span>
          <ul>
            <p className="profit">PNL Daily</p>
            <p
              className={`daily-change ${cryptoData?.ALGO?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.ALGO?.USDT?.CHANGE24HOUR.toLocaleString()}
            </p>
            <p
              className={`daily-change ${cryptoData?.ALGO?.USDT?.CHANGEPCT24HOUR < 0 ? "negative" : ""}`}
            >
              {cryptoData?.ALGO?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%
            </p>
          </ul>
        </div>

        <div className="crypto-dashboard__slider-item">
          <ul>
            <img
              src="../node_modules/cryptocurrency-icons/svg/icon/algo.svg"
              alt=""
            />
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
            <img
              src="../node_modules/cryptocurrency-icons/svg/icon/eth.svg"
              alt=""
            />
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
      </div>
    </div>
  );
};

export { CryptoDashboard };
