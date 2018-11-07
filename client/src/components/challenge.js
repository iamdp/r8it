import React from "react";
import axios from "axios";
import "./challenge.css";

class Challenge extends React.Component {
  state = { user: "anon" };

  componentDidMount() {
    axios.get("/api/getComparables").then(response => {
      console.log(response.data);
      this.setState(response.data);
    });
  }

  handleClick = event => {
    let unpickedPostId;
    if (event.target.parentElement.nextSibling) {
      unpickedPostId = event.target.parentElement.nextSibling.firstChild.getAttribute(
        "data-postid"
      );
    } else {
      unpickedPostId = event.target.parentElement.previousSibling.firstChild.getAttribute(
        "data-postid"
      );
    }

    let userId = this.state.userId
      ? this.state.userId
      : "5be04cee9971c8c18da3c1cc";

    axios({
      method: "POST",
      url: "/api/saveResult",
      data: {
        pickedPostId: event.target.getAttribute("data-postid"),
        unpickedPostId,
        userId
      }
    }).then(response => {
      console.log(response);
      axios.get("/api/getComparables").then(response => {
        this.setState(response.data);
      });
    });
  };

  render() {
    if (!this.state.challenge) {
      return (
        <div>
          <p>Coming right up!</p>
        </div>
      );
    } else if (!this.state.posts || this.state.posts.length <= 1) {
      return <div>Bleeding edge here - probably not 2 challenges.</div>;
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
                data-postid={this.state.posts[0]._id}
                onClick={this.handleClick}
                src={
                  "http://res.cloudinary.com/r8te/image/upload/bo_2px_solid_rgb:000000,c_fill,f_webp,fl_awebp,g_center,h_412,q_auto,w_400/" +
                  this.state.posts[0].cloudinaryRef
                }
              />
            </div>
            <div className="polariod">
              <img
                data-postid={this.state.posts[1]._id}
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
