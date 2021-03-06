import React from "react";
import FAQ from "../pages/FAQs/FAQ";
import CreateFAQ from "../pages/FAQs/CreateFAQ";
import Footer from "../Footer";
import AdminControlNav from "../AdminControlNav";
import BackendServer from "../../apis/BackendServer";

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
    BackendServer.get("/faq")
      .then(res => {
        console.log(res.data);
        this.setState({ faqs: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllFAQs();
  }

  //handleSubmitFaq function: go to api, create a new faq then update the allfaq array and set the state of allfaqs to updatedfaqs
  handleSubmitFAQ = newFAQ => {
    // add the deployed server address here
    BackendServer.post(
      "/faq/admin",
      {
        question: newFAQ.question,
        answer: newFAQ.answer
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("keesy")
        }
      }
    )
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
      return (
        <FAQ key={faq._id} faq={faq} handleFetchUpdatedFaqs={this.getAllFAQs} />
      );
    });
  };

  //render everything
  render() {
    return (
      <div className="common_container">
        <h1>AdminFAQs</h1>
        <div className="allfaqs">
          <div className="allfaqs_parts">
            <div className="allfaqs_parts_child">
              {this.state.faqs.length ? (
                this.renderAllFAQs()
              ) : (
                <h3>Loading FAQs...</h3>
              )}
            </div>
            <div className="allfaqs_parts_child">
              <AdminControlNav className="width" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left"
            }}
          >
            <h1>Add New FAQ</h1>
            <CreateFAQ submitItem={this.handleSubmitFAQ} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AdminFAQ;
