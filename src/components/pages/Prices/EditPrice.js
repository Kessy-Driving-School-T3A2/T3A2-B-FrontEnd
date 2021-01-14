import React, { Component } from "react";
import BackendServer from "../../../apis/BackendServer";

class EditPrice extends Component {
  // calling the constructor, holding the state
  constructor(props) {
    super(props);
    this.state = {
      lesson: "",
      price: ""
    };
  }

  // checking if the component has mounted successfully with the content
  componentDidMount() {
    this.setState({
      lesson: this.props.lesson,
      price: this.props.price
    });
  }

  // geting the edited field value
  handleLessonChange = e => {
    this.setState({ lesson: e.target.value });
  };

  // geting the edited field value
  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  // handeling the submition of the edited price, sending it to the backend via axios. It requires the auth token in header to give the access to edit, then fetching the full price list including the updated one
  handleSubmit = e => {
    e.preventDefault();
    BackendServer.put(
      "/prices/admin",
      {
        _id: this.props.id,
        lesson: this.state.lesson,
        price: this.state.price
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("keesy")
        }
      }
    ).then(res => {
      if (res.data) {
        this.props.fetchUpdatedPrices();
      }
    });
  };

  // rendering the price edit form
  render() {
    const priceEditField = {
      width: "250px"
    };
    return (
      <form
        style={{
          display: "flex",
          flexFlow: "column",
          borderTop: "1px solid black",
          borderBottom: "1px solid black"
        }}
      >
        <label>Edit Lesson:</label>
        <input
          type="text"
          value={this.state.lesson}
          onChange={this.handleLessonChange}
          className="form-field"
          style={priceEditField}
        />
        <label>Edit Price:</label>
        <input
          type="text"
          value={this.state.price}
          onChange={this.handlePriceChange}
          className="form-field"
          style={{ paddingBottom: "30px" }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
          className="form-field"
          style={{ backgroundColor: "#f47b2a" }}
        />
      </form>
    );
  }
}

export default EditPrice;
