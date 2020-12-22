import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";

class Reviews extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>Reviews</h1>
        <div className="common_container-body">
          <div className="all-reviews">all google reviews will be here</div>
          <ContactinfoBox />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Reviews;
