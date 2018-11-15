import React from "react";
import API from "../utils/API";
import "./challenge.css";

class Challenge extends React.Component {
  state = {
    user: "anon"
  };

  componentDidMount() {
    API.getComparables()
      .then(challengers => {
        console.log(challengers);
        this.setState(challengers.data);
      })
      .catch(err => console.log(err));
  }

  handleClick = event => {
    // Assign the userId here once feature if availabl
    let userId = this.state.userId
      ? this.state.userId
      : "5be04cee9971c8c18da3c1cc";

    API.saveResult({
      challenger: event.target.getAttribute("data-challenger"),
      challengee: event.target.getAttribute("data-challengee"),
      userId
    })
      .then(() => {
        API.getComparables()
          .then(response => {
            console.log(response);
            this.setState(response.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.challenge) {
      return (
        <div>
          <p>Hold on a moment, forgot to tie our shoes!</p>
        </div>
      );
    } else if (!this.state.posts || this.state.posts.length <= 1) {
      return (
        <div>
          <p>
            The {this.state.challenge.verb} {this.state.challenge.noun} has less
            than two posts.
          </p>
          <p>
            Contribute to this challenge category by clicking{" "}
            <button>here</button> or
          </p>
          <p>
            Click <button onClick={this.handleClick}>here</button> for another
            random challenge cateogry.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="category">
            <div className="category-content">
              <h1>
                Which {this.state.challenge.noun} is the{" "}
                {this.state.challenge.verb}?
              </h1>
            </div>
          </div>
          <div className="challenge">
            <div className="polariod">
              <img
                alt={this.state.posts[0].title}
                data-challenger={this.state.posts[0]._id}
                data-challengee={this.state.posts[1]._id}
                onClick={this.handleClick}
                src={
                  "http://res.cloudinary.com/r8te/image/upload/bo_2px_solid_rgb:000000,c_fill,f_webp,fl_awebp,g_center,h_412,q_auto,w_400/" +
                  this.state.posts[0].cloudinaryRef
                }
              />
            </div>
            <div className="polariod">
              <img
                data-challenger={this.state.posts[1]._id}
                data-challengee={this.state.posts[0]._id}
                onClick={this.handleClick}
                alt={this.state.posts[1].title}
                src={
                  "http://res.cloudinary.com/r8te/image/upload/bo_2px_solid_rgb:000000,c_fill,f_webp,fl_awebp,g_center,h_412,q_auto,w_400/" +
                  this.state.posts[1].cloudinaryRef
                }
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Challenge;