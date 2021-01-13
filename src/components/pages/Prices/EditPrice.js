import React, { Component } from "react";
import BackendServer from "../../../apis/BackendServer";

class EditPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: "",
      price: ""
    };
  }

  componentDidMount() {
    this.setState({
      lesson: this.props.lesson,
      price: this.props.price
    });
  }

  handleLessonChange = e => {
    this.setState({ lesson: e.target.value });
  };

  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

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
