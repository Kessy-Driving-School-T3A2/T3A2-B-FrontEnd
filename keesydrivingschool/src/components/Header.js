import React, { Component } from "react";
import Link from "./Link";
import logo from "../assets/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="top-contact-link">
          0419 421 848 info@keesydrivingschool.com.au
        </div>
        <div className="main-header-nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="top-menu">
            <Link href="/" className="item">
              Home
            </Link>
            <Link href="/aboutUs" className="item">
              About Us
            </Link>
            <Link href="/prices&packages" className="item">
              Prices & Packages
            </Link>
            <Link href="/faqs" className="item">
              FAQs
            </Link>
            <Link href="/reviews" className="item">
              Reviews
            </Link>
            <Link href="/contactUs" className="item">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
