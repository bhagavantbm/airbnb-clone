
import React from "react";
import {
  FaAirbnb,
  FaSearch,
  FaGlobe,
  FaBars,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Airbnb Logo */}
      <div className="logo">
        <FaAirbnb className="logo-icon" />
        <span>airbnb</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-item">
          <span>Anywhere</span>
        </div>

        <div className="divider"></div>

        <div className="search-item">
          <span>Anytime</span>
        </div>

        <div className="divider"></div>

        <div className="search-item guests">
          <span>Add guests</span>
        </div>

        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Right Navigation */}
      <div className="header-right">
        <span className="host-link">Become a host</span>

        <button className="icon-button">
          <FaGlobe />
        </button>

        <button className="menu-button">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;