import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <div className="onefaq">
        <div className="onefaq-body-parts">
          <h4
            className="onefaq-parts"
            style={{
              backgroundColor: "rgba(247, 165, 89, 0.37)",
              padding: "10px",
              marginBottom: "2px"
            }}
          >
            Q. {this.props.faq.question}
          </h4>
          <p
            className="onefaq-parts"
            style={{
              backgroundColor: "rgba(247, 160, 89, 0.37)",
              padding: "10px",
              color: "black"
            }}
          >
            A. {this.props.faq.answer}
          </p>
        </div>
        <div className="onefaq-body-parts">
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
          <button
            style={{
              backgroundColor: "orange",
              border: "none",
              padding: "5px 10px",
              marginBottom: "10px"
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default FAQ;
