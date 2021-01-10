import React, { Component } from "react";

class Price_user extends Component {
  render() {
    return (
      <div className="onePrice">
        <div className="onePrice-body-parts">
          <p
            className="onePrice-parts"
            style={{ borderBottom: "1px solid black" }}
          >
            {this.props.price.lesson}
          </p>
          <p className="onePrice-parts" style={{ marginBottom: "5px" }}>
            $ {this.props.price.price}
          </p>
        </div>
        <button
          style={{
            backgroundColor: "orange",
            border: "none",
            padding: "5px 10px",
            marginBottom: "10px"
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default Price_user;
