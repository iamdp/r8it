import React from "react";
import API from "../../utils/API";

class admin extends React.Component {
  componentDidMount() {
    API.getUserChallenges().then(response => {
      this.setState(response.data);
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}
export default admin;
