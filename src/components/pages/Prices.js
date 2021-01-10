import React from "react";
import Footer from "../Footer";
import axios from "axios";
import Price_user from "./Price_user";

class Prices extends React.Component {
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      prices: []
    };
  }

  //get all prices from our API and update the state with it
  getAllPrices = () => {
    // add the deployed server address here
    axios
      .get("https://keesydrivingschool-backend.herokuapp.com/prices")
      .then(res => {
        console.log(res.data);
        this.setState({ prices: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllPrices();
  }

  //render all prices list
  renderAllSingleLessonPrices = () => {
    return this.state.prices.slice(0, 2).map(price => {
      return <Price_user key={price._id} price={price} />;
    });
  };

  renderAllPackageLessonPrices = () => {
    return this.state.prices.slice(2, 4).map(price => {
      return <Price_user key={price._id} price={price} />;
    });
  };
  renderAllDriveTestsPrices = () => {
    return this.state.prices.slice(4, 7).map(price => {
      return <Price_user key={price._id} price={price} />;
    });
  };

  render() {
    return (
      <div className="common_container price_user">
        <div className="price_type">
          <h1 style={{ textAlign: "center" }}>Prices & Packages</h1>
          <p style={{ color: "black", padding: "20px 0" }}>
            Our lesson prices and packages are listed below. Please click the
            Book Now button to book your lesson. If you have any questions,
            please call Kees on{" "}
            <mark style={{ color: "orange", backgroundColor: "black" }}>
              0419 421 848
            </mark>
            .
          </p>
        </div>
        <div>
          <h2>SINGLE LESSON</h2>
          <p style={{ color: "black", padding: "30px calc(70px + 1rem)" }}>
            A single lesson could be used to assess your ability and determine
            if you are ready for your drive test.
          </p>
          <div className="price_box">
            {this.state.prices.length ? (
              this.renderAllSingleLessonPrices()
            ) : (
              <h3>Loading Single lessons prices...</h3>
            )}
          </div>
        </div>
        <div>
          <h2>PACKAGES</h2>
          <p style={{ color: "black", padding: "30px calc(70px + 1rem)" }}>
            Packages save you money. You can have 6 lessons which will get you
            ready for mum and dad to take over, have 6 lessons to prepare you
            for your test or 12 lessons that will get you comprehensively
            prepared.
          </p>
          <div className="price_box">
            {this.state.prices.length ? (
              this.renderAllPackageLessonPrices()
            ) : (
              <h3>Loading Package lessons prices...</h3>
            )}
          </div>
        </div>
        <div>
          <h2>DRIVE TEST</h2>
          <p style={{ color: "black", padding: "30px calc(70px + 1rem)" }}>
            Drive Tests are done from Dandenong & Pakenham VicRoads Testing
            Sites
          </p>
          <div className="price_box">
            {this.state.prices.length ? (
              this.renderAllDriveTestsPrices()
            ) : (
              <h3>Loading Drive test prices...</h3>
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", position: "static" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Prices;
