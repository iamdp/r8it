import React from "react";
import API from "../utils/API";

class Submit extends React.Component {
  state = {
    challenges: [],
    eloRank: 1500,
    title: "",
    description: "",
    cloudinaryRef: "placeholder",
    challengeId: "",
    userId: "placeholder",
    file: null
  };

  componentDidMount = () => {
    API.getCategories().then(response => {
      console.log(response.data);
      this.setState({
        challenges: response.data,
        challengeId: response.data[0]._id
      });
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFileSelect = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  //API.uploadImage()
  //Upload image POST first, using the image POST response cloudinaryRefID
  //API.submitPost({cloudinaryRef: ImgPostRespons.cloudinaryRefId})
  handleSubmit = event => {
    event.preventDefault();
    API.uploadImage(this.state.file).then(response => {
      console.log(response);

      // API.submitPost({
      //   eloRank: this.state.eloRank,
      //   title: this.state.title,
      //   description: this.state.description,
      //   // what the relational ID for the submitted image to submitted post is unknown for now
      //   // cloudinaryRef: response.id
      //   cloudinaryRef: this.state.cloudinaryRef,
      //   challengeId: this.state.challengeId,
      //   userId: this.state.userId
      // }).then(res => {
      //   console.log(res);
      // });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange}
            />
          </label>
          {/* Loop through the challenges and create an 'options' for each */}
          <select name="challengeId" onChange={this.handleInputChange}>
            {this.state.challenges.map(challenge => {
              return (
                <option key={challenge._id} value={challenge._id}>
                  {challenge.verb} {challenge.noun}
                </option>
              );
            })}
          </select>
          <label>
            Image Upload
            <input
              name="file"
              type="file"
              className="file-upload"
              onChange={this.handleFileSelect}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Submit;
