import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";
import BackendServer from "../../apis/BackendServer";
import Review from "./Reviews/Review";

class Reviews extends React.Component {
  //call constructor
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      reviews: []
    };
  }

  //get all reviews from our API and update the state with it
  getAllReviews = () => {
    // add the deployed server address here
    BackendServer.get("/Reviews")
      .then(res => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllReviews();
  }

  //render all faqs list with the new one
  renderAllReviews = () => {
    return this.state.reviews.map(review => {
      return <Review key={review._id} review={review} />;
    });
  };

  render() {
    return (
      <div className="common_container">
        <h1>Reviews</h1>
        <div className="common_container-body">
          <div className="all-reviews">
            {this.state.reviews.length ? (
              this.renderAllReviews()
            ) : (
              <h3>Loading Reviews...</h3>
            )}
          </div>

          <ContactinfoBox />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Reviews;
