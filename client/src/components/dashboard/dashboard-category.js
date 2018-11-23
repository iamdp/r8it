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
      console.log(this.state.challengeId);
    }, 10000);
  };

  updatedPosts = challengeId => {
    axios.get("/api/getPosts/" + challengeId).then(posts => {
      this.setState({ posts: posts.data, challengeId: challengeId });
    });
  };

  handleChange = e => {
    this.updatedPosts(e.target.value);
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
          {posts.map((post, index) => (
            <p key={post._id}>
              {post.title} ({post.eloRank})
            </p>
          ))}
        </div>
      );
    } else {
      return <div>HELLO WORLD</div>;
    }
  }
}

export default DashboardCategory;
