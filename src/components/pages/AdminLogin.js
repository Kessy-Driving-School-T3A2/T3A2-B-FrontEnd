import React from "react";
import Footer from "../Footer";
import BackendServer from "../../apis/BackendServer";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    BackendServer.post("/admin/signin", {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response.data);
      localStorage.setItem("keesy", response.data.accessToken);
      this.props.history.push("/FAQ/admin");
    });
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const loginField = {
      padding: "10px",
      marginBottom: "5px",
      backgroundColor: "#C4C4C4",
      border: "1px solid #C4C4C4",
      borderRadius: "8px"
    };

    const loginButton = {
      padding: "10px",
      backgroundColor: "orangered",
      border: "none",
      marginTop: "10px",
      borderRadius: "8px"
    };

    return (
      <div className="common_container">
        <h1>AdminLogin</h1>
        <div style={{ margin: "0 20vw", textAlign: "left", padding: "20px 0" }}>
          <h2 style={{ color: "red" }}>
            Warning! This login is strictly for admin privilidge only, it is
            unrequired that anyone looking to employ Kessy Driving Services need
            not attempt to login
          </h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px"
            }}
          >
            <input
              type="text"
              placeholder="User Name"
              onChange={this.handleUsernameChange}
              style={loginField}
              value={this.state.username}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={this.handlePasswordChange}
              style={loginField}
              value={this.state.password}
            />
            <button onClick={this.handleSubmit} style={loginButton}>
              Submit
            </button>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AdminLogin;
