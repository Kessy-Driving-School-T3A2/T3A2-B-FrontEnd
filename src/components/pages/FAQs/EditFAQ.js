import React, { Component } from "react";
import BackendServer from "../../../apis/BackendServer";

class EditFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  componentDidMount() {
    this.setState({
      question: this.props.question,
      answer: this.props.answer
    });
  }

  //handeling each question change on edit
  handleQuestionChange = e => {
    this.setState({ question: e.target.value });
  };

  //handeling each answer change on edit
  handleAnswerChange = e => {
    this.setState({ answer: e.target.value });
  };

  //handeling the submition of edited faq to the backend route. the edit function requires the auth token as header to be functional, after updating fetching the new list of faqs including the updated one
  handleSubmit = e => {
    e.preventDefault();
    BackendServer.put(
      "/faq/admin",
      {
        _id: this.props.id,
        question: this.state.question,
        answer: this.state.answer
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("keesy")
        }
      }
    ).then(res => {
      if (res.data) {
        this.props.fetchUpdatedFaqs();
      }
    });
  };

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexFlow: "column",
          margin: "30px 15vw"
        }}
      >
        <input
          placeholder="Add Question"
          type="text"
          value={this.state.question}
          onChange={this.handleQuestionChange}
          className="form-field"
        />
        <input
          placeholder="Add Answer"
          type="text"
          value={this.state.answer}
          onChange={this.handleAnswerChange}
          className="form-field"
          style={{ paddingBottom: "30px" }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
          className="form-field"
          style={{ backgroundColor: "#f47b2a" }}
        />
      </form>
    );
  }
}

export default EditFAQ;
