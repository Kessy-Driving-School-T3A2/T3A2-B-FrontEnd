import React, { Component } from "react";

class CreateFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  handleQuestionChange = e => {
    this.setState({ question: e.target.value });
  };

  handleAnswerChange = e => {
    this.setState({ answer: e.target.value });
  };

  handleSubmit = () => {
    this.props.submitItem(this.state);
    this.setState({
      question: "",
      answer: ""
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
          value={this.state.Answer}
          onChange={this.handleAnswerChange}
          className="form-field"
          style={{ paddingBottom: "30px" }}
        />
        <input
          type="submit"
          value="Add FAQ"
          onClick={this.handleSubmit}
          className="form-field"
          style={{ backgroundColor: "#f47b2a" }}
        />
      </form>
    );
  }
}

export default CreateFAQ;
