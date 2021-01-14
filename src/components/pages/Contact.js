import React from "react";
import Footer from "../Footer";
import service from "../../assets/service.jpg";
import MailGunForm from "./MailGunForm";

class Contact extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>Contact Keesy Driving School</h1>
        <p style={{ color: "black", padding: "10px 20px" }}>
          Please call us on 0419 421 848 to book a lesson. Otherwise complete
          the form below and we’ll be in touch shortly. Please complete all
          fields.
        </p>
        <div className="common_container-one-part">
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
            <div className="common_container-parts">
              <MailGunForm />
            </div>
          </div>
        </div>
        <div className="common_container-one-part">
          <div className="common_container-one-part-child">
            <div className="hours_service">
              <h2>Business Hours</h2>
              <ul>
                <li>Mon–Wed: 7am – 9pm</li>
                <li>Thu: 7am – 3pm</li>
                <li>Fri: 7am – 9pm</li>
                <li>Sat: 8am – 2pm</li>
                <li>Sun: Closed</li>
              </ul>
              We’re available on public holidays and Sundays for an extra fee of
              $20.
            </div>
            <div className="hours_service">
              <h2>Service Area</h2>
              <img
                src={service}
                alt="service area"
                style={{ width: "30vw", height: "auto" }}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
