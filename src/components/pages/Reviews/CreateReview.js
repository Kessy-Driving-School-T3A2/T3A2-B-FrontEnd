import React, { Component } from "react";

class CreateReview extends Component {
  //calling the constructor method
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      review: ""
    };
  }

  // catching the field value

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  // catching the field value
  handleReviewChange = e => {
    this.setState({ review: e.target.value });
  };

  // handeling the submition of the review
  handleSubmit = () => {
    this.props.submitItem(this.state);
    this.setState({
      name: "",
      review: ""
    });
  };

  // creating the review form
  render() {
    return (
      <form
        style={{
          display: "flex",
          flexFlow: "column",
          margin: "30px 15vw"
        }}
        className="onereview"
      >
        <input
          placeholder="Add Your Name"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
          className="form-field"
        />
        <input
          placeholder="Add Your Review"
          type="text"
          value={this.state.review}
          onChange={this.handleReviewChange}
          className="form-field"
          style={{ paddingBottom: "30px" }}
        />
        <input
          type="submit"
          value="Add Review"
          onClick={this.handleSubmit}
          className="form-field"
          style={{ backgroundColor: "#f47b2a" }}
        />
      </form>
    );
  }
}

export default CreateReview;
