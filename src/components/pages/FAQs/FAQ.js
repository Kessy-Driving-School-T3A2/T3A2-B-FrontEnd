import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <div className="onefaq">
        <h4 className="onefaq-parts">{this.props.faq.question}</h4>
        <p className="onefaq-parts">{this.props.faq.answer}</p>
      </div>
    );
  }
}

export default FAQ;
