import React, { Component } from "react";

class CreateFAQ extends Component {
  //call constructor
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  // getting the entered question
  handleQuestionChange = e => {
    this.setState({ question: e.target.value });
  };
  // getting the entered answer
  handleAnswerChange = e => {
    this.setState({ answer: e.target.value });
  };

  // submitting the entered question, answer. after submition changing the state of the form back to empty
  handleSubmit = () => {
    this.props.submitItem(this.state);
    this.setState({
      question: "",
      answer: ""
    });
  };

  //rendering the add faq form
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
