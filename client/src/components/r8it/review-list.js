import React from "react";
import axios from "axios";

class PostList extends React.Component {
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

          <ul class="list-unstyled">
            {this.state.posts.map(value => {
              return (
                <li
                  className="media border-dark text-white bg-dark m-4"
                  key={value._id}
                  data-id={value._id}
                >
                  <img
                    className="align-self-center mr-3"
                    src={
                      "https://res.cloudinary.com/r8te/image/upload/c_fill,h_100,w_100/" +
                      value.cloudinaryRef +
                      ".png"
                    }
                  />
                  <div className="media-body">
                    <h5 className="mt-0">{value.title}</h5>
                    <p>{value.desc}</p>
                    <p className="mb-0">Rating: {value.eloRank}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else return null;
  }
}

export default PostList;
