import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PostList extends React.Component {
  state = {};

  componentDidMount() {
    axios.get("/api/getPosts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  handleClick = e => {
    axios
      .get("/api/getPost" + e.target.getAttribute("data-id"))
      .then(response => {
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

          <ul class="list-group">
            {this.state.posts.map(value => {
              return (
                <Link to={"/review/" + value._id} key={value._id}>
                  <li
                    className="media border-dark text-white bg-dark m-4"
                    data-id={value._id}
                  >
                    <img
                      className="align-self-center mr-3"
                      alt={value._id}
                      src={
                        "https://res.cloudinary.com/r8te/image/upload/c_fill,h_100,w_100/" +
                        value.cloudinaryRef +
                        ".png"
                      }
                    />
                    <div className="media-body">
                      <h5 className="mt-0">
                        {value.title} ({value.eloRank})
                      </h5>
                      <p className="mb-0">{value.desc}</p>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    } else return null;
  }
}

export default PostList;
