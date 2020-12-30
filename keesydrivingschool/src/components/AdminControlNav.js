import React from "react";
import { Link } from "react-router-dom";

class AdminControlNav extends React.Component {
  render() {
    return (
      <div className="admin-button">
        <Link to="/adminFAQ" className="admin-single-button">
          Admin FAQs
        </Link>
        <Link to="/adminPrice" className="admin-single-button">
          Admin Prices & Packages
        </Link>
        <Link to="/" className="admin-single-button">
          Log out
        </Link>
      </div>
    );
  }
}

export default AdminControlNav;
