import React, { useEffect } from "react";

const TradingViewChart = () => {
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
        theme: "dark",
        style: "1",
        locale: "es",
        toolbar_bg: "#f1f3f6",
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
  }, []);

  return <div id="tradingview_chart"></div>;
};

export { TradingViewChart };
