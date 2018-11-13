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
      <div>
        Challenge Generator {this.state.verb} {this.state.noun}
        <button onClick={this.handleClick}>Generate a new challenge</button>
      </div>
    );
  }
}

export default ChallengeGenerator;
