import React, { Component } from "react";
import EditFAQ from "./EditFAQ";
import BackendServer from "../../../apis/BackendServer";

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

  handleUpdatedFaqs = () => {
    this.setState({ isEditMode: false });
    this.props.handleFetchUpdatedFaqs();
  };

  handleDelete = () => {
    BackendServer.delete("/faq/admin", {
      data: {
        _id: this.props.faq._id
      },
      headers: {
        "x-access-token": localStorage.getItem("keesy")
      }
    }).then(res => {
      if (res.data) {
        this.props.handleFetchUpdatedFaqs();
      }
    });
  };

  render() {
    const faq_button = {
      backgroundColor: "orange",
      border: "none",
      padding: "5px 10px",
      marginBottom: "10px"
    };
    return (
      <div className="onefaq">
        <div className="onefaq-body-parts">
          {this.state.isEditMode ? (
            <EditFAQ
              id={this.props.faq._id}
              question={this.props.faq.question}
              answer={this.props.faq.answer}
              fetchUpdatedFaqs={this.handleUpdatedFaqs}
            />
          ) : (
            this.renderFAQ()
          )}
          <button style={faq_button} onClick={this.handleEdit}>
            {this.state.isEditMode ? "Cancel" : "Edit"}
          </button>
          <button style={faq_button} onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default FAQ;
