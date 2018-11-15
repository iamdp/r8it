import React from "react";
import axios from "axios";

class ChallengeGenerator extends React.Component {
  state = { noun: "", verb: "" };

  componentDidMount = () => {
    axios.get("/api/getRandomChallenge").then(randomChallenge => {
      this.setState(randomChallenge.data);
    });
  };

  handleClick = () => {
    axios.get("/api/getRandomChallenge").then(randomChallenge => {
      this.setState(randomChallenge.data);
    });
  };

  render() {
    return (
      <div className="container m-4">
        <h1>Challenge Generator</h1>
        <p>
          {this.state.verb} {this.state.noun}
        </p>
        <button onClick={this.handleClick}>Generate a new challenge</button>
      </div>
    );
  }
}

export default ChallengeGenerator;
