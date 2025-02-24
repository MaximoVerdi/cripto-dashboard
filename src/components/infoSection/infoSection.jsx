import { useState, useEffect } from "react";
import "./infoSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="info-section__text" data-aos="fade-up">
                <b>What is Crypto Dashboard?</b>
                <h2 className="info-section-text-h2">Unified Market</h2>
                <span className="info-section-text-span">Crypto and BYMA in a single view</span>
                <p className="info-section-text-p">Your <strong>one-stop portal</strong> to track the <strong>crypto world</strong> and the <strong>stock market</strong> at the same time. Monitor <strong>prices</strong>, <strong>trends</strong>, and <strong>opportunities</strong> in both markets, all in one place. No complications, just <strong>clear</strong> and <strong>actionable information</strong>.</p>
                <div className="info-section__buttons">
                    <button className="info-section__btn">Explore Market</button>
                    <button className="info-section__btn">Explore Dashboard</button>
                </div>

            </div>

            <div className="info-section__image" data-aos="fade-up">
                <img src="/buy_and_sell_global.webp" alt="info-section__image" />
            </div>
        </div>

    )
}

export { InfoSection };