import React, { Component } from "react";
import Link from "./Link";
import logo from "../assets/logo.png";
import "../Header.css";

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="top-contact-link">
          0419 421 848 info@keesydrivingschool.com.au
        </div>
        <div className="main-header-nav">
          <img src={logo} alt="logo" />

          <div className="top-menu">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/aboutUs" className="">
              About Us
            </Link>
            <Link href="/prices&packages" className="">
              Prices & Packages
            </Link>
            <Link href="/faqs" className="">
              FAQs
            </Link>
            <Link href="/reviews" className="">
              Reviews
            </Link>
            <Link href="/contactUs" className="">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
