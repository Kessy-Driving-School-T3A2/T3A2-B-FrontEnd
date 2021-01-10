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
      <div className="common_container">
        <div>
          <h1>Prices & Packages</h1>
          <p>some text</p>
          <div className="price_box"></div>
        </div>
        <div>
          <h2>SINGLE LESSON</h2>
          <p>some text</p>
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
          <p>some text</p>
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
          <p>some text</p>
          <div className="price_box">
            {this.state.prices.length ? (
              this.renderAllDriveTestsPrices()
            ) : (
              <h3>Loading Drive test prices...</h3>
            )}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Prices;
