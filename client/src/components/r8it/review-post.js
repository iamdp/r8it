import React from "react";
import axios from "axios";

class Post extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get("/api/getPost/" + this.props.match.params.postId)
      .then(response => {
        this.setState({ post: response.data });
      });
  }

  render() {
    const { post } = this.state;

    if (this.state.post) {
      return (
        <div className="container m-4 w-75">
          <div
            className="card border-dark text-white bg-dark mb-3"
            key={post._id}
          >
            <img
              className="card-img-top"
              alt={post._id}
              src={
                "https://res.cloudinary.com/r8te/image/upload/c_fill,h_400,w_400/" +
                post.cloudinaryRef
              }
            />
            <div className="card-body">
              <h5 className="card-title">
                {post.title}:{post.eloRank}
              </h5>
              <p className="card-text">{post.desc}</p>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default Post;
