import React, { useState, useEffect } from "react";
import axios from "axios";
import "./btcDominance.css";

const BitcoinDominance = () => {
  const [btcDominance, setBtcDominance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinDominance = async () => {
      try {
        const btcResponse = await axios.get(
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=1&tsym=USD",
        );

        if (
          !btcResponse.data.Data ||
          !btcResponse.data.Data[0] ||
          !btcResponse.data.Data[0].RAW?.USD?.MKTCAP
        ) {
          throw new Error("No se pudo obtener la capitalización de Bitcoin");
        }

        const btcMarketCap = btcResponse.data.Data[0].RAW.USD.MKTCAP;

        const top10Response = await axios.get(
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",
        );

        if (
          !top10Response.data.Data ||
          !Array.isArray(top10Response.data.Data)
        ) {
          throw new Error(
            "No se pudo obtener la capitalización total del mercado",
          );
        }

        const totalMarketCap = top10Response.data.Data.reduce((total, coin) => {
          return total + (coin.RAW?.USD?.MKTCAP || 0);
        }, 0);

        const dominance = (btcMarketCap / totalMarketCap) * 100;
        setBtcDominance(dominance);
      } catch (err) {
        setError(err.message);
        console.error("Error en la solicitud:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinDominance();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="btc-dominance">
      <p>
        Dominance <i class="bx bx-chevron-right"></i>
      </p>
      <p>
        <img src="/cryptocurrency-icons/svg/icon/btc.svg" alt="BTC" />
        {btcDominance?.toFixed(2) ?? "N/A"}%
      </p>
    </div>
  );
};

export { BitcoinDominance };
