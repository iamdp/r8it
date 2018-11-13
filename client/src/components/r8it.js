import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./navigation";
import Catgories from "./categories";
import Posts from "./posts";
import Challenge from "./challenge";
import Submit from "./submit";
import ChallengeGenerator from "./challengeGenerator";

class r8it extends React.Component {
  render() {
    return (
      <div>
        <ChallengeGenerator />
        <Catgories />
        <Posts />
        <Challenge />
        <Submit />
      </div>
    );
  }
}

export default r8it;
