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

  render() {
    if (this.state.posts) {
      return (
        <div>
          <div className="posts">
            {this.state.posts.map(value => {
              return (
                <div className="post" key={value._id}>
                  <img
                    alt=""
                    src={
                      "https://res.cloudinary.com/r8te/image/upload/c_fill,h_40,w_40/" +
                      value.cloudinaryRef
                    }
                  />
                  <span>
                    {value.title}:{value.desc}:{value.eloRank}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="refresh">
            <button onClick={this.handleClick}>Refresh</button>
          </div>
        </div>
      );
    } else return null;
  }
}

export default Posts;
