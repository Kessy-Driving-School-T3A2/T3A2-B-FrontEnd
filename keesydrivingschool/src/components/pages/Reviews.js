import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";

class Reviews extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>Reviews</h1>
        <div className="review-container-parts">
          <div className="all-reviews">all google reviews will be here</div>
          <ContactinfoBox />
        </div>

        {/* <div className="review-form">review form will be here</div> */}

        <Footer />
      </div>
    );
  }
}

export default Reviews;
