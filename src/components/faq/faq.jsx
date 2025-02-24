import React, { useState, useEffect } from "react";
import "./faq.css";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is Crypto Dashboard?",
    answer: "Crypto Dashboard is a platform that provides real-time cryptocurrency data, portfolio tracking, market trends, and analytics in an easy-to-use interface. It helps users monitor their holdings, analyze market movements, and make informed decisions.",
  },
  {
    question: "How much does it cost?",
    answer: "Crypto Dashboard offers both free and premium plans. The free plan provides basic features like real-time price tracking and portfolio management, while the premium plan includes advanced analytics, trading tools, and customizable alerts.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up and customize your dashboard by adding your favorite cryptos and stocks. You can also set up alerts and receive notifications for price changes and other important market updates.",
  },

];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Función para alternar la respuesta
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="questions-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleAnswer(index)}
          >
            <h3>{item.question}</h3>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export { FAQ };