import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./cryptoDoughnut.css";
import "../index.css";
import { useTheme } from "../themeContext/themeContext"
import { MdMargin } from "react-icons/md";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CryptoDoughnutChart = () => {
    const { theme, toggleTheme } = useTheme();
  // Datos de ejemplo: criptomonedas y sus cantidades
  const data = {
    labels: [
      "ORDI (ORDI)",
      "Bitcoin (BTC)",
      "HBAR (HBAR)",
      "GAS (GAS)",
    ],
    datasets: [
      {
        label: "Cantidad en USD",
        data: [5000, 3000, 1000, 1000], // Valores en USD
        backgroundColor: [
          "#ff4d4d", // Red
          "#0ea4e8", // Blue
          "rgb(255, 207, 86)", // Yellow
          "#1dae9b", // Green
        ],
        borderColor: [
          "#ff4d4d", // Red
          "#0ea4e8", // Blue
          "rgb(255, 207, 86)", // Yellow
          "#1dae9b", // Green
        ],
        borderWidth: 2,
        hoverOffset: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: theme === "light" ? "#fff" : "#000",
          font: {
            size: 12,
            family: "'Poppins', sans-serif",
          },
          boxWidth: 10,
          boxHeight: 10,
          padding:10,
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
