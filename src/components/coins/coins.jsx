import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./coins.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";


const Coins = () => {
    const [cryptoData, setCryptoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    // Llamada a la API de criptomonedas
  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ALGO,USDT,HBAR,ORDI,SUI,THETA&tsyms=USDT"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos de criptomonedas");
        }
        const data = await response.json();
        setCryptoData(data.RAW); // Almacena los datos en el estado
      } catch (error) {
        setError(error.message); // Maneja errores
      } finally {
        setLoading(false); // Finaliza la carga
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
    <div className="coins-section"> 
        <div className="coins-section__text" data-aos="fade-up">
            <p>Cryptocurrencies</p>
            <h2>Buy your favorite cryptocurrencies and stocks all in one place</h2>
            <button>Explore Dashboard</button>
        </div>
        <div  className="coin bitcoin" data-aos="fade-up">
            <h6>{cryptoData?.BTC?.USDT?.FROMSYMBOL}</h6>
            <span>${cryptoData?.BTC?.USDT?.PRICE.toLocaleString()}</span>
            <p className={`changePrice ${cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR < 0 ? 'negative' : ''}`}>{cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%</p>
            <p className="volume"> ${cryptoData?.BTC?.USDT?.VOLUMEDAY.toLocaleString()}</p>
            <a href="https://es.tradingview.com/symbols/BTCUSDT/" target="_blank" rel="noopener noreferrer">Ver mas</a>
        </div>
        <div className="coin ordi" data-aos="fade-up">
            <h6>{cryptoData?.ORDI?.USDT?.FROMSYMBOL}</h6>
            <span>${cryptoData?.ORDI?.USDT?.PRICE.toLocaleString()}</span>
            <p className={`changePrice ${cryptoData?.ORDI?.USDT?.CHANGEPCT24HOUR < 0 ? 'negative' : ''}`}>{cryptoData?.ORDI?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%</p>
            <p className="volume"> ${cryptoData?.ORDI?.USDT?.VOLUMEDAY.toLocaleString()}</p>
            <a href="https://es.tradingview.com/symbols/ORDIUSDT/" target="_blank" rel="noopener noreferrer">Ver mas</a>
        </div>
        <div className="coin algo" data-aos="fade-up">
            <h6>{cryptoData?.ALGO?.USDT?.FROMSYMBOL}</h6>
            <span>${cryptoData?.ALGO?.USDT?.PRICE.toLocaleString()}</span>
            <p className={`changePrice ${cryptoData?.ALGO?.USDT?.CHANGEPCT24HOUR < 0 ? 'negative' : ''}`}>{cryptoData?.ALGO?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%</p>
            <p className="volume"> ${cryptoData?.ALGO?.USDT?.VOLUMEDAY.toLocaleString()}</p>
            <a href="https://es.tradingview.com/symbols/ALGOUSDT/" target="_blank" rel="noopener noreferrer">Ver mas</a>
        </div>
        <div className="coin theta" data-aos="fade-up">
           <h6>{cryptoData?.THETA?.USDT?.FROMSYMBOL}</h6>
           <span>${cryptoData?.THETA?.USDT?.PRICE.toLocaleString()}</span>
           <p className={`changePrice ${cryptoData?.THETA?.USDT?.CHANGEPCT24HOUR < 0 ? 'negative' : ''}`}>{cryptoData?.THETA?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%</p>
           <p className="volume"> ${cryptoData?.THETA?.USDT?.VOLUMEDAY.toLocaleString()}</p>
           <a href="https://es.tradingview.com/symbols/THETAUSDT/" target="_blank" rel="noopener noreferrer">Ver mas</a>
        </div>
        <div className="coin hbar" data-aos="fade-up">
            <h6>{cryptoData?.HBAR?.USDT?.FROMSYMBOL}</h6>
            <span>${cryptoData?.HBAR?.USDT?.PRICE.toLocaleString()}</span>
            <p className={`changePrice ${cryptoData?.HBAR?.USDT?.CHANGEPCT24HOUR < 0 ? 'negative' : ''}`}>{cryptoData?.HBAR?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%</p>
            <p className="volume"> ${cryptoData?.HBAR?.USDT?.VOLUMEDAY.toLocaleString()}</p>
            <a href="https://es.tradingview.com/symbols/HBARUSDT/" target="_blank" rel="noopener noreferrer">Ver mas</a>
        </div>
        <div className="coin sui" data-aos="fade-up">
            <h6>{cryptoData?.SUI?.USDT?.FROMSYMBOL}</h6>            
            <span>${cryptoData?.SUI?.USDT?.PRICE.toLocaleString()}</span>
            <p className={`changePrice ${cryptoData?.SUI?.USDT?.CHANGEPCT24HOUR < 0 ? 'negative' : ''}`}>{cryptoData?.SUI?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%</p>
            <p className="volume"> ${cryptoData?.SUI?.USDT?.VOLUMEDAY.toLocaleString()}</p>
            <a href="https://es.tradingview.com/symbols/SUIUSDT/" target="_blank" rel="noopener noreferrer">Ver mas</a>
        </div>
    </div>
  );
};

export { Coins };