import React, { Component } from "react";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      review: ""
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleReviewChange = e => {
    this.setState({ review: e.target.value });
  };

  handleSubmit = () => {
    this.props.submitItem(this.state);
    this.setState({
      name: "",
      review: ""
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
