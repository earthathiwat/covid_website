import { Link } from "react-router-dom";
import logo from "./logo/GTIC-Logo.png";

export default function NavBar() {
  return (
    <div id="top-nav">
      <div className="logo">
        <img src={logo} className="logo" alt="GTIC Logo" />
      </div>
      <nav id="main-nav">
        <div className="full">
          <Link to="/"> Interactive Map </Link>
        </div>
        <div className="full">
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}
