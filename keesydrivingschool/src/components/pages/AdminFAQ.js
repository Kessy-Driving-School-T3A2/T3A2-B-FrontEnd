import React from "react";
import FAQ from "../pages/FAQs/FAQ";
import CreateFAQ from "../pages/FAQs/CreateFAQ";
import axios from "axios";
import Footer from "../Footer";
import AdminControlNav from "../AdminControlNav";

class AdminFAQ extends React.Component {
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
      .get("")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllFAQs();
  }

  //handleSubmitFaq function: go to api, create a new faq then update the allfaq array and set the state of allfaqs to updatedfaqs
  handleSubmitFAQ = newFAQ => {
    // add the deployed server address here
    axios
      .post("", {
        question: newFAQ.question,
        answer: newFAQ.answer
      })
      .then(res => {
        //create a variable for updated faqs list array
        const updatesFAQs = this.state.faqs.concate(res.data);
        //update the state of allfaqs to updatedfaqs
        this.setState({ faqs: updatesFAQs });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //render all faqs list with the new one
  renderAllFAQs = () => {
    return this.state.faqs.map(faq => {
      return <FAQ key={faq._id} faq={faq} />;
    });
  };

  //render everything
  render() {
    return (
      <div className="common_container">
        <h1>AdminFAQs</h1>
        <div className="allfaqs">
          <div className="allfaqs_parts">
            {this.state.faqs.length ? (
              this.renderAllFAQs
            ) : (
              <h3>Loading FAQs...</h3>
            )}
          </div>
          <div className="allfaqs_parts">
            <CreateFAQ submitItem={this.handleSubmitFAQ} />
          </div>
        </div>
        <AdminControlNav />

        <Footer />
      </div>
    );
  }
}

export default AdminFAQ;
