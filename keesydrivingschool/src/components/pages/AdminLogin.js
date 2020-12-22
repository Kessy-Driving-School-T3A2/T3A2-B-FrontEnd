import React from "react";
import Footer from "../Footer";

class AdminLogin extends React.Component {
  render() {
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
              style={{
                padding: "10px",
                marginBottom: "5px",
                backgroundColor: "#C4C4C4",
                border: "1px solid #C4C4C4",
                borderRadius: "8px"
              }}
            />
            <input
              type="text"
              placeholder="Password"
              style={{
                padding: "10px",
                marginBottom: "5px",
                backgroundColor: "#C4C4C4",
                border: "1px solid #C4C4C4",
                borderRadius: "8px"
              }}
            />
            <button
              style={{
                padding: "10px",
                backgroundColor: "orangered",
                border: "none",
                marginTop: "10px",
                borderRadius: "8px"
              }}
            >
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
