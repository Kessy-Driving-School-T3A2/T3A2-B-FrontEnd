import React from "react";
import Footer from "../Footer";
import AdminControlNav from "../AdminControlNav";
import Price from "./Price";
import BackendServer from "../../apis/BackendServer";

class AdminPrice extends React.Component {
  //call constructor
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
    BackendServer.get("/prices")
      .then(res => {
        console.log(res.data);
        this.setState({ prices: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllPrices();
  }

  //render all prices list with the new one
  renderAllPrices = () => {
    return this.state.prices.map(price => {
      return (
        <Price
          key={price._id}
          price={price}
          handleFetchUpdatedPrices={this.getAllPrices}
        />
      );
    });
  };

  render() {
    return (
      <div className="common_container">
        <h1>AdminPrices</h1>
        <div className="main-price-admin">
          <div className="prices_admin">
            {this.state.prices.length ? (
              this.renderAllPrices()
            ) : (
              <h3>Loading Prices and Packages...</h3>
            )}
          </div>

          <div>
            <AdminControlNav />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AdminPrice;
