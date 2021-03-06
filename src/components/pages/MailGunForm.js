import React, { Component } from "react";
import BackendServer from "../../apis/BackendServer";

class MailgunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      text: "",
      emailSent: false
    };
  }

  handleSubmitMail = newMail => {
    BackendServer.post("/contactus", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ emailSent: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleSubjectChange = e => {
    this.setState({ subject: e.target.value });
  };
  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleSubmitMail();
    this.setState({
      name: "",
      email: "",
      subject: "",
      text: ""
    });
  };

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexFlow: "column"
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          style={{
            margin: "3px 10px",
            color: "black",
            backgroundColor: "#C4C4C4",
            border: "none",
            padding: "10px"
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          style={{
            margin: "3px 10px",
            color: "black",
            backgroundColor: "#C4C4C4",
            border: "none",
            padding: "10px"
          }}
        />
        <input
          type="text"
          placeholder="Subject"
          value={this.state.subject}
          onChange={this.handleSubjectChange}
          style={{
            margin: "3px 10px",
            color: "black",
            backgroundColor: "#C4C4C4",
            border: "none",
            padding: "10px"
          }}
        />
        <input
          type="text"
          placeholder="Message"
          value={this.state.text}
          onChange={this.handleTextChange}
          style={{
            margin: "3px 10px",
            color: "black",
            backgroundColor: "#C4C4C4",
            border: "none",
            padding: "10px 10px 30px 10px"
          }}
        />
        {this.state.emailSent ? <p>Email sent!</p> : null}
        <button
          onClick={this.handleSubmit}
          style={{ margin: "3px 10px", width: "40px" }}
        >
          Send
        </button>
      </form>
    );
  }
}

export default MailgunForm;
