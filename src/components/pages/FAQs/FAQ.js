import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <div className="onefaq">
        <h4
          className="onefaq-parts"
          style={{
            backgroundColor: "rgba(247, 165, 89, 0.37)",
            padding: "10px"
          }}
        >
          Q. {this.props.faq.question}
        </h4>
        <p
          className="onefaq-parts"
          style={{
            backgroundColor: "rgba(247, 165, 89, 0.37)",
            padding: "10px",
            border: "2px soild white"
          }}
        >
          A. {this.props.faq.answer}
        </p>
      </div>
    );
  }
}

export default FAQ;
