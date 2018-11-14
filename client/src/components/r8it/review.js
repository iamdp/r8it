import React from "react";
import axios from "axios";

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

  handlePeriodChange = e => {
    this.setState({ period: e.target.textContent });
    axios.get("/api/getPosts/" + e.target.textContent).then(response => {
      this.setState({ posts: response.data });
    });
  };

  render() {
    if (this.state.posts) {
      return (
        <div className="container">
          <div className="row justify-content-end mb-3">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter By:
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.handlePeriodChange}
                >
                  24 Hours
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.handlePeriodChange}
                >
                  Last Week
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.handlePeriodChange}
                >
                  Last Month
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.handlePeriodChange}
                >
                  Last Year
                </button>
              </div>
            </div>
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
