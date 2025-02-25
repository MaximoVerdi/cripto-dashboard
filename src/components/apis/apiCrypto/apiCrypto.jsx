const ApiCrypto = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ALGO,USDT,HBAR,ORDI,SUI,THETA&tsyms=USDT";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { ApiCrypto };
