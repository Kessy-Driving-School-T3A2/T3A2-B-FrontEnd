import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Header.css";

const Header = () => {
  return (
    <div className="header-pointing-logo">
      <div className="top-contact-link">
        0419 421 848 info@keesydrivingschool.com.au
      </div>
      <Link to="/" className="item logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header-right-menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/aboutUs" className="item">
          About Us
        </Link>
        <Link to="/prices&packages" className="item">
          Prices & packages
        </Link>
        <Link to="/faqs" className="item">
          FAQs
        </Link>
        <Link to="/reviews" className="item">
          Reviews
        </Link>
        <Link to="/contactUs" className="item">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
