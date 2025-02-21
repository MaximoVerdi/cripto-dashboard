import "./heroSection.css";
import "boxicons/css/boxicons.min.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-section__info">
                <h1>The Ultimate Crypto Dashboard</h1>
                <span>Track, Analyze, and Stay Ahead in the Market</span>
                <ul>
                    <li><i class='bx bxs-check-circle'></i><p>Live Prices & Market Insights <strong>whit real-time updates </strong></p></li>
                    <li><i class='bx bxs-check-circle'></i><p>Advanced <strong>Portfolio Managment</strong> to track your holdings </p></li>
                    <li><i class='bx bxs-check-circle'></i><p>Secure & Reliable Data powered by <strong>top-tier </strong>APIs</p></li>
                </ul>
                <button className="nav-item-btn">Download App</button>
            </div>
            <img src="/image-removebg-preview.webp" alt="hero-section__image" />
        </section>
    )
}

export { HeroSection };