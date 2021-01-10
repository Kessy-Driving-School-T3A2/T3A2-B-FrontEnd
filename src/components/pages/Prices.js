import React from "react";
import Footer from "../Footer";

class Prices extends React.Component {
  render() {
    return (
      <div className="common_container">
        <div>
          <h1>Prices & Packages</h1>
          <p>some text</p>
          <div className="price_box"></div>
        </div>
        <div>
          <h2>SINGLE LESSON</h2>
          <p>some text</p>
          <div className="price_box"></div>
        </div>
        <div>
          <h2>PACKAGES</h2>
          <p>some text</p>
          <div className="price_box"></div>
        </div>
        <div>
          <h2>DRIVE TEST</h2>
          <p>some text</p>
          <div className="price_box"></div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Prices;
