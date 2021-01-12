import React, { Component } from "react";

class Review extends Component {
  renderReview = () => {
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
          Q. {this.props.review.name}
        </h4>
        <p
          className="onefaq-parts"
          style={{
            backgroundColor: "rgba(247, 160, 89, 0.37)",
            padding: "10px",
            color: "black"
          }}
        >
          A. {this.props.review.review}
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
