import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export class DashboardCategory extends Component {
  state = {};

  componentDidMount = () => {
    axios.get("/api/getCategories").then(challenges => {
      axios.get("/api/getPosts").then(posts => {
        this.setState({ challenges: challenges.data, posts: posts.data });
      });
    });
  };

  render() {
    const { challenges, posts } = this.state;

    if (this.state.challenges) {
      return (
        <div>
          <select>
            {challenges.map((value, index) => (
              <option value={value._id} key={value._id}>
                {_.startCase(value.verb) + " " + _.startCase(value.noun)}
              </option>
            ))}
          </select>
          {posts.map((post, index) => (
            <p>{post.title}</p>
          ))}
        </div>
      );
    } else {
      return <div>HELLO WORLD</div>;
    }
  }
}

export default DashboardCategory;
