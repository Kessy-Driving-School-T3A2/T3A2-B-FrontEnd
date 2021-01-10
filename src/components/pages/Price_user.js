import React, { Component } from "react";
import { Link } from "react-router-dom";

class Price_user extends Component {
  render() {
    const priceBox = {
      backgroundColor: "#F17B2B",
      width: "250px",
      height: "auto",
      textAlign: "center",
      padding: "20px",
      marginBottom: "30px"
    };
    const price = {
      color: "black",
      padding: "0 0 15px 0",
      fontWeight: "900"
    };
    const booknow = {
      color: "black",
      border: "1px solid black",
      padding: "5px 8px"
    };
    return (
      <div className="onePrice" style={{ marginBottom: "10px" }}>
        <div style={priceBox}>
          <p style={{ color: "black", padding: "0" }}>
            {this.props.price.lesson}
          </p>
          <h1 style={price}>${this.props.price.price}</h1>
          <Link to="/contact" style={booknow}>
            Book Now
          </Link>
        </div>
      </div>
    );
  }
}

export default Price_user;
