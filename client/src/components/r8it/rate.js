import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./challenge.css";
import styled from "styled-components";

const Challenger = styled.div`
  box-shadow: 5px 10px 18px #888888;
  img {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`;

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

    if (!this.state.posts || this.state.posts.length <= 1) {
      API.getComparables()
        .then(response => {
          // console.log(response);
          this.setState(response.data);
        })
        .catch(err => console.log(err));
    } else {
      API.saveResult({
        challenger: event.target.getAttribute("data-challenger"),
        challengee: event.target.getAttribute("data-challengee"),
        userId
      })
        .then(() => {
          API.getComparables()
            .then(response => {
              // console.log(response);
              this.setState(response.data);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (!this.state.challenge) {
      return (
        <div className="alert alert-primary" role="alert">
          <p>Hold on a moment, while we sort through out posts.</p>
        </div>
      );
    } else if (!this.state.posts || this.state.posts.length <= 1) {
      return (
        <div className="alert alert-danger" role="alert">
          <p>
            The {this.state.challenge.verb} {this.state.challenge.noun}{" "}
            challenge has less than two posts.
          </p>
          <p>
            Contribute to this challenge category by clicking{" "}
            <Link to="/compete">
              <button className="btn btn-primary">here</button>
            </Link>{" "}
            or
          </p>
          <p>
            Click{" "}
            <button className="btn btn-primary" onClick={this.handleClick}>
              here
            </button>{" "}
            for another random challenge cateogry.
          </p>
        </div>
      );
    } else {
      return (
        <div className="container mt-4">
          <div className="row text-center">
            <h1 className="col-12">
              Which {this.state.challenge.noun} is the{" "}
              {this.state.challenge.verb}?
            </h1>
          </div>
          <div className="row justify-content-center">
            <Challenger className="col-12 col-md-6">
              <img
                alt={this.state.posts[0].title}
                data-challenger={this.state.posts[1]._id}
                data-challengee={this.state.posts[0]._id}
                onClick={this.handleClick}
                src={
                  "http://res.cloudinary.com/r8te/image/upload/c_fill,g_center,h_400,q_auto,w_400/" +
                  this.state.posts[1].cloudinaryRef +
                  ".png"
                }
              />
            </Challenger>

            <Challenger className="col-12 col-md-6">
              <img
                data-challenger={this.state.posts[0]._id}
                data-challengee={this.state.posts[1]._id}
                onClick={this.handleClick}
                alt={this.state.posts[1].title}
                src={
                  "http://res.cloudinary.com/r8te/image/upload/c_fill,g_center,h_400,q_auto,w_400/" +
                  this.state.posts[0].cloudinaryRef +
                  ".png"
                }
              />
            </Challenger>
          </div>
        </div>
      );
    }
  }
}

export default Challenge;
