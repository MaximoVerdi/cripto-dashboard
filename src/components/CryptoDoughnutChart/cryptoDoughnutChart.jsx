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
          "rgba(255, 99, 132, 0.8)", // Neon Pink
          "rgba(54, 162, 235, 0.8)", // Neon Blue
          "rgba(255, 206, 86, 0.8)", // Neon Yellow
          "rgba(75, 192, 192, 0.8)", // Neon Teal
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Borde Neon Pink
          "rgba(54, 162, 235, 1)", // Borde Neon Blue
          "rgba(255, 206, 86, 1)", // Borde Neon Yellow
          "rgba(75, 192, 192, 1)", // Borde Neon Teal
        ],
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  };

  // Opciones gráfico
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
