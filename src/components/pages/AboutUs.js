import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";
import clientimage from "../../assets/clientimage.jpg";
import { Link } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1 style={{ color: "black", padding: "calc(1px + 1rem) 0" }}>
          About Us
        </h1>
        <div className="aboutus-body">
          <div className="aboutus-body-parts">
            <img src={clientimage} alt="client" className="clientimage" />
            <div className="aboutus-details">
              <p className="paragraph">
                Kees Webster began Keesy Driving School, teaching in the
                Pakenham and Berwick areas in 2009. We specialise in the
                instructing of new learner drivers as well as overseas licence
                conversions. We have many years of experience with nervous
                students, senior drivers and learners with special needs.
              </p>
              <p className="paragraph">
                We have top quality instructors, both male and female, with more
                than 20 years of driving a range of vehicles which gives us a
                unique perspective on the road. Even after one lesson, the most
                nervous of students begins to build confidence in their ability
                to drive safely and within a few lessons has no trouble
                navigating all sorts of traffic and conditions.
              </p>
              <p className="paragraph">
                If you’ve been driving with Mum and Dad or other drivers and are
                nearing the time to book your driving test, give us a call and
                we can make sure you are completely ready. If you’re just
                getting started, we teach you good driving skills that you can
                practice with your parents or guardians. Our success rate speaks
                for itself.
              </p>
              <Link to="/contact" style={{ color: "orange" }}>
                Contact Keesy Driving School to book your first lesson today.
              </Link>
            </div>
          </div>
          <ContactinfoBox />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
