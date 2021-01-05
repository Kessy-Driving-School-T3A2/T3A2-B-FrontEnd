import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";

class FAQs extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>Frequently Asked Questions</h1>
        <div>All faqs</div>
        <ContactinfoBox />
        <Footer />
      </div>
    );
  }
}

export default FAQs;
