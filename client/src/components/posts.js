import React from "react";
import axios from "axios";
import "./posts.css";

class Posts extends React.Component {
  state = {};

  componentDidMount() {
    axios.get("/api/getPosts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  handleClick = () => {
    axios.get("/api/getPosts").then(response => {
      this.setState({ posts: response.data });
    });
  };

  handleChange = e => {
    axios.get("/api/getPosts/" + e.target.value).then(response => {
      this.setState({ posts: response.data });
    });
  };

  render() {
    if (this.state.posts) {
      return (
        <div>
          <div>
            <select onChange={this.handleChange}>
              <option value="Last Year" defaultValue>
                Last Year
              </option>
              <option value="Last Month">Last Month</option>
              <option value="Last Week">Last Week</option>
              <option value="24 Hours">24 Hours</option>
            </select>
          </div>

          {this.state.posts.map(value => {
            return (
              <div
                className="card border-dark text-white bg-dark mb-3"
                key={value._id}
              >
                <img
                  className="card-img-top"
                  src={
                    "https://res.cloudinary.com/r8te/image/upload/c_fill,h_400,w_400/" +
                    value.cloudinaryRef
                  }
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {value.title}:{value.eloRank}
                  </h5>
                  <p className="card-text">{value.desc}</p>
                </div>
              </div>
            );
          })}

          <div className="refresh">
            <button onClick={this.handleClick}>Refresh</button>
          </div>
        </div>
      );
    } else return null;
  }
}

export default Posts;
