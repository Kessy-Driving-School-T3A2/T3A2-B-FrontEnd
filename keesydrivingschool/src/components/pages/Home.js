import React from "react";
import "../../App.css";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="home">
          <div className="slide-banner">
            <div className="banner-heading">
              <h1 style={{ color: "white" }}>Kessy Driving School</h1>
              <h2>Welcome</h2>
              <p>BOOK LESSON NOW</p>
            </div>
            <div className="home-body">
              <h1 style={{ color: "black" }}>Why Choose Us</h1>
              <div className="home-body-parts">
                <div className="one-line">
                  <div className="one-part">
                    <p>Experiences & Qualified Instructor</p>
                  </div>
                  <div className="one-part">
                    <p>Prices & Packages</p>
                  </div>
                  <div className="one-part">
                    <p>Manual & Automatic</p>
                  </div>
                </div>
                <div className="one-line">
                  <div className="one-part">
                    <p>Male & Female Instructor</p>
                  </div>
                  <div className="one-part">
                    <p>New Drivers</p>
                  </div>
                  <div className="one-part">
                    <p>International Drivers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
