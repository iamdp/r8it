import React from "react";
import API from "../../utils/API";
import _ from "lodash";

class admin extends React.Component {
  state = {
    userChallenges: []
  };
  componentDidMount() {
    API.getUserChallenges().then(response => {
      this.setState({ userChallenges: response.data });
      console.log(response.data);
    });
  }

  removeStateArray = index => {
    let array = [...this.state.userChallenges]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ userChallenges: array });
    }
  };

  handleDeclineSubmission = event => {
    let index = event.target.getAttribute("index");
    this.removeStateArray(index);
    API.deleteUserChallenge({
      challengeId: event.target.getAttribute("data-id")
    });
  };

  handleAcceptSubmission = event => {
    let index = event.target.getAttribute("index");
    this.removeStateArray(index);
    API.moveUserChallenge({
      challengeId: event.target.getAttribute("data-id")
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.userChallenges.map((userChallenge, index) => {
          return (
            <div className="row justify-content-center">
              <div className="card mt-2 col-4">
                <div className="card-body">
                  <p className="card-text float-left">
                    {_.startCase([userChallenge.verb]) +
                      " " +
                      _.startCase([userChallenge.noun])}
                  </p>
                  <i
                    type="button"
                    className="btn btn-danger fas fa-ban float-right"
                    data-id={userChallenge._id}
                    index={index}
                    onClick={this.handleDeclineSubmission}
                  />
                  <i
                    type="button"
                    className="btn btn-primary float-right far fa-check-square mr-2"
                    data-id={userChallenge._id}
                    index={index}
                    onClick={this.handleAcceptSubmission}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default admin;
