import React, { Component } from "react";
import EditPrice from "../pages/Prices/EditPrice";

class Price extends Component {
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      isEditMode: false
    };
  }

  handleEdit = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  };

  renderPrice = () => {
    return (
      <div className="onePrice">
        <div className="onePrice-body-parts onePrice-parts">
          {this.props.price.lesson} : $ {this.props.price.price}
        </div>
      </div>
    );
  };

  handleUpdatedPrices = () => {
    this.setState({ isEditMode: false });
    this.props.handleFetchUpdatedPrices();
  };

  render() {
    const price_button = {
      backgroundColor: "orange",
      border: "none",
      padding: "10px",
      margin: "10px 30px"
    };

    return (
      <div className="onePrice">
        <div className="onePrice-body-parts">
          {this.state.isEditMode ? (
            <EditPrice
              id={this.props.price._id}
              lesson={this.props.price.lesson}
              price={this.props.price.price}
              fetchUpdatedPrices={this.handleUpdatedPrices}
            />
          ) : (
            this.renderPrice()
          )}
          <button style={price_button} onClick={this.handleEdit}>
            {this.state.isEditMode ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
    );
  }
}

export default Price;
