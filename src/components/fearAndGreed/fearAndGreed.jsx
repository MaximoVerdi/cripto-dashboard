import React, { useEffect, useState } from "react";
import "./FearAndGreed.css"; // Archivo CSS para estilos

const FearAndGreed = () => {
  const [fearAndGreedData, setFearAndGreedData] = useState(null);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchFearAndGreed = async () => {
      try {
        const response = await fetch("https://api.alternative.me/fng/");
        const data = await response.json();
        if (data && data.data && data.data.length > 0) {
          setFearAndGreedData(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching Fear & Greed Index:", error);
      }
    };

    fetchFearAndGreed();
  }, []);

  if (!fearAndGreedData) {
    return <div>Loading...</div>;
  }

  const { value, value_classification } = fearAndGreedData;

  // Calcular el ángulo del punto en el semicírculo (invertido)
  const angle = 180 - ((value - 0) / (100 - 0)) * 180;

  return (
    <div className="fear-and-greed-container">
      {/* Semicírculo */}
      <svg
        className="semi-circle"
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Segmentos del borde */}
        <path
          d="M 10 40 A 40 40 0 0 1 90 40"
          stroke="#ff4d4d"
          strokeWidth="5"
          fill="none"
          strokeDasharray="31.42 125.66" // 1/5 del perímetro total
          strokeDashoffset="0"
        />
        <path
          d="M 10 40 A 40 40 0 0 1 90 40"
          stroke="#ff9933"
          strokeWidth="5"
          fill="none"
          strokeDasharray="31.42 125.66"
          strokeDashoffset="-31.42"
        />
        <path
          d="M 10 40 A 40 40 0 0 1 90 40"
          stroke="#ffcc00"
          strokeWidth="5"
          fill="none"
          strokeDasharray="31.42 125.66"
          strokeDashoffset="-62.84"
        />
        <path
          d="M 10 40 A 40 40 0 0 1 90 40"
          stroke="#99cc33"
          strokeWidth="5"
          fill="none"
          strokeDasharray="31.42 125.66"
          strokeDashoffset="-94.26"
        />
        <path
          d="M 10 40 A 40 40 0 0 1 90 40"
          stroke="#33cc33"
          strokeWidth="5"
          fill="none"
          strokeDasharray="31.42 125.66"
          strokeDashoffset="-125.68"
        />

        {/* Punto blanco en el borde */}
        <circle
          cx={50 + 40 * Math.cos((angle * Math.PI) / 180)}
          cy={40 - 40 * Math.sin((angle * Math.PI) / 180)}
          r="4"
          fill="white"
        />
      </svg>

      {/* Valor del índice */}
      <div className="value">{value}</div>

      {/* Clasificación */}
      <div className="classification">{value_classification}</div>
    </div>
  );
};

export default FearAndGreed;
