import React from "react";
import { Link } from "react-router-dom";

class ContactinfoBox extends React.Component {
  render() {
    return (
      <div
        className="box"
        style={{
          marginTop: "10px",
          padding: "30px",
          backgroundColor: "#FFF8F8",
          height: "190px",
          width: "150px",
          border: "1px solid black"
        }}
      >
        <h3 style={{ textAlign: "left" }}>Kessy Driving School</h3>
        <ul
          style={{
            fontSize: "10px",
            padding: "10px 5px",
            textAlign: "left",
            color: "orange"
          }}
        >
          <li style={{ padding: "5px 0" }}>Office Location</li>
          <li style={{ padding: "5px 0" }}>Number</li>
          <li style={{ padding: "5px 0" }}>Info@kessydrivingschool.com</li>
          <li style={{ padding: "5px 0" }}>Facebook</li>
        </ul>
        <button
          style={{
            marginTop: "10px",
            backgroundColor: "#FD7A02",
            border: "none",
            padding: "10px 15px"
          }}
        >
          <Link to="/contact" style={{ color: "black" }}>
            Book A Lesson Now
          </Link>
        </button>
      </div>
    );
  }
}

export default ContactinfoBox;
