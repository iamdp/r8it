import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export class DashboardCategory extends Component {
  state = {};

  componentDidMount = () => {
    axios.get("/api/getCategories").then(challenges => {
      axios.get("/api/getPosts/" + challenges.data[0]._id).then(posts => {
        this.setState({
          challenges: challenges.data,
          posts: posts.data,
          challengeId: challenges.data[0]._id
        });
      });
    });

    setInterval(() => {
      this.updatePosts(this.state.challengeId);
    }, 10000);
  };

  updatePosts = challengeId => {
    axios.get("/api/getPosts/" + challengeId).then(posts => {
      this.setState({ posts: posts.data, challengeId: challengeId });
    });
  };

  handleChange = e => {
    this.updatePosts(e.target.value);
  };

  render() {
    const { challenges, posts } = this.state;

    if (this.state.challenges) {
      return (
        <div>
          <select
            className="custom-select custom-select-large text-light bg-dark"
            onChange={this.handleChange}
          >
            {challenges.map((challenge, index) => (
              <option value={challenge._id} key={challenge._id}>
                {_.startCase(challenge.verb) +
                  " " +
                  _.startCase(challenge.noun)}
              </option>
            ))}
          </select>

          <div className="card-deck mx-1">
            {posts.slice(0, 5).map((post, index) => (
              <div className="card" key={post._id}>
                <img
                  className="card-img-top img-fluid"
                  src={
                    "https://res.cloudinary.com/r8te/image/upload/c_fill,h_100,w_100/" +
                    post.cloudinaryRef +
                    ".png"
                  }
                  alt={post.title}
                />
                <div className="card-body">
                  <h4 className="card-text">
                    {post.title + " (" + post.eloRank + ")"}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default DashboardCategory;
