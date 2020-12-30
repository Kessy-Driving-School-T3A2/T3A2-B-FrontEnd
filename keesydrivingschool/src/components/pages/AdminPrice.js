import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import AdminControlNav from "../AdminControlNav";

class AdminPrice extends React.Component {
  render() {
    return (
      <div className="common_container">
        <h1>AdminPrices</h1>
        <AdminControlNav />

        {/* <Footer /> */}
      </div>
    );
  }
}

export default AdminPrice;
