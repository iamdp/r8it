import React from "react";
import API from "../utils/API";

class Submit extends React.Component {
  state = {
    challenges: [],
    eloRank: 1500,
    title: "",
    description: "",
    cloudinaryRef: "placeholder",
    challengeId: ""
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

  handleSubmit = event => {
    event.preventDefault();

    let userId = this.state.userId
      ? this.state.userId
      : "5be04cee9971c8c18da3c1cc";

    API.submitPost({
      eloRank: this.state.eloRank,
      title: this.state.title,
      description: this.state.description,
      cloudinaryRef: this.state.cloudinaryRef,
      challengeId: this.state.challengeId,
      userId
    }).then(res => {
      console.log(res);
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Submit;
