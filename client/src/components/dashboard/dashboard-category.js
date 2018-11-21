import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export class DashboardCategory extends Component {
  state = {};

  componentDidMount = () => {
    axios.get("/api/getCategories").then(result => {
      this.setState({ challenges: result.data });
    });
  };

  render() {
    const { challenges } = this.state;

    if (this.state.challenges) {
      return (
        <select>
          {challenges.map((value, index) => (
            <option value={value._id} key={value._id}>
              {_.startCase(value.verb) + " " + _.startCase(value.noun)}
            </option>
          ))}
        </select>
      );
    } else {
      return <div>HELLO WORLD</div>;
    }
  }
}

export default DashboardCategory;
