import React from "react";
import logo from "./logo/GTIC-Logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="flex-container">
        <div className="flex-item">
          <img src={logo} class="footer-logo" alt="GTIC Logo" />
        </div>
        <div className="flex-item">
          <h3>Contact the developers</h3>
          <address>
            Athiwat Patomtajeancharoen:{" "}
            <a href="mailto:athiwat@uw.edu">athiwat@uw.edu</a>
            <br />
            Best Watanapalin: <a href="mailto:bestwat@uw.edu">bestwat@uw.edu</a>
          </address>
        </div>
        <div className="flex-item">
          <h3>Site Map</h3>
          <a href="/" className="site-map">
            Interactive Map
          </a>
          <br />
          <a href="/about" className="site-map">
            About
          </a>
        </div>
        <div className="flex-item">
          <p>&copy; 2021 Athiwat & Best.</p>
        </div>
      </div>
    </footer>
  );
}
