import React from "react";
import API from "../../utils/API";
import _ from "lodash";

class ChallengeGenerator extends React.Component {
  state = { noun: "", verb: "", userNoun: "", userVerb: "" };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    API.getRandomChallenge().then(randomChallenge => {
      this.setState(randomChallenge.data);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { userNoun, userVerb } = this.state;
    API.createUserChallenge({ noun: userNoun, verb: userVerb });
  };

  handleEstablishClick = e => {
    API.establishChallenge({ id: this.state.id }).then(res => {
      this.setState({ noun: "", verb: "" });
    });
  };

  render() {
    return (
      <div>
        {this.state.noun ? (
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
        ) : (
          <div className="container m-4">
            <h1>Challenge Generator</h1>
            <h2>Short on idea's? Need a suggestion?</h2>
            <button className="btn btn-secondary" onClick={this.handleClick}>
              Click here to generate a new challenge
            </button>
          </div>
        )}
        <h1>Or make your own challenge!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Verb:
            <input name="userVerb" onChange={this.handleInputChange} required />
          </label>
          <label>
            Noun:
            <input name="userNoun" onChange={this.handleInputChange} required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ChallengeGenerator;
