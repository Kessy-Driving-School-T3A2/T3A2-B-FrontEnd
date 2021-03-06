import React from "react";
import { Link } from "react-router-dom";

class ContactinfoBox extends React.Component {
  render() {
    return (
      <div className="box">
        <h3 style={{ textAlign: "left" }}>Kessy Driving School</h3>
        <ul>
          <li style={{ padding: "5px 0" }}>Office Location</li>
          <li style={{ padding: "5px 0" }}>Number</li>
          <li style={{ padding: "5px 0" }}>Info@kessydrivingschool.com</li>
          <li style={{ padding: "5px 0" }}>
            <Link
              to={{ pathname: "https://www.facebook.com/keesydrivingschool" }}
              target="_blank"
              style={{ color: "orange" }}
            >
              Facebook
            </Link>
          </li>
        </ul>
        <button>
          <Link to="/contact" className="sideContactBox">
            Book A Lesson Now
          </Link>
        </button>
      </div>
    );
  }
}

export default ContactinfoBox;
