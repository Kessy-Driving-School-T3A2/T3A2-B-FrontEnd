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
      <form>
        <input
          placeholder="Add Question"
          type="text"
          value={this.state.question}
          onChange={this.handleQuestionChange}
        />
        <input
          placeholder="Add Answer"
          type="text"
          value={this.state.Answer}
          onChange={this.handleAnswerChange}
        />
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
