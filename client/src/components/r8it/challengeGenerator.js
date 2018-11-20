import React from "react";
import axios from "axios";
import _ from "lodash";

class ChallengeGenerator extends React.Component {
  state = { noun: "", verb: "" };

  handleClick = () => {
    axios.get("/api/getRandomChallenge").then(randomChallenge => {
      this.setState(randomChallenge.data);
    });
  };

  handleEstablishClick = e => {
    console.log(e.target.getAttribute("data-id"));
  };

  render() {
    if (!this.state.noun) {
      return (
        <div className="container m-4">
          <h1>Challenge Generator</h1>
          <h2>Short on idea's? Need a suggestion?</h2>
          <button className="btn btn-secondary" onClick={this.handleClick}>
            Click here to generate a new challenge
          </button>
        </div>
      );
    } else {
      return (
        <div className="container m-4">
          <h1>Challenge Generator</h1>
          <p>Here's your challenge suggestion: </p>
          <h1>
            <em>
              {_.startCase(this.state.verb) +
                " " +
                _.startCase(this.state.noun)}
            </em>
          </h1>
          <button
            className="btn btn-primary"
            onClick={this.handleEstablishClick}
            data-id={this.state.id}
          >
            This is the one! Click here to create the challenge!
          </button>
          <p>or</p>
          <button className="btn btn-secondary" onClick={this.handleClick}>
            Click here generate a new challenge!
          </button>
        </div>
      );
    }
  }
}

export default ChallengeGenerator;
