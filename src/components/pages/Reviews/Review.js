import React, { Component } from "react";

class Review extends Component {
  // rendering each review on screen
  renderReview = () => {
    return (
      <div
        className="onefaq-body-parts"
        style={{ borderBottom: "1px solid black" }}
      >
        <p
          className="onefaq-parts"
          style={{
            // backgroundColor: "rgba(247, 160, 89, 0.37)",
            padding: "10px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            textTransform: "capitalize"
          }}
        >
          {this.props.review.review}
        </p>
        <p
          className="onefaq-parts"
          style={{
            padding: "10px",
            marginBottom: "2px",
            display: "flex",
            justifyContent: "center",
            textTransform: "capitalize",
            color: "rgb(204, 82, 0)"
          }}
        >
          {this.props.review.name}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="onereview">
        <div className="onereview-body-parts">{this.renderReview()}</div>
      </div>
    );
  }
}

export default Review;
