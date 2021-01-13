import React, { Component } from "react";
import BackendServer from "../../../apis/BackendServer";

class CreateFAQ extends Component {
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

  handleQuestionChange = e => {
    this.setState({ question: e.target.value });
  };

  handleAnswerChange = e => {
    this.setState({ answer: e.target.value });
  };

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

export default CreateFAQ;
