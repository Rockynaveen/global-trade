import { useNavigate } from "react-router";

import {
    FaArrowRight,
    FaCloudRain,
    FaDollarSign,
    FaTruck,
    FaGlobeAsia,
} from "react-icons/fa";

export default function HeroDashboard() {
    const navigate = useNavigate();

    return (
        <section className="hero-dashboard-section">
            <div className="hero-dashboard-container">

                {/* LEFT SIDE */}
                <div className="hero-left">

                    <div className="hero-badge">
                        AI Powered Logistics Intelligence
                    </div>

                    <h1 className="hero-title">
                        Global Trade &
                        <span> Logistics Intelligence</span>
                    </h1>

                    <p className="hero-description">
                        Real-time weather insights, currency intelligence,
                        and smart cost prediction for your global shipments.
                    </p>

                    {/* BUTTON */}
                    <button
                        className="hero-btn"
                        onClick={() => navigate("/shipping")}
                    >
                        Start Shipping Process
                        <FaArrowRight />
                    </button>
                </div>

                {/* RIGHT SIDE */}
                <div className="hero-right">

                    {/* LIVE CARD */}
                    <div className="live-card">

                        <h3>Live Intelligence</h3>

                        {/* WEATHER */}
                        <div className="live-widget">

                            <div className="widget-icon weather">
                                <FaCloudRain />
                            </div>

                            <div>
                                <h4>Weather Risk</h4>

                                <p className="danger">High Risk</p>

                                <span>Storm detected at destination</span>
                            </div>

                        </div>

                        {/* CURRENCY */}
                        <div className="live-widget">

                            <div className="widget-icon currency">
                                <FaDollarSign />
                            </div>

                            <div>
                                <h4>USD → INR</h4>

                                <p>₹83.42</p>

                                <span>Live exchange rate</span>
                            </div>

                        </div>

                        {/* DELIVERY */}
                        <div className="live-widget">

                            <div className="widget-icon delivery">
                                <FaTruck />
                            </div>

                            <div>
                                <h4>Est. Delivery</h4>

                                <p>18 - 22 Days</p>

                                <span>Transit time</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}