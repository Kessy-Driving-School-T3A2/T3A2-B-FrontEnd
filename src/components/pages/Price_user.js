import React, { Component } from "react";

class Price_user extends Component {
  render() {
    return (
      <div className="onePrice">
        <div className="onePrice-body-parts onePrice-parts">
          {this.props.price.lesson} : $ {this.props.price.price}
        </div>
      </div>
    );
  }
}

export default Price_user;
