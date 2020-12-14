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
          <img src={logo} alt="logo" />

          <div className="top-menu item">
            <Link href="/" activeClassName="active" exact={true}>
              Home
            </Link>
            <Link href="/aboutUs" activeClassName="active" exact={true}>
              About Us
            </Link>
            <Link href="/prices&packages" activeClassName="active" exact={true}>
              Prices & Packages
            </Link>
            <Link href="/faqs" activeClassName="active" exact={true}>
              FAQs
            </Link>
            <Link href="/reviews" activeClassName="active" exact={true}>
              Reviews
            </Link>
            <Link href="/contactUs" activeClassName="active" exact={true}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
