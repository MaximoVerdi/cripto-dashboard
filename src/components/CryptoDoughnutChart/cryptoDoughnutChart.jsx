import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./cryptoDoughnut.css";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CryptoDoughnutChart = () => {
  // Datos de ejemplo: criptomonedas y sus cantidades
  const data = {
    labels: [
      "Bitcoin (BTC)",
      "Ethereum (ETH)",
      "Cardano (ADA)",
      "Solana (SOL)",
    ],
    datasets: [
      {
        label: "Cantidad en USD",
        data: [5000, 3000, 1000, 1000], // Valores en USD
        backgroundColor: [
          "#b4354a", // Red
          "#0ea4e8", // Blue
          "rgb(255, 207, 86)", // Yellow
          "#1dae9b", // Green
        ],
        borderColor: [
          "rgb(218, 49, 86)", // Red Border
          "rgb(56, 175, 255)", // Borde Blue
          "rgb(245, 178, 6)", // Yellow Border
          "rgba(75, 192, 192, 1)", // Green Border
        ],
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#FFFFFF",
          font: {
            size: 12,
            family: "'Poppins', sans-serif",
          },
          boxWidth: 10,
          boxHeight: 10,
          padding: 10,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
          family: "'Poppins', sans-serif",
        },
        bodyFont: {
          size: 12,
          family: "'Poppins', sans-serif",
        },
        cornerRadius: 5,
        displayColors: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export { CryptoDoughnutChart };
