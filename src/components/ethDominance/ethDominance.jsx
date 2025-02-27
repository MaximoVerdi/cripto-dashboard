import React, { useState, useEffect } from "react";
import axios from "axios";

const EthereumDominance = () => {
  const [ethDominance, setEthDominance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEthereumDominance = async () => {
      try {
        const ethResponse = await axios.get(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD",
        );

        if (
          !ethResponse.data ||
          !ethResponse.data.RAW ||
          !ethResponse.data.RAW.ETH ||
          !ethResponse.data.RAW.ETH.USD ||
          !ethResponse.data.RAW.ETH.USD.MKTCAP
        ) {
          throw new Error("No se pudo obtener la capitalización de Ethereum");
        }

        const ethMarketCap = ethResponse.data.RAW.ETH.USD.MKTCAP;

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

        const dominance = (ethMarketCap / totalMarketCap) * 100;
        setEthDominance(dominance);
      } catch (err) {
        setError(err.message);
        console.error("Error en la solicitud:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEthereumDominance();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="btc-dominance">
      <p>
        {" "}
        <img src="/cryptocurrency-icons/svg/icon/eth.svg" alt="ETH" />
        {ethDominance?.toFixed(2) ?? "N/A"}%
      </p>
    </div>
  );
};

export { EthereumDominance };
