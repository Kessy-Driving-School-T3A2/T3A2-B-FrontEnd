import React from "react";
import Footer from "../Footer";
import ContactinfoBox from "../ContactinfoBox";
import BackendServer from "../../apis/BackendServer";
import Review from "./Reviews/Review";
import CreateReview from "../pages/Reviews/CreateReview";

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

  handleSubmitReview = newReview => {
    // add the deployed server address here
    BackendServer.post(
      "/Reviews",
      {
        name: newReview.name,
        review: newReview.review
      }
      // {
      //   headers: {
      //     "x-access-token": localStorage.getItem("keesy")
      //   }
      // }
    )
      .then(res => {
        //create a variable for updated review list array
        const updatesReviews = this.state.reviews.concate(res.data);
        //update the state of allreviews to updatedreviews
        this.setState({ faqs: updatesReviews });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //render all reviews list with the new one
  renderAllReviews = () => {
    return this.state.reviews.map(review => {
      return <Review key={review._id} review={review} />;
    });
  };

  render() {
    return (
      <div className="common_container">
        <h1>Reviews</h1>
        <div>
          <div className="review_page_body_parts">
            {this.state.reviews.length ? (
              this.renderAllReviews()
            ) : (
              <h3>Loading Reviews...</h3>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left"
              }}
            >
              <h1>Add A Review</h1>
              <CreateReview submitItem={this.handleSubmitReview} />
            </div>
            <ContactinfoBox />
          </div>
          <div className="review_page_body_parts">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
