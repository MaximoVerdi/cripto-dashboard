import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./bento.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Bento = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [cryptoData, setCryptoData] = useState(null);
  const [dolarData, setDolarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // API de CryptoCompare
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/v2/news/",
        );
        if (!response.ok) {
          throw new Error("Error al obtener las noticias");
        }
        const data = await response.json();
        setNews(data.Data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Cada 10 seg cambio la noticia
  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [news]);

  const currentArticle = news[currentNewsIndex];

  // Llamada a la API del dólar blue
  useEffect(() => {
    const fetchDolarBlue = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares/blue");
        if (!response.ok) {
          throw new Error("Error al obtener los datos del dólar blue");
        }
        const data = await response.json();
        setDolarData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDolarBlue();
  }, []);

  // Llamada a la API de criptomonedas
  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ALGO,USDT&tsyms=USDT",
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos de criptomonedas");
        }
        const data = await response.json();
        setCryptoData(data.RAW);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
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

  if (!cryptoData || !dolarData) {
    return <div className="bento-item">No se han obtenido los datos</div>;
  }

  return (
    <div className="bento-section">
      <div className="bento-section__info" data-aos="fade-up">
        <h3>Explore Your Portfolio</h3>
        <p>
          Track real-time prices, trends, and market data. Stay informed and
          make smarter decisions! 🚀
        </p>
        <Link to="/apiData">View More Details</Link>
      </div>
      <div className="bento-section__content">
        <div className="bento-item first-item" data-aos="fade-up">
          <ul className="first-item__content">
            <div>
              <img src="/bitcoin.jpg" alt="Bitcoin" />
              <ul className="first-item__info">
                <h4>Bitcoin</h4>
                <span>{cryptoData?.BTC?.USDT?.FROMSYMBOL}</span>
              </ul>
            </div>
            <p className="price">
              ${cryptoData?.BTC?.USDT?.PRICE.toLocaleString()}
            </p>
            <p
              className={`change ${cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR < 0 ? `negative` : ``}`}
            >
              {cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR.toLocaleString()}%{" "}
              {cryptoData?.BTC?.USDT?.CHANGE24HOUR.toFixed(2)}
            </p>
            <p className="volume">
              24hs Vol: ${cryptoData?.BTC?.USDT?.VOLUMEDAY.toLocaleString()}
            </p>
          </ul>
          <i
            className={`bx ${cryptoData?.BTC?.USDT?.CHANGEPCT24HOUR < 0 ? "bxs-down-arrow" : "bxs-up-arrow"}`}
          ></i>
        </div>

        <div className="bento-item second-item" data-aos="fade-up">
          <div className="second-item__title">
            <h4>Dolar Blue Real Time</h4>
            <span>
              {new Date(dolarData?.fechaActualizacion).toLocaleString()}
            </span>
          </div>
          <div className="second-item__content">
            <ul>
              <p>Compra</p>
              <span>${dolarData?.compra}</span>
            </ul>
            <ul>
              <p>Venta</p>
              <span>${dolarData?.venta}</span>
            </ul>
          </div>
        </div>

        <div className="bento-item third-item" data-aos="fade-up">
          <div className="news-container">
          <div className="news-item">
            <div className="news-image-container">
              {currentArticle?.imageurl ? (
                <img
                  src={currentArticle.imageurl}
                  alt={currentArticle.title ?? "Sin título"}
                  className="news-image"
                />
              ) : (
                <p className="no-image-message">No image available</p>
              )}
            </div>
            <h3>{currentArticle?.title ?? "Sin título"}</h3>
            {currentArticle?.url ? (
              <a href={currentArticle.url} target="_blank" rel="noopener noreferrer">
                Leer más
              </a>
            ) : (
              <p>No hay enlace disponible</p>
            )}
          </div>
          </div>
        </div>

        <div className="bento-item fourth-item" data-aos="fade-up">
          <p>New Users</p>
          <span>650+</span>
        </div>
      </div>
    </div>
  );
};

export { Bento };
