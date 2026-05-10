
import { Link } from "react-router";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              GT
            </div>

            <div>
              <h2>Global Trade</h2>

              <p>
                 Logistics Intelligence
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>

              <Link to="/">Home</Link>

              <Link to="/">About</Link>

              <Link to="/">Pricing</Link>
            </div>

            <div className="footer-column">
              <h3>Solutions</h3>

              <Link to="/">Analytics</Link>

              <Link to="/">Shipping</Link>

              <Link to="/">Tracking</Link>
            </div>

            <div className="footer-column">
              <h3>Support</h3>

              <Link to="/">Help Center</Link>

              <Link to="/">Contact</Link>

              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 TradeIntel. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}