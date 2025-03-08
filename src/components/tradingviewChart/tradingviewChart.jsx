import React, { useEffect } from "react";
import { useTheme } from "../themeContext/themeContext"; // 🔥 Importa el contexto

const TradingViewChart = () => {
  const { theme } = useTheme(); // 🔥 Obtén el tema actual

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: "500px",
        symbol: "BINANCE:BTCUSDT",
        interval: "1",
        timezone: "Etc/UTC",
        theme: theme === "light" ? "dark" : "light", // 🔥 Cambia el tema según el estado
        style: "1",
        locale: "es",
        toolbar_bg: "red",
        enable_publishing: false,
        allow_symbol_change: true,
        studies: [],
        hide_side_toolbar: false,
        hide_top_toolbar: false,
        save_image: true,
        drawing_tools: true,
        details: true,
        hotlist: true,
        calendar: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [theme]); // 🔥 Dependencia de `theme`, se ejecuta cuando el tema cambia

  return <div id="tradingview_chart"></div>;
};

export { TradingViewChart };
