import React, { Component } from "react";

class FAQ_user extends Component {
  render() {
    return (
      <div className="onefaq">
        <div className="onefaq-body-parts">
          <h4
            className="onefaq-parts"
            style={{
              border: "2px solid #F17B2B",
              padding: "10px",
              marginBottom: "2px"
            }}
          >
            Q. {this.props.faq.question}
          </h4>
          <p
            className="onefaq-parts"
            style={{
              border: "2px solid #F17B2B",
              padding: "10px",
              color: "black"
            }}
          >
            A. {this.props.faq.answer}
          </p>
        </div>
      </div>
    );
  }
}

export default FAQ_user;
