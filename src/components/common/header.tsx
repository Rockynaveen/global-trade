import { Link } from "react-router";
export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="logo-section">
                    <div className="logo-box">
                        GT
                    </div>

                    <div>
                        <h1 className="logo-title">
                            Global Trade
                        </h1>

                        <p className="logo-subtitle">
                            Logistics Intelligence
                        </p>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="nav-links">
                    <Link to="#">Home</Link>

                    <Link to="#">Features</Link>

                    <Link to="#">Pricing</Link>

                    <Link to="#">Analytics</Link>

                    <Link to="#">Contact</Link>
                </nav>

                {/* Right Side */}
                <div className="header-right">
                    <button className="start-btn">
                        Get Started
                    </button>

                    {/* Mobile Menu */}
                    <button className="menu-btn">
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}