import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";

class FAQs extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>Frequently Asked Questions</h1>
        <div className="faqs-page-body">
          <div className="faq-page-body-parts">
            All faqs
            <div className="QA">
              <div className="Q">Q.</div>
              <div className="A">A.</div>
            </div>
          </div>
          <div className="faq-page-body-parts">
            <ContactinfoBox />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default FAQs;
