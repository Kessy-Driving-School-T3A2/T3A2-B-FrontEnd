import React from "react";
import Bottombanner from "../Bottombanner";
import Footer from "../Footer";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="slide-banner">
          <div className="banner-heading">
            <h1
              style={{
                color: "white",
                fontWeight: "100",
                paddingBottom: "calc(1px + 1rem)"
              }}
            >
              Kessy Driving School
            </h1>
            <h2
              style={{
                color: "white",
                fontWeight: "90",
                paddingBottom: "calc(1px + 1rem)"
              }}
            >
              Welcome
            </h2>
            <Link to="/contact" className="item" style={{ color: "orange" }}>
              BOOK LESSON NOW
            </Link>
          </div>
        </div>
        <div className="home-body">
          <h1 style={{ color: "black", padding: "calc(1px + 1rem) 0" }}>
            Why Choose Us
          </h1>
          <div className="home-body-parts">
            <div className="one-line">
              <div className="one-part">
                <img src={icon1} alt="icon1" />
                <p>Experiences & Qualified Instructor</p>
              </div>
              <div className="one-part">
                <img src={icon2} alt="icon2" />
                <p>Prices & Packages</p>
              </div>
              <div className="one-part">
                <img src={icon3} alt="icon3" />
                <p>Manual & Automatic</p>
              </div>
            </div>
            <div className="one-line">
              <div className="one-part">
                <img src={icon4} alt="icon4" />
                <p>Male & Female Instructor</p>
              </div>
              <div className="one-part">
                <img src={icon5} alt="icon5" />
                <p>New Drivers</p>
              </div>
              <div className="one-part">
                <img src={icon6} alt="icon6" />
                <p>International Drivers</p>
              </div>
            </div>
          </div>
          <div className="home-body-parts">
            <Bottombanner />
          </div>
          <div className="home-body-parts">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
