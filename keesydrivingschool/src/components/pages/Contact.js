import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";

class Contact extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>Contact Keesy Driving School</h1>
        <p style={{ color: "black" }}>
          Please call us on 0419 421 848 to book a lesson. Otherwise complete
          the form below and we’ll be in touch shortly. Please complete all
          fields.
        </p>
        <div className="common_container-body">
          <div className="common_container-parts">
            <h2>Address</h2>
            <p style={{ color: "black" }}>
              Our office is located in Berwick. We service Dandenong, Pakenham
              and surrounding areas.
            </p>
            <h2>Phone Number</h2>
            <p>0419 421 848</p>
            <h2>Email</h2>
            <p>info@keesydrivingschool.com.au</p>
          </div>
          <div className="common_container-parts">form will be here</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
