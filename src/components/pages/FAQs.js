import React from "react";
import Footer from "../Footer";
import axios from "axios";
import ContactinfoBox from "../ContactinfoBox";
import FAQ from "./FAQs/FAQ";

class FAQs extends React.Component {
  //call constructor
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      faqs: []
    };
  }

  //get all faqs from our API and update the state with it
  getAllFAQs = () => {
    // add the deployed server address here
    axios
      .get("https://keesydrivingschool-backend.herokuapp.com/faq")
      .then(res => {
        console.log(res.data);
        this.setState({ faqs: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllFAQs();
  }

  //render all faqs list with the new one
  renderAllFAQs = () => {
    return this.state.faqs.map(faq => {
      return <FAQ key={faq._id} faq={faq} />;
    });
  };
  render() {
    return (
      <div className="common_container">
        <h1>Frequently Asked Questions</h1>
        <div className="faqs-page-body">
          <div className="faq-page-body-parts">
            <div className="QA">
              <div className="allfaqs_parts_child">
                {this.state.faqs.length ? (
                  this.renderAllFAQs()
                ) : (
                  <h3>Loading FAQs...</h3>
                )}
              </div>
            </div>
          </div>
          <div className="faq-page-body-parts">
            <ContactinfoBox />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default FAQs;
