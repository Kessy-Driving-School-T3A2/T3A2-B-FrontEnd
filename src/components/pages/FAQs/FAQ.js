import React, { Component } from "react";
import EditFAQ from "./EditFAQ";

class FAQ extends Component {
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      isEditMode: false
    };
  }

  handleEdit = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  };

  renderFAQ = () => {
    return (
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
    );
  };

  render() {
    return (
      <div className="onefaq">
        <div className="onefaq-body-parts">
          {this.state.isEditMode ? (
            <EditFAQ
              question={this.props.faq.question}
              answer={this.props.faq.answer}
            />
          ) : (
            this.renderFAQ()
          )}
          <button
            style={{
              backgroundColor: "orange",
              border: "none",
              padding: "5px 10px",
              marginBottom: "10px"
            }}
            onClick={this.handleEdit}
          >
            {this.state.isEditMode ? "Cancel" : "Edit"}
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
